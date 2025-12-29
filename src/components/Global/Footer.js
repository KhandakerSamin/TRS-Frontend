'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#03251E] text-white py-12 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col space-y-8">
          {/* Navigation Links */}
          <div 
            className={`flex flex-col gap-4 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <Link href="#about" className="text-base hover:text-white/80 transition-all duration-300">
              About
            </Link>
            <Link href="#venture" className="text-base hover:text-white/80 transition-all duration-300">
              Our Venture
            </Link>
            <Link href="#team" className="text-base hover:text-white/80 transition-all duration-300">
              Team
            </Link>
            <Link href="#review" className="text-base hover:text-white/80 transition-all duration-300">
              Review
            </Link>
            <Link href="#contact" className="text-base hover:text-white/80 transition-all duration-300">
              Contact Us
            </Link>
          </div>

          {/* Social Media Links */}
          <div 
            className={`flex flex-col gap-4 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <Link href="https://www.facebook.com/theramjanshow" className="text-base hover:text-white/80 transition-all duration-300 flex items-center gap-2 group">
              Facebook <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"><ArrowUpRight /></span>
            </Link>
            <Link href="https://www.youtube.com/@TheRamjanShowonYt" className="text-base hover:text-white/80 transition-all duration-300 flex items-center gap-2 group">
              YouTube <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"><ArrowUpRight /></span>
            </Link>
            <Link href="https://www.instagram.com/theramjanshowpodcast?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" className="text-base hover:text-white/80 transition-all duration-300 flex items-center gap-2 group">
              Instagram <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"><ArrowUpRight /></span>
            </Link>
            <Link href="https://www.linkedin.com/in/ramjanboibrikkho/" className="text-base hover:text-white/80 transition-all duration-300 flex items-center gap-2 group">
              LinkedIn <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"><ArrowUpRight /></span>
            </Link>
            <Link href="https://www.tiktok.com/@the.ramjan.show" className="text-base hover:text-white/80 transition-all duration-300 flex items-center gap-2 group">
              TikTok <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"><ArrowUpRight /></span>
            </Link>
          </div>

          {/* Logo and Description */}
          <div 
            className={`flex flex-col gap-4 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <Image
              src="/trs-logo.svg"
              alt="The Ramjan Show"
              width={120}
              height={120}
              className="w-28 h-auto"
            />
            <p className="text-sm text-white/80 leading-relaxed">
              Deep Conversations With Visionaries, Rebels, And Change-Makers. Weekly Episodes That Challenge Perspective And Ignite Curiosity.
            </p>
          </div>

          {/* Copyright and Credit */}
          <div 
            className={`flex flex-col gap-2 text-sm text-white/80 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <p>©Theramjanshow 2026</p>
            <p>Design And Developed By<br /><span className="font-semibold text-white">Onturee.com</span></p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Left: Logo Section */}
          <div 
            className={`flex flex-col gap-4 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <Image
              src="/trs-logo.svg"
              alt="The Ramjan Show"
              width={120}
              height={120}
              className="w-30 h-auto transform hover:scale-110 transition-transform duration-300"
            />
            <div className="">
              
              <p className="text-sm text-white/80 leading-relaxed">
                Deep Conversations With Visionaries, Rebels,<br />
                And Change-Makers. Weekly Episodes That<br />
                Challenge Perspective And Ignite Curiosity.
              </p>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <div 
            className={`flex flex-col gap-3 lg:items-center lg:justify-center transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <Link href="#about" className="text-base hover:text-white/80 hover:translate-x-2 transition-all duration-300">
              About
            </Link>
            <Link href="#venture" className="text-base hover:text-white/80 hover:translate-x-2 transition-all duration-300">
              Our Venture
            </Link>
            <Link href="#team" className="text-base hover:text-white/80 hover:translate-x-2 transition-all duration-300">
              Team
            </Link>
            <Link href="#review" className="text-base hover:text-white/80 hover:translate-x-2 transition-all duration-300">
              Review
            </Link>
            <Link href="#contact" className="text-base hover:text-white/80 hover:translate-x-2 transition-all duration-300">
              Contact Us
            </Link>
          </div>

          {/* Right: Social Media Links */}
          <div 
            className={`flex flex-col gap-3 lg:items-end lg:justify-center transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <Link href="https://www.facebook.com/theramjanshow" className="text-base hover:text-white/80 transition-all duration-300 flex items-center gap-2 group">
              Facebook <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"><ArrowUpRight /></span>
            </Link>
            <Link href="https://www.youtube.com/@TheRamjanShowonYt" className="text-base hover:text-white/80 transition-all duration-300 flex items-center gap-2 group">
              YouTube <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"><ArrowUpRight /></span>
            </Link>
            <Link href="https://www.instagram.com/theramjanshowpodcast?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" className="text-base hover:text-white/80 transition-all duration-300 flex items-center gap-2 group">
              Instagram <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"><ArrowUpRight /></span>
            </Link>
            <Link href="https://www.linkedin.com/in/ramjanboibrikkho/" className="text-base hover:text-white/80 transition-all duration-300 flex items-center gap-2 group">
              LinkedIn <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"><ArrowUpRight /></span>
            </Link>
            <Link href="https://www.tiktok.com/@the.ramjan.show" className="text-base hover:text-white/80 transition-all duration-300 flex items-center gap-2 group">
              TikTok <span className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"><ArrowUpRight /></span>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div 
          className={`border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <p>©Theramjanshow 2026</p>
          <p>Design And Developed By <span className="font-semibold text-white">Onturee.com</span></p>
        </div>
        </div>
      </div>
    </footer>
  );
}
