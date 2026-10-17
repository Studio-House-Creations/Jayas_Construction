import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowLeft,
  CalendarDays,
  MapPin,
  Ruler,
  Home,
  Check,
  ArrowUpRight,
} from "lucide-react";

import projects from "./ProjectData.js";

export default function ProjectDetails() {

  const { id } = useParams();

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  // If project doesn't exist

  if (!project) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-white">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-[#003466]">
            Project Not Found
          </h1>

          <Link
            to="/gallery"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              bg-[#003466]
              px-6
              py-3
              text-sm
              uppercase
              tracking-[2px]
              text-white
            "
          >
            <ArrowLeft size={18} />
            Back to Gallery
          </Link>

        </div>

      </section>
    );
  }

  return (
    <main className="overflow-hidden bg-white">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="relative h-[65vh] min-h-[500px] overflow-hidden">

        <motion.img
          src={project.image}
          alt={project.title}
          initial={{
            scale: 1.08,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1.5,
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

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/45" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/20
            to-black/20
          "
        />

        {/* Hero Content */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            max-w-7xl
            items-end
            px-6
            pb-16
            md:px-12
            lg:px-20
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
              duration: 0.9,
              delay: 0.2,
            }}
          >

            {/* Back */}

            <Link
              to="/gallery"
              className="
                mb-10
                inline-flex
                items-center
                gap-3
                text-xs
                uppercase
                tracking-[0.3em]
                text-white/70
                transition
                hover:text-white
              "
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>

            {/* Status */}

            <div
              className="
                mb-10
                inline-flex
                rounded-md
                bg-white
                px-5
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#003466]
                ml-3
              "
            >
              {project.status}
            </div>

            <h1
              className="
                text-5xl
                font-bold
                leading-none
                tracking-tight
                text-white
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
              "
            >
              {project.title}
            </h1>

            <div className="mt-5 flex items-center gap-2 text-white/70">

              <MapPin size={17} />

              <span className="text-sm uppercase tracking-[0.2em]">
                {project.location}
              </span>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =================================================
          PROJECT INFORMATION
      ================================================= */}

      <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">

        <div className="mx-auto max-w-7xl">

          {/* Section Label */}

          <div className="mb-10 flex items-center gap-4">

            <span className="h-px w-12 bg-black" />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.4em]
                text-black/50
              "
            >
              Project Overview
            </span>

          </div>


          {/* Information Grid */}

          <div
            className="
              grid
              border-y
              border-black/10
              md:grid-cols-2
              lg:grid-cols-4
            "
          >

            {/* Completed */}

            <div
              className="
                border-b
                border-black/10
                p-7
                lg:border-b-0
                lg:border-r
              "
            >

              <CalendarDays
                size={24}
                className="text-[#003466]"
              />

              <p
                className="
                  mt-7
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-black/40
                "
              >
                Completed Date
              </p>

              <p className="mt-2 text-lg font-semibold text-[#111]">
                {project.completedDate}
              </p>

            </div>


            {/* Address */}

            <div
              className="
                border-b
                border-black/10
                p-7
                lg:border-b-0
                lg:border-r
              "
            >

              <MapPin
                size={24}
                className="text-[#003466]"
              />

              <p
                className="
                  mt-7
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-black/40
                "
              >
                Address
              </p>

              <p className="mt-2 text-lg font-semibold text-[#111]">
                {project.address}
              </p>

            </div>


            {/* Area */}

            <div
              className="
                border-b
                border-black/10
                p-7
                lg:border-b-0
                lg:border-r
              "
            >

              <Ruler
                size={24}
                className="text-[#003466]"
              />

              <p
                className="
                  mt-7
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-black/40
                "
              >
                Built-up Area
              </p>

              <p className="mt-2 text-lg font-semibold text-[#111]">
                {project.area}
              </p>

            </div>


            {/* Interior */}

            <div className="p-7">

              <Home
                size={24}
                className="text-[#003466]"
              />

              <p
                className="
                  mt-7
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-black/40
                "
              >
                Interior Work
              </p>

              <p className="mt-2 text-lg font-semibold text-[#111]">
                {project.interior}
              </p>

            </div>

          </div>


          {/* =================================================
              DESCRIPTION + HIGHLIGHTS
          ================================================= */}

          <div
            className="
              mt-24
              grid
              gap-16
              lg:grid-cols-[1.1fr_0.9fr]
              lg:gap-24
            "
          >

            {/* Description */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
            >

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.4em]
                  text-[#003466]
                "
              >
                About The Project
              </p>

              <h2
                className="
                  mt-5
                  text-4xl
                  font-bold
                  leading-tight
                  text-[#111]
                  md:text-5xl
                "
              >
                Designed with
                <br />

                <span
                  className="
                    font-serif
                    font-normal
                    italic
                    text-black/40
                  "
                >
                  purpose.
                </span>
              </h2>

              <p
                className="
                  mt-8
                  max-w-2xl
                  text-lg
                  leading-9
                  text-black/55
                "
              >
                {project.description}
              </p>

            </motion.div>


            {/* Highlights */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
            >

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.4em]
                  text-[#003466]
                "
              >
                Project Highlights
              </p>

              <div className="mt-6 border-t border-black/10">

                {project.highlights.map(
                  (highlight, index) => (

                    <div
                      key={highlight}
                      className="
                        flex
                        items-center
                        gap-4
                        border-b
                        border-black/10
                        py-5
                      "
                    >

                      <div
                        className="
                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#003466]
                          text-white
                        "
                      >
                        <Check size={14} />
                      </div>

                      <span className="text-base text-black/60">
                        {highlight}
                      </span>

                    </div>

                  )
                )}

              </div>

            </motion.div>

          </div>


          {/* =================================================
              PROJECT GALLERY
          ================================================= */}

          <div className="mt-28">

            <div className="mb-12 flex items-end justify-between">

              <div>

                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.4em]
                    text-[#003466]
                  "
                >
                  Project Gallery
                </p>

                <h2
                  className="
                    mt-4
                    text-4xl
                    font-bold
                    tracking-tight
                    text-[#111]
                    md:text-5xl
                  "
                >
                  Inside the project.
                </h2>

              </div>

              <span
                className="
                  hidden
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-black/30
                  md:block
                "
              >
                {project.gallery.length} Images
              </span>

            </div>


            {/* Images */}

            <div
              className="
                grid
                gap-5
                md:grid-cols-2
              "
            >

              {project.gallery.map((image, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.8,
      delay: index * 0.08,
    }}
    viewport={{
      once: true,
      amount: 0.1,
    }}
    className={`
      group
      relative
      overflow-hidden
      bg-transparent

      ${
        index === 0
          ? "md:col-span-2 flex justify-center"
          : ""
      }
    `}
  >
    <img
      src={image}
      alt={`${project.title} ${index + 1}`}
      className={`
        block
        object-contain
        transition-transform
        duration-1000
        group-hover:scale-105

        ${
          index === 0
            ? "w-full max-w-[1200px] h-auto"
            : "w-full h-auto"
        }
      `}
    />

    {/* Number */}
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

    {/* Hover Overlay */}
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
  </motion.div>
))}

            </div>

          </div>


          {/* =================================================
              BOTTOM CTA
          ================================================= */}

          <div
            className="
              mt-28
              flex
              flex-col
              items-start
              justify-between
              gap-8
              border-t
              border-black/10
              pt-10
              md:flex-row
              md:items-center
            "
          >

            <div>

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-black/40
                "
              >
                Have a similar project?
              </p>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-semibold
                  text-[#003466]
                "
              >
                Let's build it together.
              </h3>

            </div>

            <Link
              to="/contact"
              className="
                group
                flex
                items-center
                gap-3
                rounded-md
                bg-[#003466]
                px-7
                py-4
                text-sm
                uppercase
                tracking-[0.2em]
                text-white
                transition-all
                duration-500
                hover:bg-[#09a5ff]
              "
            >
              Start a Project

              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}