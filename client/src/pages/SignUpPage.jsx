import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import loginUser from "../services/LoginUser";
import signupUser from "../services/SignupUser";
import { updateUser } from "../store/Slices/userSlice";
import Cookies from "js-cookie";
import { updateLoader } from "../store/Slices/loaderSlice";
import SpinnerComponent from "../components/Spinner";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { toast } from "sonner";

const SignUpPage = () => {
  const loader = useSelector((state) => state.loader);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    role: "",
    tagline: "",
    bio: "",
    githubProfile: "",
    linkedInProfile: "",
    twitterProfile: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signupUser(formData);
      if (response.status === 201) {
        logUserIn(formData);
      }
      toast.warning(response.response?.data?.message);
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.warning(error?.response?.data?.message);
    }
  };

  const logUserIn = async (formData) => {
    dispatch(updateLoader({ isloading: true }));

    try {
      const response = await loginUser(formData);
      Cookies.set("accessToken", response.data.data.accessToken);
      Cookies.set("refreshToken", response.data.data.refreshToken);

      if (response.status === 200) {
        dispatch(updateLoader({ isloading: false }));
        dispatch(updateUser(response.data.data));
        navigate("/user/workspace");
      } else {
        dispatch(updateLoader({ isloading: false }));
        toast.warning(response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong !");
      dispatch(updateLoader({ isloading: false }));
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 items-center gap-4 py-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-start">
      <p className="mt-2 text-sm text-gray-600 ">
        <Link
          to="/"
          className="font-medium text-white flex items-center justify-center"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-1" /> Back to Home
        </Link>
      </p>
      <div className="max-w-5xl w-full space-y-8 bg-white p-10 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            You + Us = Job Squad Goals
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{" "}
            <Link
              to="/sign-in"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              sign in to your account
            </Link>
          </p>
        </div>
        <form className=" mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4 grid grid-cols-2 gap-4">
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
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <input
                id="role"
                name="role"
                type="text"
                autoComplete="role"
                required
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Role"
                value={formData.role}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="tagline"
                className="block text-sm font-medium text-gray-700"
              >
                Tagline
              </label>
              <input
                id="tagline"
                name="tagline"
                type="text"
                autoComplete="tagline"
                required
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Tagline"
                value={formData.tagline}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700"
              >
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                autoComplete="bio"
                required
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Bio"
                value={formData.bio}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="githubProfile"
                className="block text-sm font-medium text-gray-700"
              >
                GitHub Profile
              </label>
              <input
                id="githubProfile"
                name="githubProfile"
                type="url"
                autoComplete="github"
                required
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="GitHub Profile"
                value={formData.githubProfile}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="linkedInProfile"
                className="block text-sm font-medium text-gray-700"
              >
                LinkedIn Profile
              </label>
              <input
                id="linkedInProfile"
                name="linkedInProfile"
                type="url"
                autoComplete="linkedin"
                required
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="LinkedIn Profile"
                value={formData.linkedInProfile}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="twitterProfile"
                className="block text-sm font-medium text-gray-700"
              >
                Twitter Profile
              </label>
              <input
                id="twitterProfile"
                name="twitterProfile"
                type="url"
                autoComplete="twitter"
                required
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Twitter Profile"
                value={formData.twitterProfile}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Join the Squad!
            </button>
          </div>
        </form>
      </div>
      {loader.isloading && <SpinnerComponent />}
    </div>
  );
};

export default SignUpPage;
