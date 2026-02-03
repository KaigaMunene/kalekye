'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-md opacity-80 shadow-md">
      <nav className="px-4 mx-auto flex max-w-7xl items-center justify-between py-4">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" className="h-12 w-auto" width={48} height={48} priority />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8 text-white font-medium">
          <li>
            <Link href="#home" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link href="#services" className="hover:text-blue-600">
              Services
            </Link>
          </li>
          <li>
            <Link href="#services" className="hover:text-blue-600">
              Own Your Mic
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800"
          aria-label="Open Menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col space-y-4 py-6 px-6 text-gray-700 text-lg font-medium">
            <li>
              <Link href="#home" onClick={() => setOpen(false)} className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={() => setOpen(false)} className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" onClick={() => setOpen(false)} className="hover:text-blue-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="#services" onClick={() => setOpen(false)} className="hover:text-blue-600">
                Own Your Mic
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setOpen(false)} className="hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
