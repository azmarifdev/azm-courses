import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const CheckOut = () => {
    const countries = ['Bangladesh', 'India', 'UK', 'US', 'China'];
    const [menu, setMenu] = useState(false);
    const [paid, setPaid] = useState(false);
    const [country, setCountry] = useState('Bangladesh');

    const changeText = (e) => {
        setMenu(false);
        setCountry(e.target.textContent);
    };

    const checkout = useLoaderData();

    const handlePaid = () => {
        setPaid(true);


        
        let timerInterval;
        Swal.fire({
            title: 'Enrolled processing',
            html: 'Please wait <b></b> milliseconds.',
            timer: 1000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer().querySelector('b');
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft();
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer');
            }
        });

        toast.success('Successfully Paid Course!');
    };

    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="py-10 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
                    <div className="flex flex-col justify-start items-start w-full space-y-9">
                        <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                            <div className="flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                                <div className="flex text-center flex-col justify-center items-start w-full ">
                                    <h2 className="max-w-lg text-center mx-auto mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                        Course Name : {checkout.name}
                                    </h2>
                                    <p className="text-base mx-auto font-semibold leading-none text-gray-600">
                                        Course Price : {checkout.price}
                                    </p>
                                </div>
                                <div className="mt-6 sm:mt-0 xl:my-5 xl:px-20 w-52 sm:w-96 xl:w-auto">
                                    <img
                                        className="rounded-3xl"
                                        src={checkout.picture}
                                        alt="headphones"
                                    />
                                </div>
                                <button className="mt-2 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded px-5">
                                    <div>
                                        <p className="text-base leading-4">
                                            {paid ? 'Paid' : 'Unpaid'}
                                        </p>
                                    </div>
                                </button>
                            </div>

                            <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">
                                <div className="mt-1">
                                    <input
                                        className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>

                                <label className="mt-5 pl-1 text-base leading-4 text-gray-800">
                                    Card details
                                </label>
                                <div className="mt-2 flex-col">
                                    <div className="mb-2">
                                        <input
                                            className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                            type="text"
                                            required
                                            placeholder="0000 1234 6549 15151"
                                        />
                                    </div>
                                    <div className="flex-row gap-2 flex">
                                        <input
                                            className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                            type="text"
                                            required
                                            placeholder="MM/YY"
                                        />
                                        <input
                                            className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                            type="text"
                                            required
                                            placeholder="CVC"
                                        />
                                    </div>
                                </div>

                                <label className="mt-5 pl-1 text-base leading-4 text-gray-800">
                                    Name on card
                                </label>
                                <div className="mt-2 flex-col">
                                    <div>
                                        <input
                                            className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                            type="text"
                                            required
                                            placeholder="Name on card"
                                        />
                                    </div>
                                </div>

                                <label className="mt-5 pl-1 text-base leading-4 text-gray-800">
                                    Country or region
                                </label>
                                <div className="mt-2 flex-col">
                                    <div className="relative">
                                        <button
                                            className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white"
                                            type="text">
                                            {country}
                                        </button>
                                        <svg
                                            onClick={() => setMenu(!menu)}
                                            className={
                                                'transform  cursor-pointer absolute top-4 right-4 ' +
                                                (menu ? 'rotate-180' : '')
                                            }
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3.5 5.75L8 10.25L12.5 5.75"
                                                stroke="#27272A"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <div
                                            className={
                                                'mt-1 absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600 ' +
                                                (menu ? 'block' : 'hidden')
                                            }>
                                            {countries.map((country) => (
                                                <div
                                                    key={country}
                                                    className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                                                    onClick={changeText}>
                                                    {country}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <input
                                        className="border mt-2 rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                        type="text"
                                        placeholder="ZIP"
                                    />
                                </div>

                                <button
                                    disabled={paid}
                                    onClick={handlePaid}
                                    className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                                    <div>
                                        <p className="text-base leading-4">
                                            Pay {checkout.price}
                                        </p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
