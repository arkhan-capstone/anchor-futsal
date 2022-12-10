/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable quotes */
import UrlParser from "../../routes/url-parser";
import { detailLapangan, homeListLapangan } from "../templates/templates";
// import LikeButtonInitiator from "../../utils/favorite-button";
import fieldSource from "../../data/field-source";
import "../../../styles/detail-lapangan.css";

const Detail = {
  async render() {
    return homeListLapangan();
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const lapanganContainer = document.querySelector("#content");
    let dataLapangan;

    for (let i = 0; i < fieldSource.length; i++) {
      dataLapangan = fieldSource[i].find((fields) => fields._id == url.id);
      if (dataLapangan != undefined) {
        break;
      }
    }
    lapanganContainer.innerHTML = homeListLapangan(fields);
    lapanganContainer.innerHTML += detailLapangan();
  },
};
export default Detail;
