'use client';

import { motion } from 'framer-motion';
import type { StaticImageData } from 'next/image';

export interface Testimonial {
  name: string;
  role: string;
  image: StaticImageData;
  program: string;
  description: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="px-4">
      <motion.div
        className="bg-cream shadow-xl rounded-xl p-6 flex flex-col items-center text-center min-h-[350px] md:min-h-[400px] lg:min-h-[450px]"
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="text-lg font-semibold mb-4 text-gold">{testimonial.program}</h1>
        <img
          src={testimonial.image.src}
          alt={testimonial.name}
          className="w-full h-48 object-contain mb-4"
        />
        <p className="text-base italic text-gray-700 flex-1">{`"${testimonial.description}"`}</p>
        <div className="mt-4">
          <p className="font-bold text-gray-900">{testimonial.name}</p>
          <p className="text-gray-500 text-sm">{testimonial.role}</p>
        </div>
      </motion.div>
    </div>
  );
}
