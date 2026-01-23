'use client';

import { motion, type Variants } from 'framer-motion';
import { testimonials } from '@/lib/data/testimonialData';
import CustomSlider from './ui/Slider';
import TestimonialCard, { type Testimonial } from './ui/TestimonialCard';

// Animation variants for Testimonial component
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      staggerChildren: 0.1,
    },
  },
};

const TestimonialSlider = () => {
  return (
    <section className="pt-4 pb-12 w-full h-auto font-fraunces overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <motion.h2
          className="text-4xl font-bold mb-4 text-dark"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          Testimonials
        </motion.h2>
        <motion.h4
          className="mb-4 font-medium text-lg"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          What people are saying about our programs
        </motion.h4>
        <motion.div variants={cardVariants} initial="hidden" animate="visible">
          <CustomSlider>
            {testimonials.map((member: Testimonial, index: number) => (
              <TestimonialCard key={index} testimonial={member} />
            ))}
          </CustomSlider>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
