/* eslint-disable react/prop-types */
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate();
  const job = useLoaderData();

  // Render a fallback UI if `job` is null or undefined
  if (!job) {
    return <p>Job not found or failed to load.</p>;
  }

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm('Are you sure you want to delete');

    if (!confirm) return;

    deleteJob(jobId);

    toast.success('Job deleted successfully');

    navigate('/jobs');
  };

  return (
    <>
      <section className="bg-green-50 py-6 px-6 min-h-screen">
        <div className="container mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-green-700 hover:text-green-900 mb-4"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <img src={job.image} alt={job.title} className="w-full h-64 object-cover rounded-t-lg mb-4" />
            <h1 className="text-3xl font-bold mb-4 text-green-700">{job.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Company:</strong> {job.company.name}</p>
                <p className="text-gray-700 mb-2 flex items-center"><FaMapMarker className="mr-2 text-green-700" /> {job.location}</p>
                <p className="text-gray-700 mb-2"><strong>Salary:</strong> {job.salary}</p>
                <p className="text-gray-700 mb-2"><strong>Posted Date:</strong> {job.postedDate}</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h2 className="text-2xl font-semibold mb-2 text-green-700">Job Description</h2>
                <p className="text-gray-700 mb-4">{job.description}</p>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h2 className="text-2xl font-semibold mb-2 text-green-700">Responsibilities</h2>
              <ul className="list-disc list-inside text-gray-700">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h2 className="text-2xl font-semibold mb-2 text-green-700">Requirements</h2>
              <ul className="list-disc list-inside text-gray-700">
                {job.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={() => onDeleteClick(job.id)}
                className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-md"
              >
                Delete Job
              </button>
              <Link
                to={`/jobs/${job.id}/edit`}
                className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md"
              >
                Edit Job
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const jobLoader = async ({ params }) => {
  try {
    const res = await fetch(`/api/jobs/${params.id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch job with ID: ${params.id}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error loading job:", error);
    // Throw the error to let React Router handle it with an error boundary
    throw new Response("Failed to load job data.", { status: 500 });
  }
};

// eslint-disable-next-line react-refresh/only-export-components
export { JobPage as default, jobLoader };