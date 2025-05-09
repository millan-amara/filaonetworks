import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Router from "../assets/router.png";

function Footer() {
  return (
    <footer id="footer" className="bg-zinc-900 text-white px-5 pt-14 pb-8">
    <div className="flex flex-col md:flex-row justify-around mb-5">
        <div className="w-full md:w-1/4 md:flex md:flex-col md:justify-center md:items-center">
            <p className="brand text-3xl mb-3 text-blue-600 font-semibold">Filao <span className='text-red-600'>Network</span></p>
            <p className="mb-5 text-base">Need a network upgrade? Let's discuss your WiFi or security needs. Fast response guaranteed.</p>
            <p>info@filaonetworks.co.ke</p>
            <p className='mb-6 md:mb-0'>+254 790-034-459</p>
            <a a href={`https://wa.me/+254790034459`} target="_blank" rel="noopener noreferrer" className="border-2 border-blue-600 hover:bg-blue-600 hover:text-white py-2 px-4 rounded-lg font-bold mt-6">Talk to Us</a>
        </div>
        <div className="border-l-2 border-white hidden md:block">
            <p className=""></p>
        </div>
        <div className="mt-10 md:mt-0">
            <img src={Router} alt="" className='h-56 rounded-3xl w-full' />
            <div className='-mt-48 text-center'>
                <p className='text-3xl font-black'>Discount!!</p>
                <p className='text-lg my-4 font-semibold px-2'>Get 10% off your first month</p>
                <a href={`https://wa.me/+254790034459`} target="_blank" rel="noopener noreferrer" className='bg-red-600 w-1/2 px-4 py-1 text-xl rounded-md mt-6 hover:bg-red-700'>Get it</a>
            </div>
            <div className='flex mt-20 text-xl justify-center'>
                <p className='mr-3 bg-zinc-700 rounded-full flex py-2 px-2'><Link className='text-blue-400'><FaFacebookF /></Link></p>
                <p className='mr-3 bg-zinc-700 rounded-full flex py-2 px-2'><Link><FaInstagram /></Link></p>
                <p className='mr-3 bg-green-400 rounded-full flex py-2 px-2'><a href={`https://wa.me/+254790034459`} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a></p>
                <p className='mr-3 bg-zinc-700 rounded-full flex py-2 px-2'><Link><FaTiktok /></Link></p>
            </div>
        </div>
    </div>
    <div className="flex justify-center text-sm">
        <p>&copy; {new Date().getFullYear()} Filao Network Solutions. All rights reserved</p>
    </div>

  </footer>
  )
}

export default Footer