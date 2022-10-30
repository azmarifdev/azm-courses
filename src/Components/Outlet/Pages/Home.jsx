import React from 'react';
import '../../../Styles/Home.css';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import coding from '../../../assets/coding.json';

const Home = () => {
    return (
        <div>
            <section>
                <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
                    <div className="flex flex-wrap items-center mx-auto max-w-7xl">
                        <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                            <div>
                                <div className="relative w-full max-w-lg">
                                    <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                                    <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                                    <div className="relative">
                                        <div>
                                            <Lottie
                                                animationData={coding}
                                                loop={true}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                            <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                                {' '}
                                Skill Path{' '}
                            </span>
                            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                                AZM Courses
                            </h1>
                            <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
                                Everyone’s talking about coding, but where do
                                you start? This path will give you an
                                introduction to the world of code and basic
                                concepts. By the end, you’ll know whether Data
                                Science, Computer Science or Web Development is
                                right for you.
                            </p>
                            <p className="">
                                To start this Skill Path, sign up for PRO
                            </p>
                            <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
                                <div className="mt-3 rounded-lg sm:mt-0">
                                    <Link to="/course">
                                        <button className="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                            Get Course
                                        </button>
                                    </Link>
                                </div>
                                <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                                    <button className="items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                        See features
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
