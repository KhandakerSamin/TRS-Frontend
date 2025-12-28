'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

const Newspaper = () => {
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

  const newspapers = [
    { id: 1, image: '/news1.svg' },
    { id: 2, image: '/news2.svg' },
    { id: 3, image: '/news3.svg' },
    { id: 4, image: '/news4.svg' },
    { id: 5, image: '/news5.svg' },
  ];

  return (
    <section ref={sectionRef} className="relative w-full bg-white py-16 lg:pt-24 pb-12 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Heading - Flip animation */}
          <div className={`mb-4 transition-all duration-1200 ease-out ${
            isVisible ? 'opacity-100 rotateX-0' : 'opacity-0 rotateX-90'
          }`} style={{ 
            transitionDelay: '200ms',
            transformStyle: 'preserve-3d',
          }}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-action ">
              Recognized And Highlighted Across Platforms
            </h2>
          </div>

          {/* Subheading with bold text */}
          <div className={`transition-all duration-1200 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`} style={{ transitionDelay: '400ms' }}>
            <h3 className="text-3xl sm:text-4xl font-extralight lg:text-5xl text-action ">
              For Meaningful <span className="font-semibold">Conversations And Impactful Storytelling.</span>
            </h3>
          </div>
        </div>

        {/* Newspaper Logos Grid */}
        <div className="max-w-6xl mx-auto">
          
          {/* First Row - 4 Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 mb-4 lg:mb-8">
            {newspapers.slice(0, 4).map((newspaper, index) => (
              <div 
                key={newspaper.id}
                className={`flex items-center justify-center transition-all duration-1500 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  transitionDelay: `${600 + index * 150}ms`,
                }}
              >
                <div className="relative w-full h-20 lg:h-24 transition-all duration-500 animate-float-delayed">
                  <Image
                    src={newspaper.image}
                    alt={`Newspaper ${newspaper.id}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 1 Logo (Centered) */}
          <div className="flex justify-center">
            <div 
              className={`flex items-center justify-center w-full max-w-xs transition-all duration-1500 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-20 scale-90'
              }`}
              style={{ 
                transitionDelay: '1200ms',
              }}
            >
              <div className="relative w-full h-20 lg:h-24 transition-all duration-500 animate-float-delayed-long">
                <Image
                  src={newspapers[4].image}
                  alt="Newspaper 5"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newspaper;
