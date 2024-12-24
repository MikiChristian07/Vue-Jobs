import { createBrowserRouter, RouterProvider } from "react-router-dom"

import HomePage from "./pages/HomePage"
import MainLayout from "./layouts/MainLayout"

function App() {

    // Define the routes using createBrowserRouter 
    const router = createBrowserRouter([
      {
        path: '/',
        element: <MainLayout />,
        children: [
          { index: true, element: <HomePage />}
        ]
      }
    ])

    return <RouterProvider router={router}/>
}

export default App
