/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Listing from './Listing';
import Spinner from './Spinner';

const FeaturedJobs = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]); // Jobs data state
  const [loading, setLoading] = useState(true); // Loading state
  const [delayed, setDelayed] = useState(false); // Delay before showing spinner

  const apiUrl = import.meta.env.VITE_API_URL;

  // Simulate a delay before showing the spinner (e.g., 2 seconds)
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setDelayed(true); // Show spinner after 2 seconds
    }, 2000);
    return () => clearTimeout(delayTimer); // Cleanup the timeout on unmount
  }, []);

  // Fetch jobs data from the API
  useEffect(() => {
    const fetchJobs = async () => {
      const endpoint = isHome ? `${apiUrl}/jobs?_limit=3` : `${apiUrl}/jobs`;
      try {
        const res = await fetch(endpoint);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false); // Stop loading when the fetch finishes
      }
    };

    fetchJobs();
  }, [isHome, apiUrl]);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-center mt-10 mb-8 font-inter">Featured Jobs</h2>
        <p className="text-center text-gray-700 mb-8">
          Explore our featured job listings in various fields. Click on the job titles to learn more and apply.
        </p>

        {/* Show Spinner with a delay if loading is true and delayed state is set */}
        {loading && delayed ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Render job listings after fetching */}
            {jobs.map((job) => (
              <Listing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedJobs;