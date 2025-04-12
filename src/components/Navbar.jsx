import React from 'react';
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
        <div id="top-nav" className='md:bg-black md:text-white text-sm pt-6 pb-6 px-2 flex justify-center font-semibold items-center' style={{ height: '30px' }}>
            <p className='mr-6 flex items-center'><span className='mr-1'><FaPhone /></span> +254 720-973-059</p>
            <p className='hidden md:flex mr-6 items-center'><span className='mr-1'><MdEmail /></span>info@filaonetworks.co.ke</p>
            <p className='hidden md:flex mr-3 bg-zinc-700 rounded-full py-2 px-2'><Link className='text-lg'><FaFacebookF /></Link></p>
            <p className='hidden md:flex mr-3 bg-zinc-700 rounded-full py-2 px-2'><Link className='text-lg'><FaInstagram /></Link></p>
            <p className='hidden md:flex mr-3 bg-green-500 rounded-full py-2 px-2'><Link className='text-lg'><FaWhatsapp /></Link></p>
            <p className='hidden md:flex mr-3 bg-zinc-700 rounded-full py-2 px-2'><Link className='text-lg'><FaTiktok /></Link></p>
        </div>

        <header className="md:bg-black px-8 py-2 flex justify-between items-center sticky top-0">
            <Link to='/' className='flex flex-col items-center'>
                <p className='brand text-4xl font-semibold text-amber-500'>Filao</p>
                <p className='text-xl font-normal md:text-white'>Network Solutions</p>
            </Link>

            {/* Hamburger toggle */}
            <button className="sm:hidden z-20" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop menu */}
            <nav className="hidden sm:flex text-white font-medium space-x-6 z-50">
                <Link to="/" className="hover:underline hover:underline-offset-2 hover:text-amber-500">Home</Link>
                <Link to="/packages" className="hover:underline hover:underline-offset-2 hover:text-amber-500">Packages</Link>
                <Link to="/services" className="hover:underline hover:underline-offset-2 hover:text-amber-500">Services</Link>
                <Link to="/about" className="hover:underline hover:underline-offset-2 hover:text-amber-500">About</Link>
                <Link to="/contact" className="hover:underline hover:underline-offset-2 hover:text-amber-500">Contact</Link>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
            <nav className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center space-y-2 py-4 sm:hidden z-10">
                <Link to="/" onClick={() => setMenuOpen(false)} className="hover:underline">Home</Link>
                <Link to="/packages" onClick={() => setMenuOpen(false)} className="hover:underline">Packages</Link>
                <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:underline">Services</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:underline">About</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:underline">Contact</Link>
            </nav>
            )}
        </header>
    </>

  )
}

export default Navbar