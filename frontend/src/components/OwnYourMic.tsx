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
    <div className="font-forum py-12 bg-white">
      {/* Hero Section */}
      <motion.section
        id="own-your-mic"
        className="text-dark text-center px-6 bg-white"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          Master the Art of Communication with Own Your Mic
        </h1>
        <p className="text-lg md:text-xl pb-4 font-light max-w-3xl mx-auto">
          Empowering Individuals to Host, Speak, and Deliver with Confidence
        </p>
      </motion.section>

      {/* Feature Section */}
      <motion.section
        className="pb-12 px-6"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Programs Overview</h2>
          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Host Program */}
            <motion.div
              className="bg-white shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={hostProgram}
                alt="Host Program - Own Your Mic"
                className="rounded-md mb-4 w-full max-w-sm object-contain bg-red-500"
                width={400}
                height={300}
              />
            </motion.div>

            {/* Public Speaking Program */}
            <motion.div
              className="bg-white shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
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
              <h3 className="text-xl font-bold text-dark mb-4">The Public Speaking Program</h3>
              <p className="text-gray-600">
                Build confidence, clarity, and impact in your speeches no matter your speaking
                engagement. Overcome stage fear and connect with any audience.
              </p>
            </motion.div>

            {/* Voiceover Program */}
            <motion.div
              className="bg-white shadow-lg rounded-lg overflow-hidden p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
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
              <h3 className="text-xl font-bold text-dark mb-4">The Voiceover Program</h3>
              <p className="text-gray-600">
                Discover techniques to create compelling voiceover work. Tailored for commercials,
                documentaries, and infomercials.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="text-black text-center py-6 px-6"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-normal mb-6">
            Ready to Transform Your Communication Skills?
          </h2>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfrCvQgpZ4f4d5LEjgYm0eSZT-4-fhslhTlX3B0-RqWOf2CKA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gold text-white font-medium rounded-lg hover:bg-gold-dark transition duration-300"
            aria-label="Join Own Your Mic Programs"
          >
            Join Own Your Mic Programs <MdOutlineKeyboardArrowRight className="inline-block ml-2" />
          </a>
        </div>
      </motion.section>

      {/* Promotional Video Section */}
      <motion.section
        className="py-6 px-6"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-dark text-center mb-6">
            See the Programs in Action
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
