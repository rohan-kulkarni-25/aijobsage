import axios from "axios";
import { BACKEND_ENDPOINT } from "../../Constants";

const signupUser = async (formData) => {
  try {
    const response = await axios({
      method: "post",
      url: `${BACKEND_ENDPOINT}/users/createUser`,
      data: { ...formData },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export default signupUser;
