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
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600',
      salary: '$90,000 - $120,000',
      location: 'San Francisco, CA'
    },
    {
      title: 'Blockchain Developer',
      description: 'Develop and maintain blockchain applications.',
      link: '/jobs/blockchain',
      image: 'https://images.pexels.com/photos/14751274/pexels-photo-14751274.jpeg?auto=compress&cs=tinysrgb&w=600',
      salary: '$100,000 - $140,000',
      location: 'New York, NY'
    },
    {
      title: 'Cyber Security Specialist',
      description: 'Protect systems and networks from cyber threats.',
      link: '/jobs/cyber-security',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600',
      salary: '$95,000 - $130,000',
      location: 'Austin, TX'
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mt-10 mb-8 font-inter">Featured Jobs</h2>
      <p className="text-center text-gray-700 mb-8">
        Explore our featured job listings in various fields. Click on the job titles to learn more and apply.
      </p>
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
            <p className="text-gray-700 mb-2"><strong>Salary:</strong> {job.salary}</p>
            <p className="text-gray-700 mb-4"><strong>Location:</strong> {job.location}</p>
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