import axios from "axios";
import { BACKEND_ENDPOINT } from "../../Constants";

const loginUser = async (formData) => {
  try {
    const response = await axios({
      method: "post",
      url: `${BACKEND_ENDPOINT}/users/login`,
      data: { ...formData },
    });
    return response;
  } catch (error) {
    console.log(error, "IN LOGIN USER SERVICE");
    return error;
  }
};

export default loginUser;
