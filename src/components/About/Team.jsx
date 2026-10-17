import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: "00",
    type: "workforce",
  },
  {
    id: "01",
    name: "Mr. Abishek",
    role: "Material Procurement",
    category: "Procurement",
  },
  {
    id: "02",
    name: "Er. Guna DCE",
    role: "Site Engineer",
    category: "Engineering",
  },
  {
    id: "03",
    name: "Er. J. Dinesh DCE",
    role: "Chief Site Engineer",
    category: "Engineering",
  },
  {
    id: "04",
    name: "Er. Dharshini BE.Civil",
    role: "Managing Director",
    category: "Management",
  },
  {
    id: "05",
    name: "Er. V. Ragul DCE",
    role: "Founder - Jayas Groups",
    category: "Leadership",
  },
];

const Team = () => {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 text-[#111] md:px-12 lg:px-20 lg:py-32">

      {/* =====================================================
          SUBTLE BACKGROUND GRID
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(#000 1px, transparent 1px),
            linear-gradient(90deg, #000 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.header
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-20"
        >

          {/* Section Label */}

          <div className="mb-8 flex items-center gap-4">

            <span className="h-px w-10 bg-[#111]" />

            <span className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.35em]
              text-black/45
            ">
              Our Leadership
            </span>

          </div>

          {/* Header Grid */}

          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-8">

              <h2 className="
                max-w-4xl
                text-5xl
                font-semibold
                leading-[0.95]
                tracking-[-0.055em]
                sm:text-6xl
                md:text-7xl
              ">
                The people
                <br />

                <span className="font-serif font-normal italic text-black/35">
                  behind our work.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-4">

              <p className="
                max-w-sm
                text-sm
                leading-7
                text-black/50
                md:text-base
              ">
                Experienced professionals working together to deliver
                quality, precision and dependable results across every
                project.
              </p>

            </div>

          </div>

        </motion.header>

        {/* =====================================================
            TEAM DIRECTORY
        ===================================================== */}

        <div className="border-t border-black/10">

          {teamMembers.map((member, index) => (
            member.type === "workforce" ? (
              <motion.article
                key={member.id}
                initial={{ opacity: 0, y: 35, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative my-8 overflow-hidden border border-black/10 bg-[#f7f7f5] p-7 sm:p-10 md:my-10 md:p-12"
              >
                <motion.span
                  aria-hidden="true"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="absolute left-0 top-0 h-1 w-full origin-left bg-black"
                />
                <div className="relative z-10 grid gap-6 md:grid-cols-12 md:items-end md:gap-8">
                  <div className="md:col-span-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-black/45">
                      Our Strength
                    </p>
                    <motion.p
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.65, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="mt-4 text-6xl font-semibold leading-none tracking-[-0.08em] sm:text-7xl md:text-8xl"
                    >
                      100<span className="text-black/35">+</span>
                    </motion.p>
                    <p className="mt-3 text-xs font-medium uppercase tracking-[0.22em] text-black/50 sm:text-sm">
                      Skilled Workers
                    </p>
                  </div>
                  <div className="md:col-span-7 md:border-l md:border-black/10 md:pl-8">
                    <p className="max-w-2xl font-serif text-2xl italic leading-snug text-black/75 sm:text-3xl md:text-4xl">
                      “Great work is never built by one person — it takes a team.”
                    </p>
                    <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.28em] text-black/40 sm:text-[10px]">
                      Stronger together. Built on trust.
                    </p>
                  </div>
                </div>
                <span aria-hidden="true" className="pointer-events-none absolute -bottom-16 right-2 font-serif text-[220px] leading-none text-black/[0.035] sm:text-[280px]">
                  +
                </span>
              </motion.article>
            ) : (
            <motion.article
              key={member.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="
                group
                relative
                border-b
                border-black/10
                px-5
                sm:px-8
                md:px-10
              "
            >

              {/* Hover Background */}

              <div className="
                pointer-events-none
                absolute
                inset-0
                origin-left
                scale-x-0
                bg-[#f7f7f5]
                transition-transform
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-x-100
              " />

              {/* =================================================
                  DESKTOP ROW
              ================================================= */}

              <div className="
                relative
                grid
                min-h-[190px]
                items-center
                gap-5
                py-10
                md:grid-cols-12
                md:gap-6
                md:py-12
              ">

                {/* NUMBER */}

                <div className="md:col-span-2">

                  <div className="flex items-center gap-4">

                    <span className="
                      font-mono
                      text-[11px]
                      tracking-[0.25em]
                      text-black/35
                    ">
                      {member.id}
                    </span>

                    <span className="
                      hidden
                      h-px
                      w-8
                      bg-black/20
                      md:block
                    " />

                  </div>

                </div>

                {/* NAME */}

                <div className="min-w-0 md:col-span-5">

                  <div className="min-w-0">

                    <motion.h3
                      className="
                        max-w-full
                        break-words
                        [overflow-wrap:anywhere]
                        text-2xl
                        font-semibold
                        leading-tight
                        tracking-[-0.035em]
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                        sm:text-3xl
                        lg:text-4xl
                      "
                    >
                      {member.name}
                    </motion.h3>

                  </div>

                  <div className="mt-3 flex items-center gap-3">

                    <span className="
                      h-1
                      w-1
                      rounded-full
                      bg-black/50"
                    />

                    <span className="
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.3em]
                      text-black/40
                    ">
                      {member.category}
                    </span>

                  </div>

                </div>

                {/* ROLE */}

                <div className="md:col-span-3">

                  <p className="
                    max-w-xs
                    text-sm
                    leading-6
                    text-black/50
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                  ">
                    {member.role}
                  </p>

                </div>

              </div>

              {/* =================================================
                  HOVER LINE
              ================================================= */}

              <div className="
                absolute
                bottom-0
                left-0
                h-[2px]
                w-full
                origin-left
                scale-x-0
                bg-black
                transition-transform
                duration-700
                group-hover:scale-x-100
              " />

            </motion.article>
            )
          ))}

        </div>

        {/* =====================================================
            BOTTOM INFORMATION
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="
            grid
            gap-8
            border-y
            border-black/10
            py-10
            md:grid-cols-2
          "
        >

          {/* Workforce statistic is highlighted first in the team directory above. */}

          {/* Item 02 — Expertise */}

          <div>
            <span className="
              block
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-black/40
            ">
              Expertise
            </span>

            <span className="
              mt-2
              block
              text-sm
              font-medium
            ">
              Engineering · Management · Procurement
            </span>
          </div>

          {/* Item 03 — Philosophy */}

          <div className="md:text-right">
            <span className="
              block
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-black/40
            ">
              Philosophy
            </span>

            <span className="
              mt-2
              block
              text-sm
              font-medium
            ">
              Precision in every detail.
            </span>
          </div>

        </motion.div>

        {/* =====================================================
            FOOTER STATEMENT
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
            gap-6
            pt-8
            md:flex-row
            md:items-center
          "
        >

          <p className="
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-black/30
          ">
            Jayas Groups
          </p>

          <p className="
            text-xs
            text-black/40
          ">
            Different expertise. One vision.
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default Team;