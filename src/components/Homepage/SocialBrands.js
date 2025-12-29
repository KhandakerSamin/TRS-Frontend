'use client';

import Image from 'next/image';

export default function SocialBrands() {
  const logos = [
    '/social.svg',
    '/social2.svg',
    '/social1.svg',
    '/social2.svg',
    '/social.svg',
    '/social2.svg',
    '/social1.svg',
    '/social2.svg',

  ];

  return (
    <section className="bg-[#C5E8DC] py-8 md:py-12 overflow-hidden">
      <div className="relative w-full">
        {/* Scrolling Container */}
        <div className="flex animate-scroll-infinite">
          {/* First Set of Logos */}
          <div className="flex items-center gap-4 md:gap-12 lg:gap-16 min-w-max pr-4 md:pr-12 lg:pr-16">
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="relative w-12 h-12 md:w-24 md:h-24 lg:w-25 lg:h-25 shrink-0 transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src={logo}
                  alt={`Social brand ${index + 1}`}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
          
          {/* Second Set of Logos (for seamless loop) */}
          <div className="flex items-center gap-4 md:gap-12 lg:gap-16 min-w-max pr-4 md:pr-12 lg:pr-16">
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="relative w-12 h-12 md:w-24 md:h-24 lg:w-28 lg:h-28 shrink-0 transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src={logo}
                  alt={`Social brand ${index + 1}`}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>

          {/* Third Set of Logos (for extra smooth loop) */}
          <div className="flex items-center gap-4 md:gap-12 lg:gap-16 min-w-max pr-4 md:pr-12 lg:pr-16">
            {logos.map((logo, index) => (
              <div
                key={`third-${index}`}
                className="relative w-12 h-12 md:w-24 md:h-24 lg:w-28 lg:h-28 shrink-0 transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src={logo}
                  alt={`Social brand ${index + 1}`}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-infinite {
          animation: scroll-infinite 20s linear infinite;
        }

        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
