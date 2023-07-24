import axios from "axios";
import { useRouter } from "vue-router";

let getCurrentUser = async () => {
  let router = useRouter();
  try {
    let response = await axios.get("/api/v1/user/showCurrentUser");
    let currentUser = response.data.data;
    return currentUser;
  } catch (error) {
    const errorMessage = error.response.data.message;
    const errorStatus = error.response.status;
    router.push({
      name: "ErrorTemplate",
      params: { errorMessage, errorStatus },
    });
  }
};

export default getCurrentUser;
