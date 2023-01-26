import React from "react";
import { useLoaderData } from "react-router-dom";
import IndividualCourse from "../IndividualCourse/IndividualCourse";

const Courses = () => {
  const allCourses = useLoaderData();

  return (
    <div className="grid grid-cols-12 container mx-auto">
      <div className="col-span-4 bg-slate-500">
        <p>Sidebar</p>
      </div>
      <div className="lg:col-span-8 col-span-12">
        <div className="w-4/5 mx-auto my-8">
          {allCourses.map((course) => (
            <IndividualCourse
              key={course.id}
              course={course}
            ></IndividualCourse>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
