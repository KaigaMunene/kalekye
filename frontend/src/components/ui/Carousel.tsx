'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import type { CarouselImage } from '@/types/carousel';

interface CarouselProps {
  images: CarouselImage[];
  autoSlideInterval?: number;
}

export default function Carousel({ images, autoSlideInterval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Ensure index is always within bounds
  const safeIndex = images && images.length > 0 ? Math.min(currentIndex, images.length - 1) : 0;

  const handleNext = useCallback(() => {
    if (!images || images.length === 0 || !isMounted) return;
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images, isMounted]);

  const handlePrev = useCallback(() => {
    if (!images || images.length === 0 || !isMounted) return;
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images, isMounted]);

  // Set mounted flag on client side only
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  // Auto slide - only start after component is mounted
  useEffect(() => {
    if (!isMounted || !images || images.length === 0) return;

    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(handleNext, autoSlideInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [handleNext, autoSlideInterval, images, isMounted]);

  // Guard against empty images
  if (!images || images.length === 0) return null;

  return (
    <section
      aria-roledescription="carousel"
      className="relative mx-auto w-full max-w-5xl overflow-hidden"
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${safeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full shrink-0 aspect-video bg-black">
            <Image
              src={image.src}
              alt={image.alt}
              width={1024}
              height={1024}
              priority={index === 0}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 1024px"
            />
          </div>
        ))}
      </div>

      {/* Previous */}
      <button
        onClick={handlePrev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white transition hover:bg-black"
      >
        &#8249;
      </button>

      {/* Next */}
      <button
        onClick={handleNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white transition hover:bg-black"
      >
        &#8250;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => {
              if (isMounted) {
                setCurrentIndex(index);
              }
            }}
            className={`h-3 w-3 rounded-full transition-colors ${
              safeIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
