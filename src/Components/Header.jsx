import React, { useState } from 'react';
import { 
  FiMenu, 
  FiX, 
  FiHome, 
  FiBook, 
  FiBell, 
  FiInfo, 
  FiGrid, 
  FiSearch,
  FiHelpCircle
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearchPanel, setShowSearchPanel] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setShowSearchPanel(false); 
  };
  

  return (
    <>
      {/* Mobile/Tablet Header */}
      <div className="lg:hidden bg-[#f5f6f7] shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <Link to="/" onClick={handleLinkClick}>
          <div className="flex items-center">
            <img 
              src="/icourse-logo.avif" 
              alt="iCourse Logo" 
              className="h-8 w-8 mr-2"
            />
            <span className="text-lg font-medium text-black">iCourse</span>
          </div>
        </Link>
        <div className="flex items-center">
          <button 
            onClick={() => setShowSearchPanel(true)}
            className="text-gray-600 hover:text-gray-800 p-1 mr-4"
          >
            <FiSearch size={20} />
          </button>
          <button 
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-gray-400 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <FiX size={24} />
            ) : (
              <FiMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div 
        className={`fixed inset-y-0 left-0 transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out bg-[#f5f6f7] z-40 overflow-y-auto w-64`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Logo */}
          <Link to="/" onClick={handleLinkClick}>
            <div className="flex items-center mb-10">
              <img 
                src="/icourse-logo.avif" 
                alt="iCourse Logo" 
                className="h-8 w-8 mr-3"
              />
              <h1 className="text-xl font-medium text-black">iCourse</h1>
            </div>
          </Link>

          {/* Search Bar in Sidebar */}
          <div className="mb-8">
            <h2 className="text-xs uppercase font-semibold text-gray-500 mb-4 tracking-wider">Search</h2>
            <div onClick={() => setShowSearchPanel(true)} className="cursor-pointer">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Click to search..."
                  readOnly
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 bg-white cursor-pointer focus:outline-none"
                />
                <FiSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Main Menu */}
          <div className="mb-8">
            <h2 className="text-xs uppercase font-semibold text-gray-500 mb-4 tracking-wider">Menu</h2>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/" 
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                    onClick={handleLinkClick}
                  >
                    <FiHome className="mr-3" size={18} />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/icourses" 
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                    onClick={handleLinkClick}
                  >
                    <FiBook className="mr-3" size={18} />
                    All Courses
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/news" 
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                    onClick={handleLinkClick}
                  >
                    <FiBell className="mr-3" size={18} />
                    News & Updates
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about-us" 
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                    onClick={handleLinkClick}
                  >
                    <FiInfo className="mr-3" size={18} />
                    About Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* User Menu */}
          <div >
            <h2 className="text-xs uppercase font-semibold text-gray-500 mb-4 tracking-wider">User</h2>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/apps" 
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                    onClick={handleLinkClick}
                  >
                    <FiGrid className="mr-3" size={18} />
                    My Apps
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/support" 
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
                    onClick={handleLinkClick}
                  >
                    <FiHelpCircle className="mr-3" size={18} />
                    Help & Support
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Panel  */}
      {showSearchPanel && (
        <div className="fixed inset-0  backdrop-blur-md lg:ml-64 z-50 overflow-y-auto">
          <div className="p-6 lg:p-10 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Search</h1>
              <button 
                onClick={() => setShowSearchPanel(false)}
                className="text-gray-600 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100"
              >
                <FiX size={24} />
              </button>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <SearchBar onClose={() => setShowSearchPanel(false)} />
              
              {/* search tips  */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-700 mb-4">Search Tips</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Try searching for course names or topics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Look for news articles by keywords</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Use specific terms for better results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay for mobile/tablet menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
};

export default Header;