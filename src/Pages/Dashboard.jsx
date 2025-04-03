import React from "react";
import { FiArrowRight } from "react-icons/fi";
import coursesData from "../../datas/courses.json";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "../Components/Cards";
import App from "../Components/App";
import Faqs from "../Components/Faqs";

const Dashboard = () => {
  const navigate = useNavigate();
  // Get first 2 courses
  const featuredCourses = coursesData.slice(0, 6);

  return (
    <>
      <section className="lg:ml-72 rounded-lg bg-white lg:mr-40 mb-10 p-2 lg:mt-10">
        {/* Main content area */}
        <article className="p-3 mt-8">
          <header className="p-2">
            <h1 className="md:text-4xl text-xl font-medium text-gray-800 mb-4">
              Welcome to iCourse
            </h1>
          </header>
          <p className="text-gray-400 md:text-xl text-lg mb-6">
            The Ultimate Guide to Web Design and Development.
          </p>

          {/* Featured Courses Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Latest iCourses
            </h2>
            <p className="text-gray-400 md:text-md text-lg mb-6">
              Choose from over <strong>hundreds</strong> of courses and learn
              with industry leading experts.{" "}
              <Link to="/icourses" className="underline">
                View all iCourses
              </Link>
            </p>

            {/* Courses grid - only showing first 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {featuredCourses.map((course) => (
                <div
                  key={course.id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 bg-[#fafafa] cursor-pointer"
                  onClick={() => navigate(`/icourses/${course.title}`)}
                >
                  {/* Course image */}
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-60 object-cover rounded-t-lg"
                  />

                  <div className="p-4">
                    {/* Title */}
                    <h2 className="text-xl font-semibold text-gray-800 mt-3 mb-6">
                      {course.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-500 mb-4">{course.description}</p>

                    {/* Divider */}
                    <div className="border-b border-gray-200 my-3"></div>

                    {/* Price and Author */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-500">
                        By
                        <span className="text-black font-medium ml-2">
                          {course.instructor}
                        </span>
                      </span>
                      <span className="font-bold text-lg">${course.price}</span>
                    </div>

                    {/* Divider */}
                    <div className="border-b border-gray-200 my-3"></div>

                    {/* Duration and Level */}
                    <div className="md:flex md:justify-between md:items-center">
                      <div className="w-full md:w-auto mb-2 md:mb-0">
                        <span className="text-gray-500">
                          Lesson:
                          <span className="text-black font-medium ml-2">
                            {course.details.duration}
                          </span>
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 md:mr-4">
                          Level:
                          <span className="text-black font-medium ml-2">
                            {course.details.level}
                          </span>
                        </span>
                        <FiArrowRight className="ml-2 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Courses Button */}
            <div className="flex justify-center mt-6 mb-6">
              <Link
                to="/icourses"
                className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors flex items-center"
              >
                View All Courses
                <FiArrowRight className="ml-2" />
              </Link>
            </div>

            <div className="border-b border-gray-200 my-10"></div>
          </div>
        </article>
        <Card />

        <div className="border-b border-gray-200 my-10"></div>

        <App />

        <div className="border-b border-gray-200 my-10"></div>

        <Faqs />

        <div className="border-b border-gray-200 my-10"></div>
      </section>
    </>
  );
};

export default Dashboard;
