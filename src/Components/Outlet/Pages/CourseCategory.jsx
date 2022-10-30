import React from 'react';
import { Link } from 'react-router-dom';

const CourseCategory = ({ allCourse }) => {
    // console.log(allCourse);
    return (
        <div>
            <ul className="mt-6 space-y-2 tracking-wide">
                {allCourse.map((course, id) => (
                    <li className="min-w-max">
                        <Link
                            key={id}
                            to={`/course/details/${course.id}`}
                            className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                                    // fill-rule="evenodd"
                                    d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                                    // clip-rule="evenodd"
                                />
                                <path
                                    className="fill-current text-sky-600 group-hover:text-cyan-600"
                                    d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                                />
                            </svg>
                            <span className="group-hover:text-gray-300">
                                {course.name}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseCategory;
