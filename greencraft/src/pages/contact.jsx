import React from 'react';
import heroImage from '../assets/landscape-bg.jpg'; // Replace with your background image

export default function Contact() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Form */}
      <form className="relative z-10 w-full max-w-lg bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-green-900 text-center">Get an Instant Quote</h1>

        <div>
          <label className="block font-medium mb-1" htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="service">Service Needed</label>
          <select
            id="service"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select a service</option>
            <option value="lawn-mowing">Lawn Mowing</option>
            <option value="landscaping">Landscaping</option>
            <option value="garden-design">Garden Design</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="message">Additional Details</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Tell us more about your project"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-2 rounded hover:bg-green-700 transition"
        >
          Get Quote
        </button>
      </form>
    </div>
  );
}
