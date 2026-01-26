'use client';
import Link from 'next/link';
import logo from '../assets/images/icon_white.png';
import { IoLogoInstagram } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa6';

const Footer = () => {
  const socials = [
    {
      href: 'https://linkedin.com/in/kalekyemumo',
      icon: FaLinkedin,
      hover: 'hover:bg-[#0A66C2] hover:text-white', // LinkedIn blue
    },
    {
      href: 'https://www.youtube.com/@kalekyemumo-kmnetwork',
      icon: FaYoutube,
      hover: 'hover:bg-[#FF0000] hover:text-white', // YouTube red
    },
    {
      href: 'https://spotify.com/user/kalekyemumo',
      icon: FaSpotify,
      hover: 'hover:bg-[#1DB954] hover:text-white', // Spotify green
    },
    {
      href: 'https://instagram.com/kalekyemumo',
      icon: IoLogoInstagram,
      hover: 'hover:bg-[#F56040] hover:text-white', // Instagram pink/red
    },
    {
      href: 'https://twitter.com/KalekyeMumo',
      icon: FaSquareXTwitter,
      hover: 'hover:bg-black hover:text-white', // X/Twitter black
    },
  ];

  return (
    <footer className="bg-brown text-white py-12 font-forum">
      <div className="container mx-auto px-6">
        {/* Top Section - Grouped Links */}
        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center md:items-start gap-12 mb-10">
          {/* Company */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold underline mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:opacity-70 hover:underline transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-70 hover:underline transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-70 hover:underline transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold underline mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/own-your-mic" className="hover:opacity-70 hover:underline transition">
                  Own Your Mic
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="hover:opacity-70 hover:underline transition">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:opacity-70 hover:underline transition">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold underline mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:opacity-70 hover:underline transition"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:opacity-70 hover:underline transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-500 opacity-20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          {/* Logo */}
          <img src={logo.src} alt="Kalekye Mumo logo" className="w-14 h-14 object-contain" />

          {/* Copyright */}
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Kalekye Mumo. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ href, icon: Icon, hover }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white transition ${hover}`}
              >
                <Icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
