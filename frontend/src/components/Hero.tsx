import Image from 'next/image';
import heroImage from '../assets/images/hero.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen md:h-screen w-full overflow-hidden bg-[#111822] font-family-cinzel">
      {/* Background image */}
      <Image
        src={heroImage}
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Left-side Dark Gradient Overlay (#111822) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#111822] via-[#111822]/80 to-transparent max-w-4xl" />

      {/* Main Content Overlay */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen w-full px-6 py-12 sm:px-12 md:px-20 lg:px-24">
        {/* Top Spacer to push content down beautifully */}
        <div className="hidden md:block h-6"></div>

        {/* Left-Aligned Content Area (Constrained max-width to keep it far left) */}
        <div className="my-auto max-w-full md:max-w-xl lg:max-w-2xl pt-16 md:pt-0">
          {/* Audio Indicator + Category */}
          <div className="flex items-center gap-2 mb-4">
            <span className="flex h-4 items-center gap-0.5" aria-hidden="true">
              <span className="audio-bar inline-block h-4 w-[2px] animate-audio-bar rounded-full bg-brand-gold [animation-delay:0ms] [animation-duration:0.85s]" />
              <span className="audio-bar inline-block h-4 w-[2px] animate-audio-bar rounded-full bg-brand-gold [animation-delay:150ms] [animation-duration:1.1s]" />
              <span className="audio-bar inline-block h-4 w-[2px] animate-audio-bar rounded-full bg-brand-gold [animation-delay:300ms] [animation-duration:0.75s]" />
              <span className="audio-bar inline-block h-4 w-[2px] animate-audio-bar rounded-full bg-brand-gold [animation-delay:450ms] [animation-duration:0.95s]" />
            </span>
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-brand-gold uppercase">
              On Air & On Mic
            </p>
          </div>

          {/* Headline (Responsive font sizing) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight mb-4">
            Unleash the power of <span className="text-brand-gold italic">your voice</span> with
            Kalekye Mumo
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base font-light text-gray-300 mb-8 leading-relaxed max-w-lg">
            Award-winning podcaster &middot; Renowned host &middot; Voiceover artist &middot;
            Creator of Own Your Mic Programs
          </p>

          {/* CTA Buttons: Balanced 2x2 grid structure */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md sm:max-w-xl">
            <button className="w-full px-5 py-3 text-xs sm:text-sm font-semibold bg-brand-gold text-black rounded-lg hover:bg-opacity-90 transition shadow-lg text-center">
              Join Own Your Mic Programs
            </button>
            <button className="w-full px-5 py-3 text-xs sm:text-sm font-medium border border-white/20 text-white rounded-lg hover:bg-white/10 transition backdrop-blur-md bg-[#111822]/40 text-center">
              Book Kalekye for your event
            </button>
            <button className="w-full px-5 py-3 text-xs sm:text-sm font-medium border border-white/20 text-white rounded-lg hover:bg-white/10 transition backdrop-blur-md bg-[#111822]/40 text-center">
              Listen to Conversations
            </button>
            <button className="w-full px-5 py-3 text-xs sm:text-sm font-medium border border-white/20 text-white rounded-lg hover:bg-white/10 transition backdrop-blur-md bg-[#111822]/40 text-center">
              Hire Kalekye to voice your script
            </button>
          </div>
        </div>

        {/* Bottom Left: Tagline Badge */}
        <div className="mt-12 md:mt-auto self-start">
          <div className="px-4 py-2 border border-brand-gold/40 rounded-full text-[10px] sm:text-xs font-semibold tracking-widest text-brand-gold uppercase backdrop-blur-md bg-[#111822]/40">
            Empowering Voices, Transforming Lives
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
