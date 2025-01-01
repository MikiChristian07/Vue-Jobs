import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import './PathChoice.css'; // Import custom CSS for animations

const PathChoice = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center h-screen bg-gray-50 p-0">
      <div className="relative bg-white border-2 border-green-600 rounded-lg p-8 w-full md:w-5/12 text-center transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl mb-4 md:mb-0 md:mr-4 overflow-hidden">
        <div className="overlay absolute inset-0 bg-green-600"></div>
        <img src="https://via.placeholder.com/150" alt="Employer" className="relative mx-auto mb-4 w-24 h-24 object-cover rounded-full" />
        <h2 className="relative text-2xl font-bold mb-4">Employer</h2>
        <p className="relative mb-4">Post jobs and find the best candidates.</p>
        <button className="relative bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">Employer</button>
      </div>
      <div className="relative bg-green-600 text-white rounded-lg p-8 w-full md:w-5/12 text-center transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden">
        <div className="overlay absolute inset-0 bg-white"></div>
        <img src="https://via.placeholder.com/150" alt="Job Seeker" className="relative mx-auto mb-4 w-24 h-24 object-cover rounded-full border-2 border-white" />
        <h2 className="relative text-2xl font-bold mb-4">Job Seeker</h2>
        <p className="relative mb-4">Find your dream job and apply now.</p>
        <button className="relative bg-white text-green-600 py-2 px-4 rounded hover:bg-gray-200 transition-colors">Job Seeker</button>
      </div>
    </div>
  );
}

export default PathChoice;