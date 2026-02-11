"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export function InteriorDesignHero() {
  const slides = [
    "/images/hero-interior.jpg",
    "/images/projects/punggol-hdb/kitchen-cabinets.jpg",
    "/images/projects/novena-restaurant-bar/bar-interior.jpg",
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32 overflow-hidden">
      {/* Background Image Carousel */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="!absolute inset-0 z-0 w-full h-full"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${src})`,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay for dark readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80 z-[1]" />

      {/* Caption Text */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Modern with Professional Interior Design in Singapore—From Concept to
            Completion
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 text-pretty leading-relaxed">
            At{" "}
            <a
              href="https://www.strata.sg/"
              className="text-secondary"
            >
              Strata.sg
            </a>
            , we provide professional interior design in Singapore that combine
            style and functionality. From comfortable homes to dynamic workplaces,
            we deliver designs tailored to your lifestyle, needs, and budget.
          </p>
        </div>
      </div>
    </section>
  );
}
