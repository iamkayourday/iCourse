import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Cards from "../Components/Cards";

const AboutUs = () => {

  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);
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

        <Cards />
      </section>
    </>
  );
};

export default AboutUs;
