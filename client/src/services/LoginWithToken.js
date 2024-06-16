import axios from "axios";
import { BACKEND_ENDPOINT } from "../../Constants";

const loginWithToken = async (token) => {
  try {
    const response = await axios({
      method: "post",
      url: `${BACKEND_ENDPOINT}/users/loginwithtoken`,
      data: {
        token,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error, "ERROR AT LOGINWITHTOKEN");
  }
};

export default loginWithToken;
