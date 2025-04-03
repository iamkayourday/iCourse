import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import coursesData from "../../datas/courses.json";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "../Components/Cards";
import App from "../Components/App";
import Faqs from "../Components/Faqs";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const Dashboard = () => {
  const navigate = useNavigate();
  const featuredCourses = coursesData.slice(0, 6);

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="lg:ml-72 rounded-lg bg-white lg:mr-40 mb-10 p-2 lg:mt-10"
    >
      {/* Main content area */}
      <motion.article variants={fadeIn} className="p-3 mt-8">
        <header className="p-2">
          <motion.h1 
            className="md:text-4xl text-xl font-medium text-gray-800 mb-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Welcome to iCourse
          </motion.h1>
        </header>
        <motion.p 
          className="text-gray-400 md:text-xl text-lg mb-6"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          The Ultimate Guide to Web Design and Development.
        </motion.p>

        {/* Featured Courses Section */}
        <div className="mt-8">
          <motion.h2 
            className="text-2xl font-semibold text-gray-800 mb-6"
            variants={itemVariants}
          >
            Latest iCourses
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 md:text-md text-lg mb-6"
            variants={itemVariants}
          >
            Choose from over <strong>hundreds</strong> of courses and learn
            with industry leading experts.{" "}
            <Link to="/icourses" className="underline hover:text-gray-600 transition-colors">
              View all iCourses
            </Link>
          </motion.p>

          {/* Courses grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            variants={containerVariants}
          >
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 bg-[#fafafa] cursor-pointer"
                onClick={() => navigate(`/icourses/${course.title}`)}
                variants={itemVariants}
                custom={index}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Course image */}
                <motion.img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-60 object-cover rounded-t-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                />

                <div className="p-4">
                  {/* Title */}
                  <h2 className="text-xl font-semibold text-gray-800 mt-3 mb-6">
                    {course.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-500 mb-4">{course.description}</p>

                  {/* Divider */}
                  <motion.div 
                    className="border-b border-gray-200 my-3"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  />

                  {/* Price and Author */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-500">
                      By
                      <span className="text-black font-medium ml-2">
                        {course.instructor}
                      </span>
                    </span>
                    <motion.span 
                      className="font-bold text-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.6, type: "spring" }}
                    >
                      ${course.price}
                    </motion.span>
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
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        <FiArrowRight className="ml-2 text-gray-400" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Courses Button */}
          <motion.div 
            className="flex justify-center mt-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              to="/icourses"
              className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Courses
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FiArrowRight className="ml-2" />
              </motion.span>
            </Link>
          </motion.div>

          <motion.div 
            className="border-b border-gray-200 my-10"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9 }}
          />
        </div>
      </motion.article>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Card />
      </motion.div>

      <motion.div 
        className="border-b border-gray-200 my-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <App />
      </motion.div>

      <motion.div 
        className="border-b border-gray-200 my-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
      >
        <Faqs />
      </motion.div>

      <motion.div 
        className="border-b border-gray-200 my-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
      />
    </motion.section>
  );
};

export default Dashboard;