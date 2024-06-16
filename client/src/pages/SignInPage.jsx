import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import loginUser from "../services/LoginUser";
import { updateUser } from "../store/Slices/userSlice";
import { updateLoader } from "../store/Slices/loaderSlice";
import SpinnerComponent from "../components/Spinner";
import { ArrowLeftIcon } from "@heroicons/react/outline";

const SignInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.loader);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const logUserIn = async (e) => {
    e.preventDefault();
    dispatch(updateLoader({ isloading: true }));

    try {
      // Make API call to authenticate user
      const response = await loginUser(formData);

      // SAVE COOKIES
      Cookies.set("accessToken", response.data.data.accessToken);
      Cookies.set("refreshToken", response.data.data.refreshToken);

      if (response.status === 200) {
        dispatch(updateLoader({ isloading: false }));
        dispatch(updateUser(response.data.data));
        navigate("/user/workspace");
      } else {
        dispatch(updateLoader({ isloading: false }));
        alert("Invalid Username or Password");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
      dispatch(updateLoader({ isloading: false }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600  py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-4">
      <p className="mt-2 text-sm text-gray-600">
        <Link
          to="/"
          className="font-medium text-white flex items-center justify-center"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-1" /> Back to Home
        </Link>
      </p>
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
            Ready to Impress HR Again?
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Or{" "}
            <Link
              to="/sign-up"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              create a new account
            </Link>
          </p>
          {/* <p className="mt-2 text-center text-gray-600 flex justify-center items-center">
            <Link
              to="/"
              className="font-medium text-indigo-600 hover:text-indigo-500 flex items-center"
            >
              Back to Home
            </Link>
          </p> */}
        </div>
        <form className="mt-8 space-y-6" onSubmit={logUserIn}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
            >
              Sign In and Stand Out !
            </button>
          </div>
        </form>
      </div>
      {loader.isloading && <SpinnerComponent />}
    </div>
  );
};

export default SignInPage;
