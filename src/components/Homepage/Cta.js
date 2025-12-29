'use client';

import { useEffect, useRef, useState } from 'react';

export default function Cta() {
  const [isVisible, setIsVisible] = useState(false);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = 'theramjanshow@gmail.com';
    const subject = 'Inquiry from The Ramjan Show Website';
    const body = 'Hello,\n\nI would like to get in touch regarding...';
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_self');
  };

  return (
    <section 
      ref={ctaRef}
      className="bg-[#C5E8DC] py-20 px-4 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl text-center">
        {/* Let's Connect Button */}
        <div 
          className={`mb-12 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <button className="border-2 border-[#003B3B] text-[#003B3B] px-8 py-3 rounded-full text-sm font-medium hover:bg-[#003B3B] hover:text-white transition-all duration-300 hover:scale-105">
            Let&apos;s Connect
          </button>
        </div>

        {/* Main Heading */}
        <div 
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
            <span className="text-action font-light">Have A </span>
            <span className="text-[#003B3B] font-bold">Question, Idea,</span>
            <br />
            <span className="text-action font-light">or </span>
            <span className="text-[#003B3B] font-bold">Collaboration</span>
            <span className="text-action font-light"> In Mind?</span>
          </h2>
          <button 
            onClick={handleEmailClick}
            className="text-[#003B3B] font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl inline-block border-[#003B3B] pb-2 mt-4 hover:scale-105 transition-transform duration-300 cursor-pointer bg-transparent border-0 border-b-4"
            aria-label="Send email to The Ramjan Show"
          >
            Email Us!
          </button>
        </div>
      </div>
    </section>
  );
}
