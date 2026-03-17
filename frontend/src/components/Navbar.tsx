'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import whitelogo from '../assets/images/icon_white.png';
import blacklogo from '../assets/images/icon_black.png';
import { useContactModal } from '../contexts/ContactModalContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { openModal } = useContactModal();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setIsScrolled(scrollTop > 10);
    };
    // Run once on mount in case user reloads mid-page
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const navItems = useMemo(
    () => [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Own Your Mic', href: '#own-your-mic' },
      { label: 'Services', href: '#services' },
      { label: 'Podcast', href: '#podcast' },
    ],
    [],
  );

  const handleAnchorClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 shadow-md' : 'bg-black/60'
      } backdrop-blur-md`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={isScrolled ? whitelogo : blacklogo}
            alt="KM Network Logo"
            className="h-10 w-auto sm:h-12"
            width={48}
            height={56}
            priority
          />
        </Link>

        <div className="flex items-center gap-3 md:gap-6">
          <ul
            className={`hidden md:flex items-center font-medium ${
              isScrolled ? 'text-slate-900' : 'text-white'
            } gap-6 lg:gap-10 text-sm lg:text-base`}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleAnchorClick(item.href)}
                  className={`transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    isScrolled ? 'focus-visible:ring-slate-400' : 'focus-visible:ring-white'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}

            <li>
              <button
                onClick={openModal}
                className={`rounded-full border px-4 py-2 transition-colors text-sm lg:text-base ${
                  isScrolled
                    ? 'border-slate-300 text-slate-900 hover:bg-slate-100'
                    : 'border-white/70 text-white hover:bg-white/10'
                }`}
              >
                Contact Us
              </button>
            </li>
          </ul>

          <button
            className={`md:hidden inline-flex items-center justify-center rounded-md p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
              isScrolled
                ? 'text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-400'
                : 'text-white hover:bg-white/10 focus-visible:ring-white'
            }`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          id="mobile-nav"
          className={`md:hidden border-t ${
            isScrolled ? 'bg-white' : 'bg-black/95'
          } backdrop-blur-md`}
        >
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
            <ul
              className={`flex flex-col gap-4 font-medium ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleAnchorClick(item.href)}
                    className="block py-1 text-base sm:text-lg hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => {
                    setOpen(false);
                    openModal();
                  }}
                  className={` transition-colors ${
                    isScrolled
                      ? 'border-slate-300 text-slate-900 hover:bg-slate-100'
                      : 'border-white/70 text-white hover:bg-white/10'
                  }`}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
