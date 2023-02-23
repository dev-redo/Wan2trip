import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

export const getHotelsData = () =>
  axios.get(`${BASE_URL}/hotels`).then((response) => response.data);
