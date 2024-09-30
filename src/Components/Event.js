import React from "react";

import EventCard from "./EventCard";

const Event = () => {

  const eventData=[
    {
      src:"https://imgs.search.brave.com/zPQj2ythnAtPPhwPK9HGpTy7gy2bPKb6tFq_hITwStE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by92aXN1YWxzLWlu/dGVyYWN0aXZlLWV2/ZW50LWZlYXR1cmVz/XzExMDQ3NjMtMjQ2/OTEuanBnP3NpemU9/NjI2JmV4dD1qcGc",
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
      src:"https://imgs.search.brave.com/b2Uo78rdBYYlbnWzsDhOR97nFwD3zZil1X2Wie7i0y0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/Yml6YmFzaC5jb20v/ZmlsZXMvYmFzZS9i/aXpiYXNoL2J6Yi9p/bWFnZS8yMDE2LzA0/L2FsaWVud2FyZV8x/NjlfMjU2OTQ5MjU0/Nl9vXzMucG5nP2F1/dG89Zm9ybWF0LGNv/bXByZXNzJnE9NzAm/dz00MDA",
      heading:"Summer Music Festival 2023",
      date:"August 15, 2023",
      time:"7:00 PM - 11:00 PM",
      location:"Central Park, New York City",
      quote:" Join us for an unforgettable night of music under the stars, featuring top artists from around the world!",
      buttonHeading:" Register Now",
     },
    ]
  return (
    <div className="bg-black">
     <h2 className="text-3xl font-bold text-center text-white mb-8 text-primary">Events</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
    {
      eventData.map((item)=>{
        return  <EventCard item={item}     />
             
           
      })
   
    }
       </div>

   <br />
   <br />
   <br />
   <br />   <br />
   <br />
   
    </div>
  );
};

export default Event;