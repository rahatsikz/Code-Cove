import React from "react";
import { FaStar, FaFileAlt, FaUserGraduate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const IndividualCourse = ({ course }) => {
  const { name, price, image, description, lessons, students, id } = course;
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/details/${id}`);
  };
  return (
    <div className="flex flex-col overflow-hidden dark:bg-gray-900 dark:text-white bg-white rounded shadow-md text-slate-500 dark:shadow-black shadow-slate-200 sm:flex-row my-4">
      {/*  <!-- Image --> */}
      <figure className="flex-1">
        <img
          src={image}
          alt="card"
          className="object-cover min-h-full aspect-auto"
        />
      </figure>
      {/*  <!-- Body--> */}
      <div className="flex-1 p-6 sm:mx-6 sm:px-0">
        <header className="flex gap-4 mb-4">
          <div>
            <h3 className="text-xl font-medium dark:text-white text-slate-700">
              {name}
            </h3>
            <p className="text-lg text-sky-400 mt-2 font-semibold"> {price} </p>
          </div>
        </header>
        <p>{description}</p>
        <div className="flex items-center mt-2">
          <p>Ratings:</p>
          <div className="flex text-orange-300 ml-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              <FaFileAlt />
              <span className="ml-2"> {lessons} </span>
            </div>
            <div className="flex items-center  ml-4">
              <FaUserGraduate />
              <span className="ml-2"> {students} </span>
            </div>
          </div>
          <div className="mt-2">
            <button
              onClick={handleDetails}
              className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full dark:bg-gray-800 bg-sky-50 px-5 text-sm font-medium tracking-wide text-sky-500 shadow-md dark:shadow-black shadow-sky-100 transition duration-300 hover:bg-sky-100 hover:text-sky-600 hover:shadow-md hover:shadow-sky-100 focus:bg-sky-200 focus:text-sky-700 focus:shadow-md focus:shadow-sky-100 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-100 disabled:bg-sky-100 disabled:shadow-none"
            >
              <span>Course Details</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualCourse;
