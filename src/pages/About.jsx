import React from 'react'

function About() {
    return (
    <>
      <section className="p-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="mb-4">NetSecure Solutions is dedicated to providing fast, secure, and scalable networking services tailored to each client’s needs. With a team of certified professionals and years of experience, we deliver reliable connectivity and top-tier security systems.</p>
          <img src="/about-us.jpg" alt="Our team" className="rounded shadow-lg" />
        </div>
      </section>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p>To simplify connectivity and security by offering cutting-edge, affordable solutions that keep homes and businesses connected, protected, and efficient.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p>To be the most trusted local provider of networking, security, and smart tech systems, redefining how people live, work, and stay safe.</p>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">What Sets Us Apart</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Locally based, fast-response team</li>
          <li>Certified technicians with hands-on experience</li>
          <li>Partnerships with top global brands</li>
          <li>Tailored solutions for homes, offices, and industrial spaces</li>
          <li>Ongoing support and system maintenance</li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Meet the Team</h3>
        <p>We’re a small but skilled team of engineers, installers, and support experts committed to delivering quality and trust. Each team member is trained, certified, and passionate about tech.</p>
        <img src="/team-placeholder.jpg" alt="Meet the team" className="rounded shadow mt-4" />
      </div>

    </>
    );
}

export default About