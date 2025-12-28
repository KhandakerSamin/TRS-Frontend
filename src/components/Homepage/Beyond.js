'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

const Beyond = () => {
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
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-action py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          {/* Badge - Fade in with blur */}
          <div className={`inline-flex mb-8 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
          }`} style={{ transitionDelay: '200ms' }}>
            <span className="inline-flex items-center px-5 py-2 rounded-full 
              border-2 border-white/40 text-white text-sm font-medium
              backdrop-blur-sm">
              Our Venture
            </span>
          </div>

          {/* Heading - Letter by letter reveal effect */}
          <div className={`space-y-2 transition-all duration-1200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '400ms' }}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              Beyond The Podcast
            </h2>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              Building <span className="font-bold">Ideas, Platforms,</span>
            </h2>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              And Communities <span className="font-light">That</span>
            </h2>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white">
              Create <span className="font-bold">Real Impact!</span>
            </h2>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1 - The Ramjan Show (Full Width on Desktop) */}
          <div 
            className={`lg:col-span-2 bg-[#03251E] rounded-3xl p-12 lg:p-20 
              flex items-center justify-center min-h-75 lg:min-h-87.5
              transition-all duration-1500 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0 rotate-0' 
                : 'opacity-0 translate-y-20 rotate-3'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="relative w-full max-w-md animate-pulse-slow">
              <Image
                src="/trs-logo.svg"
                alt="The Ramjan Show"
                width={400}
                height={150}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Card 2 - Boibrikkho */}
          <div 
            className={`bg-[#03251E] rounded-3xl p-12 lg:p-16 
              flex items-center justify-center min-h-70 lg:min-h-80
              transition-all duration-1500 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 -translate-x-20 scale-90'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            <div className="relative w-full max-w-xs animate-tilt">
              <Image
                src="/boibrikkho.svg"
                alt="Boibrikkho"
                width={250}
                height={150}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Card 3 - Marketing Agency */}
          <div 
            className={`bg-[#03251E] rounded-3xl p-12 lg:p-16 
              flex items-center justify-center min-h-70 lg:min-h-80
              transition-all duration-1500 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-20 scale-90'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            <div className="relative w-full max-w-xs animate-tilt-reverse">
              <Image
                src="/merketing.svg"
                alt="Marketing Agency"
                width={250}
                height={150}
                className="w-full h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Beyond;
