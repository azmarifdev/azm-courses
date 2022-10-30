import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Share/Footer';
import Navbar from '../Components/Share/Navbar';

const Layouts = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layouts;
