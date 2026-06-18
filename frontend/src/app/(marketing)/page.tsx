import Hero from '@/components/Hero';
import About from '@/components/About';
import OwnYourMic from '@/components/OwnYourMic';
import Testimonial from '@/components/Testimonial';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main>
      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-24">
        <About />
      </section>
      <section id="own-your-mic" className="scroll-mt-24">
        <OwnYourMic />
      </section>
      <section id="podcast" className="scroll-mt-24">
        <Testimonial />
      </section>
      <section id="services" className="scroll-mt-24">
        <Services />
      </section>
    </main>
  );
}
