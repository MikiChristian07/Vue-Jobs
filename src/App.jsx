import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import JobPage, { jobLoader } from "./pages/JobPage";
import JobsPage from "./pages/JobsPage";
import AddJobPage from "./pages/AddJobPage";
import MainLayout from "./layouts/MainLayout";
import Pricing from "./pages/Pricing";
import ContactPage from "./pages/ContactPage";

const apiUrl = import.meta.env.VITE_API_URL;

const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch(`${apiUrl}jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });

    if (!res.ok) {
      console.error('Failed to add the job:', res.statusText);
      return;
    }

    return await res.json();
  };

  const deleteJob = async (id) => {
    const res = await fetch(`${apiUrl}jobs/${id}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      console.error('Failed to delete the job:', res.statusText);
      return;
    }

    return await res.json();
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'jobs', element: <JobsPage /> },
        {
          path: 'employer',
          element: <AddJobPage addJobSubmit={ addJob } />,
        },
        {
          path: 'jobs/:id',
          element: <JobPage deleteJob={ deleteJob } />,
          loader: jobLoader,
        },
        {
          path: 'pricing',
          element: <Pricing />,
        },
        {
          path: 'contact',
          element: <ContactPage />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;