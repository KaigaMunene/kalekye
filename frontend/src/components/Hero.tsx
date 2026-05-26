import Image from 'next/image';
import heroImage from '../assets/images/hero.png';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src={heroImage}
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full max-w-3xl px-4 sm:px-8 md:px-16 lg:px-24 text-left">
          {/* Headline */}
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Unleash the Power of Your Voice
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl pl-2 font-fraunces font-light">
              with <i>Kalekye Mumo</i>
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-white">
            Award-Winning Podcaster | Renowned Host | <br /> Voiceover Artist | Creator of Own Your
            Mic Program
          </h2>

          {/* Tagline */}
          <p className=" mt-4 text-sm sm:text-base md:text-lg lg:text-xl italic font-light text-gray-200 max-w-xl">
            Empowering Voices, Transforming Lives
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
