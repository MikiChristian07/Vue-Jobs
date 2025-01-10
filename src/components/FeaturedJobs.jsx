import { useNavigate } from 'react-router-dom';

const FeaturedJobs = () => {
  const navigate = useNavigate();
  const jobs = [
    {
      id: 1,
      title: 'Cyber Security Specialist',
      description: 'Protect systems and networks from cyber threats.',
      link: '/jobs/cyber-security',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600',
      salary: '$95,000 - $130,000',
      location: 'Austin, TX'
    },
    {
      id: 2,
      title: 'Software Engineer',
      description: 'Develop and maintain software applications.',
      link: '/jobs/software-engineer',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
      salary: '$85,000 - $120,000',
      location: 'San Francisco, CA'
    },
    {
      id: 3,
      title: 'Data Scientist',
      description: 'Analyze and interpret complex data to help companies make decisions.',
      link: '/jobs/data-scientist',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      salary: '$100,000 - $140,000',
      location: 'New York, NY'
    },
    {
      id: 4,
      title: 'Product Manager',
      description: 'Oversee the development and delivery of products.',
      link: '/jobs/product-manager',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600',
      salary: '$110,000 - $150,000',
      location: 'Seattle, WA'
    },
    {
      id: 5,
      title: 'UX Designer',
      description: 'Design user-friendly interfaces for applications.',
      link: '/jobs/ux-designer',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      salary: '$75,000 - $105,000',
      location: 'Chicago, IL'
    },
    // Add more job objects here if needed
  ];

  const handleCardClick = (id) => {
    navigate(`/jobs/${id}`);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mt-10 mb-8 font-inter">Featured Jobs</h2>
      <p className="text-center text-gray-700 mb-8">
        Explore our featured job listings in various fields. Click on the job titles to learn more and apply.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            data-aos="fade-up"
            onClick={() => handleCardClick(job.id)}
          >
            <img src={job.image} alt={job.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-4 font-inter">{job.title}</h3>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <p className="text-gray-700 mb-2"><strong>Salary:</strong> {job.salary}</p>
            <p className="text-gray-700 mb-4"><strong>Location:</strong> {job.location}</p>
            <span className="text-green-500 hover:text-green-700 font-bold">Learn More</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedJobs;