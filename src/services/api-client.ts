import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0c604df02e624217a44f1a703738afc3",
  },
});