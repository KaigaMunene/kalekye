'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaYoutube, FaSpotify } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { fadeUp, scaleIn, staggerContainer } from '@/components/utils/animation';
import ownYourMic from '../assets/images/own-your-mic.jpeg';
import subscribePodcast from '../assets/images/podcast-1.jpeg';
import bookConsultation from '../assets/images/book-a-consultation.png';

// Animation variants for WorkWithUs component cards
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: IoLogoInstagram,
      href: 'https://www.instagram.com/KMnetwork254',
      color:
        'hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:text-white',
    },
    {
      name: 'Spotify',
      icon: FaSpotify,
      href: 'https://spotify.com/user/kalekyemumo',
      color: 'hover:bg-[#1DB954] hover:text-white',
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      href: 'https://www.youtube.com/@kalekyemumo-kmnetwork',
      color: 'hover:bg-[#FF0000] hover:text-white',
    },
  ];

  return (
    <section className="min-h-screen py-10 bg-brand-primary">
      {/* Container */}
      <div className="container font-forum mx-auto px-6 md:px-12 lg:px-20">
        {/* Headline Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Let&apos;s Create Magic Together
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Collaborate with Kalekye Mumo to unlock your potential, whether it&apos;s hosting an
            event, speaking in public, or creating a voiceover, we&apos;ll help you achieve your
            goals and create something extraordinary.
          </p>
        </div>

        {/* Options Section */}
        <motion.div
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Option 1: Own Your Mic Program */}
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transform transition duration-300 flex flex-col items-center p-6"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src={ownYourMic}
              alt="Own your mic advert"
              className="rounded-md mb-4 w-full max-w-sm object-contain"
            />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">
              Join the Own Your Mic Program
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-4 text-center">
              Discover your voice, own your space, and make an impact through this empowering
              program.
            </p>
            <Link
              href="/own-your-mic"
              className="mt-auto px-6 py-3 bg-brand-gold text-white font-medium rounded-lg hover:bg-brand-secondary transition duration-300"
              aria-label="Join the Own Your Mic Program"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Option 2: Book a Consultation */}
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transform transition duration-300 flex flex-col items-center p-6"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src={bookConsultation.src}
              alt="book a consultation details"
              className="rounded-md mb-4 w-full h-96 max-w-sm object-contain"
            />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">
              Book a Consultation
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-4 text-center">
              Let&apos;s discuss your goals and how we can work together to achieve them.
            </p>
            <Link
              href="#contact"
              className="mt-auto px-6 py-3 bg-brand-gold text-white font-medium rounded-lg hover:bg-brand-secondary transition duration-300"
              aria-label="Book a Consultation"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Option 3: Subscribe to the Podcast */}
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transform transition duration-300 flex flex-col items-center p-6"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src={subscribePodcast.src}
              alt="Lets have a conversation with Kalekye"
              className="rounded-md mb-4 w-full max-w-sm object-contain"
            />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">
              Subscribe to the Podcast
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-4 text-center">
              Stay inspired and informed by subscribing to Kalekye Mumo&apos;s engaging podcast
              series.
            </p>
            <Link
              href="/podcast"
              className="mt-auto px-6 py-3 bg-brand-gold text-white font-medium rounded-lg hover:bg-brand-secondary transition duration-300"
              aria-label="Learn More about the Podcast"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          className="mt-16 rounded-2xl bg-gradient-to-br from-brand-gold/10 via-white to-brand-gold/5 p-8 sm:p-12 lg:p-16 shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="text-center mb-10">
            <h3 className="mb-4 text-2xl font-forum font-bold text-brand-secondary sm:text-3xl">
              Connect With Us
            </h3>
            <div className="mx-auto h-1 w-16 bg-brand-gold mb-4" />
            <p className="text-gray-700 max-w-xl mx-auto">
              Follow us on social media and subscribe to our podcast and YouTube channel for the
              latest updates, insights, and inspiring content.
            </p>
          </div>

          {/* Social Links Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center justify-center rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${social.color}`}
                  variants={scaleIn}
                  aria-label={social.name}
                >
                  <Icon className="mb-3 text-3xl text-gray-700 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-white transition-colors">
                    {social.name}
                  </span>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Podcast Highlight */}
          <motion.div
            className="mt-12 rounded-lg bg-brand-gold/10 p-6 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-gold">
              🎙️ Award-Winning Podcast
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Conversations with Kalekye</span> - Africa&apos;s Best
              Relationship Podcast 2024
            </p>
            <p className="mt-2 text-sm text-gray-600">Available on Spotify and YouTube</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
