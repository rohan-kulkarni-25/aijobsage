import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import loginUser from "../services/LoginUser";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../store/Slices/userSlice";
import { updateLoader } from "../store/Slices/loaderSlice";
import SpinnerComponent from "../components/Spinner";

const SignInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.loader);
  const [formData, setFormData] = useState({
    email: "rohank2502@gmail.com",
    password: "rohan@25",
  });
  const [loading, setLoading] = useState(false);

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

      if (response.status == 200) {
        dispatch(updateLoader({ isloading: false }));
        dispatch(updateUser(response.data.data));
        navigate("/user/workspace");
      } else {
        dispatch(updateLoader({ isloading: false }));
        alert("Invalid Username or Password");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong !");
      dispatch(updateLoader({ isloading: false }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
            Sign In to AIJobSage
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link
              to="/sign-up"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              create a new account
            </Link>
          </p>
          <p className="mt-2 text-center text-sm text-gray-600">
            <Link
              to="/"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Back to Home
            </Link>
          </p>
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
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
      {loader.isloading ? <SpinnerComponent /> : null}
    </div>
  );
};

export default SignInPage;
