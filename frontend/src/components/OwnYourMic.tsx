'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import hostProgram from '../assets/images/host-program.jpeg';
import publicSpeaking from '../assets/images/public-speaking.jpeg';
import voiceOver from '../assets/images/voiceover.jpeg';
import VideoSlider from './ui/VideoGallery';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

// Animation variants for Programs component
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

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

const OwnYourMicPrograms = () => {
  return (
    <div className="font-family-fraunces py-12 bg-brand-bg">
      {/* Hero Section */}
      <motion.section
        id="own-your-mic"
        className="text-dark text-center px-4 sm:px-6 lg:px-8"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="mx-auto mb-3 max-w-4xl text-2xl text-brand-navy font-extrabold leading-tight text-balance sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
          Master the Art of Communication with{' '}
          <span className="text-brand-gold"> Own Your Mic </span>
        </h1>
        <p className="mx-auto max-w-3xl px-2 pb-4 text-brand-navy text-sm font-light leading-relaxed text-balance sm:px-0 sm:text-base md:text-lg lg:text-xl">
          Empowering Individuals to Host, Speak, and Deliver with Confidence
        </p>
      </motion.section>

      {/* Feature Section */}
      <motion.section
        className=" px-6"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto">
          <h2 className="mb-2 text-center text-xl text-brand-navy font-bold leading-tight text-balance sm:text-2xl md:text-3xl lg:text-4xl">
            Programs Overview
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 bg-brand-gold sm:mb-8" />
          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Host Program */}
            <motion.div
              className="bg-brand-navy shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={hostProgram}
                alt="Host Program - Own Your Mic"
                className="rounded-md mb-4 w-full max-w-sm object-contain"
                width={400}
                height={300}
              />
              <h3 className="text-xl font-bold text-brand-peach mb-4">The Host Program</h3>
              <p className="">
                Learn how to host events, podcasts, and webinars with confidence and impact.
              </p>
            </motion.div>

            {/* Public Speaking Program */}
            <motion.div
              className="bg-brand-navy shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={publicSpeaking}
                alt="Public Speaking Program - Own Your Mic"
                className="rounded-md mb-4 w-full max-w-sm object-contain"
                width={400}
                height={300}
              />
              <h3 className="text-xl font-bold text-brand-peach mb-4">
                The Public Speaking Program
              </h3>
              <p className="">
                Build confidence, clarity, and impact in your speeches no matter your speaking
                engagement. Overcome stage fear and connect with any audience.
              </p>
            </motion.div>

            {/* Voiceover Program */}
            <motion.div
              className="bg-brand-navy shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={voiceOver}
                alt="Voiceover Program - Own Your Mic"
                className="rounded-md mb-4 w-full max-w-sm object-contain"
                width={400}
                height={300}
              />
              <h3 className="text-xl font-bold text-brand-peach mb-4">The Voiceover Program</h3>
              <p className="">
                Discover techniques to create compelling voiceover work. Tailored for commercials,
                documentaries, and infomercials.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="text-black text-center py- px-6"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto mt-8 mb-8">
          <p className="text-2xl md:text-4xl font-normal mb-2">
            Ready to Transform Your Communication Skills?
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfrCvQgpZ4f4d5LEjgYm0eSZT-4-fhslhTlX3B0-RqWOf2CKA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-brand-gold text-white font-medium rounded-lg hover:bg-gold-dark transition duration-300"
            aria-label="Join Own Your Mic Programs"
          >
            Join Own Your Mic Programs <MdOutlineKeyboardArrowRight className="inline-block ml-2" />
          </a>
        </div>
      </motion.section>

      {/* Promotional Video Section */}
      <motion.section
        className=" px-2"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto">
          <h2 className="text-xl md:text-2xl italic text-brand-navy text-center underline">
            SEE OUR PROGRAMS IN ACTION
          </h2>
          <div className="w-full">
            <VideoSlider />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default OwnYourMicPrograms;
