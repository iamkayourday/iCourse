import React, { useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import newsData from "../../datas/news.json";

const NewsDetails = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const { name } = useParams();

  // Convert URL-friendly name back to display format
  const displayName = name.replace(/-/g, ' ');

  // Find the current news by matching title
  const currentIndex = newsData.findIndex(
    (news) => news.title.toLowerCase() === displayName.toLowerCase()
  );
  
  const news = newsData[currentIndex];
  const nextNews = currentIndex >= 0 && currentIndex < newsData.length - 1 
    ? newsData[currentIndex + 1] 
    : null;

  if (!news) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">News Not Found</h2>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center mx-auto text-blue-600 hover:text-blue-800"
          >
            <FiArrowLeft className="mr-2" />
            Back to News
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="lg:ml-80 rounded-lg bg-white lg:mr-40 mb-10 lg:mt-10">
      {/* Back button */}
      <div className="p-6  top-0">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
        >
          <FiArrowLeft className="mr-2" />
          <span className="font-medium">All News</span>
        </button>
      </div>

      {/* News details */}
      <div className="p-6">
        <div className="mb-6 flex items-center text-sm text-gray-500">
          <span>{news.details.date}</span>
          <span className="mx-2">•</span>
          <span>By {news.author}</span>
        </div>

        <img
          src={news.img}
          alt={news.title}
          className="w-full rounded-lg object-cover h-96 mb-6"
        />

        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {news.title}
          </h1>
          {news["sub-title"] && (
            <h2 className="text-xl text-gray-600 mb-6">
              {news["sub-title"]}
            </h2>
          )}
          
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">{news.description}</p>
            <p className="text-gray-700 mb-6">{news.details.content}</p>
          </div>
        </div>

        {/* Next News Button */}
        {/* {nextNews && (
          <div className="mt-12 flex justify-end">
            <button 
              onClick={() => navigate(`/news/${nextNews.title.toLowerCase().replace(/\s+/g, '-')}`)}
              className="py-3 px-6 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 transition-colors flex items-center"
            >
              Next
              <FiArrowRight className="ml-2" />
            </button>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default NewsDetails;