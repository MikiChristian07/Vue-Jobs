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
        <div className="flex flex-col md:flex-row items-center p-4 bg-primary-100 rounded-lg shadow-lg mb-6 w-full shadow-md" data-aos="fade-up">
          <div className="md:w-1/2 p-2">
            <h3 className="text-2xl font-semibold mb-2 font-inter text-primary-700">1. Browse Jobs</h3>
            <p className="text-gray-700 mb-2">
              Explore a wide range of job listings in various fields and industries. Our platform offers a comprehensive
              list of job opportunities from top companies. 
            </p>
          </div>
          <div className="md:w-1/2 p-2 flex justify-end">
            <img src="https://media.istockphoto.com/id/1219473617/de/vektor/junge-m%C3%A4nnliche-charakter-schreiben-code-auf-einem-desktop-computer-arbeiten-von-zu-hause.jpg?s=612x612&w=0&k=20&c=zBgd6hrt1NVs8f_qqr4mCn18LzV7RdZBlOLwVNsXPr8=" alt="Browse Jobs" className="rounded-lg shadow-lg w-2/3 transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center p-4 bg-secondary-100 rounded-lg shadow-lg mb-6 w-full shadow-md" data-aos="fade-up">
          <div className="md:w-1/2 p-2 order-2 md:order-1">
            <img src="https://media.istockphoto.com/id/1184240745/de/vektor/humane-resourcen-personen-und-zwischenablage-mit-bewerberliste-und-lupe-besch%C3%A4ftigung.jpg?s=612x612&w=0&k=20&c=sh5mC-_B-hOx1BqLuYWaf7QdmGxSYJfkfFYOC0u2UHs=" alt="Find Your Match" className="rounded-lg shadow-lg w-2/3 transition-transform duration-500 hover:scale-105" />
          </div>
          <div className="md:w-1/2 p-2 order-1 md:order-2">
            <h3 className="text-2xl font-semibold mb-2 font-inter text-secondary-700">2. Find Your Match</h3>
            <p className="text-gray-700 mb-2">
              Use our advanced search and filter options to find the perfect job that matches your skills and interests.
              Our intelligent matching system helps you discover jobs that align with your career goals.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center p-4 bg-accent-100 rounded-lg shadow-lg mb-6 w-full shadow-md" data-aos="fade-up">
          <div className="md:w-1/2 p-2">
            <h3 className="text-2xl font-semibold mb-2 font-inter text-accent-700">3. Apply Directly</h3>
            <p className="text-gray-700 mb-2">
              Submit your application directly through our platform and get in touch with potential employers. Our seamless
              application process allows you to apply to multiple jobs with just a few clicks.
            </p>
          </div>
          <div className="md:w-1/2 p-2 flex justify-end">
            <img src="https://media.istockphoto.com/id/1168006075/de/vektor/checklistendokument-in-laptop-und-schreibtischvektor-cartoon-computer-mit-h%C3%A4kchen-dokument.jpg?s=612x612&w=0&k=20&c=wFG02q-PZARHG4z5kvpMjy3bCwv0UAYBvglsSvzTCS8=" alt="Apply Directly" className="rounded-lg shadow-lg w-2/3 transition-transform duration-500 hover:scale-105" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteFlow;