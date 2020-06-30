import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Video from "./components/pages/Video";
import SecondAbout from "./components/pages/SecondAbout";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/About",
    component: About
  },
  {
    path: "/About-2",
    component: SecondAbout
  },
{
  path:"/video/",
  component: Video
}
];

export default routes;
