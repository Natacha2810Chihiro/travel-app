import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SingleTravelPage from './components/SingleTravelPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/travels/:id",
    element: <SingleTravelPage />,
  },
  {
    path: "*",
    element: <h1>404 not found</h1>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
