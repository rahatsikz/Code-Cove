import React, { useMemo, useState } from "react";
import { useLoaderData } from "react-router-dom";
import IndividualCourse from "../IndividualCourse/IndividualCourse";

const Courses = () => {
  const allCourses = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState();
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const getFilteredList = () => {
    if (!selectedCategory) {
      return allCourses;
    }
    return allCourses.filter((course) => course.level === selectedCategory);
  };

  const filteredList = useMemo(getFilteredList, [selectedCategory, allCourses]);

  return (
    <div className="grid grid-cols-12 container mx-auto">
      <div className="col-span-12 lg:col-span-4">
        <div className="bg-sky-50 text-center my-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 pt-4">Filter by levels</h2>
          <div
            className="form-control pl-8 pb-8"
            onChange={handleCategoryChange}
          >
            <label className="flex items-center cursor-pointer mt-4">
              <input
                type="radio"
                name="radio-7"
                className="radio radio-info"
                value=""
              />
              <span className="label-text ml-2">All</span>
            </label>
            <label className="flex items-center cursor-pointer mt-4">
              <input
                type="radio"
                name="radio-7"
                className="radio radio-info"
                value="Beginner"
              />
              <span className="label-text ml-2">Beginner</span>
            </label>
            <label className="flex items-center cursor-pointer mt-4">
              <input
                type="radio"
                name="radio-7"
                className="radio radio-info"
                value="Intermediate"
              />
              <span className="label-text ml-2">Intermediate</span>
            </label>
            <label className="flex items-center cursor-pointer mt-4">
              <input
                type="radio"
                name="radio-7"
                className="radio radio-info"
                value="Advanced"
              />
              <span className="label-text ml-2">Advanced</span>
            </label>
          </div>
        </div>
      </div>
      <div className="lg:col-span-8 col-span-12">
        <div className="w-4/5 mx-auto my-8">
          {filteredList.map((course) => (
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
