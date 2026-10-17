import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutVideo from "../../assets/HeroVideo.mp4"

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const letters = titleRef.current.querySelectorAll(".letter");

      const tl = gsap.timeline();

      // Initial states
      gsap.set(letters, {
        y: 120,
        opacity: 0,
        rotateX: 90,
      });

      gsap.set(subtitleRef.current, {
        y: 30,
        opacity: 0,
      });

      gsap.set(videoRef.current, {
        scale: 1.15,
      });

      // Video entrance
      tl.to(videoRef.current, {
        scale: 1,
        duration: 2,
        ease: "power3.out",
      });

      // ABOUT letters
      tl.to(
        letters,
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.08,
          ease: "power4.out",
        },
        "-=1.3"
      );

      // Subtitle
      tl.to(
        subtitleRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.7"
      );

      // Scroll animation
      gsap.to(videoRef.current, {
        scale: 1.12,
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(titleRef.current, {
        yPercent: -25,
        opacity: 0.8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={aboutVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Cinematic Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">

        {/* Small Label */}
        <div
          ref={subtitleRef}
          className="mb-6 overflow-hidden text-sm font-medium uppercase tracking-[0.5em] text-white/70 md:text-base"
        >
          Who We Are
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="flex overflow-hidden text-[10vw] font-black uppercase leading-[0.75] tracking-[-0.06em] text-white"
          style={{
            perspective: "1000px",
          }}
        >
          {"ABOUT".split("").map((letter, index) => (
            <span
              key={index}
              className="letter inline-block"
              style={{
                transformOrigin: "center bottom",
              }}
            >
              {letter}
            </span>
          ))}
        </h1>

        {/* Bottom Text */}
        <div className="absolute bottom-10 left-0 flex w-full justify-between px-6 text-xs uppercase tracking-[0.3em] text-white/60 md:px-12">

          <span>Scroll to explore ↓</span>
        </div>
      </div>
    </section>
  );
};

export default About;