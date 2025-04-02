import React from "react";
import { FaGraduationCap, FaNewspaper } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <section className="lg:ml-72 rounded-lg bg-white  lg:mr-40 mb-10">
        {/* Main content area */}
        <article className="p-3 md:mt-8">
          <header className="p-2">
            <h1 className="md:text-4xl text-xl font-medium text-gray-800 mb-4">
              Contact Us
            </h1>
            <div grid grid-cols-2>
              <Link to="/icourses">
                <button className="py-2 border-gray-200 border px-3 rounded-lg mr-2 cursor-pointer">
                  icourses
                </button>
              </Link>
              <a
                href="mailto:abdulbasitkayode@gmail.com"
                className="py-2 bg-black text-white px-5 rounded-lg mr-2 cursor-pointer"
              >
                Email
              </a>
            </div>
          </header>
        </article>
        <div className="p-4">
          <img
            src="/laptop.avif"
            alt="A modern laptop in use for coding"
            className="w-full rounded-lg md:h-[550px] h-[300px] object-cover mb-20"
            loading="lazy"
            decoding="async"
            width="1200"
            height="500"
          />

          <h2 className="text-black font-medium text-3xl mb-4">
            Welcome to the iCourse!
          </h2>
          <p className="text-gray-500 mb-3 text-lg">
            At the E-Learning Hub, we provide a unified and captivating learning
            experience designed to adapt to your needs. We are dedicated to
            bringing education to your fingertips, offering a diverse range of
            e-courses to empower your learning journey. Our platform combines
            cutting-edge technology with personalized approaches, ensuring that
            you have the tools and resources to succeed in your educational
            endeavors.
          </p>
          <p className="text-gray-500 text-lg">
            Explore a world of knowledge with our user-friendly interface,
            progress tracking features, and interactive learning materials.
            Whether you are a student, professional, or lifelong learner, the
            E-Learning Hub is your central destination for quality education.
            Join us on this educational adventure, where learning knows no
            boundaries, and let the E-Learning Hub be your guide to a brighter
            future.
          </p>
        </div>

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
      </section>
    </>
  );
};

export default AboutUs;
