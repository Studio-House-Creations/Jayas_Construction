import React from "react";
import { motion } from "framer-motion";
import Background from "../../assets/bgImage2.webp"

const MissionVision = () => {
  return (
    <section
  className="
    relative
    overflow-hidden
    px-6
    py-28
    text-white
    md:px-12
    lg:px-20
    lg:py-36
  "
>
  {/* =========================================
      BACKGROUND IMAGE
  ========================================== */}

  <div className="absolute inset-0 z-0">

    <img
      src={Background}
      alt=""
      className="
        h-full
        w-full
        object-cover
        opacity-60
      "
    />

    {/* Dark Overlay */}

    <div
      className="
        absolute
        inset-0
        
      "
    />

    {/* Gradient Overlay */}

    <div
      className="
        absolute
        inset-0
        bg-gradient-to-br
        from-black/40
        via-black/20
        to-[#003466]/40
      "
    />

  </div>


  {/* Background Decorative Text */}

  <div
    className="
      pointer-events-none
      absolute
      -right-20
      top-20
      z-[1]
      select-none
      text-[18vw]
      font-black
      uppercase
      leading-none
      text-white/[0.025]
    "
  >
    PURPOSE
  </div>


  {/* =========================================
      CONTENT
  ========================================== */}

  <div className="relative z-10 mx-auto max-w-7xl">

    {/* Section Heading */}

    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{
        once: true,
      }}
      className="mb-20"
    >

      <div className="mb-6 flex items-center gap-4">

        <span className="h-[1px] w-12 bg-white/50" />

        <span
          className="
            text-xs
            font-medium
            uppercase
            tracking-[0.4em]
            text-white/50
          "
        >
          Our Purpose
        </span>

      </div>

      <h2
        className="
          max-w-4xl
          text-5xl
          font-bold
          leading-[0.95]
          tracking-tight
          sm:text-6xl
          md:text-7xl
          lg:text-8xl
        "
      >
        What drives
        <br />

        <span className="font-serif font-normal italic text-white/60">
          everything we do.
        </span>

      </h2>

    </motion.div>


    {/* Mission + Vision */}

    <div className="grid gap-6 md:grid-cols-2">

      {/* MISSION */}

      <motion.div
        initial={{
          opacity: 0,
          x: -60,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="
          group
          relative
          min-h-[420px]
          overflow-hidden
          border
          border-white/10
          bg-black/30
          p-8
          backdrop-blur-[2px]
          md:p-12
        "
      >

        {/* Hover Background */}

        <div
          className="
            absolute
            inset-0
            origin-bottom
            scale-y-0
            bg-white
            transition-transform
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-y-100
          "
        />

        <div className="relative z-10 flex h-full flex-col justify-between">

          <div className="flex items-center justify-between">

            <span
              className="
                text-xs
                uppercase
                tracking-[0.4em]
                text-white/40
                transition-colors
                duration-500
                group-hover:text-black/50
              "
            >
              01
            </span>

            <span
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-white/40
                transition-colors
                duration-500
                group-hover:text-black/50
              "
            >
              Mission
            </span>

          </div>

          <div className="mt-20">

            <h3
              className="
                text-4xl
                font-bold
                tracking-tight
                transition-colors
                duration-500
                group-hover:text-black
                md:text-5xl
              "
            >
              Create with
              <br />

              <span className="font-serif italic font-normal">
                purpose.
              </span>

            </h3>

            <p
              className="
                mt-6
                max-w-md
                text-sm
                leading-7
                text-white/50
                transition-colors
                duration-500
                group-hover:text-black/60
                md:text-base
              "
            >
              Our mission is to transform ideas into meaningful digital
              experiences through creativity, technology, and thoughtful
              design. We create work that not only looks good, but also
              creates real value.
            </p>

          </div>

        </div>

      </motion.div>


      {/* VISION */}

      <motion.div
        initial={{
          opacity: 0,
          x: 60,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="
          group
          relative
          min-h-[420px]
          overflow-hidden
          border
          border-white/10
          bg-black/30
          p-8
          backdrop-blur-[2px]
          md:p-12
        "
      >

        {/* Hover Background */}

        <div
          className="
            absolute
            inset-0
            origin-bottom
            scale-y-0
            bg-white
            transition-transform
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-y-100
          "
        />

        <div className="relative z-10 flex h-full flex-col justify-between">

          <div className="flex items-center justify-between">

            <span
              className="
                text-xs
                uppercase
                tracking-[0.4em]
                text-white/40
                transition-colors
                duration-500
                group-hover:text-black/50
              "
            >
              02
            </span>

            <span
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-white/40
                transition-colors
                duration-500
                group-hover:text-black/50
              "
            >
              Vision
            </span>

          </div>

          <div className="mt-20">

            <h3
              className="
                text-4xl
                font-bold
                tracking-tight
                transition-colors
                duration-500
                group-hover:text-black
                md:text-5xl
              "
            >
              Imagine what
              <br />

              <span className="font-serif italic font-normal">
                comes next.
              </span>

            </h3>

            <p
              className="
                mt-6
                max-w-md
                text-sm
                leading-7
                text-white/50
                transition-colors
                duration-500
                group-hover:text-black/60
                md:text-base
              "
            >
              Our vision is to become a trusted creative technology
              partner for brands and businesses, building innovative
              experiences that inspire people and shape the digital future.
            </p>

          </div>

        </div>

      </motion.div>

    </div>


    {/* Bottom Statement */}

    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 0.3,
      }}
      viewport={{
        once: true,
      }}
      className="
        mt-20
        flex
        flex-col
        items-start
        justify-between
        gap-6
        border-t
        border-white/10
        pt-8
        md:flex-row
        md:items-center
      "
    >

      <p
        className="
          max-w-2xl
          text-lg
          leading-8
          text-white/50
          md:text-xl
        "
      >
        We believe great work begins with a great idea — and grows through
        collaboration, creativity, and courage.
      </p>

      <div
        className="
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          transition-all
          duration-500
          hover:bg-white
          hover:text-black
        "
      >
        <span className="text-xl">
          ↗
        </span>
      </div>

    </motion.div>

  </div>

</section>
  );
};

export default MissionVision;