import React from 'react';
import { useLoaderData } from 'react-router-dom';

import CourseCardDetails from './CourseCardDetails';
import CourseCategory from './CourseCategory';

const Course = () => {
    const allCourse = useLoaderData();
    return (
        <div className="">
            <div className="min-h-screen relative bg-gray-100 flex">
                <div className="h-screen relative hidden md:block">
                    <div className="sidebar fixed z-50 top-0 w-[3.35rem] overflow-hidden hover:w-60 hover:shadow-lg bg-gray-900">
                        <div className="flex h-screen bg-gray-900 top-0 flex-col justify-between pt-2 pb-6">
                            <div className="my-auto">
                                <CourseCategory allCourse={allCourse} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto">
                    <div className="">
                        <div className="grid grid-cols md:grid-cols-3 mx-auto p-12">
                            <CourseCardDetails allCourse={allCourse} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
