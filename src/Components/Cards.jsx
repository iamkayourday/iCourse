import React from 'react'
import { FaGraduationCap, FaNewspaper } from "react-icons/fa";
import { Link } from "react-router-dom";



const Card = () => {
  return (
    <>
    <div className="grid md:grid-cols-2 grid-cols-1 p-2 gap-4 mb-22">
          {/* Courses */}
          <div className="bg-gray-100 rounded-md p-3 group hover:bg-gray-200">
            <div className="items-center mb-4 group-hover:text-gray-500">
              <div className="border border-gray-300 rounded-full p-3 w-12 group-hover:animate-pulse">
                <FaGraduationCap className="text-gray-400 text-2xl mr-3 group-hover:text-gray-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Courses</h2>
            </div>
            <p className="text-gray-400 text-lg group-hover:text-gray-600">
              Explore our online courses
            </p>
            <Link to="/icourses">
              <button className="border border-gray-200 px-10 py-2 rounded-lg hover:border-black mt-3 cursor-pointer group-hover:bg-gray-300">
                View Courses
              </button>
            </Link>
          </div>

          {/* News */}
          <div className="bg-gray-100 rounded-md p-3 group hover:bg-gray-200">
            <div className="items-center mb-4 group-hover:text-gray-500">
              <div className="border border-gray-300 rounded-full p-3 w-12 group-hover:animate-pulse">
                <FaNewspaper className="text-gray-400 text-2xl mr-3 group-hover:text-gray-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">News</h2>
            </div>
            <p className="text-gray-400 text-lg group-hover:text-gray-600">
              Explore our online courses
            </p>
            <Link to="/icourses">
              <button className="border border-gray-200 px-10 py-2 rounded-lg hover:border-black mt-3 cursor-pointer group-hover:bg-gray-300">
                Read Now
              </button>
            </Link>
          </div>
        </div>
    </>
  )
}

export default Card