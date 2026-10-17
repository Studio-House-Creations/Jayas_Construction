import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

import contactHero from "../assets/contact.webp";

import { MdFacebook, MdEmail, MdPhone  } from "react-icons/md";
import { FaMapPin, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

// =====================================================
// CONTACT PAGE
// =====================================================

export default function Contact() {
  return (
    <main className="bg-[#ffffff]">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">

        {/* Background Image */}

        <motion.img
          src={contactHero}
          alt="Contact Jayas Construction"
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
            via-black/40
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

            <div className="mb-5 flex items-center justify-center gap-4">

              <span className="h-px w-12 bg-white/70" />

              <span
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.4em]
                  text-white/80
                "
              >
                Get In Touch
              </span>

              <span className="h-px w-12 bg-white/70" />

            </div>

            {/* Main Heading */}

            <h1
              className="
                text-6xl
                font-bold
                uppercase
                leading-none
                tracking-[-0.04em]
                text-white
                sm:text-7xl
                md:text-8xl
                lg:text-[110px]
              "
            >
              Contact
            </h1>

          </motion.div>

        </div>

       

      </section>


      {/* =================================================
          CONTACT INFORMATION
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

          {/* Intro */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="mb-20"
          >

            <div className="mb-6 flex items-center gap-4">

              <span className="h-px w-12 bg-black" />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.4em]
                  text-black/50
                "
              >
                Contact Us
              </span>

            </div>

            <div
              className="
                flex
                flex-col
                justify-between
                gap-8
                lg:flex-row
                lg:items-end
              "
            >

              <h2
                className="
                  max-w-4xl
                  text-4xl
                  font-bold
                  leading-[1]
                  tracking-tight
                  text-[#111]
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Let's build something
                <br />

                <span
                  className="
                    font-serif
                    font-normal
                    italic
                    text-black/50
                  "
                >
                  meaningful together.
                </span>
              </h2>

              <p
                className="
                  max-w-sm
                  text-base
                  leading-7
                  text-black/50
                "
              >
                Have a project in mind? We'd love to hear about your
                requirements and help turn your ideas into reality.
              </p>

            </div>

          </motion.div>


          {/* =================================================
              CONTACT GRID
          ================================================= */}

          <div
            className="
              grid
              gap-8
              lg:grid-cols-2
            "
          >

            {/* =============================================
                LEFT - CONTACT DETAILS
            ============================================== */}

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
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="
                border
                border-black/10
                bg-white
                p-8
                md:p-12
              "
            >

              <h3
                className="
                  text-2xl
                  font-semibold
                  text-[#111]
                  md:text-3xl
                "
              >
                Contact Information
              </h3>

              <p
                className="
                  mt-4
                  max-w-md
                  text-sm
                  leading-7
                  text-black/50
                  md:text-base
                "
              >
                Reach out to us through any of the following channels.
                Our team will be happy to discuss your project.
              </p>


              {/* Email */}

              <a
                href="mailto:info@jayasconstruction.com"
                className="
                  group
                  mt-10
                  flex
                  items-start
                  gap-5
                  border-t
                  border-black/10
                  pt-7
                "
              >

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#003466]
                    text-white
                  "
                >
                  <MdEmail size={20} />
                </div>

                <div>

                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.25em]
                      text-black/40
                    "
                  >
                    Email
                  </p>

                  <p
                    className="
                      mt-2
                      text-base
                      font-medium
                      text-[#111]
                      transition-colors
                      group-hover:text-[#003466]
                      md:text-lg
                    "
                  >
                    jayasconstruction@gmail.com
                  </p>

                </div>

              </a>


              {/* Phone */}

              <a
                href="https://wa.me/9894097585"
                className="
                  group
                  mt-7
                  flex
                  items-start
                  gap-5
                "
              >

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#003466]
                    text-white
                  "
                >
                  <MdPhone size={20} />
                </div>

                <div>

                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.25em]
                      text-black/40
                    "
                  >
                    Phone
                  </p>

                  <p
                    className="
                      mt-2
                      text-base
                      font-medium
                      text-[#111]
                      transition-colors
                      group-hover:text-[#003466]
                      md:text-lg
                    "
                  >
                    +91 9894097585
                  </p>

                </div>

              </a>


              {/* Address */}

              <div
                className="
                  mt-7
                  flex
                  items-start
                  gap-5
                "
              >

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#003466]
                    text-white
                  "
                >
                  <FaMapPin size={20} />
                </div>

                <div>

                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.25em]
                      text-black/40
                    "
                  >
                    Office Address
                  </p>

                  <p
                    className="
                      mt-2
                      text-base
                      leading-7
                      text-[#111]
                      md:text-lg
                    "
                  >
                    101, Ariyamangalam, Tanjore main road,
                    <br />
                     Trichy, Tamil Nadu
                  </p>

                </div>

              </div>


              {/* Social Media */}

              <div className="mt-10 border-t border-black/10 pt-8">

                <p
                  className="
                    mb-5
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-black/40
                  "
                >
                  Follow Us
                </p>

                <div className="flex items-center gap-3">

                  {/* Instagram */}

                  <a
                    href="https://www.instagram.com/jayas_construction?utm_source=qr&dlrf=aHZwczB1cHBlbmJ6"
                    aria-label="Instagram"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black/10
                      text-black/60
                      transition-all
                      duration-300
                      hover:border-[#003466]
                      hover:bg-[#003466]
                      hover:text-white
                    "
                  >
                    <AiFillInstagram size={19} />
                  </a>


                  {/* Facebook */}

                  <a
                    href="#"
                    aria-label="Facebook"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black/10
                      text-black/60
                      transition-all
                      duration-300
                      hover:border-[#003466]
                      hover:bg-[#003466]
                      hover:text-white
                    "
                  >
                    <MdFacebook size={19} />
                  </a>


                  {/* LinkedIn */}

                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black/10
                      text-black/60
                      transition-all
                      duration-300
                      hover:border-[#003466]
                      hover:bg-[#003466]
                      hover:text-white
                    "
                  >
                    <FaLinkedin size={19} />
                  </a>

                </div>

              </div>

            </motion.div>


            {/* =============================================
                RIGHT - MAP
            ============================================== */}

            
<motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  }}
  viewport={{
    once: true,
    amount: 0.2,
  }}
  className="
    relative
    min-h-[500px]
    overflow-hidden
    bg-[#ddd]
  "
>
  {/* Google Maps Embed */}
  <iframe
    title="Jayas Construction Location"
    src="https://www.google.com/maps?q=10.8095063,78.72217&output=embed"
    className="
      absolute
      inset-0
      h-full
      w-full
      border-0
      grayscale
      transition-all
      duration-700
      hover:grayscale-0
    "
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen
  />

  {/* Clickable Map Label */}
  <a
    href="https://www.google.com/maps/dir/?api=1&destination=10.8095063,78.72217"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Get directions to Jayas Construction"
    className="
      absolute
      bottom-6
      left-6
      z-10
      bg-white
      px-6
      py-4
      shadow-lg
      transition-transform
      duration-300
      hover:-translate-y-1
    "
  >
    <div className="flex items-center gap-3">
      <FaMapPin
        size={18}
        className="text-[#006B43]"
      />

      <div>
        <p className="text-sm font-semibold text-[#111]">
          Our Office
        </p>

        <p className="text-xs text-black/50">
          Trichy, Tamil Nadu
        </p>

        <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-[#006B43]">
          Get Directions ↗
        </p>
      </div>
    </div>
  </a>
</motion.div>

          </div>


          {/* =================================================
              WHATSAPP CTA
          ================================================= */}

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
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
            className="
              mt-8
              flex
              flex-col
              items-start
              justify-between
              gap-6
              bg-[#003466]
              p-8
              text-white
              md:flex-row
              md:items-center
              md:p-10
              rounded-sm
            "
          >

            <div>

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-white/50
                "
              >
                Quick Communication
              </p>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-semibold
                  md:text-3xl
                "
              >
                Have a project in mind?
              </h3>

              <p className="mt-2 text-sm text-white/60">
                Talk to our team directly on WhatsApp.
              </p>

            </div>


            {/* WhatsApp Button */}

            <a
              href="https://wa.me/9894097585"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                items-center
                gap-4
                rounded-md
                bg-[#25D366]
                px-7
                py-4
                font-semibold
                text-white
                transition-all
                duration-500
                hover:scale-105
                hover:bg-[#20bd5a]
              "
            >

              <MessageCircle size={22} />

              <span>
                Chat on WhatsApp
              </span>

              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />

            </a>

          </motion.div>

        </div>

      </section>

    </main>
  );
}