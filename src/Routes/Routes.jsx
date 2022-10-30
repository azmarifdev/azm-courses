import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Outlet/Pages/Home';
import Layouts from '../Layouts/Layouts';
import ErrorPage from '../Components/Others/ErrorPage';
import Course from '../Components/Outlet/Pages/Course';
import Blog from '../Components/Outlet/Pages/Blog';
import Faq from '../Components/Outlet/Pages/Faq';
import SignUp from '../Components/Outlet/Auth/SignUp';
import Login from '../Components/Outlet/Auth/Login';
import CourseDetails from '../Components/Outlet/Pages/CourseDetails';
import CheckOut from '../Components/Outlet/Pages/CheckOut';
import PrivateRoute from './PrivateRoute';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layouts />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/course',
                element: <Course />,
                loader: () =>
                    fetch('https://azm-courses-server.vercel.app/courses/'),
            },
            {
                path: '/course/details/:id',
                element: <CourseDetails />,
                loader: ({ params }) =>
                    fetch(
                        `https://azm-courses-server.vercel.app/courses/${params.id}`,
                    ),
            },
            {
                path: '/course/details/checkout/:id',
                element: (
                    <PrivateRoute>
                        <CheckOut />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://azm-courses-server.vercel.app/courses/${params.id}`,
                    ),
            },

            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/faq',
                element: <Faq />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
        ],
    },
]);
