import axios from "axios";

let getCurrentUser = async () => {
  try {
    let response = await axios.get("/api/v1/user/showCurrentUser");
    let currentUser = response.data.data;
    return currentUser;
  } catch (error) {
    console.log(error);
  }
};

export default getCurrentUser;
