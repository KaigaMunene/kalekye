import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero-section">
      <Image src="/assets/images/hero.png" alt="hero background image" width={1000} height={400} />
      <h1>Welcome to the Hero Section</h1>
      <p>This is where the hero content goes.</p>
    </section>
  );
};

export default Hero;
