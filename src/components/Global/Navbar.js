'use client';

import { Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [rotationCount, setRotationCount] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Our Venture', href: '#venture' },
    { name: 'Team', href: '#team' },
    { name: 'Review', href: '#review' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className="bg-action border-b border-[#00514100]  top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className={`shrink-0 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <Link href="/" className="flex items-center">
              <Image
                src="/trs-logo.svg"
                alt="TRS Logo"
                width={120}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-white font-medium text-sm lg:text-base 
                  relative group transition-all duration-500 
                  hover:text-white ${
                  isLoaded 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-5'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white 
                  transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* YouTube Button - Desktop */}
          <div className={`hidden md:block transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
          }`}
            style={{ transitionDelay: '500ms' }}
          >
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="opener northerner"
              onMouseEnter={() => setRotationCount(prev => prev + 1)}
              className="group relative flex items-center gap-2 bg-white text-action 
                px-6 py-2.5 rounded-full font-medium text-sm lg:text-base
                transition-all duration-300 border overflow-hidden
                "
            >
              {/* Background gradient animation */}
              <span className="absolute inset-0 bg-linear-to-r from-transparent via-primary/20 to-transparent
                -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              
              {/* Play icon with animation */}
              <Play 
                className="relative z-10 transition-transform duration-1000"
                style={{ transform: `rotate(${rotationCount * 360}deg)` }}
              />
              
              {/* Text */}
              <span className="relative z-10">Watch On YouTube</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md 
                focus:outline-none 
                transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-white rounded-full transform transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-2.5' : ''
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-white rounded-full transform transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 bg-action/95 backdrop-blur-sm">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-white font-medium
                hover:bg-primary/40 hover:text-white
                transition-all duration-300 transform ${
                isOpen 
                  ? 'translate-y-0 opacity-100' 
                  : '-translate-y-4 opacity-0'
              }`}
              style={{ 
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms' 
              }}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile YouTube Button */}
          <Link
            href="https://youtube.com"
            target="_blank"
            rel="opener noreferrer"
            onClick={() => setIsOpen(false)}
            className={`flex items-center justify-center gap-2 mx-4 mt-4
              bg-white text-action px-6 py-3 rounded-full font-medium
              shadow-md hover:shadow-xl transform hover:scale-105 
              transition-all duration-300 border-2 border-gray-200 ${
              isOpen 
                ? 'translate-y-0 opacity-100' 
                : '-translate-y-4 opacity-0'
            }`}
            style={{ 
              transitionDelay: isOpen ? `${navLinks.length * 50}ms` : '0ms' 
            }}
          >
             {/* Play icon with animation */}
              <Play 
                className="relative z-10 transition-transform duration-1000"
                style={{ transform: `rotate(${rotationCount * 360}deg)` }}
              />
            Watch On YouTube
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
