import React from "react";
import Cctv from '../assets/cctv.png';
import Navbar from "./Navbar";

// const HeroSection = ({ el }) => {
//   return (
//     <div className='h-screen md:bg-black flex items-center justify-center'>
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 z-0"
//           style={{ backgroundImage: `url(${Cctv})` }}
//         ></div>

//         <section className="md:text-white flex flex-col items-center text-center md:w-1/2">
//           <div className="text-3xl md:text-4xl font-bold mb-4 md:mb-12"><span>Experience </span><span ref={el} className='auto-type text-amber-500 min-h-[3em]'></span></div>
//           <p className="text-lg mb-6">We provide professional WiFi solutions, CCTV installations, and complete network systems for homes and businesses.</p>
//           <a href={`https://wa.me/+254720973059`} target="_blank" rel="noopener noreferrer" className="bg-amber-600 font-bold text-white px-4 py-2 rounded-sm hover:bg-amber-700 z-30">Get a Free Quote</a>
//         </section>
//       </div>
//   );
// };

const HeroSection = ({ el }) => {
  return (
    <div className="relative min-h-screen md:bg-black md:text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${Cctv})` }}
      ></div>

      <Navbar />
    
    <section className="h-[calc(100vh-30px)] md:text-white flex flex-col justify-center items-center text-center z-20 relative">
      <div className="text-4xl md:text-4xl font-bold mb-4 md:mb-12">
        <span>Better </span>
        <span ref={el} className="auto-type text-amber-500 min-h-[3em]"></span>
      </div>
      <p className="text-lg mb-6 md:w-1/2">
        We provide professional WiFi solutions, CCTV installations, and complete network systems for homes and businesses.
      </p>
      <a
        href={`https://wa.me/+254720973059`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-amber-600 font-bold text-white px-4 py-2 rounded-sm hover:bg-amber-700"
      >
        Get a Free Quote
      </a>
    </section>
    </div>
  );
};


export default HeroSection;
