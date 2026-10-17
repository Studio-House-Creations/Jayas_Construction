import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import gallery from "../assets/gallery.webp";

import hero1 from "../assets/heroImage1.webp";
import hero2 from "../assets/heroImage2.webp";
import hero3 from "../assets/heroImage3.webp";
import hero5 from "../assets/balajinagar.webp";
import hero6 from "../assets/heroImage6.webp";
import hero7 from "../assets/heroImage7.webp";
import hero8 from "../assets/ss5.webp";

// =====================================================
// PROJECT DATA
// =====================================================

const projects = [
  {
    id: 1,
    title: "K.K.Kottai Residences",
    location: "K.K.Kottai, Trichy",
    status: "Ongoing",
    image: hero1,
  },
  {
    id: 2,
    title: "Kattur Residences",
    location: "Kattur, Trichy",
    status: "Completed",
    image: hero2,
  },
  {
    id: 3,
    title: "Thurayur Residences",
    location: "Thurayur, Trichy",
    status: "Completed",
    image: hero3,
  },
  {
    id: 4,
    title: "Balaji Nagar Residences",
    location: "Balaji nagar, Trichy",
    status: "Completed",
    image: hero5,
  },
  {
    id: 5,
    title: "Kumaran Nagar Residences",
    location: "Kumaran Nagar, Trichy",
    status: "Completed",
    image: hero7,
  },
  {
    id: 6,
    title: "Anbu Nagar Residences",
    location: "Anbu Nagar, Trichy",
    status: "Completed",
    image: hero6,
  },
  {
    id: 7,
    title: "NMK Mathur Project",
    location: "Mathur, Trichy",
    status: "Completed",
    image: hero8,
  }
];

// =====================================================
// FILTER MENU
// =====================================================

const filters = [
  "All",
  "Completed",
  "Ongoing",
];

// =====================================================
// PROJECT CARD
// =====================================================

function ProjectCard({ project, index }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="block"
    >
      <motion.article
        layout
        initial={{
          opacity: 0,
          y: 60,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 40,
        }}
        transition={{
          duration: 0.7,
          delay: index * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="group cursor-pointer"
      >

        {/* Image */}

        <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-white">

          <img
            src={project.image}
            alt={project.title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-1000
              ease-out
              group-hover:scale-105
            "
          />

          <div className="
            absolute
            inset-0
            bg-black/0
            transition-all
            duration-500
            group-hover:bg-black/40
          " />

          <span className="
            absolute
            left-6
            top-6
            text-sm
            tracking-[0.25em]
            text-white
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
          ">
            {String(project.id).padStart(2, "0")}
          </span>

          <div className="
            absolute
            right-6
            top-6
            flex
            h-12
            w-12
            translate-y-4
            items-center
            justify-center
            rounded-full
            bg-white
            text-[#003466]
            opacity-0
            transition-all
            duration-500
            group-hover:translate-y-0
            group-hover:opacity-100
          ">
            <ArrowUpRight
              size={20}
              className="
                transition-transform
                duration-300
                group-hover:rotate-45
              "
            />
          </div>

          <div className="
            absolute
            bottom-5
            left-5
            rounded-full
            bg-white
            px-4
            py-2
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[#003466]
          ">
            {project.status}
          </div>

        </div>

        {/* Project Information */}

        <div className="mt-5">

          <div className="flex items-start justify-between gap-5">

            <div>

              <h3 className="
                text-2xl
                font-semibold
                tracking-tight
                text-[#003466]
                transition-colors
                duration-300
                group-hover:text-[#09a5ff]
                md:text-3xl
              ">
                {project.title}
              </h3>

              <p className="
                mt-2
                text-sm
                uppercase
                tracking-[0.2em]
                text-black/40
              ">
                {project.location}
              </p>

            </div>

            <span className="
              mt-2
              text-xs
              text-black/30
            ">
              {String(project.id).padStart(2, "0")}
            </span>

          </div>

          <div className="
            mt-5
            h-px
            w-full
            bg-black/10
            transition-all
            duration-500
            group-hover:bg-[#003466]/40"
          />

        </div>

      </motion.article>
    </Link>
  );
}


// =====================================================
// GALLERY PAGE
// =====================================================

export default function Gallery() {

  const [activeFilter, setActiveFilter] = useState("All");

  // Filter Projects

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.status === activeFilter
        );

  return (
    <main className="bg-white">

      {/* =================================================
          HERO
      ================================================= */}

      <section
        className="
          relative
          h-[50vh]
          min-h-[400px]
          overflow-hidden
        "
      >

        <motion.img
          src={gallery}
          alt="Our Projects"
          initial={{
            scale: 1.08,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1.8,
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

        <div className="absolute inset-0 bg-black/50" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/10
            via-black/40
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
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-center"
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
              Our Projects
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
              Gallery
            </h1>

          </motion.div>

        </div>

      </section>


      {/* =================================================
          PROJECTS
      ================================================= */}

      <section
        className="
          px-6
          py-24
          md:px-12
          lg:px-20
          lg:py-32
        "
      >

        <div className="mx-auto max-w-7xl">

          {/* Heading */}

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
            }}
            viewport={{
              once: true,
            }}
            className="
              flex
              flex-col
              justify-between
              gap-8
              lg:flex-row
              lg:items-end
            "
          >

            <div>

              <div className="mb-5 flex items-center gap-4">

                <span className="h-px w-12 bg-black" />

                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[0.4em]
                    text-black/50
                  "
                >
                  Our Work
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
                Projects built
                <br />

                <span
                  className="
                    font-serif
                    font-normal
                    italic
                    text-black/40
                  "
                >
                  to last.
                </span>
              </h2>

            </div>

            <p
              className="
                max-w-md
                text-base
                leading-8
                text-black/50
              "
            >
              Explore our completed and ongoing construction projects,
              created with precision, quality, and attention to detail.
            </p>

          </motion.div>


          {/* =================================================
              FILTER MENU
          ================================================= */}

          <div
            className="
              mt-16
              flex
              flex-wrap
              gap-3
              border-y
              border-black/10
              py-6
            "
          >

            {filters.map((filter) => (

              <button
                key={filter}
                onClick={() =>
                  setActiveFilter(filter)
                }
                className={`
                  rounded-md
                  border
                  px-7
                  py-3
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  transition-all
                  duration-300

                  ${
                    activeFilter === filter
                      ? "border-[#003466] bg-[#003466] text-white"
                      : "border-black/10 bg-transparent text-black/50 hover:border-[#003466] hover:text-[#003466]"
                  }
                `}
              >
                {filter}
              </button>

            ))}

          </div>


          {/* =================================================
              PROJECT GRID
          ================================================= */}

          <motion.div
            layout
            className="
              mt-14
              grid
              gap-x-8
              gap-y-16
              md:grid-cols-2
            "
          >

            <AnimatePresence mode="popLayout">

              {filteredProjects.map(
                (project, index) => (

                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />

                )
              )}

            </AnimatePresence>

          </motion.div>


          {/* Bottom */}

          <div
            className="
              mt-24
              border-t
              border-black/10
              pt-8
            "
          >

            <div
              className="
                flex
                items-center
                justify-between
              "
            >

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-black/40
                "
              >
                Building today. Shaping tomorrow.
              </p>

              <span
                className="
                  text-sm
                  font-medium
                  text-black/30
                "
              >
                {String(filteredProjects.length).padStart(2, "0")} Projects
              </span>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}