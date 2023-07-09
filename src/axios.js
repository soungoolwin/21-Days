import axios from "axios";

const instance = axios.create({
  baseURL: "https://two1days.onrender.com/api/v1",
});

export default instance;
