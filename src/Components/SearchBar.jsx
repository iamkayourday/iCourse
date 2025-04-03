import React, { useState, useEffect } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import newsData from '../../data/news.json';
import coursesData from '../../data/courses.json';

const SearchBar = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    // Filter News
    const newsResults = newsData
      .filter(news => news.title.toLowerCase().includes(lowerCaseSearchTerm) || 
        news.description.toLowerCase().includes(lowerCaseSearchTerm)
      )
      .map(news => ({
        id: news.id,
        title: news.title,
        type: 'news',
        link: `/news/${news.title.toLowerCase().replace(/\s+/g, '-')}`
      }));

    // Filter Courses
    const courseResults = coursesData
      .filter(course => course.title.toLowerCase().includes(lowerCaseSearchTerm) || 
        course.description.toLowerCase().includes(lowerCaseSearchTerm)
      )
      .map(course => ({
        id: course.id,
        title: course.title,
        type: 'course',
        link: `/icourses/${course.title.toLowerCase().replace(/\s+/g, '-')}`
      }));

      const RoutesResult = coursesData
      .filter(course => course.title.toLowerCase().includes(lowerCaseSearchTerm) || 
        course.description.toLowerCase().includes(lowerCaseSearchTerm)
      )
      .map(course => ({
        id: course.id,
        title: course.title,
        type: 'course',
        link: `/icourses/${course.title.toLowerCase().replace(/\s+/g, '-')}`
      }));

    setSearchResults([...newsResults, ...courseResults]);
  }, [searchTerm]);

  const handleResultClick = (link) => {
    navigate(link);
    setSearchTerm('');
    setIsSearchOpen(false);
    if (onClose) onClose(); 
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setHighlightIndex((prev) => (prev < searchResults.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      setHighlightIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter' && highlightIndex >= 0) {
      handleResultClick(searchResults[highlightIndex].link);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search news or courses..."
          className="w-full py-3 px-5 pr-12 rounded-full  shadow-md focus:ring-1 focus:ring-gray-500 transition-all duration-200 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsSearchOpen(true)}
          onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
          onKeyDown={handleKeyDown}
        />
        {searchTerm ? (
          <FiX
            className="absolute right-10 text-gray-400 cursor-pointer hover:text-red-500 transition duration-200"
            onClick={() => {
              setSearchTerm('');
              setSearchResults([]);
              setHighlightIndex(-1);
            }}
          />
        ) : (
          <FiSearch className="absolute right-4 text-gray-400" />
        )}
      </div>

      {isSearchOpen && searchResults.length > 0 && (
        <div className="absolute z-50 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto transition-all duration-200">
          {searchResults.map((result, index) => (
            <div
              key={`${result.type}-${result.id}`}
              className={`p-4 cursor-pointer flex justify-between items-center border-b border-gray-100 last:border-b-0 transition-all duration-200 ${
                highlightIndex === index ? 'bg-gray-500 text-white' : 'hover:bg-gray-500'
              }`}
              onClick={() => handleResultClick(result.link)}
              onMouseDown={(e) => e.preventDefault()}
              onMouseEnter={() => setHighlightIndex(index)}
            >
              <div>
                <div className="font-semibold">{result.title}</div>
                <div className={`text-xs capitalize ${
                  highlightIndex === index ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {result.type} • {result.link.replace(/^\//, '')}
                </div>
              </div>
              <FiSearch className={highlightIndex === index ? "text-blue-300" : "text-gray-400"} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;