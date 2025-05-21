import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const location = useLocation();

  // Set dark mode as default and handle theme toggle
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setDarkMode(!darkMode);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-900 text-gray-100 shadow-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center text-sm sm:text-xl font-bold whitespace-nowrap">
          <span className="px-2 py-1 bg-emerald-600 text-white rounded-lg mr-2">
            Uzair's
          </span>
          <span className="text-white">
            Blog
          </span>
        </Link>

        {/* Desktop Search */}
        <form className="hidden lg:inline">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-10 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-200 w-64"
            />
            <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </form>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.path} className="relative group">
              <Link
                to={link.path}
                className={`hover:text-emerald-400 transition-colors duration-200 ${
                  isActive(link.path) ? 'text-emerald-400 font-semibold' : 'text-gray-100'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-400 rounded-full"></span>
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 rounded-full group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button 
            className="text-gray-300 hover:text-yellow-300 transition-colors duration-200 text-xl" 
            onClick={toggleDarkMode}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <Link
            to="/sign-in"
            className="px-4 py-1.5 text-white text-sm font-medium rounded-lg bg-emerald-600 hover:bg-emerald-700 transition-colors duration-200"
          >
            Sign In
          </Link>

          {/* Hamburger Icon */}
          <button
            className="lg:hidden text-2xl text-gray-200 hover:text-emerald-400 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Animated dropdown */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 bg-gray-800 border-t border-gray-700">
          <ul className="space-y-4 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block transition-colors duration-200 ${
                    isActive(link.path) 
                      ? 'text-emerald-400 font-semibold' 
                      : 'text-gray-100 hover:text-emerald-400'
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
                  className="w-full pl-4 pr-10 py-2 bg-gray-700 border border-gray-600 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-200"
                />
                <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
}