import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobPage";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  // Define the routes using createBrowserRouter
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'job', element: <JobPage />} // Keep index route for HomePage
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
