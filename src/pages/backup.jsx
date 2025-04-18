import React, { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js';
import emailjs from '@emailjs/browser'
import {FaUserCircle} from 'react-icons/fa'
import { motion } from "framer-motion";
import { Users, DollarSign, Clock, Wrench } from "lucide-react";
import Cctv from '../assets/cctv.png';
import Router from '../assets/router.png';
import Wifi from '../assets/wifi.png';
import Biometric from '../assets/biometric.png';
import Smartphone from '../assets/smartphone.png';
import DahuaImage from '../assets/images/dahua.png';
import HikvisionImage from '../assets/images/hikvision.png';
import MikrotikImage from '../assets/images/mikrotik.png';
import TplinkImage from '../assets/images/tplink.png';
import UbImage from '../assets/images/ub.png';
import BoschImage from '../assets/images/bosch.jpeg';
import CommImage from '../assets/images/commscope.png';
import DlinkImage from '../assets/images/dlink.png';
import NetgearImage from '../assets/images/netgear.png';

function Home() {

    const el = React.useRef(null);
    const elementsRef = useRef([]);
    const timelineRef = useRef([])
    const form = useRef();

    const features = [
      {
        icon: <Users className="text-orange-500 w-8 h-8 mb-2" />,
        title: "Professional Team",
        desc: "Trained technicians with hands-on experience in networking & security.",
      },
      {
        icon: <DollarSign className="text-orange-500 w-8 h-8 mb-2" />,
        title: "Affordable Pricing",
        desc: "Fair, transparent rates with no hidden costs.",
      },
      {
        icon: <Clock className="text-orange-500 w-8 h-8 mb-2" />,
        title: "Fast Turnaround",
        desc: "Quick site visits, installations and support when you need it.",
      },
      {
        icon: <Wrench className="text-orange-500 w-8 h-8 mb-2" />,
        title: "Support & Maintenance",
        desc: "Ongoing help and technical support for all systems we install.",
      },
    ];
  
    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Better Coverage', 'Beter Security', 'Better Speeds', 'Better Access'],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
      });
  
      return () => typed.destroy();
    }, []);

    useEffect(() => {
        const currentElementsRef = elementsRef.current;
        const currentTimelineRef = timelineRef.current;
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('anime');
            }
          });
        });
        currentElementsRef.forEach((el) => {
          if (el) {
            observer.observe(el);
          }
        });
    
        const observertimeline = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('timeline');
            }
          });
        });
        currentTimelineRef.forEach((el) => {
          if (el) {
            observertimeline.observe(el);
          }
        });
    
        return () => {
          
            currentElementsRef.forEach((el) => {
              if (el) {
                observer.unobserve(el);
              }
            });
          
          
            currentTimelineRef.forEach((el) => {
              if (el) {
                observertimeline.unobserve(el);
              }
            });
         
        };
      }, []);

      const [formData, setFormData] = useState({
        email: '',
        message: '',
      });

      const {email,message} = formData;

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      const onSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_pm4kpg1', 'template_qdgkji2', form.current, {
          publicKey: 'FfC2jgC2scsnjnV9p'
        })
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          setFormData({
            email: '',
            message: '',
          })
        })
        .catch((error) => {
          console.log('FAILED...', error);
        });

        
      }

    return (
    <>
      <div className='h-screen md:bg-black flex items-center justify-center'>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 z-0"
          style={{ backgroundImage: `url(${Cctv})` }}
        ></div>

        <section className="md:text-white flex flex-col items-center text-center md:w-1/2">
          <div className="text-3xl md:text-4xl font-bold mb-4 md:mb-12"><span>Experience </span><span ref={el} className='auto-type text-amber-500 min-h-[3em]'></span></div>
          <p className="text-lg mb-6">We provide professional WiFi solutions, CCTV installations, and complete network systems for homes and businesses.</p>
          <button className="bg-amber-600 font-bold text-white px-4 py-2 rounded-sm hover:bg-amber-700 z-50">Get a Free Quote</button>
        </section>
      </div>

{/* our services */}
      <section className="-mt-48 md:mt-0 px-4 text-center h-auto md:h-screen flex flex-col md:justify-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className='border border-slate-300 py-4 rounded-2xl'>
            <img src={Wifi} alt="WiFi" className="mx-auto h-20 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-amber-500">WiFi & Internet</h3>
            <p>Reliable home and business WiFi installation and optimization.</p>
          </div>
          <div className='border border-slate-300 py-4 rounded-2xl'>
            <img src={Cctv} alt="CCTV" className="mx-auto h-20 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-amber-500">CCTV & Surveillance</h3>
            <p>Secure your property with our advanced CCTV systems.</p>
          </div>
          <div className='border border-slate-300 py-4 rounded-2xl'>
            <img src={Router} alt="Networking" className="mx-auto h-20 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-amber-500">Networking Solutions</h3>
            <p>Structured cabling, routers, switches & network optimization.</p>
          </div>
          <div className='border border-slate-300 py-4 rounded-2xl'>
            <img src={Biometric} alt="Networking" className="mx-auto h-20 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-amber-500">Access Control & Smart Systems</h3>
            <p>Biometric access, smart intercoms, alarm system integration.</p>
          </div>
          <div className='border border-slate-300 py-4 rounded-2xl'>
            <img src={Smartphone} alt="Networking" className="mx-auto h-20 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-amber-500">Consulting & Maintenance</h3>
            <p>Free site surveys, network audits, monthly/annual support contracts.</p>
          </div>
        </div>
      </section>

        {/* partners */}
      <section id='stacks' className='flex md:min-h-screen items-center py-8'>
        <div className='flex flex-col w-full justify-center py-10'> 
          <h1 className='text-2xl md:text-3xl font-semibold text-center py-2 mb-8' >We integrate with the Best</h1>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-8 md:gap-y-8 justify-items-center'>
            <img src={HikvisionImage} alt="" className='w-1/2 md:w-1/3' />
            <img src={TplinkImage} alt="" className='w-1/2 md:w-1/3' />
            <img src={BoschImage} alt="" className='w-3/4 md:w-1/2' />
            <img src={DlinkImage} alt="" className='w-1/2 md:w-1/3' />
            <img src={MikrotikImage} alt="" className='w-3/4 md:w-1/2' />
            <img src={NetgearImage} alt="" className='w-3/4 md:w-1/2' />
            <img src={UbImage} alt="" className='w-3/4 md:w-1/2' />
            <img src={CommImage} alt="" className='w-3/4 md:w-1/2' />
            <img src={DahuaImage} alt="" className='w-1/2 md:w-1/3' />
          </div>
        </div>
      </section>

{/* Why choose us */}
      <section className="py-16 px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl p-6 shadow hover:shadow-md transition duration-300 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <div className="flex flex-col items-center">
                {item.icon}
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bonus Stat Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-3xl font-bold text-orange-600">99.9%</p>
            <p className="text-gray-600 text-sm">Network Uptime</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-600">1,000+</p>
            <p className="text-gray-600 text-sm">Installations</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-600">24/7</p>
            <p className="text-gray-600 text-sm">Support</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-orange-600">4.9★</p>
            <p className="text-gray-600 text-sm">Customer Rating</p>
          </div>
        </motion.div>
      </section>


        {/* Testimonials */}
      <section className="py-16 px-4 bg-white text-center h-auto md:h-screen md:flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8">What Clients Say</h2>
          <div className="max-w-3xl mx-auto">
            <div className='flex flex-col justify-center items-center'>
              <FaUserCircle className='h-12 w-8 mb-4' />
              <blockquote className="italic text-gray-700 mb-6">"Filao Networks transformed our office network. Great service!"</blockquote>
              <p className="font-semibold text-amber-600">— James, Business Owner</p>
            </div>
            <div className='flex flex-col justify-center items-center mt-10'>
              <FaUserCircle className='h-12 w-8 mb-4' />
              <blockquote className="italic text-gray-700 mb-6">"Fast and reliable WiFi at home now, thanks to the team."</blockquote>
              <p className="font-semibold text-amber-600">— Sarah, Home User</p>
            </div>
          </div>
      </section>

        {/* Contact Us */}
      <section id="contact">
        <div className="contact">
          <h2>Get in Touch</h2>
          <p>Have any questions about Building Websites?</p>
          <form ref={form} onSubmit={onSubmit} id="contact-form" className="contact-form px-3">
            <div className="mb-7">
                <label htmlFor="email" className="mb-3">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={handleChange} required className="focus:outline-none focus:ring-2 appearance-none text-sm" />
            </div>

            <div className="mb-5">
                <label htmlFor="message" className="mb-3">Message:</label>
                <textarea id="message" name="message" value={message} onChange={handleChange} rows="4" required className="focus:outline-none focus:ring-2 appearance-none text-sm"></textarea>
            </div>
            <div>
                <button id="contact-button" type="submit" className="flex bg-amber-600 hover:bg-amber-700 text-white w-full py-2 rounded-md items-center justify-center">Send Message</button>
            </div>
            
          </form>
        </div>
      </section>
    </>

    );
}

export default Home;