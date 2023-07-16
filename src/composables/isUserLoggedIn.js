import axios from "axios";
let isUserLoggedIn = async () => {
  let response = await axios.get("/api/v1/auth/isUserLoggedIn");
  return response.data.isUserLoggedIn;
};

export default isUserLoggedIn;
