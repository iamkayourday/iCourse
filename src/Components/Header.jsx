import React, { useState } from 'react';
import { 
  FiMenu, 
  FiX, 
  FiHome, 
  FiBook, 
  FiBell, 
  FiInfo, 
  FiGrid, 
  FiHelpCircle,
  FiSearch 
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <>
      {/* Mobile/Tablet Header (visible on small and medium screens) */}
      <div className="lg:hidden bg-[#f5f6f7] shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <Link to="/">
          <div className="flex items-center">
            <img 
              src="/icourse-logo.avif" 
              alt="iCourse Logo" 
              className="h-8 w-8 mr-2"
            />
            <span className="text-lg font-medium text-black">iCourse</span>
          </div>
        </Link>
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

      {/* Sidebar Navigation - mobile style on tablet (hidden by default), desktop style on large screens */}
      <div 
        className={`fixed inset-y-0 left-0 transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out bg-[#f5f6f7] z-40 overflow-y-auto w-64`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Logo */}
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="flex items-center mb-10">
              <img 
                src="/icourse-logo.avif" 
                alt="iCourse Logo" 
                className="h-8 w-8 mr-3"
              />
              <h1 className="text-xl font-medium text-black">iCourse</h1>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="mb-8">
            <h2 className="text-xs uppercase font-semibold text-gray-500 mb-4 tracking-wider">Search</h2>
            <form onSubmit={handleSearch}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
                <FiSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            </form>
          </div>

          {/* Main Menu */}
          <div className="mb-8">
            <h2 className="text-xs uppercase font-semibold text-gray-500 mb-4 tracking-wider">Menu</h2>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/" 
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-400 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FiHome className="mr-3" size={18} />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/icourses" 
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-400 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FiBook className="mr-3" size={18} />
                    All iCourse
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/news" 
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-400 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FiBell className="mr-3" size={18} />
                    News
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about-us" 
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-400 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
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
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-400 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FiGrid className="mr-3" size={18} />
                    Apps
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/support" 
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-gray-400 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
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