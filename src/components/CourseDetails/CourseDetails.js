import React from "react";
import { FaCheck } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const detailsData = useLoaderData();
  const { name, image, description, learnings } = detailsData;
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

      <div className="p-12">
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
    </div>
  );
};

export default CourseDetails;
