import React from 'react';
import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaBars, FaPhone } from "react-icons/fa6";
import { FaTiktok, FaWhatsapp, FaTimes, FaInstagram, FaExternalLinkAlt } from "react-icons/fa";
import Logo from '../assets/logo.png';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === "/";

  return (
    <>
        {/* <div id="top-nav" className='md:bg-black md:text-white text-sm pt-6 pb-6 px-2 flex justify-center font-semibold items-center z-0' style={{ height: '30px' }}> */}
        <div id="top-nav" className={`text-sm pt-6 pb-6 px-2 flex justify-center font-semibold text-black md:text-white items-center z-20 relative ${
            isHome ? "bg-white md:bg-transparent" : "md:bg-black bg-white"
        }`} style={{ height: '30px' }}>

            <p className='mr-6 flex items-center'><span className='mr-1'><FaPhone /></span> +254 790-034-459</p>
            <p className='hidden md:flex mr-6 items-center'><span className='mr-1'><MdEmail /></span>info@filaonetworks.co.ke</p>
            <p className='hidden md:flex mr-3 bg-zinc-700 rounded-full py-2 px-2'><Link className='text-lg'><FaFacebookF /></Link></p>
            <p className='hidden md:flex mr-3 bg-zinc-700 rounded-full py-2 px-2'><Link className='text-lg'><FaInstagram /></Link></p>
            <p className='hidden md:flex mr-3 bg-green-500 rounded-full py-2 px-2'><a href={`https://wa.me/+254790034459`} target="_blank" rel="noopener noreferrer" className='text-lg'><FaWhatsapp /></a></p>
            <p className='hidden md:flex mr-3 bg-zinc-700 rounded-full py-2 px-2'><Link className='text-lg'><FaTiktok /></Link></p>
        </div>

        {/* <header className="md:bg-black bg-white px-8 py-2 flex justify-between items-center sticky top-0 z-0"> */}
        {/* <header className="bg-transparent px-8 py-2 flex justify-between items-center sticky top-0 z-30 backdrop-blur-sm"> */}
        <header
            className={`px-8 py-2 flex justify-between items-center sticky top-0 z-30 text-black md:text-white transition-all duration-300 ${
                isHome ? "bg-white md:bg-transparent backdrop-blur-sm" : "md:bg-black bg-white"
            }`}
        >

            <Link to='/' className='flex flex-col items-center'>
                <img src={Logo} className='w-20' />
                {/* <p className='brand text-4xl font-semibold text-amber-500'>Filao</p>
                <p className='text-xl font-normal md:text-white'>Network Solutions</p> */}
            </Link>

            {/* Hamburger toggle */}
            <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-3xl focus:outline-none"
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Desktop menu */}
            <nav className="hidden sm:flex text-white font-medium space-x-6 z-50">
                <Link to="/" className="hover:underline hover:underline-offset-2 hover:text-red-600">Home</Link>
                <Link to="/packages" className="hover:underline hover:underline-offset-2 hover:text-red-600">Packages</Link>
                <Link to="/services" className="hover:underline hover:underline-offset-2 hover:text-red-600">Services</Link>
                <Link to="/about" className="hover:underline hover:underline-offset-2 hover:text-red-600">About</Link>
                <Link to="/contact" className="hover:underline hover:underline-offset-2 hover:text-red-600">Contact</Link>
            </nav>

            {/* Mobile menu */}
            <div 
                className={`fixed top-0 right-0 h-screen z-50 w-3/4 max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                } md:hidden`}
            >
                <button 
                    onClick={() => setMenuOpen(false)} 
                    className="absolute top-4 right-4 text-3xl"
                    >
                    <FaTimes />
                </button>

                <div className="flex flex-col mx-auto p-6 mt-10 text-lg">
                    <Link to="/" onClick={() => setMenuOpen(false)} className="hover:underline py-2 mb-2">Home</Link>
                    <Link to="/packages" onClick={() => setMenuOpen(false)} className="hover:underline py-2 mb-2">Packages</Link>
                    <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:underline py-2 mb-2">Services</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:underline py-2 mb-2">About</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:underline py-2">Contact</Link>
                </div>

                {/* Contact Support section */}
                <div className="absolute bottom-24 left-0 w-full text-center text-sm text-slate-600 px-4">
                    <div className="mb-1 font-semibold text-black">Talk to Us</div>
                    <div className="mb-1">
                        <a href={`https://wa.me/+254790034459`} target="_blank" rel="noopener noreferrer" className="font-medium flex justify-center items-center">
                        <span className='text-green-700 mr-1'>Chat on WhatsApp</span>
                        <FaExternalLinkAlt />
                        </a>
                    </div>
                    <div>
                        <span className="font-medium">Email:</span> <span className="">support@filaonetworks.co.ke</span>
                    </div>
                </div>
            </div>
            {menuOpen && (
            <div 
                className="fixed top-0 left-0 w-full h-screen bg-black opacity-50 z-40 md:hidden"
                onClick={() => setMenuOpen(false)}
            ></div>
            )}
        </header>

    </>

  )
}

export default Navbar