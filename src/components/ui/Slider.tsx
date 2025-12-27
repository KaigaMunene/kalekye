'use client';

import Slider, { type Settings } from 'react-slick';
import type { ReactNode } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ArrowProps {
  className?: string;
  onClick?: () => void;
}

const PrevArrow = ({ className, onClick }: ArrowProps) => {
  return (
    <button
      type="button"
      className={`${className} slick-prev absolute left-0 md:left-[-30px] bg-black text-black text-2xl p-3 rounded-full shadow-md hover:opacity-80 transition`}
      onClick={onClick}
      aria-label="Previous slide"
    >
      &#9665;
    </button>
  );
};

const NextArrow = ({ className, onClick }: ArrowProps) => {
  return (
    <button
      type="button"
      className={`${className} slick-next absolute right-0 md:right-[-30px] bg-black text-black text-2xl p-3 rounded-full shadow-md hover:opacity-80 transition`}
      onClick={onClick}
      aria-label="Next slide"
    >
      &#9655;
    </button>
  );
};

interface SliderProps {
  children: ReactNode;
  settings?: Partial<Settings>;
}

export default function CustomSlider({ children, settings }: SliderProps) {
  const defaultSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
    ...settings,
  };

  return <Slider {...defaultSettings}>{children}</Slider>;
}
