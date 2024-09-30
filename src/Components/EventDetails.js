import React from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const EventDetails = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="w-11/12 h-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Event Details Section */}
        <div className="lg:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">Tech Innovation Summit 2023</h1>
            <p className="text-gray-300 mb-6">
              Join us for a groundbreaking event showcasing the latest in technology and innovation. 
              Industry leaders and visionaries will converge to discuss emerging trends, network, and explore 
              cutting-edge advancements in artificial intelligence, blockchain, cloud computing, and more. 
              Whether you're a tech professional, entrepreneur, or enthusiast, this event offers unparalleled 
              insights into the future of the tech world.
            </p>

            {/* Event Details */}
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <FaCalendarAlt className="mr-2" />
                <span>September 15-17, 2023</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FaClock className="mr-2" />
                <span>9:00 AM - 6:00 PM (PST)</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FaMapMarkerAlt className="mr-2" />
                <span>San Francisco Convention Center</span>
              </div>
            </div>

            {/* More Information */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-white mb-4">About the Event</h2>
              <p className="text-gray-300 mb-6">
                The Tech Innovation Summit is a three-day event bringing together the brightest minds in the 
                technology industry. The event will feature keynote speeches from top innovators, hands-on 
                workshops, and interactive panel discussions that cover the most pressing challenges and 
                opportunities in tech today.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Key Speakers</h2>
              <ul className="text-gray-300 mb-6 list-disc list-inside">
                <li>John Doe - CEO of FutureTech Inc.</li>
                <li>Jane Smith - Head of AI at Innovate Labs</li>
                <li>Michael Johnson - CTO of Blockchain Enterprises</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mb-4">Event Schedule</h2>
              <ul className="text-gray-300 mb-6 list-disc list-inside">
                <li>Day 1: Keynotes and Panel Discussions</li>
                <li>Day 2: Workshops and Networking</li>
                <li>Day 3: Hands-on Demos and Closing Remarks</li>
              </ul>
            </div>
          </div>
          
          <button
            className="mt-8 px-8 py-4 bg-blue-600 text-white font-bold rounded-full text-xl transition-all duration-300 transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label="Register for Tech Innovation Summit 2023"
          >
            Register Now
          </button>
        </div>
        
        {/* Image Section */}
        <div className="lg:w-1/2 relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Tech Innovation Summit"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;