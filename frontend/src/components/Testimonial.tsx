'use client';

import { motion, type Variants } from 'framer-motion';
import { testimonials } from '@/lib/data/testimonialData';
import CustomSlider from './ui/Slider';
import TestimonialCard, { type Testimonial } from './ui/TestimonialCard';

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const TestimonialSlider = () => {
  return (
    <section className="py-4 md:py-6 w-full bg-brand-bg overflow-hidden font-family-forum">
      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-10 sm:mb-14 max-w-2xl mx-auto">
          <span className="inline-block px-3.5 py-1 mb-3 text-2xl font-semibold underline text-brand-gold">
            TESTIMONIALS
          </span>
          <h2 className="text-sm sm:text-lg md:text-xl font-extrabold text-brand-navy tracking-tight mb-4">
            What people are saying
          </h2>
          <p className="text-base sm:text-lg text-brand-slate font-normal leading-relaxed">
            Discover how our programs empower voices and transform lives across the industry.
          </p>
        </motion.div>

        {/* Testimonial White Card Container */}
        <motion.div
          variants={itemVariants}
          className="relative bg-brand-navy rounded-2xl sm:rounded-3xl border border-gray-100 shadow-xl shadow-brand-navy/5 px-6 sm:px-12 md:px-16 py-8 sm:py-12"
        >
          {/* CustomSlider wrapper with ample internal padding for arrow alignment */}
          <div className="relative w-full">
            <CustomSlider>
              {testimonials.map((member: Testimonial, index: number) => (
                <TestimonialCard key={index} testimonial={member} />
              ))}
            </CustomSlider>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialSlider;
