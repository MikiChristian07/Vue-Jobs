import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaMapMarker } from 'react-icons/fa';

const Listing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  if (!job) return null; // Guard clause for missing job prop

  let description = job.description;
  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
      <img src={job.image} alt={job.title} className="w-full h-32 object-cover rounded-t-lg mb-4" />
      <div className="p-2">
        <div className="mb-4">
          {job.type && <div className="text-gray-600 my-2">{job.type}</div>}
          {job.title && <h3 className="text-xl font-bold">{job.title}</h3>}
        </div>

        {job.description && <div className="mb-3">{description}</div>}

        <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-green-500 mb-3 hover:text-green-600">
          {showFullDescription ? 'Less' : 'More'}
        </button>

        {job.salary && <h3 className="text-indigo-500 mb-2">{job.salary}</h3>}

        <div className="border border-gray-100 mb-3"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-2">
          {job.location && (
            <div className="text-green-700 mb-2">
              <FaMapMarker className="inline text-lg mb-1 mr-1 text-green-700" /> {job.location}
            </div>
          )}
          {job.id && (
            <Link
              to={`/jobs/${job.id}`}
              className="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Learn More
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

Listing.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    salary: PropTypes.string,
    location: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default Listing;