import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center text-sm sm:text-xl font-semibold dark:text-white whitespace-nowrap">
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg mr-1">
            Uzair's
          </span>
          Blog
        </Link>

        {/* Desktop Search */}
        <form className="hidden lg:inline">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-10 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
            <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
          </div>
        </form>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex space-x-6 text-sm font-medium dark:text-white">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`hover:text-blue-600 ${
                  isActive(link.path) ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <button className="text-gray-600 dark:text-white text-xl">
            <FaMoon />
          </button>
          <Link
            to="/sign-in"
            className="px-4 py-1.5 text-white text-sm rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            Sign In
          </Link>

          {/* Hamburger Icon */}
          <button
            className="lg:hidden text-2xl text-gray-700 dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4">
          <ul className="space-y-3 text-sm font-medium dark:text-white">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block hover:text-blue-600 ${
                    isActive(link.path) ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {/* Mobile Search */}
            <form className="mt-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                />
                <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
              </div>
            </form>
          </ul>
        </div>
      )}
    </nav>
  );
}