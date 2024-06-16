import axios from "axios";
import { BACKEND_ENDPOINT } from "../../Constants";
import Cookies from "js-cookie";

const updateProfile = async (dataObject) => {
  try {
    const token = Cookies.get("accessToken");
    const response = await axios({
      method: "post",
      url: `${BACKEND_ENDPOINT}/users/updateProfile`,
      data: { ...dataObject, token },
    });

    return response;
  } catch (error) {
    console.log(error, "IN LOGIN USER SERVICE");
    return error;
  }
};

export default updateProfile;
