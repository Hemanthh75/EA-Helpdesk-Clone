import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MyCases from './pages/MyCases/MyCases';
import SignIn from './pages/SignIn/SignIn';


{/*Client side routing using react router dom */}

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },

    {
      path: "my-cases",
      element: <MyCases />
    },

    {
      path: "sign-in",
      element: <SignIn />
    }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
