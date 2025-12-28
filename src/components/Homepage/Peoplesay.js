'use client';

import { useEffect, useState, useRef } from 'react';

const Peoplesay = () => {
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

  const testimonials = [
    {
      id: 1,
      image: '/people1.png',
      quote: 'Feels Honest And Refreshing. Every Episode Gives You Something To Think About Long After It Ends.',
      name: 'Ayman Sadiq',
      title: 'CEO, 10 Minute School',
    },
    {
      id: 2,
      image: '/people2.png',
      quote: 'Feels Honest And Refreshing. Every Episode Gives You Something To Think About Long After It Ends.',
      name: 'Tufiq',
      title: 'Content Creator',
    },
  ];

  return (
    <section ref={sectionRef} className="relative w-full bg-primary pt-16 lg:pt-24 overflow-hidden">
      
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16 px-4 sm:px-6 lg:px-8">
          {/* Badge - Expand from center */}
          <div className={`inline-flex mb-8 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`} style={{ transitionDelay: '200ms' }}>
            <span className="inline-flex items-center px-5 py-2 rounded-full 
              border-2 border-action/40 text-action text-sm font-medium
              backdrop-blur-sm">
              Testimonial
            </span>
          </div>

          {/* Heading - Wave effect */}
          <div className={`mb-4 transition-all duration-1500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '400ms' }}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-action leading-tight">
              What People Say <span className="font-bold">About<br />
              The Ramjan Show</span>
            </h2>
          </div>

          {/* Subheading - Fade in slow */}
          <div className={`transition-all duration-1500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`} style={{ transitionDelay: '700ms' }}>
            <p className="text-action/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Real Feedback From Listeners, Guests, And The Community Who<br className="hidden sm:block" />
              Connect With These Conversations.
            </p>
          </div>
        </div>

        {/* Testimonial Cards Grid - Full Width */}
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`relative overflow-hidden h-100 lg:h-180
                transition-all duration-2000 ease-out ${
                isVisible 
                  ? 'opacity-100 scale-100 blur-0' 
                  : 'opacity-0 scale-95 blur-sm'
              }`}
              style={{ 
                transitionDelay: `${1000 + index * 300}ms`,
              }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-3000 ease-out hover:scale-110"
                style={{
                  backgroundImage: `url('${testimonial.image}')`,
                }}
              />

              {/* Gradient Overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(3, 37, 30, 0) -125.96%, rgba(3, 37, 30, 0.9) 100%)',
                }}
              />

              {/* Content - Slide up from bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-20">
                <div className={`transition-all duration-1800 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                  style={{ 
                    transitionDelay: `${1400 + index * 300}ms`,
                  }}
                >
                  {/* Title */}
                  <h3 className="text-white text-xl lg:text-2xl font-bold mb-4">
                    The Ramjan Show <span className="text-white/90 font-extralight text-xl lg:text-2xl leading-relaxed mb-6">
                    {testimonial.quote}
                  </span>
                  </h3>

                  {/* Quote */}

                  {/* Author Info */}
                  <div className={`transition-all duration-1500 ease-out ${
                    isVisible 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-8'
                  }`}
                    style={{ 
                      transitionDelay: `${1800 + index * 300}ms`,
                    }}
                  >
                    <p className="text-white font-semibold text-base lg:text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-white/70 text-sm lg:text-base">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      
    </section>
  );
};

export default Peoplesay;
