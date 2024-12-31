import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SiteFlow = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-100 w-full p-4">
      <h2 className="text-3xl font-bold text-center mt-10 mb-4 font-inter">How It Works</h2>
      <p className="text-center text-gray-700 mb-8">
        Follow these simple steps to find and apply for your dream job.
      </p>
      <div className="flex flex-col justify-center items-center text-center">
        <div className="flex flex-col md:flex-row items-center p-6 bg-primary-100 rounded-lg shadow-lg mb-8 w-full shadow-md" data-aos="fade-up">
          <div className="md:w-1/2 p-4">
            <h3 className="text-2xl font-semibold mb-2 font-inter text-primary-700">1. Browse Jobs</h3>
            <p className="text-gray-700 mb-4">
              Explore a wide range of job listings in various fields and industries. Our platform offers a comprehensive
              list of job opportunities from top companies. You can filter jobs based on your preferences
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <img src="https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Browse Jobs" className="rounded-lg shadow-lg w-full transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center p-6 bg-secondary-100 rounded-lg shadow-lg mb-8 w-full shadow-md" data-aos="fade-up">
          <div className="md:w-1/2 p-4 order-2 md:order-1">
            <img src="https://images.pexels.com/photos/5198239/pexels-photo-5198239.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Find Your Match" className="rounded-lg shadow-lg w-full transition-transform duration-500 hover:scale-105" />
          </div>
          <div className="md:w-1/2 p-4 order-1 md:order-2">
            <h3 className="text-2xl font-semibold mb-2 font-inter text-secondary-700">2. Find Your Match</h3>
            <p className="text-gray-700 mb-4">
              Use our advanced search and filter options to find the perfect job that matches your skills and interests.
              Our intelligent matching system helps you discover jobs that align with your career goals. 
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center p-6 bg-accent-100 rounded-lg shadow-lg mb-8 w-full shadow-md" data-aos="fade-up">
          <div className="md:w-1/2 p-4">
            <h3 className="text-2xl font-semibold mb-2 font-inter text-accent-700">3. Apply Directly</h3>
            <p className="text-gray-700 mb-4">
              Submit your application directly through our platform and get in touch with potential employers. Our seamless
              application process allows you to apply to multiple jobs with just a few clicks. 
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <img src="https://images.pexels.com/photos/8441786/pexels-photo-8441786.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Apply Directly" className="rounded-lg shadow-lg w-full transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteFlow;