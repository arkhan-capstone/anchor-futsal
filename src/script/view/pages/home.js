/* eslint-disable quotes */
import { homePage, homeListLapangan } from "../templates/templates";
import fieldSource from "../../data/field-source";
import "../../../styles/main.css";

const home = {
  async render() {
    return homePage();
  },

  async afterRender() {
    const Field = await fieldSource.home();
    const fieldContainer = document.querySelector("#list-lapangan");
    Field.forEach((fields) => {
      fieldContainer.innerHTML += homeListLapangan(fields);
    });
  },
};

export default home;
