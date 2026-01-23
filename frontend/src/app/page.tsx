import Hero from '@/components/Hero';
import About from '@/components/About';
import OwnYourMic from '@/components/OwnYourMic';
import Testimonial from '@/components/Testimonial';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <OwnYourMic />
      <Testimonial />
      <Services />
    </main>
  );
}
