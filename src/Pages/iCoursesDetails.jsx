import React, { useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import coursesData from "../../datas/courses.json";

const ICoursesDetails = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const { name } = useParams();

  // Convert URL-friendly name back to display format
  const displayName = name.replace(/-/g, ' ');

  // Find the current course by matching title
  const currentIndex = coursesData.findIndex(
    (course) => course.title.toLowerCase() === displayName.toLowerCase()
  );
  
  const course = coursesData[currentIndex];
  const nextCourse = coursesData[currentIndex + 1];

  if (!course) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h2>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center mx-auto text-blue-600 hover:text-blue-800"
          >
            <FiArrowLeft className="mr-2" />
            Back to courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="lg:ml-80 rounded-lg bg-white lg:mr-40 mb-10 lg:mt-10">
      {/* Back button */}
      <div className="p-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <FiArrowLeft className="mr-2" />
          Back to courses
        </button>
      </div>

      {/* Course details */}
      <div className="p-6">
        <img
          src={course.img}
          alt={course.title}
          className="w-full rounded-lg object-cover h-96 mb-6"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {course.title}
            </h1>
            <h2 className="text-xl text-gray-600 mb-4">
              {course["sub-title"]}
            </h2>
            <p className="text-gray-500 mb-8">{course.description}</p>

            {/* Course content */}
            <div className="mt-12">
              <p className="text-gray-600 mb-3">{course.details.content}</p>
              <p className="text-gray-600">{course.details.content2}</p>
            </div>
          </div>

          {/* Right side - Course info */}
          <div>
            {/* Course details box */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Course Details
              </h3>

              <div className="border-b border-gray-200 py-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Author:</span>
                  <span className="font-medium text-gray-400">{course.instructor}</span>
                </div>
              </div>

              <div className="border-b border-gray-200 py-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Price:</span>
                  <span className="font-bold text-gray-400">${course.price}</span>
                </div>
              </div>

              <div className="border-b border-gray-200 py-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Duration:</span>
                  <span className="font-medium text-gray-400">{course.details.duration}</span>
                </div>
              </div>

              <div className="border-b border-gray-200 py-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Level:</span>
                  <span className="font-medium text-gray-400">{course.details.level}</span>
                </div>
              </div>
              <div className="border-b border-gray-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-gray-500 mr-16">Subtitle:</span>
                  <span className="font-sm text-[13px] text-gray-400">{course.details.subtitles}</span>
                </div>
              </div>

              <div className="pt-6">
                <button className="w-full bg-black text-white py-3 px-4 rounded-lg transition duration-200 cursor-pointer hover:bg-gray-800">
                  Enroll Now
                </button>

                <div className="mt-4 text-center text-sm text-gray-500">
                  30-day money-back guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Next Course Button - Only shows if there is a next course */}
        {/* {nextCourse && (
          <div className="mt-8 flex justify-end">
            <button 
              onClick={() => navigate(`/icourses/${nextCourse.title.toLowerCase().replace(/\s+/g, '-')}`)}
              className="py-3 px-6 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 transition-colors flex items-center"
            >
              Next Course
              <FiArrowRight className="ml-2" />
            </button>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default ICoursesDetails;