import express from "express"
import serialize from "serialize-javascript";
import cors from "cors";
import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter, matchPath} from "react-router-dom"
import { Provider } from "react-redux";
import App from '../App'
import configureStore from "../store";
import routes from '../Routes';
import data from '../api/mockData';
import { ServerStyleSheet } from 'styled-components'; 
import {Helmet} from 'react-helmet';

const app = express()
app.use(cors());
app.use(express.static("public"))

app.get("/api/videosList", (req, res) => {
  res.json(data);
});
app.get("/api/video/:id", (req, res) => {
  const id = req.params.id;
  res.json(data.find(v => v.id == id));
});

app.get("*", (req, res, next) => {
  
    const store = configureStore();

      // get all promises
    const promises = routes.reduce((acc, route) => {

      // if (there is a route matched) and (route has component) and component has "initalAction" method
      if (matchPath(req.url, route) && route.component && route.component.initialAction) {
  
        //push promise to promises array
        //Promise.resolve cast the promise from store.dispatch which take the action dispatched from the component.initialAction method
        acc.push(Promise.resolve(store.dispatch(route.component.initialAction(req.query))));
      }
      return acc;
    }, []);

    Promise.all(promises)
    .then(()=>{
      
  const sheet = new ServerStyleSheet();  
  const markup = renderToString(sheet.collectStyles(      
    <Provider store={store}>
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
    </Provider>
  ));
  
const helmet = Helmet.renderStatic();
  
  const styleTags = sheet.getStyleTags()
    
    const initialData = store.getState();
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
          <style>body{margin:0;background: #f1f1f1}</style>
          ${helmet.title.toString()}
          <script src="/bundle.js" defer></script>
          <script>window.__initialData__ = ${serialize(initialData)}</script>
          ${styleTags}
        </head>
        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `)
    })
    .catch(next);
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})