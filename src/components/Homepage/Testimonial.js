'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Testimonial() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  // Auto-slide for mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const testimonials = [
    {
      id: 1,
      quoteBold: 'The Ramjan Show',
      quoteNormal: ' Feels Honest And Refreshing. Every Episode Gives You Something To Think About Long After It Ends.',
      name: 'Ayman Sadiq',
      role: 'CEO, 10 Minuteschool',
      image: '/people1.png',
    },
    {
      id: 2,
      quoteBold: 'The Ramjan Show',
      quoteNormal: ' Feels Honest And Refreshing. Every Episode Gives You Something To Think About Long After It Ends.',
      name: 'Turjo',
      role: 'Cassiest Graizer',
      image: '/people2.png',
    },
  ];

  return (
    <section 
      id="testimonial" 
      ref={sectionRef} 
      className="bg-[#C5E8DC] pt-20 overflow-hidden"
    >
      <div className="mx-auto ">
        {/* Badge */}
        <div 
          className={`text-center mb-8 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <span className="inline-flex items-center px-5 py-2 rounded-full 
            border-2 border-action/40 text-action text-sm font-medium
            backdrop-blur-sm">
            Testimonial
          </span>
        </div>

        {/* Title */}
        <h2 
          className={`text-3xl md:text-4xl text-action lg:text-7xl max-w-4xl mx-auto font-light text-center mb-4 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          What People Say <span className="font-bold text-action">About The Ramjan Show</span>
        </h2>

        {/* Subtitle */}
        <p 
          className={`text-base md:text-lg text-center text-gray-600 max-w-3xl mx-auto mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          Real Feedback From Listeners, Guests, And The Community Who Connect With These Conversations.
        </p>

        {/* Testimonial Cards */}
        <div className="relative overflow-hidden">
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full shrink-0 relative h-125 overflow-hidden"
                >
                  {/* Background Image */}
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  
                  {/* Dark Overlay */}
                  <div 
                    className="absolute inset-0" 
                    style={{ background: 'linear-gradient(180deg, rgba(3, 37, 30, 0) -125.96%, rgba(3, 37, 30, 0.9) 100%)' }}
                  ></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    {/* Quote */}
                    <p className="text-white text-lg font-light mb-6 leading-relaxed">
                      <span className="font-bold">{testimonial.quoteBold}</span>
                      {testimonial.quoteNormal}
                    </p>
                    
                    {/* Name & Role */}
                    <div>
                      <h3 className="text-white text-xl font-bold mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-white w-6' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative h-100 md:h-187.5 overflow-hidden group transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              {/* Background Image */}
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
                unoptimized
              />
              
              {/* Dark Overlay */}
              <div 
                className="absolute inset-0" 
                style={{ background: 'linear-gradient(180deg, rgba(3, 37, 30, 0) -125.96%, rgba(3, 37, 30, 0.9) 100%)' }}
              ></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                {/* Quote */}
                <p className="text-white text-lg md:text-xl lg:text-2xl font-light mb-6 leading-relaxed">
                  <span className="font-bold">{testimonial.quoteBold}</span>
                  {testimonial.quoteNormal}
                </p>
                
                {/* Name & Role */}
                <div>
                  <h3 className="text-white text-lg md:text-xl font-semibold mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
