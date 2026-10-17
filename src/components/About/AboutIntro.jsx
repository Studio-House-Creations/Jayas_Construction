import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import hero from "../../assets/heroImage8.webp";
import AboutImage from "../../assets/aboutImage.webp";

const AboutIntro = () => {

  const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth ease-out

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      start = Math.floor(end * easedProgress);

      setCount(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, end]);

  return (
    <motion.span
      onViewportEnter={() => setStarted(true)}
      viewport={{
        once: true,
      }}
    >
      {count}
      {suffix}
    </motion.span>
  );
};

  return (
    <section className="relative overflow-hidden bg-[#ffffff] px-6 py-24 md:px-12 lg:px-20 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-24">

        {/* ================= LEFT - IMAGES ================= */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto h-[500px] w-full max-w-[550px]"
        >
          {/* Image 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="absolute left-0 top-0 z-10 h-[340px] w-[70%] overflow-hidden"
          >
            <img
              src={hero}
              alt="Our journey"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="absolute bottom-0 right-0 z-20 h-[300px] w-[62%] overflow-hidden border-[12px] border-[#f5f5f3]"
          >
                <img
                  src={AboutImage}
                  alt="Our work"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
          </motion.div>

          {/* Decorative Number */}
          <div className="absolute bottom-8 left-5 z-30">
            <span className="text-7xl font-black leading-none text-[#003466]/40 mix-blend-difference md:text-8xl">
              09
            </span>
          </div>
        </motion.div>

        {/* ================= RIGHT - CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Small Heading */}
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-black" />

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-black/60">
              Our Story
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-[#111] sm:text-5xl md:text-6xl">
            Ideas that grow into{" "}
            <span className="font-serif italic font-normal">
              experiences.
            </span>
          </h2>

          {/* Paragraph */}
          <p className="mt-8 max-w-xl text-base leading-8 text-black/60 md:text-lg">
            Founded on{" "}
            <span className="font-semibold text-black">
              28 August 2017
            </span>
            , we began our journey with a simple vision — to turn ideas into
            meaningful digital experiences. Over the years, we’ve grown through
            creativity, consistency, and the trust of our clients.
          </p>

          <p className="mt-5 max-w-xl text-base leading-8 text-black/60 md:text-lg">
            Today, we’re proud to have worked with{" "}
            <span className="font-semibold text-black">
              50+ happy clients
            </span>{" "}
            and successfully completed{" "}
            <span className="font-semibold text-black">
              50+ Construction
            </span>
            , creating digital solutions that are designed to connect, engage,
            and make an impact.
          </p>

          <div className="mt-12 grid grid-cols-3 border-t border-black/10 pt-8">

  {/* Stat 1 */}

  <div className="border-r border-black/10 pr-4">
    <h3 className="text-3xl font-bold tracking-tight text-black md:text-4xl">
      <Counter end={2017} />
    </h3>

    <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-black/50 md:text-xs">
      Since
    </p>
  </div>


  {/* Stat 2 */}

  <div className="border-r border-black/10 px-4">
    <h3 className="text-3xl font-bold tracking-tight text-black md:text-4xl">
      <Counter end={50} suffix="+" />
    </h3>

    <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-black/50 md:text-xs">
      Happy Clients
    </p>
  </div>


  {/* Stat 3 */}

  <div className="pl-4">
    <h3 className="text-3xl font-bold tracking-tight text-black md:text-4xl">
      <Counter end={50} suffix="+" />
    </h3>

    <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-black/50 md:text-xs">
      Construction
    </p>
  </div>

</div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutIntro;