import Image from 'next/image';
import heroImage from '../assets/images/hero.png';

const Hero = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background image */}
      <Image
        src={heroImage}
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Welcome to Our Landing Page
        </h1>

        <p className="text-white/90 text-lg md:text-xl mt-4 max-w-2xl">
          Discover amazing features, seamless performance, and clean UI design.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition">
            Join Our Mic Program
          </button>
          <button className="px-8 py-3 bg-white/90 hover:bg-white text-gray-900 rounded-lg shadow-lg transition">
            Hire me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
