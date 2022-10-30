import React from 'react';
import Lottie from 'lottie-react';
import errorPage from '../../assets/errorPage.json';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className="grid h-screen place-content-center bg-white dark:bg-gray-900">
                <div className="flex flex-col">
                    <div>
                        <Lottie animationData={errorPage} loop={true} />
                    </div>
                    <Link
                        to="/"
                        className="mt-6 inline-block rounded w-36 mx-auto bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring">
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
