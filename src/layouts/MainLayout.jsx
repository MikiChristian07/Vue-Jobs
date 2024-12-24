import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gray-100">
        <Outlet />
      </main>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
