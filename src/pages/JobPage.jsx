import { useParams } from 'react-router-dom';

const JobPage = () => {
  const { id } = useParams();
  const job = {
    id: 1,
    title: 'Cyber Security Specialist',
    description: 'Protect systems and networks from cyber threats.',
    image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600',
    salary: '$95,000 - $130,000',
    location: 'Austin, TX',
    responsibilities: 'Monitor network traffic, identify vulnerabilities, and implement security measures.',
    requirements: 'Bachelor\'s degree in Computer Science or related field, 3+ years of experience in cyber security.',
    company: 'Tech Solutions Inc.',
    postedDate: '2023-10-01',
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <img src={job.image} alt={job.title} className="w-full h-64 object-cover rounded-t-lg mb-4" />
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="text-gray-700 mb-4"><strong>Company:</strong> {job.company}</p>
      <p className="text-gray-700 mb-4"><strong>Location:</strong> {job.location}</p>
      <p className="text-gray-700 mb-4"><strong>Salary:</strong> {job.salary}</p>
      <p className="text-gray-700 mb-4"><strong>Posted Date:</strong> {job.postedDate}</p>
      <h2 className="text-2xl font-semibold mb-2">Job Description</h2>
      <p className="text-gray-700 mb-4">{job.description}</p>
      <h2 className="text-2xl font-semibold mb-2">Responsibilities</h2>
      <p className="text-gray-700 mb-4">{job.responsibilities}</p>
      <h2 className="text-2xl font-semibold mb-2">Requirements</h2>
      <p className="text-gray-700 mb-4">{job.requirements}</p>
      <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105">Apply Now</button>
    </div>
  );
}

export default JobPage;