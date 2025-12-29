'use client';

import { useEffect, useState, useRef } from 'react';

const About = () => {
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
        threshold: 0.3, // Trigger when 30% of the section is visible
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

  return (
    <section id="about" ref={sectionRef} className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/what.png')`,
        }}
      />

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(3, 37, 30, 0) -125.96%, rgba(3, 37, 30, 0.9) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl pt-70">
            {/* Badge - Slide in from left */}
            <div className={`inline-flex mb-6 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`} style={{ transitionDelay: '200ms' }}>
              <span className="inline-flex items-center px-5 py-2 rounded-full 
                border-2 border-white/40 text-white text-sm font-medium
                backdrop-blur-sm ">
                About Us
              </span>
            </div>

            {/* Heading - Scale up and fade in */}
            <div className={`mb-6 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`} style={{ transitionDelay: '400ms' }}>
              <h2 className="text-4xl  sm:text-5xl lg:text-6xl font-extralight  text-white ">
                What Is The<br />
              </h2>
                <h2 className="text-4xl pt-4  sm:text-5xl lg:text-6xl font-bold  text-white ">Ramjan Show?</h2>
            </div>

            {/* Description - Slide in from bottom */}
            <div className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '600ms' }}>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                A Podcast Where Real People Share Real Journeys — Covering<br />
                Mindset, Growth, Creativity, Failures, And Success Without Filters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


