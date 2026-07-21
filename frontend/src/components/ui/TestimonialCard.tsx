'use client';

import { motion } from 'framer-motion';
import Image, { type StaticImageData } from 'next/image';

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
    <div className="px-4 font-family-fraunces">
      <motion.div
        className="bg-cream shadow-xl rounded-xl p-4 flex flex-col items-center text-center min-h-87.5 md:min-h-100 lg:min-h-112.5"
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="text-lg font-medium mb-4 text-brand-peach">{testimonial.program}</h1>
        <div className="relative w-full h-48 mb-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
        <p className="text-base italic text-white flex-1">{`"${testimonial.description}"`}</p>
        <div className="mt-4 text-white">
          <p className="font-bold">{testimonial.name}</p>
          <p className=" text-sm">{testimonial.role}</p>
        </div>
      </motion.div>
    </div>
  );
}
