'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import Carousel from './ui/Carousel';
import { fadeUp, scaleIn } from '@/components/utils/animation';

/* Images */
import podcastOne from '../assets/images/podcast-1.png';
import podcastTwo from '../assets/images/apva-award.png';
import podcastThree from '../assets/images/bts-onset.png';

import empowerOne from '../assets/images/empower-1.png';
import empowerTwo from '../assets/images/empower-2.png';
import empowerThree from '../assets/images/empower-3.png';

import voiceoverOne from '../assets/images/Grid-1.png';
import voiceoverTwo from '../assets/images/Grid-2.png';
import voiceoverThree from '../assets/images/Grid-3.png';

/* Image groups */
const voiceImages = [
  { src: voiceoverOne.src, alt: 'Event hosting' },
  { src: voiceoverTwo.src, alt: 'Podcasting' },
  { src: voiceoverThree.src, alt: 'Voiceover recording' },
];

const talkImages = [
  { src: podcastOne.src, alt: 'Event hosting' },
  { src: podcastTwo.src, alt: 'Podcasting' },
  { src: podcastThree.src, alt: 'Voiceover recording' },
];

const empowerImages = [
  { src: empowerOne.src, alt: 'Event hosting' },
  { src: empowerTwo.src, alt: 'Podcasting' },
  { src: empowerThree.src, alt: 'Voiceover recording' },
];

export default function About() {
  return (
    <>
      {/* Meet Kalekye Section */}
      <motion.section
        className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-24 xl:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            className="mb-12"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-forum text-brand-secondary sm:text-4xl md:text-5xl">
              Meet Kalekye Mumo
            </h2>
            <div className="mx-auto h-1 w-24 bg-brand-gold" />
          </motion.div>

          <motion.div
            className="rounded-2xl bg-gray-50 p-8 shadow-lg sm:p-12 lg:p-16"
            variants={fadeUp}
          >
            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto">
              With over <span className="font-bold text-brand-gold">15 years</span> in Kenyan
              mainstream media, I&apos;ve earned the title{' '}
              <span className="font-bold text-brand-gold">Queen of Media</span> for my ability to
              captivate audiences through dynamic communication. As a celebrated event host, panel
              moderator, and voiceover artist, I bring professionalism and charisma to every stage
              and microphone. My voice has inspired laughter, sparked change, and created
              unforgettable moments—whether on radio, TV, or live events.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* KM Network Section */}
      <motion.section
        className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-24 xl:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div variants={fadeUp}>
              <h3 className="mb-6 text-3xl font-forum font-bold text-gray-800 sm:text-4xl">
                Empowering Through <span className="text-brand-gold">KM Network</span>
              </h3>
              <div className="mb-6 h-1 w-20 bg-gold" />
              <p className="mb-8 text-lg leading-relaxed text-gray-700">
                Through my consultancy, KM Network, I designed the{' '}
                <span className="font-semibold text-brand-gold">Own Your Mic</span> programs to
                train future communicators.
              </p>

              <Link
                href="/own-your-mic"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-gold px-6 py-3 font-semibold text-brand-secondary transition hover:bg-brand-blackberry hover:text-white"
              >
                Explore Programs <MdOutlineKeyboardArrowRight />
              </Link>
            </motion.div>

            <motion.div className="overflow-hidden rounded-2xl shadow-2xl" variants={scaleIn}>
              <Carousel images={empowerImages} />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Conversations Section */}
      <motion.section
        className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-24 xl:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              className="order-2 overflow-hidden rounded-2xl shadow-2xl lg:order-1"
              variants={scaleIn}
            >
              <Carousel images={talkImages} />
            </motion.div>

            <motion.div className="order-1 lg:order-2" variants={fadeUp}>
              <h3 className="mb-2 text-3xl font-forum font-bold text-gray-800 sm:text-4xl">
                <span className="text-brand-gold">Conversations</span> with Kalekye
              </h3>
              <div className="mb-2 h-1 w-20 bg-brand-gold" />
              <p className="mb-8 text-lg leading-relaxed text-gray-700">
                Africa&apos;s{' '}
                <span className="font-bold text-brand-gold">Best Relationship Podcast 2024</span>,
                amplifying stories that inspire.
              </p>

              <div className="rounded-lg bg-brand-gold/10 p-6">
                <p className="mb-2 text-sm font-semibold text-brand-gold">🏆 AWARD WINNER</p>
                <p className="text-gray-700">Africa&apos;s Best Relationship Podcast 2024</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Voiceover Section */}
      <motion.section
        className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-24 xl:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div variants={fadeUp}>
              <h3 className="mb-6 text-3xl font-forum font-bold text-gray-800 sm:text-4xl">
                <span className="text-brand-gold">Voiceover</span> Excellence
              </h3>
              <div className="mb-6 h-1 w-20 bg-brand-gold" />
              <p className="mb-8 text-lg leading-relaxed text-gray-700">
                Delivering powerful voiceovers for brands locally and internationally.
              </p>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-gold px-6 py-3 font-semibold text-dark transition hover:bg-brand-gold/90"
              >
                Book Voiceover <MdOutlineKeyboardArrowRight />
              </Link>
            </motion.div>

            <motion.div className="overflow-hidden rounded-2xl shadow-2xl" variants={scaleIn}>
              <Carousel images={voiceImages} />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
