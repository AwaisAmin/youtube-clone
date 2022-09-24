import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "9d1ea09103msh7127191454bda22p123251jsn4f3df39ce407",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
// process.env.REACT_APP_RAPID_API_KEY
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
