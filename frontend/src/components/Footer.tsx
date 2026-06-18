'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/images/icon_white.png';
import { IoLogoInstagram } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa6';
import { COMPANY_NAV_LINKS, SERVICES_NAV_LINKS, LEGAL_LINKS } from '@/components/utils/links';

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
              {COMPANY_NAV_LINKS.map((link) => (
                <li key={link.targetId}>
                  <Link href={`#${link.targetId}`} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold underline mb-4">Explore</h3>
            <ul className="space-y-2">
              {SERVICES_NAV_LINKS.map((link) => (
                <li key={link.targetId}>
                  <Link href={`#${link.targetId}`} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold underline mb-4">Legal</h3>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-500 opacity-20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          {/* Logo */}
          <Image
            src={logo}
            alt="Kalekye Mumo logo"
            className="w-14 h-14 object-contain"
            width={56}
            height={56}
          />

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
