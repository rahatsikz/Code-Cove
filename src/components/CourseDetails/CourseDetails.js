import React from "react";
import {
  FaChalkboardTeacher,
  FaCheck,
  FaMoneyBillAlt,
  FaRegFileAlt,
} from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";

const CourseDetails = () => {
  const detailsData = useLoaderData();
  const {
    name,
    image,
    description,
    learnings,
    price,
    lessons,
    instructor,
    id,
  } = detailsData;

  const navigate = useNavigate();

  const handleAccess = () => {
    navigate(`/checkout/${id}`);
  };
  return (
    <div>
      <div
        className="hero min-h-[70vh]"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold"> {name} </h1>
            <p className="mb-5">{description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 my-12 container mx-auto">
        <div className="p-12 xl:col-span-8 col-span-12">
          <p className="my-4 font-bold text-xl">What You'll Learn?</p>
          <div>
            {learnings.map((learn, idx) => (
              <div className="flex items-center" key={idx}>
                <FaCheck className="text-sky-400" />
                <span className="ml-2">{learn}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden xl:col-span-4 col-span-12 bg-white rounded shadow-lg  text-slate-500 shadow-slate-200">
          <div className="p-12">
            <h2 className="text-center my-4 text-black font-semibold text-2xl">
              Course info:
            </h2>
            <div className="flex justify-between border-b-2 w-4/5 pb-2 mx-auto mt-4">
              <div className="flex items-center text-xl">
                <FaMoneyBillAlt /> <span className="pl-2">Price:</span>
              </div>
              <div className="text-xl font-semibold text-sky-400">{price}</div>
            </div>
            <div className="flex justify-between border-b-2 w-4/5 pb-2 mx-auto mt-4">
              <div className="flex items-center text-xl">
                <FaRegFileAlt /> <span className="pl-2">Lesson:</span>
              </div>
              <div className="text-xl font-semibold text-sky-400">
                {lessons}
              </div>
            </div>
            <div className="flex justify-between border-b-2 w-4/5 pb-2 mx-auto mt-4">
              <div className="flex items-center text-xl">
                <FaChalkboardTeacher />
                <span className="pl-2">Instructor:</span>
              </div>
              <div className="text-xl font-semibold text-sky-400">
                {instructor}
              </div>
            </div>
            <div className="text-center my-8">
              <button
                onClick={handleAccess}
                className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded border border-sky-500 px-5 text-sm font-medium tracking-wide text-sky-500 shadow-md shadow-sky-200 transition duration-300 hover:border-sky-600 hover:text-sky-600 hover:shadow-sm hover:shadow-sky-200 focus:border-sky-700 focus:text-sky-700 focus:shadow-sm focus:shadow-sky-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:text-sky-300 disabled:shadow-none"
              >
                <span>Get Premium Access</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
