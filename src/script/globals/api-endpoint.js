/* eslint-disable quotes */
import CONFIG from "./config";

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}`,
  DETAIL: (_id) => `${CONFIG.BASE_URL}show/${_id}`,
};

export default API_ENDPOINT;
