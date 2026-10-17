import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutImage from "../../assets/about.webp";
import Background from "../../assets/bgImage.webp";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const section = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".about-img", {
        x: -120,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      })
        .from(
          ".about-title",
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.8"
        )
        .from(
          ".about-text",
          {
            y: 30,
            opacity: 0,
            stagger: 0.2,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".about-btn",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={section}
      className="
        relative
        overflow-hidden
        py-16

        sm:py-20

        md:py-24

        lg:py-28

        xl:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 z-0">
        <img
          src={Background}
          alt=""
          className="
            h-full
            w-full
            object-cover
            object-center
            opacity-100
          "
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
          px-5

          sm:px-6

          md:px-8

          lg:px-10

          xl:px-12

          2xl:px-16
        "
      >
        <div
          className="
            grid
            items-center
            gap-14

            sm:gap-16

            md:gap-20

            lg:grid-cols-2
            lg:gap-12

            xl:gap-20

            2xl:gap-24
          "
        >
          {/* =================================================
              LEFT — IMAGE
          ================================================= */}

          <div
            className="
              about-img
              relative
              mx-auto
              w-full
              max-w-[600px]

              lg:mx-0
              lg:max-w-none
            "
          >
            {/* Decorative Border */}

            <div
              className="
                pointer-events-none
                absolute
                -left-2
                -top-2
                h-full
                w-full
                rounded-md
                border
                border-[#006B43]/20

                sm:-left-3
                sm:-top-3

                md:-left-4
                md:-top-4

                lg:-left-5
                lg:-top-5

                xl:-left-6
                xl:-top-6
              "
            />

            {/* Image */}

            <div
              className="
                relative
                overflow-hidden
                rounded-md
              "
            >
              <img
                src={AboutImage}
                alt="About Jayas Construction"
                className="
                  h-[420px]
                  w-full
                  rounded-md
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  hover:scale-105

                  sm:h-[480px]

                  md:h-[540px]

                  lg:h-[580px]

                  xl:h-[620px]

                  2xl:h-[650px]
                "
              />
            </div>
          </div>

          {/* =================================================
              RIGHT — CONTENT
          ================================================= */}

          <div
            className="
              relative
              w-full

              lg:pt-4
          "
          >
            {/* =================================================
                BACKGROUND TITLE
            ================================================= */}

            <h2
              className="
                about-title
                pointer-events-none
                relative
                mb-6
                text-4xl
                font-light
                uppercase
                tracking-[4px]
                text-[#003466]
                opacity-90

                sm:text-5xl

                md:text-6xl

                lg:absolute
                lg:-left-20
                lg:top-15
                lg:mb-0
                lg:whitespace-nowrap
                lg:text-[54px]
                lg:tracking-wide

                xl:-left-32
                xl:text-[60px]

                2xl:-left-44
              "
            >
              Our Intro
            </h2>

            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <div
              className="
                relative
                pt-0

                lg:pt-24

                xl:pt-28
              "
            >
              {/* Yellow Line */}

              <div
                className="
                  mb-6
                  h-[2px]
                  w-16
                  bg-[#ffb000]

                  sm:mb-7
                  sm:w-20

                  md:mb-8
                  md:w-24
                "
              />

              {/* Main Heading */}

              <h3
                className="
                  about-text
                  mt-0
                  text-3xl
                  font-bold
                  leading-[1.1]
                  text-[#09a5ff]

                  sm:text-4xl

                  md:text-5xl

                  lg:text-5xl

                  xl:text-6xl
                "
              >
                Building Dreams,
                <br />
                Creating
                <span className="text-[#ffb000]">
                  {" "}Landmarks
                </span>
              </h3>

              {/* Paragraph 1 */}

              <p
                className="
                  about-text
                  mt-6
                  max-w-2xl
                  text-base
                  leading-7
                  text-gray-600

                  sm:mt-7
                  sm:text-lg
                  sm:leading-8

                  md:mt-8
                  md:leading-9
                "
              >
                Jayas Construction has earned a reputation
                for delivering premium residential and
                commercial developments with exceptional
                craftsmanship, innovative architecture, and
                uncompromising quality.
              </p>

              {/* Paragraph 2 */}

              <p
                className="
                  about-text
                  mt-5
                  max-w-2xl
                  text-base
                  leading-7
                  text-gray-600

                  sm:mt-6
                  sm:text-lg
                  sm:leading-8

                  md:leading-9
                "
              >
                Every project is designed to provide lasting
                value, combining modern aesthetics with
                practical functionality. Our mission is to
                transform ideas into spaces that inspire
                generations.
              </p>

              {/* =================================================
                  BUTTON
              ================================================= */}

              <button
                type="button"
                className="
                  about-btn
                  group
                  mt-7
                  flex
                  w-fit
                  items-center
                  justify-center
                  gap-3
                  rounded-md
                  bg-[#003466]
                  px-7
                  py-4
                  text-sm
                  uppercase
                  tracking-[2px]
                  text-white
                  transition-all
                  duration-500
                  hover:bg-[#0aacff]

                  sm:mt-8
                  sm:px-8
                  sm:py-4

                  md:mt-10
                  md:px-10
                  md:py-5
                  md:text-base
                  md:tracking-[3px]
                "
              >
                <span>View Story</span>

                <ArrowRight
                  size={18}
                  className="
                    shrink-0
                    transition
                    duration-300
                    group-hover:translate-x-2
                  "
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}