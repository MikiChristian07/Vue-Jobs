import { Link} from 'react-router-dom';
import './PathChoice.css'; // Import custom CSS for animations

const PathChoice = () => {
  return (
    <div className="relative flex flex-col justify-around items-center h-auto bg-cover bg-center" style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/03/00/79/87/240_F_300798778_xHjP92J6J3601ZOvdHW1Lfzg1oGYuy0i.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center p-2 text-white rounded-lg mt-7 mb-4">
        <h1 className="text-3xl font-bold mb-2">Begin your Journey</h1>
        <p className="text-lg">Choose your path to get started</p>
      </div>
      <div className="relative flex flex-col md:flex-row justify-around items-center w-full mb-8">
        <div className="relative bg-white border-2 border-green-600 rounded-lg p-6 w-full md:w-4/12 text-center transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl mb-4 md:mb-0 md:mr-4 overflow-hidden group">
          <div className="overlay absolute inset-0 bg-green-600 opacity-0 transform translate-y-full transition-all duration-500"></div>
          <img src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Employer" className="relative mx-auto mb-4 w-24 h-24 object-cover rounded-full" />
          <h2 className="relative text-2xl font-bold mb-4 text-color-change">Employer</h2>
          <p className="relative mb-4 text-color-change">Post jobs and find the best candidates.</p>
          <Link 
            to="/add-job"
            className="
              relative bg-green-600 text-white 
              py-2 px-4 rounded hover:bg-green-700 
              transition-colors button-color-change">
                Employer
          </Link>
        </div>
        <div className="relative bg-green-600 text-white rounded-lg p-6 w-full md:w-4/12 text-center transition-transform transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden group">
          <div className="overlay absolute inset-0 bg-white opacity-0 transform translate-y-full transition-all duration-500"></div>
          <img src="https://images.pexels.com/photos/3769990/pexels-photo-3769990.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Job Seeker" className="relative mx-auto mb-4 w-24 h-24 object-cover rounded-full border-2 border-white" />
          <h2 className="relative text-2xl font-bold mb-4 text-color-change">Job Seeker</h2>
          <p className="relative mb-4 text-color-change">Find your dream job and apply now.</p>
          <button className="relative bg-white text-green-600 py-2 px-4 rounded hover:bg-gray-200 transition-colors button-color-change">Job Seeker</button>
        </div>
      </div>
    </div>
  );
}

export default PathChoice;