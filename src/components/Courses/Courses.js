import React, { useMemo, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
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
    <div>
      <div className="grid grid-cols-12 container mx-auto">
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-sky-50 dark:bg-gray-900 dark:text-white text-center my-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 pt-4">
              Filter by levels
            </h2>
            <div
              className="form-control pl-8 pb-8 "
              onChange={handleCategoryChange}
            >
              <label className="flex items-center cursor-pointer mt-4">
                <input
                  type="radio"
                  name="radio-7"
                  className="radio radio-info"
                  value=""
                />
                <span className="label-text ml-2 dark:text-white">All</span>
              </label>
              <label className="flex items-center cursor-pointer mt-4">
                <input
                  type="radio"
                  name="radio-7"
                  className="radio radio-info"
                  value="Beginner"
                />
                <span className="label-text ml-2 dark:text-white">
                  Beginner
                </span>
              </label>
              <label className="flex items-center cursor-pointer mt-4">
                <input
                  type="radio"
                  name="radio-7"
                  className="radio radio-info"
                  value="Intermediate"
                />
                <span className="label-text ml-2 dark:text-white">
                  Intermediate
                </span>
              </label>
              <label className="flex items-center cursor-pointer mt-4">
                <input
                  type="radio"
                  name="radio-7"
                  className="radio radio-info"
                  value="Advanced"
                />
                <span className="label-text ml-2 dark:text-white">
                  Advanced
                </span>
              </label>
            </div>
          </div>

          <div className="bg-sky-50 dark:bg-gray-900 text-center my-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 pt-4 text-center">
              Go to Course details of:
            </h3>
            <div className="pl-8 pb-8">
              {allCourses.map((course) => (
                <Link key={course.id} to={`/details/${course.id}`}>
                  <button className=" block items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded focus-visible:outline-none justify-self-center whitespace-nowrap text-sky-500 hover:bg-sky-100 hover:text-sky-600 focus:bg-sky-100 focus:text-sky-700 disabled:cursor-not-allowed disabled:text-sky-300 disabled:shadow-none disabled:hover:bg-transparent">
                    <span> {course.name} </span>
                  </button>
                </Link>
              ))}
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
      <Footer></Footer>
    </div>
  );
};

export default Courses;
