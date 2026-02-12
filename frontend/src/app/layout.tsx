import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ContactModalProvider } from '../contexts/ContactModalContext';
import ContactModalWrapper from '../components/ContactModalWrapper';

export const metadata: Metadata = {
  title: {
    default: 'KM Network - Kalekye Mumo',
    template: '%s | KM Network',
  },
  description:
    'Kalekye Mumo - Queen of Media. Professional event hosting, podcasting, voiceover services, and communication training through Own Your Mic programs.',
  keywords: [
    'Kalekye Mumo',
    'KM Network',
    'event hosting',
    'podcast',
    'voiceover',
    'public speaking',
    'communication training',
    'Own Your Mic',
    'Kenya media',
  ],
  authors: [{ name: 'Kalekye Mumo' }],
  creator: 'Kalekye Mumo',
  publisher: 'KM Network',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://kalekyemumo.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'KM Network',
    title: 'KM Network - Kalekye Mumo',
    description:
      'Professional event hosting, podcasting, voiceover services, and communication training.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KM Network - Kalekye Mumo',
    description:
      'Professional event hosting, podcasting, voiceover services, and communication training.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ContactModalProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ContactModalWrapper />
        </ContactModalProvider>
      </body>
    </html>
  );
}
