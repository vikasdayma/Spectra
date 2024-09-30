import React from 'react';
import './Features.css';

const featureData = [
  {
    icon: "fas fa-brain",
    title: "Neuro-Link AI",
    description: "Interface directly with our advanced AI using cutting-edge neural technology.",
    color: "text-pink-400"
  },
  {
    icon: "fas fa-shield-alt",
    title: "Quantum Encryption",
    description: "Unbreakable security powered by quantum entanglement protocols.",
    color: "text-pink-800"
  },
  {
    icon: "fas fa-vr-cardboard",
    title: "Holo-Projection",
    description: "Experience fully immersive 3D holographic environments.",
    color: "text-purple-500"
  },
  {
    icon: "fas fa-network-wired",
    title: "Nano-Network",
    description: "Microscopic nodes form an intelligent, self-healing network infrastructure.",
    color: "text-green-400"
  },
  {
    icon: "fas fa-bolt",
    title: "Fusion Power",
    description: "Harness the power of stars with our miniaturized fusion reactors.",
    color: "text-yellow-400"
  },
  {
    icon: "fas fa-dna",
    title: "Bio-Enhancement",
    description: "Augment your physical and mental capabilities with programmable nanobots.",
    color: "text-red-500"
  }
];

const Features = () => (
  <section className="bg-black text-white mt-0 py-20 relative overflow-hidden cyber-grid">
    <div className="container mx-auto px-0">
      <h2 className="text-4xl font-bold text-center mb-12 purple-text glitch-effect" data-text="Here Are Our Expertise">
        Here Are Our Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureData.map((feature, index) => (
          <div key={index} className="feature-card rounded-lg p-6 floating bg-black">
            <div className={`text-5xl mb-4 ${feature.color} feature-icon`}>
              <i className={feature.icon}></i>
            </div>
            <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
