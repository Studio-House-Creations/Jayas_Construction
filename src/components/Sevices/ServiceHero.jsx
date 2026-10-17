import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// =====================================================
// IMAGES
// =====================================================

import heroImage from "../../assets/servies1.webp";

import constructionImage from "../../assets/Construction.webp";
import architectImage from "../../assets/Architects.webp";
import steelImage from "../../assets/SteelStructure.webp";
import vasthuImage from "../../assets/VasthuPlan.webp";
import structuralImage from "../../assets/Consultant.webp";
import interiorImage from "../../assets/Interior.webp";
import renovationImage from "../../assets/Renovation.webp";
import elevationImage from "../../assets/3DElevation.webp";
import approvalImage from "../../assets/BuildingPlan.webp";

// =====================================================
// SERVICES DATA
// =====================================================

const services = [
  {
    id: "01",
    title: "Residential & Commercial Construction",
    description:
      "Complete construction solutions for residential and commercial spaces, combining quality materials, skilled workmanship, and practical execution.",
    image: constructionImage,
  },
  {
    id: "02",
    title: "Architects",
    description:
      "Thoughtful architectural planning that transforms ideas into functional, elegant, and purposeful spaces.",
    image: architectImage,
  },
  {
    id: "03",
    title: "Steel Structure",
    description:
      "Strong and reliable steel structure solutions designed for durability, flexibility, and efficient construction.",
    image: steelImage,
  },
  {
    id: "04",
    title: "Vasthu Plan",
    description:
      "Carefully planned layouts incorporating Vasthu principles while maintaining modern functionality and architectural aesthetics.",
    image: vasthuImage,
  },
  {
    id: "05",
    title: "Structural Design & Consultant",
    description:
      "Professional structural planning and consultation focused on safety, stability, efficiency, and long-term performance.",
    image: structuralImage,
  },
  {
    id: "06",
    title: "Interior & Modular Kitchen",
    description:
      "Beautiful and functional interior spaces with customized solutions and modern modular kitchen designs.",
    image: interiorImage,
  },
  {
    id: "07",
    title: "Renovation Work",
    description:
      "Transforming existing spaces through thoughtful renovation, improved functionality, modern finishes, and quality craftsmanship.",
    image: renovationImage,
  },
  {
    id: "08",
    title: "3D Elevation",
    description:
      "Detailed 3D elevation concepts that help visualize the architectural character and appearance of your building.",
    image: elevationImage,
  },
  {
    id: "09",
    title: "Building Plan Approval & Estimation",
    description:
      "Professional assistance with building plan approval and accurate project estimation to help you plan your construction with confidence.",
    image: approvalImage,
  },
];

// =====================================================
// HERO
// =====================================================

function ServicesHero() {
  return (
    <section
      className="
        relative
        h-[50vh]
        min-h-[400px]
        overflow-hidden
      "
    >
      {/* Background Image */}

      <motion.img
        src={heroImage}
        alt="Services"
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

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/45" />

      {/* Gradient */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/20
          via-black/30
          to-black/70
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
          px-5

          sm:px-6

          md:px-8
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
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          {/* Small Label */}

          <div
            className="
              mb-4
              flex
              items-center
              justify-center
              gap-3

              sm:mb-5
              sm:gap-4
            "
          >
            <span
              className="
                h-px
                w-7
                bg-white/70

                sm:w-12
              "
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-white/80

                sm:text-xs
                sm:tracking-[0.4em]
              "
            >
              What We Do
            </span>

            <span
              className="
                h-px
                w-7
                bg-white/70

                sm:w-12
              "
            />
          </div>

          {/* Main Title */}

          <h1
            className="
              text-5xl
              font-bold
              uppercase
              leading-none
              tracking-[-0.04em]
              text-white

              sm:text-6xl

              md:text-7xl

              lg:text-8xl

              xl:text-[110px]
            "
          >
            Services
          </h1>
        </motion.div>
      </div>
    </section>
  );
}

// =====================================================
// SERVICE ITEM
// =====================================================

function ServiceItem({ service, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.9,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="
        group
        border-t
        border-black/10
        py-10

        sm:py-12

        lg:py-16
      "
    >
      <div
        className="
          grid
          items-center
          gap-8

          sm:gap-10

          lg:grid-cols-[100px_1fr_420px]
          lg:gap-12
        "
      >
        {/* =================================================
            NUMBER
        ================================================= */}

        <div>
          <span
            className="
              text-xs
              font-medium
              tracking-[0.3em]
              text-black/30

              sm:text-sm
            "
          >
            {service.id}
          </span>
        </div>

        {/* =================================================
            TITLE + DESCRIPTION
        ================================================= */}

        <div>
          <h2
            className="
              max-w-3xl
              text-3xl
              font-semibold
              leading-tight
              tracking-tight

              /* MOBILE / TABLET = ALWAYS COLORED */

              text-[#003466]

              /* DESKTOP = BLACK BY DEFAULT */

              md:text-[#111]

              /* DESKTOP HOVER = BLUE */

              md:transition-all
              md:duration-500
              md:group-hover:text-[#003466]

              sm:text-4xl

              lg:text-5xl
            "
          >
            {service.title}
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-8
              text-black/50

              md:text-lg
            "
          >
            {service.description}
          </p>
        </div>

        {/* =================================================
            IMAGE
        ================================================= */}

        <div
          className="
            relative
            aspect-[4/3]
            overflow-hidden
            rounded-sm
            bg-black
          "
        >
          <motion.img
            src={service.image}
            alt={service.title}
            className="
              h-full
              w-full
              object-cover

              /* MOBILE / TABLET = ALWAYS COLOR */

              grayscale-0

              /* DESKTOP = GRAYSCALE */

              md:grayscale

              md:transition-all
              md:duration-700
              md:ease-out

              /* DESKTOP HOVER = COLOR */

              md:group-hover:grayscale-0
            "
            whileHover={{
              scale: 1.06,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* =================================================
              IMAGE OVERLAY
          ================================================= */}

          <div
            className="
              absolute
              inset-0

              /* MOBILE / TABLET */

              bg-black/0

              /* DESKTOP */

              md:bg-black/10

              md:transition-all
              md:duration-500

              /* DESKTOP HOVER */

              md:group-hover:bg-black/0
            "
          />

          {/* =================================================
              NUMBER ON IMAGE
          ================================================= */}

          <div
            className="
              absolute
              right-4
              top-4
              rounded-full
              bg-white/90
              px-3
              py-1
              text-xs
              font-semibold
              text-black

              /* Hide on mobile */

              opacity-0

              /* Show on desktop hover */

              md:transition-all
              md:duration-500
              md:group-hover:opacity-100
            "
          >
            {service.id}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// =====================================================
// SERVICES INTRO
// =====================================================

function ServicesIntro() {
  return (
    <section
      className="
        bg-[#f5f5f3]
        px-5
        py-20

        sm:px-6
        sm:py-24

        md:px-12
        md:py-28

        lg:px-20
        lg:py-32
      "
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="
            grid
            gap-10

            sm:gap-12

            lg:grid-cols-2
            lg:gap-24
          "
        >
          {/* =================================================
              HEADING
          ================================================= */}

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
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
            }}
          >
            <div
              className="
                mb-5
                flex
                items-center
                gap-3

                sm:mb-6
                sm:gap-4
              "
            >
              <span
                className="
                  h-px
                  w-8
                  bg-black

                  sm:w-12
                "
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-black/50

                  sm:text-xs
                  sm:tracking-[0.4em]
                "
              >
                Our Expertise
              </span>
            </div>

            <h2
              className="
                max-w-2xl
                text-4xl
                font-bold
                leading-[1]
                tracking-tight
                text-[#111]

                sm:text-5xl

                md:text-6xl
              "
            >
              Everything you need
              <br />

              <span
                className="
                  font-serif
                  font-normal
                  italic
                  text-black/50
                "
              >
                under one roof.
              </span>
            </h2>
          </motion.div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

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
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
            }}
            className="flex items-end"
          >
            <p
              className="
                max-w-xl
                text-base
                leading-7
                text-black/50

                sm:text-lg
                sm:leading-8

                md:text-xl
              "
            >
              From architectural planning and structural design
              to construction, interiors, renovation, and
              approvals, we provide complete solutions to bring
              your vision from concept to completion.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// =====================================================
// MAIN SERVICES PAGE
// =====================================================

export default function Services() {
  return (
    <main className="bg-[#f5f5f3]">
      {/* Hero */}

      <ServicesHero />

      {/* Intro */}

      <ServicesIntro />

      {/* Services */}

      <section
        className="
          bg-white
          px-5

          sm:px-6

          md:px-12

          lg:px-20
        "
      >
        <div className="mx-auto max-w-7xl">
          {services.map((service, index) => (
            <ServiceItem
              key={service.id}
              service={service}
              index={index}
            />
          ))}

          {/* Bottom Line */}

          <div className="border-t border-black/10 py-8 sm:py-10">
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-black/40

                sm:text-xs
                sm:tracking-[0.35em]
              "
            >
              Built with purpose. Designed to last.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}