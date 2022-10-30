import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { useReactToPrint } from 'react-to-print';
import toast from 'react-hot-toast';
import { TbCurrencyTaka } from 'react-icons/tb';

const CourseDetails = () => {
    const details = useLoaderData();
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        onAfterPrint: () => toast.success('print success'),
    });
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                {details.name}
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                {details.about}
                            </p>
                        </div>
                        <p className="mb-4 text-sm font-bold tracking-widest uppercase">
                            Course Content
                        </p>
                        <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                            <ul className="space-y-3">
                                <li className="flex">
                                    <span className="mr-1">
                                        <svg
                                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52">
                                            <polygon
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </span>
                                    {details.learn1}
                                </li>
                                <li className="flex">
                                    <span className="mr-1">
                                        <svg
                                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52">
                                            <polygon
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </span>
                                    {details.learn2}
                                </li>
                                <li className="flex">
                                    <span className="mr-1">
                                        <svg
                                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52">
                                            <polygon
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </span>
                                    {details.learn3}
                                </li>
                            </ul>
                            <ul className="space-y-3">
                                <li className="flex">
                                    <span className="mr-1">
                                        <svg
                                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52">
                                            <polygon
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </span>
                                    {details.learn4}
                                </li>
                                <li className="flex">
                                    <span className="mr-1">
                                        <svg
                                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52">
                                            <polygon
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </span>
                                    {details.learn5}
                                </li>
                                <li className="flex">
                                    <span className="mr-1">
                                        <svg
                                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52">
                                            <polygon
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </span>
                                    {details.learn6}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                            src={details.picture}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col justify-between lg:flex-row">
                        <div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0">
                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                    You really feel like there's nothing you
                                    can't learn, which in turn builds so much
                                    confidence in your skills and gives the
                                    momentum to keep learning.
                                </h2>
                                <p className="text-base text-gray-700 md:text-lg">
                                    Like a career advisor, we guide you through
                                    each step. You’ll learn the right thing at
                                    the right time, all in one place.
                                </p>
                            </div>
                            <hr className="mb-6 border-gray-300" />
                            <div className="flex items-center">
                                <Link
                                    to=""
                                    aria-label="Play Song"
                                    className="mr-3">
                                    <div className="flex items-center justify-center w-14 h-14 p-1 transition duration-300 transform rounded-full bg-gray-900 shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 hover:scale-110">
                                        <img src={logo} alt="" />
                                    </div>
                                </Link>
                                <div className="flex flex-col">
                                    <div className="text-sm font-semibold">
                                        A. Z. M. Arif
                                    </div>
                                    <div className="text-xs text-gray-700">
                                        AZM Courses
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="px-5 pt-6 pb-5 text-center border border-gray-300 rounded lg:w-2/5">
                            <div className="mb-5 font-semibold">
                                <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                    Ready to kick-start your career?
                                </h2>
                            </div>
                            <div className="flex justify-center w-full mb-3">
                                <Link
                                    to={`/course/details/checkout/${details.id}`}
                                    className="inline-flex items-center justify-center w-full h-12 px-6 border border-slate-500 bg-slate-300 hover:shadow-2xl transition duration-100 ease-in-out delay-50 hover:scale-95 transform font-medium tracking-wide text-white rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                                    <div className="flex items-center">
                                        <div className="font-semibold text-gray-900">
                                            Get Premium Course
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <p className="max-w-md px-5 mb-3 text-xs text-gray-600 sm:text-sm md:mb-5">
                                Learning to code means more than just memorizing
                                syntax. Instead, we help you think like a real
                                programmer.
                            </p>
                            <div className="flex items-center w-full mb-5">
                                <hr className="flex-1 border-gray-300" />
                                <div className="px-3 text-xs text-gray-500 sm:text-sm">
                                    or
                                </div>
                                <hr className="flex-1 border-gray-300" />
                            </div>
                            <button
                                onClick={handlePrint}
                                className="inline-flex items-center justify-center w-full h-12 px-6 border border-slate-500 bg-slate-300 hover:shadow-2xl transition duration-100 ease-in-out delay-50 hover:scale-95 transform font-medium tracking-wide text-white rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                                <div className="flex items-center">
                                    <div className="font-semibold text-gray-900">
                                        Download PDF
                                    </div>
                                </div>
                            </button>
                            <div className="hidden">
                                <div
                                    ref={componentRef}
                                    className="border w-[600px] mx-auto">
                                    <div>
                                        <img
                                            className="h-[400px] mx-auto mt-[50px]"
                                            src={details.picture}
                                            alt=""
                                        />
                                        <div className="ml-10">
                                            <p className="lead py-4 text-2xl">
                                                Courses Name: {details.name}
                                            </p>
                                            <div className="flex">
                                                <p className="text-xl">
                                                    Price: {details.price}
                                                </p>
                                                <TbCurrencyTaka className="h-7 w-5" />
                                            </div>
                                        </div>
                                        <p className="text-end mb-10 mr-5">
                                            Thanks For purchase
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className="max-w-md mt-3 px-5 mb-3 text-xs text-gray-600 sm:text-sm md:mb-5">
                                Technical Literacy, Career Overviews,
                                Programming Concepts, and more...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
