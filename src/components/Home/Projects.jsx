import { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Building2,
  Ruler,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";

import hero1 from "../../assets/heroImage1.webp";
import hero2 from "../../assets/heroImage2.webp";
import hero3 from "../../assets/heroImage3.webp";
import hero4 from "../../assets/balajinagar.webp";
import hero5 from "../../assets/heroImage6.webp";
import hero6 from "../../assets/heroImage7.webp";

gsap.registerPlugin(ScrollTrigger);

// =====================================================
// PROJECT DATA
// =====================================================

const projects = [
  {
    id: 1,
    title: "K.K.Kottai Residences",
    type: "Residential Villa",
    location: "K.K.Kottai, Trichy",
    area: "1800 Sq.ft",
    status: "Ongoing",
    description:
      "Modern luxury villas designed with premium architecture and timeless elegance.",
    image: hero1,
  },
  {
    id: 2,
    title: "Kattur Residences",
    type: "Residential Villa",
    location: "Kattur, Trichy",
    area: "3500 Sq.ft",
    status: "Completed",
    description:
      "Premium residential apartments offering comfort and world-class amenities.",
    image: hero2,
  },
  {
    id: 3,
    title: "Thurayur Residences",
    type: "Residential Villa",
    location: "Thurayur, Trichy",
    area: "2117 Sq.ft",
    status: "Completed",
    description:
      "Commercial spaces built with modern infrastructure and sustainable design.",
    image: hero3,
  },
  {
      id: 4,
      title: "Balaji Nagar Residences",
      type: "Residential Villa",
      location: "Balaji nagar, Trichy",
      area: "4000 Sq.ft",
      status: "Completed",
      description:
        "Modern commercial development planned to provide functional workspaces with contemporary architectural design.",
      image: hero4,
    },
    {
        id: 5,
        title: "Kumaran Nagar Residences",
         type: "Residential Villa",
      location: "Kumaran Nagar, Trichy",
      area: "2700 Sq.ft",
      status: "Completed",
      description:
        "Modern commercial development planned to provide functional workspaces with contemporary architectural design.",
        image: hero6,
        
      },
      {
        id: 6,
        title: "Anbu Nagar Residences",
         type: "Residential Villa",
      location: "Anbu Nagar, Trichy",
      area: "1700 Sq.ft",
      status: "Completed",
      description:
        "Modern commercial development planned to provide functional workspaces with contemporary architectural design.",
        image: hero5,
        
      },
];

// =====================================================
// PROJECT CONTENT
// =====================================================

function ProjectContent({ project }) {
  const contentRef = useRef(null);
   const navigate = useNavigate();

  useEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".project-title",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        }
      )

        .fromTo(
          ".project-line",
          {
            scaleX: 0,
            transformOrigin: "left center",
          },
          {
            scaleX: 1,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.4"
        )

        .fromTo(
          ".detail-item",
          {
            x: -40,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.2"
        )

        .fromTo(
          ".project-btn",
          {
            y: 25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.2"
        );
    }, contentRef);

    return () => ctx.revert();
  }, [project]);

  const details = [
    {
      icon: <MapPin size={22} className="text-[#ffb000]" />,
      label: "Location",
      value: project.location,
    },
    {
      icon: <Building2 size={22} className="text-[#ffb000]" />,
      label: "Type",
      value: project.type,
    },
    {
      icon: <Ruler size={22} className="text-[#ffb000]" />,
      label: "Area",
      value: project.area,
    },
    {
      icon: <BadgeCheck size={22} className="text-[#ffb000]" />,
      label: "Status",
      value: project.status,
      badge: true,
    },
  ];

  return (
    <div
      ref={contentRef}
      className="
        rounded-lg
        bg-white/30
        p-6
        backdrop-blur-sm
        sm:p-8
        lg:p-10
      "
    >
      {/* Title */}

      <h2
        className="
          project-title
          text-center
          text-4xl
          font-bold
          text-[#003466]
          sm:text-5xl
        "
      >
        {project.title}
      </h2>

      {/* Divider */}

      <div className="project-line my-8 h-[2px] w-full bg-gray-300" />

      {/* Details */}

      <div className="space-y-7">
        {details.map((item) => (
          <div
            key={item.label}
            className="
              detail-item
              flex
              items-center
              justify-between
              gap-4
            "
          >
            {/* Left */}

            <div className="flex items-center gap-4">
              {item.icon}

              <span className="w-20 text-base text-gray-500 sm:w-28 sm:text-lg">
                {item.label}
              </span>
            </div>

            {/* Right */}

            {item.badge ? (
              <span
                className="
                  rounded-md
                  bg-green-100
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-[#006B43]
                  sm:px-5
                  sm:text-base
                "
              >
                {item.value}
              </span>
            ) : (
              <span
                className="
                  text-right
                  text-base
                  font-semibold
                  text-[#222]
                  sm:text-xl
                "
              >
                {item.value}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Button */}

     <Link
  to="/gallery"
  className="
    project-btn
    group
    mt-10
    inline-flex
    items-center
    gap-3
    rounded-md
    bg-[#003466]
    px-8
    py-4
    uppercase
    tracking-[2px]
    text-white
    transition-all
    duration-500
    hover:bg-[#09a5ff]
  "
>
  Explore Project
  <ArrowRight
    size={20}
    className="transition-transform duration-300 group-hover:translate-x-2"
  />
</Link>
    </div>
  );
}

// =====================================================
// MAIN PROJECTS SECTION
// =====================================================

export default function Projects() {
  const swiperRef = useRef(null);

  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  // ===================================================
  // SECTION ENTRANCE ANIMATION
  // ===================================================

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      tl.from(".project-heading", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

        .from(
          contentRef.current,
          {
            x: -80,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        )

        .from(
          imageRef.current,
          {
            x: 80,
            opacity: 0,
            scale: 1.08,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.9"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ===================================================
  // SLIDE CHANGE ANIMATION
  // ===================================================

  useEffect(() => {
    if (!contentRef.current || !imageRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      contentRef.current,
      {
        opacity: 0,
        x: -40,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power3.out",
      }
    ).fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 1.08,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    );

    return () => tl.kill();
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="overflow-hidden bg-[#ffffff]/85 py-24"
    >
      <div className="mx-auto max-w-[1500px] px-6 sm:px-8">

        {/* =============================================
            HEADING
        ============================================== */}

        <div className="project-heading mb-14 text-center">

          <p
            className="
              uppercase
              tracking-[6px]
              text-[#09a5ff]
            "
          >
            Our Showcase
          </p>

          <h2
            className="
              mt-4
              text-4xl
              font-bold
              text-gray-500
              sm:text-5xl
              lg:text-6xl
            "
          >
            Latest Signature
            <br className="sm:hidden" /> Projects
          </h2>

        </div>

        {/* =============================================
            MAIN LAYOUT
        ============================================== */}

        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[520px_1fr]
            lg:gap-20
          "
        >

          {/* =========================================
              LEFT CONTENT
          ========================================== */}

          <div ref={contentRef}>
            <ProjectContent
              project={projects[activeIndex]}
            />
          </div>

          {/* =========================================
              RIGHT IMAGE SLIDER
          ========================================== */}

          <div
            ref={imageRef}
            className="
              w-full
              overflow-hidden
              rounded-md
            "
          >
            <Swiper
              modules={[Autoplay]}
              loop={true}
              speed={1200}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex);
              }}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      h-[400px]
                      w-full
                      rounded-md object-fill
                      transition-all
                      duration-[6000ms]
                      hover:scale-[1.03]
                      sm:h-[500px]
                      lg:w-[500px]
                    "
                  />

                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>

        {/* =============================================
            BOTTOM CONTROLS
        ============================================== */}

        <div
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-between
            gap-8
            sm:flex-row
            lg:mt-16
          "
        >

          {/* Fraction */}

          <div className="flex items-center gap-5">

            <span
              className="
                text-3xl
                font-bold
                text-[#ffb000]
              "
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            {/* Progress */}

            <div
              className="
                relative
                h-[2px]
                w-32
                rounded-full
                bg-gray-300
                sm:w-44
              "
            >
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  bg-[#09a5ff]
                  transition-all
                  duration-700
                "
                style={{
                  width: `${
                    ((activeIndex + 1) / projects.length) * 100
                  }%`,
                }}
              />
            </div>

            <span
              className="
                text-3xl
                text-[#ffb000]/50
              "
            >
              {String(projects.length).padStart(2, "0")}
            </span>

          </div>

          {/* Navigation */}

          <div className="flex items-center gap-5">

            {/* Previous */}

            <button
              onClick={() =>
                swiperRef.current?.slidePrev()
              }
              aria-label="Previous project"
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-[#ffb000]
                text-[#ffb000]
                transition-all
                duration-300
                hover:bg-[#ffb000]
                hover:text-white
              "
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next */}

            <button
              onClick={() =>
                swiperRef.current?.slideNext()
              }
              aria-label="Next project"
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                border
                border-[#ffb000]
                text-[#ffb000]
                transition-all
                duration-300
                hover:bg-[#ffb000]
                hover:text-white
              "
            >
              <ChevronRight size={22} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}