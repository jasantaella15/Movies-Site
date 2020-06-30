import React from 'react'
import { hydrate } from 'react-dom'
import App from '../App'
import { BrowserRouter } from 'react-router-dom'
import configureStore from "../store";
import { Provider } from "react-redux";

const store = configureStore(window.__initialData__);
delete window.__initialData__;

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);