import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import coursesData from "../../datas/courses.json";
import { useNavigate } from "react-router-dom"; 

const Icourses = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate(); 

  return (
    <>
      <section className="lg:ml-72 rounded-lg bg-white lg:mr-40 mb-10 p-2">
        {/* Main content area */}
        <article className="p-3 mt-8 border-gray-300 border-b-1">
          <header className="p-2">
            <h1 className="md:text-4xl text-xl font-medium text-gray-800 mb-4">
              iCourses
            </h1>
          </header>
          <p className="text-gray-600 md:text-lg leading-relaxed">
            Unlock the world of web development effortlessly with our innovative
            e-learning courses. Elevate your skills, build a dynamic portfolio,
            and launch your web development or no-code career with our
            industry-aligned certifications and dedicated job placement
            assistance.
          </p>
        </article>

        {/* Courses grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 bg-[#fafafa] cursor-pointer"
              onClick={() => navigate(`/icourses/${course.title}`)}
            >
              {/* Course image */}
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-60 object-cover rounded-t-lg "
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
                  {/* Lesson  */}
                  <div className="w-full md:w-auto mb-2 md:mb-0">
                    <span className="text-gray-500">
                      Lesson:
                      <span className="text-black font-medium ml-2">
                        {course.details.duration}
                      </span>
                    </span>
                  </div>

                  {/* Level and Arrow */}
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
      </section>
    </>
  );
};

export default Icourses;