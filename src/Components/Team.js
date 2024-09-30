import React from 'react';

const teamMembers = [
  {
    name: "Tushar Jaiswal",
    role: "Webmaster",
    imgSrc: "https://spacema-dev.com/elevate/assets/images/team/1.jpg"
  },
  {
    name: "Kritika Rathore",
    role: "President",
    imgSrc: "https://spacema-dev.com/elevate/assets/images/team/4.jpg"
  },
  {
    name: "Shraddha Sharma",
    role: "Designing Head",
    imgSrc: "https://spacema-dev.com/elevate/assets/images/team/3.jpg"
  },
  {
    name: "Shrey Gupta",
    role: "Vice President",
    imgSrc: "https://spacema-dev.com/elevate/assets/images/team/2.jpg"
  },
  {
    name: "Shreya Chaturvedi",
    role: "Secretary",
    imgSrc: "https://spacema-dev.com/elevate/assets/images/team/5.jpg"
  },
  {
    name: "Priyal Agrawal",
    role: "Marketing Head",
    imgSrc: "https://spacema-dev.com/elevate/assets/images/team/6.jpg"
  },
  {
    name: "Ena Luhadia",
    role: "Content Writer",
    imgSrc: "https://spacema-dev.com/elevate/assets/images/team/7.jpg"
  },
  {
    name: "Harshita Salvi",
    role: "Event Head",
    imgSrc: "https://spacema-dev.com/elevate/assets/images/team/8.jpg"
  }
];

export default function Team() {
  return (
    <section id="our-team" className="bg-black py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8 text-primary">Meet Our Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-zinc-800 rounded-lg shadow-md p-6 my-6 text-center border-2 border-purple-500">
              <img src={member.imgSrc} alt={`Team Member ${index + 1}`} className="w-full rounded-full text-white mb-4"/>
              <h3 className="text-xl font-semibold mb-2 text-yellow-100">{member.name}</h3>
              <p className="text-white">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
