import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import errorImg from "../../images/404.png";
const ErrorPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="text-center my-24">
      <img src={errorImg} alt="error" className="mx-auto" />
      <h2 className="text-2xl font-semibold my-8">
        Oops! That page can not be found.
      </h2>

      <button
        onClick={handleBack}
        className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-sky-500 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-sky-200 transition duration-300 hover:bg-sky-600 hover:shadow-sm hover:shadow-sky-200 focus:bg-sky-700 focus:shadow-sm focus:shadow-sky-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none"
      >
        <span>
          <FaArrowLeft />
        </span>
        <span> Back to Homepage</span>
      </button>
    </div>
  );
};

export default ErrorPage;
