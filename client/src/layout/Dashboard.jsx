import React, { useEffect } from "react";
import NavbarComponent from "../components/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../store/Slices/userSlice";
import loginWithToken from "../services/LoginWithToken";
import SpinnerComponent from "../components/Spinner";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const loader = useSelector((state) => state.loader);

  const handleloginWithToken = async (accessToken) => {
    // navigate("/loading");

    if (accessToken == undefined) {
      dispatch(updateUser({ isLoggedIn: false }));
    }
    try {
      const response = await loginWithToken(accessToken);
      let rt = Cookies.get("refreshToken");
      let at = Cookies.get("accessToken");
      if (response.status == 200) {
        dispatch(
          updateUser({
            user: {
              ...response.data.data,
            },
            isLoggedIn: true,
            accessToken: at,
            refreshToken: rt,
          })
        );
      }
    } catch (error) {
      console.log(error);
      navigate("/onboarding");
      Cookies.remove("refreshToken");
      Cookies.remove("accessToken");
    }
  };

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    console.log(accessToken);
    if (accessToken == undefined) {
      navigate("/login");
    }

    handleloginWithToken(accessToken);
  }, [user.accessToken]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {loader.isloading ? <SpinnerComponent /> : null}
      <NavbarComponent />
      <div className="flex-grow flex">
        <div className="flex-grow p-6 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
