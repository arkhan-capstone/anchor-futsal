/* eslint-disable quotes */
import home from "../view/pages/home";
import Detail from "../view/pages/detail";
import login from "../view/pages/loginPage";
import about from "../view/pages/about";
import contact from "../view/pages/contact";
import gallery from "../view/pages/gallery";

const routes = {
  "/": home,
  "/home": home,
  "/detail/:id": Detail,
  "/login": login,
  "/about": about,
  "/contact": contact,
  "/gallery": gallery,
};

export default routes;
