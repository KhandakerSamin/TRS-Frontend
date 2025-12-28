'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: 'Ramjan Ali Emon',
      role: 'CEO, Host',
      image: '/team1.png',
    },
    {
      id: 2,
      name: 'Abul Hashem Mohan',
      role: 'Product Designer',
      image: '/team2.png',
    },
    {
      id: 3,
      name: 'Tanvir Sahriar',
      role: 'Video Editor',
      image: '/team3.png',
    },
  ];

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-primary py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          {/* Badge - Slide down with bounce */}
          <div className={`inline-flex mb-8 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`} style={{ transitionDelay: '200ms' }}>
            <span className="inline-flex items-center px-5 py-2 rounded-full 
              border-2 border-action/40 text-action text-sm font-medium
              backdrop-blur-sm">
              Our Team
            </span>
          </div>

          {/* Heading - Zoom in effect */}
          <div className={`mb-6 transition-all duration-1200 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`} style={{ transitionDelay: '400ms' }}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-action">
              Meet The Team
            </h2>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-action mt-2">
              Behind The Mic
            </h2>
          </div>

          {/* Subheading - Fade in */}
          <div className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`} style={{ transitionDelay: '600ms' }}>
            <p className="text-action/70 text-base sm:text-lg max-w-2xl mx-auto">
              The People Who Make Every Conversation Possible — From Ideas<br className="hidden sm:block" />
              To Execution.
            </p>
          </div>
        </div>

        {/* Team Grid - Masonry Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          
          {/* Team Member 1 - Large Left Card */}
          <div 
            className={`relative lg:row-span-2  overflow-hidden group
              transition-all duration-1500 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0 rotate-0' 
                : 'opacity-0 -translate-x-16 -rotate-6'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="relative h-125 lg:h-full min-h-200">
              <Image
                src={teamMembers[0].image}
                alt={teamMembers[0].name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-action/90 via-action/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
                <h3 className="text-white text-2xl lg:text-3xl font-bold mb-2">
                  {teamMembers[0].name}
                </h3>
                <p className="text-white/80 text-lg">
                  {teamMembers[0].role}
                </p>
              </div>
            </div>
          </div>

          {/* Team Member 2 - Top Right Card */}
          <div 
            className={`relative  overflow-hidden group
              transition-all duration-1500 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0 rotate-0' 
                : 'opacity-0 -translate-y-16 rotate-6'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <div className="relative h-70 lg:h-100">
              <Image
                src={teamMembers[1].image}
                alt={teamMembers[1].name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-action/90 via-action/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
                <h3 className="text-white text-xl lg:text-2xl font-bold mb-1">
                  {teamMembers[1].name}
                </h3>
                <p className="text-white/80 text-base lg:text-lg">
                  {teamMembers[1].role}
                </p>
              </div>
            </div>
          </div>

          {/* Team Member 3 - Bottom Right Card */}
          <div 
            className={`relative overflow-hidden group
              transition-all duration-1500 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0 rotate-0' 
                : 'opacity-0 translate-y-16 rotate-6'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            <div className="relative h-70 lg:h-100">
              <Image
                src={teamMembers[2].image}
                alt={teamMembers[2].name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-action/90 via-action/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
                <h3 className="text-white text-xl lg:text-2xl font-bold mb-1">
                  {teamMembers[2].name}
                </h3>
                <p className="text-white/80 text-base lg:text-lg">
                  {teamMembers[2].role}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;
