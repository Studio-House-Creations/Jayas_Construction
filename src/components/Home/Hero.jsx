import { useEffect, useMemo, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  EffectCreative,
} from "swiper/modules";

import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import { Link, useLocation, useNavigate } from "react-router-dom";

import hero1 from "../../assets/heroImage1.webp";
import hero2 from "../../assets/heroImage2.webp";
import hero3 from "../../assets/heroImage3.webp";
import hero4 from "../../assets/balajinagar.webp";
import hero5 from "../../assets/heroImage6.webp";
import hero6 from "../../assets/heroImage7.webp";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";


// =====================================================
// SLIDES
// =====================================================

const slides = [
  {
    id: 1,
    image: hero1,
    title: "K.K.Kottai Residences",
    subtitle: "Residential Villa",
    button: "View Project",
  },
  {
    id: 2,
    image: hero2,
    title: "Kattur Residences",
    subtitle: "Residential Villa",
    button: "View Project",
  },
  {
    id: 3,
    image: hero3,
    title: "Thurayur Residences",
    subtitle: "Residential Villa",
    button: "View Project",
  },
  {
    id: 4,
    image: hero4,
    title: "Balaji Nagar Residences",
    subtitle: "Residential Villa",
    button: "View Project",
  },
  {
    id: 5,
    image: hero5,
    title: "Anbu Nagar Residences",
    subtitle: "Residential Villa",
    button: "View Project",
  },
  {
    id: 6,
    image: hero6,
    title: "Kumaran Nagar Residences",
    subtitle: "Residential Villa",
    button: "View Project",
  },
];

// =====================================================
// HERO CONTENT
// =====================================================

function HeroContent({ slide }) {
  const container = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-tag", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      }).from(
        ".hero-title",
        {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.3"
      );
    }, container);

    return () => ctx.revert();
  }, [slide]);

  return (
    <div
      ref={container}
      className="
        absolute
        inset-0
        z-30
        flex
        items-center
        pt-16

        sm:pt-20

        md:pt-24

        lg:pt-6
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]
          px-5

          sm:px-8

          md:px-10

          lg:px-12

          xl:px-16

          2xl:px-20
        "
      >
        <div
          className="
            max-w-[90%]

            sm:max-w-2xl

            md:max-w-3xl

            lg:max-w-4xl
          "
        >
          {/* SUBTITLE */}

          <p
            className="
              hero-tag
              text-xs
              font-light
              uppercase
              tracking-[3px]
              text-white/80

              sm:text-sm
              sm:tracking-[5px]

              md:text-base

              lg:text-xl
              lg:tracking-[8px]
            "
          >
            {slide.subtitle}
          </p>

          {/* TITLE */}

          <h1
            className="
              hero-title
              mt-3
              max-w-full
              text-4xl
              font-bold
              leading-[0.95]
              text-[#09a5ff]

              sm:mt-4
              sm:text-5xl

              md:text-6xl

              lg:text-7xl

              xl:text-8xl

              2xl:text-[96px]
            "
          >
            {slide.title}
          </h1>
        </div>
      </div>
    </div>
  );
}

// =====================================================
// THUMBNAILS
// =====================================================

function HeroThumbnails({
  slides,
  activeSlide,
  swiperRef,
}) {
  const visibleSlides = useMemo(() => {
    const total = slides.length;

    const previousIndex =
      (activeSlide - 1 + total) % total;

    const nextIndex =
      (activeSlide + 1) % total;

    return [
      slides[previousIndex],
      slides[activeSlide],
      slides[nextIndex],
    ];
  }, [slides, activeSlide]);

  return (
    <div className="w-full">
      <div
        className="
          flex
          w-full
          items-end
          justify-center
          gap-2

          sm:gap-3

          md:justify-start
          md:gap-4

          lg:gap-6
        "
      >
        {visibleSlides.map((slide) => {
          const realIndex = slides.findIndex(
            (item) => item.id === slide.id
          );

          const active =
            realIndex === activeSlide;

          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => {
                swiperRef.current?.slideToLoop(
                  realIndex
                );
              }}
              aria-label={`Go to ${slide.title}`}
              className={`
                relative
                shrink-0
                overflow-hidden
                rounded-sm
                transition-all
                duration-500

                ${
                  active
                    ? `
                      h-[68px]
                      w-[105px]

                      sm:h-[74px]
                      sm:w-[118px]

                      md:h-[78px]
                      md:w-[128px]

                      lg:h-[80px]
                      lg:w-[140px]
                    `
                    : `
                      h-[58px]
                      w-[78px]
                      opacity-70

                      hover:opacity-100

                      sm:h-[64px]
                      sm:w-[88px]

                      md:h-[68px]
                      md:w-[94px]

                      lg:h-[72px]
                      lg:w-[100px]
                    `
                }
              `}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                "
              />

              <div
                className={`
                  absolute
                  inset-0
                  transition

                  ${
                    active
                      ? "bg-black/5"
                      : "bg-black/40"
                  }
                `}
              />

              {active && (
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-sm
                    border-2
                    border-white

                    lg:border-[3px]
                  "
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// =====================================================
// PAGINATION
// =====================================================

function HeroPagination({
  activeSlide,
  totalSlides,
}) {
  return (
    <div
      className="
        flex
        w-full
        items-center
        justify-center
        gap-3

        sm:gap-4

        md:justify-start
        md:gap-5
      "
    >
      {/* CURRENT */}

      <span
        className="
          shrink-0
          text-sm
          font-semibold
          tracking-wider
          text-[#ffb000]

          sm:text-base

          md:text-xl
        "
      >
        {String(activeSlide + 1).padStart(2, "0")}
      </span>

      {/* PROGRESS */}

      <div
        className="
          relative
          h-[2px]
          w-16
          overflow-hidden
          rounded-full
          bg-white/30

          sm:w-24

          md:w-32

          lg:w-40
        "
      >
        <div
          className="
            absolute
            left-0
            top-0
            h-full
            bg-[#003466]
            transition-all
            duration-700
            ease-out
          "
          style={{
            width: `${
              ((activeSlide + 1) /
                totalSlides) *
              100
            }%`,
          }}
        />
      </div>

      {/* TOTAL */}

      <span
        className="
          shrink-0
          text-sm
          font-semibold
          tracking-wider
          text-[#ffb000]/70

          sm:text-base

          md:text-xl
        "
      >
        {String(totalSlides).padStart(2, "0")}
      </span>
    </div>
  );
}

// =====================================================
// HERO NAVIGATION
// =====================================================

function HeroControls({ swiperRef }) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        gap-3

        sm:gap-4

        md:items-end
        md:gap-5

        lg:gap-6
      "
    >
      {/* VIEW SHOWCASE */}

   <Link
  to="/gallery"
  className="
    group
    flex
    items-center
    justify-center
    gap-2
    rounded-lg
    border
    border-white/20
    bg-white/10
    px-4
    py-2.5
    text-xs
    text-white
    backdrop-blur-lg
    transition-all
    duration-500
    hover:bg-white
    hover:text-[#003466]

    sm:px-5
    sm:py-3
    sm:text-sm

    md:px-6
    md:py-3.5

    lg:px-8
    lg:py-4
  "
>
  <span
    className="
      whitespace-nowrap
      uppercase
      tracking-[2px]

      sm:tracking-[3px]

      lg:tracking-[4px]
    "
  >
    View Showcase
  </span>

  <ChevronRight
    size={17}
    className="
      shrink-0
      transition
      duration-300
      group-hover:translate-x-2
    "
  />
</Link>

      {/* PREVIOUS / NEXT */}

      <div
        className="
          flex
          items-center
          gap-3

          sm:gap-4

          md:gap-5

          lg:gap-6
        "
      >
        {/* PREVIOUS */}

        <button
          type="button"
          onClick={() =>
            swiperRef.current?.slidePrev()
          }
          className="
            whitespace-nowrap
            text-[10px]
            uppercase
            tracking-[2px]
            text-white
            transition
            hover:text-[#ffb000]

            sm:text-xs
            sm:tracking-[3px]

            lg:tracking-[4px]
          "
        >
          PREVIOUS
        </button>

        {/* DIVIDER */}

        <div
          className="
            h-[1px]
            w-5
            shrink-0
            bg-white/70

            sm:w-7

            lg:w-10
          "
        />

        {/* NEXT */}

        <button
          type="button"
          onClick={() =>
            swiperRef.current?.slideNext()
          }
          className="
            whitespace-nowrap
            text-[10px]
            uppercase
            tracking-[2px]
            text-white
            transition
            hover:text-[#ffb000]

            sm:text-xs
            sm:tracking-[3px]

            lg:tracking-[4px]
          "
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

// =====================================================
// MAIN HERO
// =====================================================

export default function Hero() {
  const swiperRef = useRef(null);

  const [activeSlide, setActiveSlide] =
    useState(0);

  return (
    <section
      className="
        relative
        h-[100svh]
        min-h-[600px]
        w-full
        overflow-hidden

        sm:min-h-[650px]

        lg:h-screen
      "
    >
      {/* =================================================
          BACKGROUND SLIDER
      ================================================= */}

      <Swiper
        modules={[
          Autoplay,
          Navigation,
          EffectCreative,
        ]}
        effect="creative"
        loop={true}
        loopAdditionalSlides={slides.length}
        speed={1500}
        grabCursor={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-25%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onRealIndexChange={(swiper) => {
          setActiveSlide(swiper.realIndex);
        }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">

              {/* BACKGROUND IMAGE */}

              <img
                src={slide.image}
                alt={slide.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  object-center
                  animate-[heroZoom_7s_linear_forwards]
                "
              />

              {/* OVERLAY */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-black/75
                  via-black/45
                  to-black/15

                  sm:from-black/70
                  sm:via-black/40
                  sm:to-black/20
                "
              />

              {/* HERO CONTENT */}

              <HeroContent
                slide={slide}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* =================================================
          MOBILE / TABLET BOTTOM CONTROLS
      ================================================= */}

      <div
        className="
          absolute
          bottom-4
          left-0
          z-40
          flex
          w-full
          flex-col
          items-center
          px-4

          sm:bottom-6
          sm:px-6

          md:bottom-7

          lg:hidden
        "
      >
        {/* PAGINATION */}

        <div
          className="
            mb-3
            w-full
            max-w-[300px]

            sm:mb-4
            sm:max-w-[360px]

            md:max-w-[420px]
          "
        >
          <HeroPagination
            activeSlide={activeSlide}
            totalSlides={slides.length}
          />
        </div>

        {/* THUMBNAILS */}

        <div
          className="
            w-full
            max-w-[330px]

            sm:max-w-[390px]

            md:max-w-[440px]
          "
        >
          <HeroThumbnails
            slides={slides}
            activeSlide={activeSlide}
            swiperRef={swiperRef}
          />
        </div>

        {/* MOBILE NAVIGATION */}

        <div className="mt-3 sm:mt-4">
          <HeroControls
            swiperRef={swiperRef}
          />
        </div>
      </div>

      {/* =================================================
          DESKTOP BOTTOM LEFT
      ================================================= */}

      <div
        className="
          absolute
          bottom-8
          left-8
          z-40
          hidden
          w-[400px]
          lg:block
          xl:left-10
          xl:w-[460px]
        "
      >
        {/* PAGINATION */}

        <div className="mb-4">
          <HeroPagination
            activeSlide={activeSlide}
            totalSlides={slides.length}
          />
        </div>

        {/* THUMBNAILS */}

        <HeroThumbnails
          slides={slides}
          activeSlide={activeSlide}
          swiperRef={swiperRef}
        />
      </div>

      {/* =================================================
          DESKTOP BOTTOM RIGHT
      ================================================= */}

      <div
        className="
          absolute
          bottom-10
          right-8
          z-40
          hidden

          lg:block
          xl:bottom-12
          xl:right-14
        "
      >
        <HeroControls
          swiperRef={swiperRef}
        />
      </div>
    </section>
  );
}