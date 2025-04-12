import React from 'react';
import { CheckCircle, Wifi, Camera, Server, Lock } from "lucide-react";


function Services() {
    const services = [
      {
        icon: <Wifi className="w-8 h-8 text-orange-600" />, title: "WiFi & Internet Solutions",
        description: "Home and office WiFi setup, troubleshooting, and mesh networks."
      },
      {
        icon: <Camera className="w-8 h-8 text-orange-600" />, title: "CCTV & Surveillance",
        description: "Secure your space with modern surveillance systems and remote monitoring."
      },
      {
        icon: <Server className="w-8 h-8 text-orange-600" />, title: "Structured Cabling & Networking",
        description: "Professional Ethernet cabling, server rack setup, and network planning."
      },
      {
        icon: <Lock className="w-8 h-8 text-orange-600" />, title: "Smart Systems & Access Control",
        description: "Biometric entry, alarm systems, smart intercoms, and more."
      },
    ];
  
    return (
      <>
      <section className="p-8 bg-white h-auto md:min-h-screen">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-gray-50 hover:bg-gray-100 p-6 rounded shadow text-center">
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-8 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">How We Work</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Consultation</h3>
            <p>We assess your needs and recommend tailored solutions for your space and budget.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Installation</h3>
            <p>Our technicians handle everything from wiring to configuration with minimal disruption.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Support</h3>
            <p>Enjoy reliable post-installation support and system maintenance whenever needed.</p>
          </div>
        </div>
      </section>

      <section className="p-8 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Industries We Serve</h2>
        <div className="grid md:grid-cols-4 gap-4 text-center text-gray-800">
          <p className="bg-gray-50 p-4 rounded shadow">Homes & Apartments</p>
          <p className="bg-gray-50 p-4 rounded shadow">Retail & Offices</p>
          <p className="bg-gray-50 p-4 rounded shadow">Educational Institutions</p>
          <p className="bg-gray-50 p-4 rounded shadow">Warehouses & Industrial</p>
        </div>
      </section>

      <section className="p-8 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Why Clients Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Experienced and certified technicians",
            "Modern equipment and tools",
            "Fast turnaround time",
            "Affordable pricing plans",
            "Reliable post-installation support"
          ].map((item, i) => (
            <p key={i} className="flex items-center">
              <CheckCircle className="text-green-600 mr-2" /> {item}
            </p>
          ))}
        </div>
      </section>


    </>
    );
}

export default Services