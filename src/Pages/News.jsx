// News.jsx
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import newsData from "../../data/news.json";
import { useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();

  return (
    <section className="lg:ml-72 rounded-lg bg-white lg:mr-40 mb-10">
      {/* Header */}
      <article className="p-6 border-b border-gray-200">
        <header>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            News & Announcements
          </h1>
        </header>
        <p className="text-gray-600 md:text-lg leading-relaxed">
          Stay informed with the latest developments in our e-learning platform. 
          Discover new course offerings, platform updates, success stories from 
          our students, and insights into the evolving world of web development.
        </p>
      </article>

      {/* News grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 bg-[#fafafa] cursor-pointer"
            onClick={() => navigate(`/news/${news.title.toLowerCase().replace(/\s+/g, '-')}`)}
          >
            <img
              src={news.img}
              alt={news.title}
              className="w-full h-60 object-cover rounded-t-lg"
            />

            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{news.details.date}</span>
                <span className="mx-2">•</span>
                <span>{news.author}</span>
              </div>

              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {news.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {news.description}
              </p>
              
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;