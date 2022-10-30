import React from 'react';
import { Link } from 'react-router-dom';

const CourseCardDetails = ({ allCourse }) => {
    // console.log(allCourse);
    return (
        <>
            {allCourse.map((course, id) => (
                <Link key={id} to={`/course/details/${course.id}`}>
                    <div className="flex w-full">
                        <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white hover:bg-slate-300 shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:shadow-gray-900 md:hover:-translate-x-16 md:hover:-translate-y-8">
                            <img
                                className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                                src={course.picture}
                                alt="blog"
                            />
                            <div className="px-6 mx-auto py-8">
                                <Link
                                    class="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
                                    to={`/course/details/${course.id}`}>
                                    <span class="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                                        <svg
                                            class="h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </span>

                                    <span class="text-sm font-medium transition-all group-hover:mr-4">
                                        Details
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
};

export default CourseCardDetails;
