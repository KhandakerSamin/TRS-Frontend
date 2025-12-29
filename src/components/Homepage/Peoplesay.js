'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Peoplesay() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showText, setShowText] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef(null);

  const slides = [
    {
      image: '/peoplesay.png',
      title: 'A Podcats With',
      subtitle: 'Cricket Analyst',
      description: 'A Podcast Where Real People Share Real Journeys — Covering Mindset, Growth, Creativity, Failures, And Success Without Filters. A Podcast Where Real People Share Real Journeys — Covering Mindset, Growth, Creativity, Failures, And Success Without Filters. A Podcast Where Real People Share Real Journeys — Covering Mindset, Growth, Creativity, Failures, And Success Without Filters.'
    },
    {
      image: '/what.png',
      title: 'A Podcats With',
      subtitle: 'Cricket Analyst',
      description: 'A Podcast Where Real People Share Real Journeys — Covering Mindset, Growth, Creativity, Failures, And Success Without Filters. A Podcast Where Real People Share Real Journeys — Covering Mindset, Growth, Creativity, Failures, And Success Without Filters. A Podcast Where Real People Share Real Journeys — Covering Mindset, Growth, Creativity, Failures, And Success Without Filters.'
    },
    {
      image: '/peoplesay2.png',
      title: 'A Podcats With',
      subtitle: 'Cricket Analyst',
      description: 'A Podcast Where Real People Share Real Journeys — Covering Mindset, Growth, Creativity, Failures, And Success Without Filters. A Podcast Where Real People Share Real Journeys — Covering Mindset, Growth, Creativity, Failures, And Success Without Filters. A Podcast Where Real People Share Real Journeys — Covering Mindset, Growth, Creativity, Failures, And Success Without Filters.'
    }
  ];

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

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setShowText(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => {
          setIsTransitioning(false);
          setShowText(true);
        }, 600); // Text appears 600ms after slide change
      }, 400);
    }, 5000); // Change slide every 5 seconds

    // Show text for first slide
    setTimeout(() => setShowText(true), 500);

    return () => clearInterval(interval);
  }, [isVisible, slides.length]);

  const getPrevIndex = () => (currentSlide - 1 + slides.length) % slides.length;
  const getNextIndex = () => (currentSlide + 1) % slides.length;

  return (
    <section       id="review"      ref={sectionRef}
      className="bg-[#C5E8DC] py-16 md:py-20  overflow-hidden"
    >
      <div className=" mx-auto max-w-full">
        {/* Header Button */}
        <div 
          className={`text-center mb-8 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <button className="border-2 border-[#003B3B] text-[#003B3B] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#003B3B] hover:text-white transition-all duration-300">
            Why The Ramjan Show?
          </button>
        </div>

        {/* Title */}
        <div 
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
            <span className="text-[#003B3B] font-light">Why People Love</span>
            <br />
            <span className="text-[#003B3B] font-bold">Ramjan Show?</span>
          </h2>
        </div>

        {/* Slider Container */}
        <div 
          className={`relative transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          {/* Carousel Container */}
          <div className="relative w-full h-62.5 md:h-125 lg:h-150 flex items-center justify-center gap-0 md:gap-4 lg:gap-6 overflow-hidden">
            
            {/* Previous Slide (Left) - Only 20-30% visible on the right side */}
            <div className={`hidden md:block absolute left-0 w-[80%] lg:w-[35%] h-full z-10 transition-all duration-700 ease-out ${
              isTransitioning 
                ? 'opacity-0 scale-90 -translate-x-20' 
                : 'opacity-50 scale-100 translate-x-0'
            } hover:opacity-70`}
              style={{ transform: 'translateX(-70%)' }}
            >
              <div className="relative w-full h-full overflow-hidden shadow-lg">
                <Image
                  src={slides[getPrevIndex()].image}
                  alt="Previous slide"
                  fill
                  sizes="70vw"
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Current Slide (Center) - Full width and height */}
            <div className={`relative w-full md:w-[60%] lg:w-[75%] h-full z-20 transition-all duration-700 ease-out ${
              isTransitioning 
                ? 'scale-95 opacity-90' 
                : 'scale-100 opacity-100'
            }`}>
              <div className="relative w-full h-full overflow-hidden shadow-2xl">
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].subtitle}
                  fill
                  sizes="80vw"
                  className="object-cover transition-transform duration-700"
                  priority
                  unoptimized
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Logo Overlay */}
                

                {/* Text Overlay with Delay */}
                <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">
                  <div 
                    className={`text-center text-white transition-all duration-700 ease-out ${
                      showText
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light mb-1 md:mb-2">
                      {slides[currentSlide].title}
                    </h3>
                    <h4 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                      {slides[currentSlide].subtitle}
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Slide (Right) - Only 20-30% visible on the left side */}
            <div className={`hidden md:block absolute right-0 w-[25%] lg:w-[35%] h-full z-10 transition-all duration-700 ease-out ${
              isTransitioning 
                ? 'opacity-0 scale-90 translate-x-20' 
                : 'opacity-50 scale-100 translate-x-0'
            } hover:opacity-70`}
              style={{ transform: 'translateX(70%)' }}
            >
              <div className="relative w-full h-full overflow-hidden shadow-lg">
                <Image
                  src={slides[getNextIndex()].image}
                  alt="Next slide"
                  fill
                  sizes="70vw"
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Description Text Below Carousel */}
          <div className="mt-8 md:mt-12 text-center max-w-5xl mx-auto">
            <p
              className={`text-[#003B3B]/70 text-xs md:text-sm lg:text-base leading-relaxed transition-all duration-700 ease-out ${
                showText
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
            >
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Navigation Dots */}
          <div className="mt-8 flex justify-center gap-2 md:gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setShowText(false);
                  setTimeout(() => {
                    setCurrentSlide(index);
                    setTimeout(() => {
                      setIsTransitioning(false);
                      setShowText(true);
                    }, 600);
                  }, 400);
                }}
                className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-[#003B3B] w-8 md:w-12'
                    : 'bg-[#003B3B]/30 w-2 md:w-3 hover:bg-[#003B3B]/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
