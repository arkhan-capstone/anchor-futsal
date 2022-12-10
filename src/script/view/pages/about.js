/* eslint-disable quotes */
import { aboutPage } from "../templates/templates";
import "../../../styles/main.css";

const about = {
  async render() {
    return aboutPage();
  },
};

export default about;
