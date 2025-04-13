import React, { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js';
import emailjs from '@emailjs/browser'
import HeroSection from '../components/HeroSection';
import ServiceSection from '../components/ServiceSection';
import PartnersSection from '../components/PartnersSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';

function Home() {

    const el = React.useRef(null);
    const elementsRef = useRef([]);

    const form = useRef();

  
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
    
        return () => {
          currentElementsRef.forEach((el) => {
            if (el) {
              observer.unobserve(el);
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
      <HeroSection el={el} />
      <ServiceSection />
      <PartnersSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm onSubmit={onSubmit} form={form} email={email} message={message} handleChange={handleChange} />
    </>

    );
}

export default Home;