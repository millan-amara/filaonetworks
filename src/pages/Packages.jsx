import React from 'react';
import { motion } from "framer-motion";

const plans = [
    {
      title: "Filao Core",
      speed: "8 Mbps",
      features: [
        "✔ Unlimited Internet",
        "✔ 24/7 Support",
        "✔ Smooth video calls",
        "✔ Ideal for browsing & streaming",
      ],
      price: "KES 1500 / month",
      highlight: false,
    },
    {
      title: "Filao Plus",
      speed: "15 Mbps",
      features: [
        "✔ Unlimited Internet",
        "✔ 24/7 Support",
        "✔ Great for work-from-home & streaming",
        "✔ Supports up to 8 devices",
        "✔ Free Router Installation",
      ],
      price: "KES 2500 / month",
      highlight: true,
    },
    {
      title: "Filao Max",
      speed: "30 Mbps",
      features: [
        "✔ Unlimited Internet",
        "✔ 24/7 Support",
        "✔ Ultra-fast downloads",
        "✔ Perfect for smart homes & gaming",
        "✔ Priority customer support",
      ],
      price: "KES 4500 / month",
      highlight: false,
    },
];
  
const container = {
hidden: {},
visible: {
    transition: {
    staggerChildren: 0.25,
    delayChildren: 0.4,
    },
},
};

const cardVariant = {
hidden: { opacity: 0, y: 40 },
visible: {
    opacity: 1,
    y: 0,
    transition: {
    type: "spring",
    stiffness: 100,
    },
},
};

function Packages() {
  return (
    <>
    <motion.div
      className="my-8 px-4 h-auto md:min-h-screen md:flex flex-col justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      <motion.h1
        className="text-xl md:text-2xl text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get connected from as low as{" "}
        <span className="text-green-500 font-semibold">KES 1500</span> per
        month!
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 packages max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            whileHover={{ scale: 1.03 }}
            className={`${
              plan.highlight
                ? "border-2 border-amber-500 py-8 px-6 rounded-md shadow-lg text-center transform md:scale-105 bg-white relative"
                : "border border-slate-200 py-6 px-4 rounded-md shadow hover:shadow-md text-center"
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded-bl">
                Popular
              </div>
            )}
            <h1 className="text-2xl font-bold mb-2">{plan.title}</h1>
            <p className="text-lg font-semibold text-gray-600 mb-4">
              {plan.speed}
            </p>
            <ul className="mb-4 space-y-2">
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <p className="mt-4 text-xl font-semibold text-green-600">
              {plan.price}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    <section className="my-16 md:mt-16 md:mb-40 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Why Choose Filao?</h2>
        <p className="text-gray-600 mb-6">
            Whether you're working from home, streaming in HD, or managing smart devices, Filao delivers fast, reliable, and affordable internet solutions.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-left">
            <div>✅ No hidden fees or contracts</div>
            <div>✅ Free installation on select plans</div>
            <div>✅ Trusted local support team</div>
            <div>✅ Scalable speeds for your needs</div>
            <div>✅ Modern equipment & coverage</div>
            <div>✅ Seamless upgrades anytime</div>
        </div>
    </section>

    <section className="mt-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
            <div>
            <h3 className="font-semibold text-lg">How long does installation take?</h3>
            <p className="text-gray-600">Most installations are completed within 12-24 hours after sign-up.</p>
            </div>
            <div>
            <h3 className="font-semibold text-lg">Is there a contract?</h3>
            <p className="text-gray-600">No long-term contract is required. You can upgrade or cancel anytime.</p>
            </div>
            <div>
            <h3 className="font-semibold text-lg">Do I get a router?</h3>
            <p className="text-gray-600">Yes, a router is included with the Plus and Max packages. For Core, you can use your own or rent one from us.</p>
            </div>
            <div>
            <h3 className="font-semibold text-lg">Can I upgrade my package later?</h3>
            <p className="text-gray-600">Absolutely! You can switch to a higher or lower package anytime — just contact our support team.</p>
            </div>
            <div>
            <h3 className="font-semibold text-lg">What areas do you cover?</h3>
            <p className="text-gray-600">We currently serve most parts of Nairobi and its surrounding areas. Contact us to check coverage in your location.</p>
            </div>
            <div>
            <h3 className="font-semibold text-lg">What payment options are available?</h3>
            <p className="text-gray-600">You can pay via M-Pesa, bank transfer, or cash. We also offer automated monthly billing options.</p>
            </div>
            <div>
            <h3 className="font-semibold text-lg">What happens if I have issues with my connection?</h3>
            <p className="text-gray-600">Our support team is available 24/7. We'll resolve most issues remotely, and if needed, send a technician to your location.</p>
            </div>
            <div>
            <h3 className="font-semibold text-lg">Is the internet truly unlimited?</h3>
            <p className="text-gray-600">Yes! All our packages offer uncapped data with no hidden limits or throttling.</p>
            </div>
        </div>
    </section>


    <section className="mt-16 px-4 max-w-4xl mx-auto text-center h-auto md:min-h-screen md:flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-6">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-4 shadow rounded">
            <p>"Excellent service! Internet has been stable for months. Highly recommend Filao!"</p>
            <p className="mt-2 text-right font-semibold">– James, Embakasi</p>
            </div>
            <div className="bg-white p-4 shadow rounded">
            <p>"Very responsive support and fast installation. Great value for money."</p>
            <p className="mt-2 text-right font-semibold">– Mercy, Utawala</p>
            </div>
        </div>

        <section className="my-8 md:mt-24 py-8 bg-amber-100 text-center rounded-lg mx-0 md:mx-24">
            <h2 className="text-2xl font-bold mb-2">Ready to Upgrade Your Internet?</h2>
            <p className="mb-4 text-gray-700">Contact us today or sign up to get connected in 24 hours.</p>
            <button className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700">Get Started</button>
        </section>
    </section>







    </>
  );
}

export default Packages;
