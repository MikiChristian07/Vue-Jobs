import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-green-500 text-2xl ml-3 font-bold">
          Vue Jobs
        </Link>
        <button
          className="md:hidden text-white focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={isDropdownOpen}
          onClick={toggleDropdown}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className="hidden md:block md:w-auto" id="navbar-default">
          <ul
            className="
              font-medium flex flex-col p-4 md:p-0 mt-4 border 
              border-gray-700 rounded-lg 
              bg-gray-700 md:flex-row md:space-x-8 
              rtl:space-x-reverse md:mt-0 md:border-0 
              md:bg-transparent dark:bg-gray-700 
              md:dark:bg-gray-900 dark:border-gray-700"
          >
            {["Home", "Jobs", "Employer", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`
                    block py-2 px-3 rounded font-sans
                    hover:text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                    md:hover:text-gray-900 md:p-0 
                    dark:hover:bg-gray-700 dark:hover:text-gray-900 
                    md:dark:hover:bg-transparent 
                    ${
                      item === "Home"
                        ? "text-white bg-green-600 md:bg-transparent md:text-green-600 md:p-0 dark:text-white md:dark:text-green-600"
                        : "text-gray-100"
                    }`}
                  aria-current={item === "Home" ? "page" : undefined}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="md:hidden bg-gray-700 border-t border-gray-700 mt-3">
          <ul className="flex flex-col p-4">
            {["Home", "Jobs", "Employer", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`
                    block py-2 px-3 rounded font-sans
                    hover:text-gray-900 hover:bg-gray-100 
                    dark:hover:bg-gray-700 dark:hover:text-gray-900 
                    ${
                      item === "Home"
                        ? "text-white bg-green-600 md:bg-transparent md:text-green-600 md:p-0 dark:text-white md:dark:text-green-600"
                        : "text-gray-100"
                    }`}
                  aria-current={item === "Home" ? "page" : undefined}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;