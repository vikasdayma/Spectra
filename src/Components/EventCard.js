import React from 'react'
import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";
import { Link } from 'react-router-dom';
const EventCard = ({item}) => {
  return (
    <div className="mt-7 bg-gray-800 flex-wrap text-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-80  mx-auto">
    <div className="flex flex-col">
      <div className="mb-3">
        <img
          src={item.src}
          alt="Event concert with crowd and stage lights"n
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
      <Link to='/eventdetails'><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-full text-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
         {item.buttonHeading}
        </button>
        </Link>  
      </div>
    </div>
  </div>
  )
}

export default EventCard
