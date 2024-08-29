import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex flex-col items-center  justify-center p-6 mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full ">
        <h1 className="text-3xl font-bold" style={{ color: '#1F1E24' }}>Contact Us</h1>
        <p className="text-gray-700 mb-6">Feel free to reach out to us with any questions or comments. We’d love to hear from you!</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              style={{ borderColor: '#6556CD', boxShadow: '0 0 0 2px rgba(101, 86, 205, 0.2)' }}
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              style={{ borderColor: '#6556CD', boxShadow: '0 0 0 2px rgba(101, 86, 205, 0.2)' }}
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              style={{ borderColor: '#6556CD', boxShadow: '0 0 0 2px rgba(101, 86, 205, 0.2)' }}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 font-semibold rounded-lg"
            style={{ backgroundColor: '#6556CD', color: '#ffffff', borderColor: '#6556CD' }}
          >
            Send Message
          </button>
        </form>
      </div>
      <i
        onClick={() => navigate(-1)}
        class="absolute top-[5%] left-[-25%] hover:text-[#6556CD] text-xl font-semibold text-zinc-400 ri-arrow-left-line"
      ></i>
    </div>
  );
};

export default ContactUs;
