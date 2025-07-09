import { createBrowserRouter, RouterProvider } from 'react-router';
import AppLayout from '../ui/AppLayout';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';
import ErrorPage from '../pages/ErrorPage';

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    path: '/',
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={routes} />;
};

export default AppRoutes;
