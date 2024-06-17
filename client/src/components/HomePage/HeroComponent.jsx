import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className="h-screen w-screen justify-center items-center sm:w-3/4  sm:h-fit sm:py-24  flex-col flex  ">
      <div className="flex-1"></div>
      <div className="flex-1 flex-col flex items-center gap-4 ">
        <h1 className="text-9xl text-white font-bold sm:text-6xl">AiJobSaga</h1>

        <p className="text-lg text-gray-200 mt-4 tracking-wider sm:text-sm sm:w-fit sm:text-wrap ">
          Craft personalized applications & gain AI-powered insights to land
          your dream job.
        </p>

        <Link to={"/onboarding"} className="mt-8">
          <button className="bg-white hover:bg-gray-100 text-voilet-400 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
            Explore More
          </button>
        </Link>
      </div>

      <div className="mb-10 flex-1 flex flex-col text-center gap-4 justify-end  items-center w-full sm:mt-24">
        <p className="text-white opacity-80 text-xl">scroll down</p>
        <IoIosArrowDown className="text-white text-3xl animate-bounce" />
      </div>
    </div>
  );
};

export default HeroSection;
