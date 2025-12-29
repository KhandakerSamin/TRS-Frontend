'use client';

import Image from 'next/image';

export default function ImageSlider() {
  const images = [
    '/peoplesay.png',
    '/peoplesay2.png',
    '/what.png',
    '/peoplesay.png',
    '/what.png',
  ];

  return (
    <section className="overflow-hidden">
      <div className="relative w-full">
        {/* Scrolling Container - Left to Right */}
        <div className="flex animate-scroll-left-to-right">
          {/* First Set of Images */}
          <div className="flex items-center  ">
            {images.map((image, index) => (
              <div
                key={`first-${index}`}
                className="relative w-80 h-60 md:w-80 md:h-60 lg:w-max lg:h-full shrink-0 overflow-hidden transition-transform duration-300 hover:scale-103"
              >
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
          
          {/* Second Set of Images (for seamless loop) */}
          <div className="flex items-center  min-w-max ">
            {images.map((image, index) => (
              <div
                key={`second-${index}`}
                className="relative w-80 h-60 md:w-80 md:h-60 lg:w-180 lg:h-100 shrink-0  overflow-hidden transition-transform duration-300 hover:scale-103"
              >
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Third Set of Images (for extra smooth loop) */}
          <div className="flex items-center  min-w-max pr-6 md:pr-8 lg:pr-10">
            {images.map((image, index) => (
              <div
                key={`third-${index}`}
                className="relative w-80 h-60 md:w-80 md:h-60 lg:w-96 lg:h-72 shrink-0  overflow-hidden  transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left-to-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left-to-right {
          animation: scroll-left-to-right 25s linear infinite;
        }

        .animate-scroll-left-to-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
