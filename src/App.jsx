import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import JobPage, { jobLoader } from "./pages/JobPage";
import JobsPage from "./pages/JobsPage";
import AddJobPage from "./pages/AddJobPage";
import MainLayout from "./layouts/MainLayout";


const App = () => {
   // Fixing the typo in the `addJob` function to add a new job
   const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST', // Corrected from 'methods' to 'method'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });

    if (!res.ok) {
      console.error('Failed to add the job:', res.statusText);
      return;
    }

    return await res.json(); // Return the result if needed
  };

  // Function to delete a job 
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE', // Corrected from 'methods' to 'method'
    });

    if (!res.ok) {
      console.error('Failed to delete the job:', res.statusText);
      return;
    }

    return await res.json(); // Return the result if needed
  }
  
  // function to update the job
  // const updateJob = async (job) => {
  //   const res = await fetch(`/api/jobs/${job.id}`, {
  //     method: 'PUT', // Corrected from 'methods' to 'method'
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(job),
  //   });

  //   if (!res.ok) {
  //     console.error('Failed to add the job:', res.statusText);
  //     return;
  //   }

  //   return await res.json(); // Return the result if needed
  // }

  // Define the routes using createBrowserRouter
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'jobs', element: <JobsPage /> },
        {
          path: 'add-job',
          element: <AddJobPage addJobSubmit={ addJob } />,
        },
        {
          path: 'jobs/:id',
          element: <JobPage deleteJob={ deleteJob }/>,
          loader: jobLoader, // Attach the loader here
        }, // Keep index route for HomePage
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
