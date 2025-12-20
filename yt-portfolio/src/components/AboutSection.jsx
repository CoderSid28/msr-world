import React from 'react';
import AboutFlipCard from './AboutFlipCard';

const AboutSection = () => {
  const team = [
    {
      name: "Siddharth Mishra",
      role: "Director/ Writer/ Lead Actor",
      frontImage: "/me.jpeg", 
      description: "Visionary Director orchestrating the cinematic language and visual scale of every project at MSR WORLD."
    },
    {
      name: "Rahul mishra",
      role: "Editor / Lead Actor/ Cinematographer",
      frontImage: "/brother.png",
      description: "The rhythmic heartbeat of our films. Rahul specializes in high-energy pacing and precision post-production."
    },
    {
      name: "Saurabh Tiwari",
      role: "Junior Actor",
      frontImage: "/brother3.jpg",
      description: "Performer specializing in method acting and bringing high-stakes characters to life."
    },
    {
      name: "AAditya tiwari",
      role: "Supporting Actor",
      frontImage: "/brother2.jpg",
      description: "Specializes in physical performance and stunt coordination, bringing raw energy to the screen."
    },
    {
      name: "Gaurav Tiwari",
      role: "Channel Analyst/ Producer",
      frontImage: "/brother5.png",
      description: "A versatile talent focused on character depth and supporting narrative structure."
    }
  ];

  return (
    <section className="py-32 bg-base-100 relative overflow-hidden" id="about">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,77,0,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center md:text-left">
          <p className="text-[10px] uppercase tracking-[1em] text-primary font-black mb-4">
            The Production Unit
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-base-content leading-none">
            Our <span className="text-primary text-outline-sm">Cast & Crew</span>
          </h2>
        </div>

        {/* 5-Member Grid Logic */}
        <div className="flex flex-wrap justify-center gap-10 lg:gap-8">
          {team.map((member, index) => (
            <div key={index} className="w-full md:w-[calc(50%-2.5rem)] lg:w-[calc(33.33%-2rem)] max-w-[340px]">
              <AboutFlipCard 
                name={member.name}
                role={member.role}
                frontImage={member.frontImage}
                description={member.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;