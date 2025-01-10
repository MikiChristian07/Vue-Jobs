import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import JobPage, { jobLoader } from "./pages/JobPage";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  // Define the routes using createBrowserRouter
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: 'jobs/:id',
          element: <JobPage />,
          loader: jobLoader, // Attach the loader here
        }, // Keep index route for HomePage
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
