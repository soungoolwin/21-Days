import axios from "axios";
import { useRouter } from "vue-router";
let isUserLoggedIn = async () => {
  let router = useRouter();
  try {
    let response = await axios.get("/api/v1/auth/isUserLoggedIn");
    return response.data.isUserLoggedIn;
  } catch (error) {
    const errorMessage = error.response.data.message;
    const errorStatus = error.response.status;
    router.push({
      name: "ErrorTemplate",
      params: { errorMessage, errorStatus },
    });
  }
};

export default isUserLoggedIn;
