import 'flowbite/dist/flowbite.min.js'; // Ensure Flowbite is properly installed and integrated
import { Link } from 'react-router-dom';
import logo from '../assets/images/vue_logo.png';

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-gray-800 border-gray-50 dark:bg-white-900 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Site Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-500">
            Vue Jobs
          </span>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="
            inline-flex 
            items-center p-2 w-10 h-10 
            justify-center text-sm text-white-500 
            rounded-lg md:hidden hover:bg-gray-100 
            focus:outline-none focus:ring-2 focus:ring-gray-200 
            dark:text-gray-400 dark:hover:bg-gray-700 
            dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5 text-green-500" // Apply the text-green-500 class
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor" // Use currentColor to inherit the text-green-500 class
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            className="
              font-medium flex flex-col p-4 md:p-0 mt-4 border 
              border-gray-700 rounded-lg 
              bg-gray-200 md:flex-row md:space-x-8 
              rtl:space-x-reverse md:mt-0 md:border-0 
              md:bg-transparent dark:bg-gray-700 
              md:dark:bg-gray-900 dark:border-gray-700"
          >
            {["Home", "About", "Services", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`
                    block py-2 px-3 text-gray-100 rounded font-sans
                    hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                    md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-white-500 
                    dark:hover:bg-gray-700 dark:hover:text-white 
                    md:dark:hover:bg-transparent 
                    ${
                      item === "Home"
                        ? "text-white bg-green-600 md:bg-transparent md:text-green-600 md:p-0 dark:text-white md:dark:text-green-600"
                        : ""
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
    </nav>
  );
};

export default Navbar;