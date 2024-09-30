import React from "react";
import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";

const evantData=[
  {
    src:"https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    heading:"Summer Music Festival 2023",
    date:"August 15, 2023",
    time:"7:00 PM - 11:00 PM",
    location:"Central Park, New York City",
    quote:" Join us for an unforgettable night of music under the stars, featuring top artists from around the world!",
    buttonHeading:" Register Now",
   },{
    src:"https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    heading:"Summer Music Festival 2023",
    date:"August 15, 2023",
    time:"7:00 PM - 11:00 PM",
    location:"Central Park, New York City",
    quote:" Join us for an unforgettable night of music under the stars, featuring top artists from around the world!",
    buttonHeading:" Register Now",
   },{
    src:"https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    heading:"Summer Music Festival 2023",
    date:"August 15, 2023",
    time:"7:00 PM - 11:00 PM",
    location:"Central Park, New York City",
    quote:" Join us for an unforgettable night of music under the stars, featuring top artists from around the world!",
    buttonHeading:" Register Now",
   }]
const EventCard = () => {
  return (
    <>
    {
      evantData.map((item)=>{
        return  <div className="mt-7 bg-gray-900 flex-wrap text-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-72  mx-auto">
      <div className="flex flex-col">
        <div className="mb-3">
          <img
            src={item.src}
            alt="Event concert with crowd and stage lights"
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-1">{item.heading}</h2>
          <div className="flex items-center text-sm mb-1">
            <FiCalendar className="mr-1" />
            <span>{item.date}</span>
          </div>
          <div className="flex items-center text-sm mb-1">
            <FiClock className="mr-1" />
            <span>{item.time}</span>
          </div>
          <div className="flex items-center text-sm mb-2">
            <FiMapPin className="mr-1" />
            <span>{item.location}</span>
          </div>
          <p className="text-sm mb-3">
          {item.quote}
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-full text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
           {item.buttonHeading}
          </button>
        </div>
      </div>
    </div>
    
      })
   
    }
    </>
  );
};

export default EventCard;