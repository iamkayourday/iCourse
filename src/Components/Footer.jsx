import React from 'react';
import { FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Policy Links */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
            Cookies Policy
          </a>
          <span className="hidden md:block text-gray-300">|</span>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
            Legal Terms
          </a>
          <span className="hidden md:block text-gray-300">|</span>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
            Privacy Policy
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mb-8">
          <span className="text-gray-500 text-sm">© {new Date().getFullYear()} icourse. All rights reserved.</span>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
            <span className="sr-only">Instagram</span>
            <FiInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <FiLinkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
            <span className="sr-only">Twitter</span>
            <FiTwitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
            <span className="sr-only">YouTube</span>
            <FiYoutube className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
            <span className="sr-only">TikTok</span>
            <FaTiktok className="h-5 w-5" />
          </a>
        </div>

        {/* Text labels for socials on mobile */}
        <div className="mt-4 md:hidden flex flex-wrap justify-center gap-x-4 gap-y-2">
          <span className="text-gray-500 text-xs">Instagram</span>
          <span className="text-gray-500 text-xs">LinkedIn</span>
          <span className="text-gray-500 text-xs">Twitter</span>
          <span className="text-gray-500 text-xs">YouTube</span>
          <span className="text-gray-500 text-xs">TikTok</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;