'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Play, ArrowRight, Radio } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
  }, []);

  return (
    <div className="h-[calc(100vh-5rem)] w-full bg-action relative overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, gray 0.1px, transparent 0.5px),
            linear-gradient(to bottom, gray 0.1px, transparent 0.5px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full py-12 lg:py-0 gap-12 lg:gap-8">
          
          {/* Left Content */}
          <div className={`flex-1 space-y-8 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {/* Badge */}
            <div className={`inline-flex transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
            }`} style={{ transitionDelay: '200ms' }}>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                border-2 border-white/40 text-white text-sm font-medium
                backdrop-blur-sm ">
                <Radio className="w-5 h-5 " />
                New Episode Every Week
              </span>
            </div>

            {/* Main Heading */}
            <div className={`space-y-4 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '400ms' }}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Where Ideas<br />
                Resonat
              </h1>
            </div>

            {/* Description */}
            <div className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '600ms' }}>
              <p className="text-white/80 text-base sm:text-lg max-w-xl leading-relaxed">
                Deep Conversations With Visionaries, Rebels, And Change-Makers. 
                Weekly Episodes That Challenge Perspective And Ignite Curiosity.
              </p>
            </div>

            {/* Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '800ms' }}>
              {/* Listen Now Button */}
              <Link
                href="#listen"
                className="group inline-flex items-center justify-center gap-2 
                  bg-white text-action px-8 py-3.5 rounded-full font-medium
                  shadow-lg hover:shadow-xl transition-all duration-300
                  transform hover:scale-105"
              >
                <Play className="w-5 h-5  transition-transform duration-300 
                  group-hover:scale-110" />
                Listen Now
              </Link>

              {/* Browse Episode Button */}
              <Link
                href="#episodes"
                className="group inline-flex items-center justify-center gap-2 
                  border-2 border-white text-white px-8 py-3.5 rounded-full font-medium
                  backdrop-blur-sm 0 
                  transition-all duration-300"
              >
                Browse Episode
                <ArrowRight className="w-5 h-5 transition-transform duration-300 
                  group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className={` relative transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="relative w-full">
              <Image
                src="/hero.png"
                alt="Hero"
                width={500}
                height={500}
                className="flex justify-end items-center"
                priority
                quality={100}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
