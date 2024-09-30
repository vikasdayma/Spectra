import React from 'react';

const About = () => (
  <section className="text-gray-600 body-font bg-black">
    <h1 className='text-5xl text-center mt-0 font-bold text-white'>About Us</h1>
    <div className="container px-5 py-24 mx-auto flex flex-wrap mt-6">
      <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <img alt="feature" className="object-cover object-center h-full w-full" src="AboutUs.jpg" />
      </div>
      <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
        {[
          {
            title: "Who We Are",
            description: "We are a vibrant community of students passionate about organizing and participating in both cultural and technical events. Our club fosters creativity, innovation, and collaboration among students from all fields.",
            imgSrc: "https://cdn-icons-png.freepik.com/256/921/921347.png?ga=GA1.1.2115079256.1724344357&semt=ais_hybrid"
          },
          {
            title: "Technical Excellence",
            description: "Our club promotes technical learning by hosting hackathons, coding competitions, workshops, and seminars, encouraging students to enhance their skills and engage in cutting-edge technologies.",
            imgSrc: "https://cdn-icons-png.freepik.com/256/11646/11646983.png?ga=GA1.1.2115079256.1724344357&semt=ais_hybrid"
          },
          {
            title: "Cultural Engagement",
            description: "We celebrate diversity through various cultural events that highlight the talents and traditions of our members, fostering a sense of belonging and community.",
            imgSrc: "https://cdn-icons-png.flaticon.com/128/17812/17812310.png"
          },
          {
            title: "Collaboration Opportunities",
            description: "Our club encourages collaboration among students, providing platforms for teamwork and partnerships in projects, enhancing both technical and soft skills.",
            imgSrc: "https://cdn-icons-png.flaticon.com/128/5371/5371017.png"
          },
          {
            title: "Skill Development",
            description: "We focus on continuous skill development by offering workshops and mentoring sessions to help members grow in their respective fields.",
            imgSrc: "https://cdn-icons-png.flaticon.com/128/10068/10068898.png"
          },
          {
            title: "Networking Events",
            description: "We organize networking events to connect students with industry professionals, providing insights into career opportunities and industry trends.",
            imgSrc: "https://cdn-icons-png.flaticon.com/128/2981/2981035.png"
          }
        ].map((item, index) => (
          <div key={index} className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <img src={item.imgSrc} alt={`icon${index}`} />
            </div>
            <div className="flex-grow">
              <h2 className="text-lg text-white font-medium title-font mb-2">{item.title}</h2>
              <p className="leading-relaxed text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
