import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

// =====================================================
// IMAGES
// Replace these with your actual interior images
// =====================================================
import interior from "../assets/interiorHero.webp";
import I1 from "../assets/i1.webp";
import I2 from "../assets/i2.webp";
import I3 from "../assets/i3.webp";
import I4 from "../assets/i4.webp";
import I5 from "../assets/i5.webp";
import I6 from "../assets/i6.webp";
import I7 from "../assets/i7.webp";
import I8 from "../assets/i8.webp";


// =====================================================
// INTERIOR DATA
// =====================================================

const interiorImages = [
  I8,
  I2,
  I3,
  I4,
  I5,
  I6,
  I7,
  I1,
];


// =====================================================
// ANIMATION
// =====================================================

const fadeUp = {
  initial: {
    opacity: 0,
    y: 60,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.2,
  },

  transition: {
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  },
};


// =====================================================
// PAGE
// =====================================================

export default function Interior() {

  return (
    <main className="overflow-hidden bg-[#f5f5f3]">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">

        <motion.img
          src={interior}
          alt="Interior Design"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-black/45" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/10
            via-black/30
            to-black/75
          "
        />

        {/* Hero Content */}

        <div
          className="
            relative
            z-10
            flex
            h-full
            items-center
            justify-center
            px-6
            text-center
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
          >

            <p
              className="
                mb-5
                text-xs
                uppercase
                tracking-[0.45em]
                text-white/70
              "
            >
              Jayas Construction
            </p>

            <h1
              className="
                text-6xl
                font-bold
                uppercase
                tracking-[-0.05em]
                text-white
                sm:text-7xl
                md:text-8xl
                lg:text-[110px]
              "
            >
              Interiors
            </h1>

            <p
              className="
                mx-auto
                mt-6
                max-w-xl
                text-base
                leading-7
                text-white/70
                md:text-lg
              "
            >
              Spaces designed around the way you live.
            </p>

          </motion.div>

        </div>

      </section>


      {/* =================================================
          INTRODUCTION
      ================================================= */}

      <section className="px-6 py-24 md:px-12 lg:px-20 lg:py-32">

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-16
            lg:grid-cols-2
            lg:gap-24
          "
        >

          {/* Left */}

          <motion.div {...fadeUp}>

            <div className="mb-6 flex items-center gap-4">

              <span className="h-px w-12 bg-[#003466]" />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.4em]
                  text-black/50
                "
              >
                Our Approach
              </span>

            </div>

            <h2
              className="
                text-4xl
                font-bold
                leading-[1]
                tracking-tight
                text-[#111]
                sm:text-5xl
                md:text-6xl
              "
            >
              Interiors that feel
              <br />

              <span
                className="
                  font-serif
                  font-normal
                  italic
                  text-black/40
                "
              >
                uniquely yours.
              </span>
            </h2>

          </motion.div>


          {/* Right */}

          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.9,
              delay: 0.15,
            }}
          >

            <p
              className="
                text-lg
                leading-9
                text-black/55
                md:text-xl
              "
            >
              We create interiors that bring together thoughtful planning,
              refined aesthetics, and everyday functionality. Every space is
              designed to reflect the personality and lifestyle of the people
              who use it.
            </p>

            <p
              className="
                mt-6
                text-base
                leading-8
                text-black/45
              "
            >
              From carefully planned layouts and premium finishes to
              customised furniture and modular kitchens, our interior work
              focuses on creating spaces that are beautiful, practical, and
              built to last.
            </p>

          </motion.div>

        </div>

      </section>


      {/* =================================================
          FEATURED INTERIOR
      ================================================= */}

      <section className="px-6 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            className="
              relative
              aspect-[16/8]
              overflow-hidden
            "
          >

            <img
              src={I1}
              alt="Luxury Interior"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-[1500ms]
                hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-black/20" />

            <div
              className="
                absolute
                bottom-8
                left-8
                md:bottom-12
                md:left-12
              "
            >

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-white/70
                "
              >
                Featured Interior
              </p>

              <h3
                className="
                  mt-3
                  text-3xl
                  font-semibold
                  text-white
                  md:text-5xl
                "
              >
                Designed for everyday living.
              </h3>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =================================================
          INTERIOR SPECIALITIES
      ================================================= */}

      <section className="px-6 py-24 md:px-12 lg:px-20 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <motion.div {...fadeUp}>

            <p
              className="
                text-xs
                uppercase
                tracking-[0.4em]
                text-[#003466]
              "
            >
              What We Create
            </p>

            <h2
              className="
                mt-4
                text-4xl
                font-bold
                tracking-tight
                text-[#111]
                md:text-6xl
              "
            >
              Every room.
              <br />

              <span
                className="
                  font-serif
                  font-normal
                  italic
                  text-black/40
                "
              >
                Every detail.
              </span>
            </h2>

          </motion.div>


          {/* Categories */}

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Living Spaces",
              "Bedrooms",
              "Modular Kitchens",
              "Custom Interiors",
            ].map((item, index) => (

              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="
                  group
                  border
                  border-black/10
                  bg-white
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:bg-[#003466]
                "
              >

                <div className="flex items-start justify-between">

                  <span
                    className="
                      text-xs
                      tracking-[0.25em]
                      text-black/30
                      transition-colors
                      duration-500
                      group-hover:text-white/50
                    "
                  >
                    0{index + 1}
                  </span>

                  {/* <ArrowUpRight
                    size={20}
                    className="
                      text-[#003466]
                      transition-all
                      duration-500
                      group-hover:rotate-45
                      group-hover:text-white
                    "
                  /> */}

                </div>

                <h3
                  className="
                    mt-16
                    text-2xl
                    font-semibold
                    text-[#003466]
                    transition-colors
                    duration-500
                    group-hover:text-white
                  "
                >
                  {item}
                </h3>

                <div
                  className="
                    mt-5
                    h-px
                    w-10
                    bg-[#ffb000]
                  "
                />

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          IMAGE + CONTENT
      ================================================= */}

      <section className="bg-[#111] px-6 py-24 text-white md:px-12 lg:px-20 lg:py-32">

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-16
            lg:grid-cols-2
            lg:gap-24
          "
        >

          {/* Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: -70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            className="overflow-hidden"
          >

            <img
              src={I2}
              alt="Interior Design"
              className="
                aspect-[4/5]
                h-full
                w-full
                object-cover
                transition-transform
                duration-1000
                hover:scale-105
              "
            />

          </motion.div>


          {/* Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: 70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
          >

            <p
              className="
                text-xs
                uppercase
                tracking-[0.4em]
                text-white/40
              "
            >
              Interior & Modular Kitchen
            </p>

            <h2
              className="
                mt-5
                text-4xl
                font-bold
                leading-tight
                md:text-6xl
              "
            >
              Function meets
              <br />

              <span
                className="
                  font-serif
                  font-normal
                  italic
                  text-white/50
                "
              >
                beautiful design.
              </span>
            </h2>

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-9
                text-white/50
              "
            >
              Our interiors are carefully planned around your lifestyle.
              From space-saving modular kitchens to elegant living spaces,
              every element is considered to create a seamless balance between
              aesthetics and functionality.
            </p>

            <p
              className="
                mt-6
                max-w-xl
                leading-8
                text-white/40
              "
            >
              We pay attention to materials, textures, lighting, colours,
              storage, and finishing details so that every room feels
              intentional and complete.
            </p>

          </motion.div>

        </div>

      </section>


      {/* =================================================
          GALLERY
      ================================================= */}

      <section className="px-6 py-24 md:px-12 lg:px-20 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <motion.div
            {...fadeUp}
            className="
              flex
              flex-col
              justify-between
              gap-6
              md:flex-row
              md:items-end
            "
          >

            <div>

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.4em]
                  text-[#003466]
                "
              >
                Our Interior Work
              </p>

              <h2
                className="
                  mt-4
                  text-4xl
                  font-bold
                  tracking-tight
                  text-[#111]
                  md:text-6xl
                "
              >
                A closer look.
              </h2>

            </div>

            <p className="max-w-sm text-sm leading-7 text-black/40">
              Explore some of the spaces we have designed and transformed
              with thoughtful details and refined finishes.
            </p>

          </motion.div>


          {/* Gallery Grid */}

          <div
            className="
              mt-14
              grid
              gap-5
              md:grid-cols-2
            "
          >

            {interiorImages.map((image, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                }}
                className={`
                  group
                  relative
                  overflow-hidden

                  ${
                    index === 0
                      ? "md:col-span-2 aspect-[16/8]"
                      : "aspect-[4/3]"
                  }
                `}
              >

                <img
                  src={image}
                  alt={`Interior ${index + 1}`}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-1000
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    transition
                    duration-500
                    group-hover:bg-black/20
                  "
                />

                <span
                  className="
                    absolute
                    bottom-5
                    left-5
                    text-xs
                    tracking-[0.3em]
                    text-white
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          CTA
      ================================================= */}

      <section className="bg-[#003466] px-6 py-24 md:px-12 lg:px-20 lg:py-28">

        <motion.div
          {...fadeUp}
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-start
            justify-between
            gap-10
            md:flex-row
            md:items-center
          "
        >

          <div>

            <p
              className="
                text-xs
                uppercase
                tracking-[0.4em]
                text-white/50
              "
            >
              Let's Create
            </p>

            <h2
              className="
                mt-4
                text-4xl
                font-bold
                leading-tight
                text-white
                md:text-6xl
              "
            >
              Ready to transform
              <br />

              <span className="font-serif font-normal italic">
                your space?
              </span>
            </h2>

          </div>

          <a
            href="/contact"
            className="
              group
              flex
              items-center
              gap-4
              rounded-md
              bg-white
              px-8
              py-5
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#003466]
              transition-all
              duration-500
              hover:bg-[#09a5ff]
              hover:text-white
            "
          >
            Contact Us

            <ArrowRight
              size={20}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-2
              "
            />

          </a>

        </motion.div>

      </section>

    </main>
  );
}