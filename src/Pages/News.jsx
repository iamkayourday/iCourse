import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import newsData from "../../datas/news.json";
import { useNavigate } from "react-router-dom";

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
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

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={container}
      className="lg:ml-72 rounded-lg bg-white lg:mr-40 mb-10"
    >
      {/* Header */}
      <motion.article 
        variants={fadeIn}
        className="p-6 border-b border-gray-200"
      >
        <header>
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            News & Announcements
          </motion.h1>
        </header>
        <motion.p 
          className="text-gray-600 md:text-lg leading-relaxed"
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
        >
          Stay informed with the latest developments in our e-learning platform. 
          Discover new course offerings, platform updates, success stories from 
          our students, and insights into the evolving world of web development.
        </motion.p>
      </motion.article>

      {/* News grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6"
        variants={container}
      >
        {newsData.map((news, index) => (
          <motion.div
            key={news.id}
            variants={item}
            custom={index}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 bg-[#fafafa] cursor-pointer"
            onClick={() => navigate(`/news/${news.title.toLowerCase().replace(/\s+/g, '-')}`)}
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={news.img}
              alt={news.title}
              className="w-full h-60 object-cover rounded-t-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            />

            <div className="p-6">
              <motion.div 
                className="flex items-center text-sm text-gray-500 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <span>{news.details.date}</span>
                <span className="mx-2">•</span>
                <span>{news.author}</span>
              </motion.div>

              <motion.h2 
                className="text-xl font-semibold text-gray-800 mb-3"
                initial={{ x: -10 }}
                animate={{ x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {news.title}
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 mb-4 line-clamp-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {news.description}
              </motion.p>

              {/* <motion.div
                className="flex items-center text-blue-600 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ x: 5 }}
              >
                Read more
                <FiArrowRight className="ml-2" />
              </motion.div> */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default News;