/* eslint-disable quotes */
import { loginPage } from "../templates/templates";
import "../../../public/js/login-register";

const login = {
  async render() {
    return loginPage();
  },
};

export default login;
