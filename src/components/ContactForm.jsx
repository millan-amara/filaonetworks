import React from 'react'

function ContactForm({ onSubmit, form, email, message, handleChange }) {
  return (
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
  )
}

export default ContactForm