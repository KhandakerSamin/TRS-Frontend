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
            linear-gradient(to right, rgba(128, 128, 128, 0.15) 0.5px, transparent 0.5px),
            linear-gradient(to bottom, rgba(128, 128, 128, 0.15) 0.5px, transparent 0.5px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col h-full justify-between py-8">
          {/* Badge at Top */}
          <div className={`flex justify-center transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
          }`} style={{ transitionDelay: '200ms' }}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
              border-2 border-white/40 text-white text-sm font-medium
              backdrop-blur-sm ">
              <Radio className="w-4 h-4 " />
              New Episod Every Week
            </span>
          </div>

          {/* Heading */}
          <div className={`text-center transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '400ms' }}>
            <h1 className="text-5xl text-white leading-tight">
              Where <span className="font-bold">Ideas<br />Resonat!</span>
            </h1>
          </div>

          {/* Image in Middle */}
          <div className={`flex justify-center items-center transition-all duration-1500 ease-out ${
            isLoaded ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-12'
          }`} style={{ transitionDelay: '500ms' }}>
            <div className="relative w-full max-w-xs animate-float">
              <Image
                src="/hero.png"
                alt="Hero"
                width={350}
                height={450}
                className="w-full h-auto"
                priority
                quality={100}
              />
            </div>
          </div>

          {/* Content at Bottom */}
          <div className="space-y-4 text-center">

            {/* Description */}
            <div className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '700ms' }}>
              <p className="text-white/80 text-sm leading-relaxed px-4">
                Deep Conversations With Visionaries, Rebels, And Change-Makers. 
                Weekly Episodes That Challenge Perspective And Ignite Curiosity.
              </p>
            </div>

            {/* Buttons */}
            <div className={`flex flex-row gap-3 justify-center transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '800ms' }}>
              {/* Listen Now Button */}
              <Link
                href="#listen"
                className="group inline-flex items-center justify-center gap-2 
                  bg-white text-action px-6 py-3 rounded-full font-medium text-sm
                  shadow-lg hover:shadow-xl transition-all duration-300
                  transform hover:scale-105"
              >
                <Play className="w-4 h-4 transition-transform duration-300 
                  group-hover:scale-110" />
                Listen Now
              </Link>

              {/* Browse Episode Button */}
              <Link
                href="#episodes"
                className="group inline-flex items-center justify-center gap-2 
                  border-2 border-white text-white px-6 py-3 rounded-full font-medium text-sm
                  backdrop-blur-sm 
                  transition-all duration-300"
              >
                Browse Episode
                <ArrowRight className="w-4 h-4 transition-transform duration-300 
                  group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-row items-center justify-between h-full py-0 gap-8">
          
          {/* Left Content */}
          <div className={`flex-1 space-y-8 text-left transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {/* Badge */}
            <div className={`flex justify-start transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
            }`} style={{ transitionDelay: '200ms' }}>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                border-2 border-white/40 text-white text-sm font-medium
                backdrop-blur-sm ">
                <Radio className="w-4 h-4 " />
                New Episod Every Week
              </span>
            </div>

            {/* Main Heading */}
            <div className={`space-y-2 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '400ms' }}>
              <h1 className="text-7xl text-white leading-tight">
                Where <span className="font-bold">Ideas<br />Resonat!</span>
              </h1>
            </div>

            {/* Description */}
            <div className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '600ms' }}>
              <p className="text-white/80 text-lg max-w-xl leading-relaxed">
                Deep Conversations With Visionaries, Rebels, And Change-Makers. 
                Weekly Episodes That Challenge Perspective And Ignite Curiosity.
              </p>
            </div>

            {/* Buttons */}
            <div className={`flex flex-row gap-4 justify-start transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ transitionDelay: '800ms' }}>
              {/* Listen Now Button */}
              <Link
                href="#listen"
                className="group inline-flex items-center justify-center gap-2 
                  bg-white text-action px-8 py-3.5 rounded-full font-medium text-base
                  shadow-lg hover:shadow-xl transition-all duration-300
                  transform hover:scale-105"
              >
                <Play className="w-5 h-5 transition-transform duration-300 
                  group-hover:scale-110" />
                Listen Now
              </Link>

              {/* Browse Episode Button */}
              <Link
                href="#episodes"
                className="group inline-flex items-center justify-center gap-2 
                  border-2 border-white text-white px-8 py-3.5 rounded-full font-medium text-base
                  backdrop-blur-sm 
                  transition-all duration-300"
              >
                Browse Episode
                <ArrowRight className="w-5 h-5 transition-transform duration-300 
                  group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative flex-1 transition-all duration-1500 ease-out ${
            isLoaded ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-12'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="relative w-full max-w-none animate-float">
              <Image
                src="/hero.png"
                alt="Hero"
                width={500}
                height={600}
                className="w-full h-auto"
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
