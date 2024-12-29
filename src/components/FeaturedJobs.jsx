import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fontsource/inter'; // Import Inter font

const FeaturedJobs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const jobs = [
    {
      title: 'DevOps Engineer',
      description: 'Manage and automate infrastructure.',
      link: '/jobs/devops',
      image: 'https://via.placeholder.com/150?text=DevOps',
    },
    {
      title: 'Blockchain Developer',
      description: 'Develop and maintain blockchain applications.',
      link: '/jobs/blockchain',
      image: 'https://via.placeholder.com/150?text=Blockchain',
    },
    {
      title: 'Cyber Security Specialist',
      description: 'Protect systems and networks from cyber threats.',
      link: '/jobs/cyber-security',
      image: 'https://via.placeholder.com/150?text=Cyber+Security',
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mt-10 mb-8 font-inter">Featured Jobs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <div
            key={job.title}
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
          >
            <img src={job.image} alt={job.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-4 font-inter">{job.title}</h3>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <a
              href={job.link}
              className="text-green-500 hover:text-green-700 font-bold"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;