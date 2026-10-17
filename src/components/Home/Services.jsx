import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Architects from "../../assets/Architects.webp";
import SteelStructure from "../../assets/SteelStructure.webp";
import VasthuPlan from "../../assets/VasthuPlan.webp";
import Consultant from "../../assets/Consultant.webp";
import Interior from "../../assets/Interior.webp";
import Renovation from "../../assets/Renovation.webp";
import Elevation from "../../assets/3DElevation.webp";
import BuildingPlan from "../../assets/BuildingPlan.webp";
import Background from "../../assets/bgImage2.webp";


gsap.registerPlugin(ScrollTrigger);

// =====================================================
// SERVICES DATA
// =====================================================

const services = [
  {
    title: "Architects",
    image: Architects,
    path: "/services",
  },
  {
    title: "Steel Structure",
    image: SteelStructure,
    path: "/services",
  },
  {
    title: "Vasthu Plan",
    image: VasthuPlan,
    path: "/services",
  },
  {
    title: "Consultant",
    image: Consultant,
    path: "/services",
  },
  {
    title: "Interior",
    image: Interior,
    path: "/services",
  },
  {
    title: "Renovation",
    image: Renovation,
    path: "/services",
  },
  {
    title: "3D Elevation",
    image: Elevation,
    path: "/services",
  },
  {
    title: "Building Plan",
    image: BuildingPlan,
    path: "/services",
  },
];

// =====================================================
// SERVICE CARD
// =====================================================

function ServiceCard({ title, image, path }) {
  return (
    <Link
      to={path}
      className="group block cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-md">

        {/* Image */}

        <img
          src={image}
          alt={title}
          className="
            h-[520px]
            w-full
            object-cover
            transition-all
            duration-700
            group-hover:scale-110

            sm:h-[560px]

            lg:h-[520px]
          "
        />

        {/* Gradient Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/60
            via-black/10
            to-transparent
          "
        />

        {/* Content */}

        <div
          className="
            absolute
            bottom-0
            left-0
            rounded-md
            bg-[#003466]
            px-7
            py-5
            transition-all
            duration-500
            group-hover:w-full
          "
        >
          <div className="flex items-center justify-between gap-4">

            {/* Title */}

            <h3 className="text-2xl font-semibold text-white">
              {title}
            </h3>

            {/* Arrow */}

            <ArrowUpRight
              className="
                shrink-0
                text-white
                transition
                duration-500
                group-hover:rotate-45
              "
            />

          </div>
        </div>

      </div>
    </Link>
  );
}

// =====================================================
// SERVICES SECTION
// =====================================================

export default function Services() {
  const sectionRef = useRef(null);

  // ===================================================
  // GSAP SCROLL ANIMATION
  // ===================================================

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
          markers: false,
        },
      });

      // Heading Animation

      tl.from(".services-heading", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

        // Cards Animation

        .from(
          ".service-card",
          {
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.3"
        );
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
   <section
  ref={sectionRef}
  id="services"
  className="
    relative
    overflow-hidden
    py-24
    sm:py-28
    lg:py-32
  "
>
  {/* =============================================
      BACKGROUND IMAGE
  ============================================== */}

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

    {/* Background Overlay */}

    <div className="
      absolute
      inset-0
    " />

  </div>


  {/* =============================================
      CONTENT
  ============================================== */}

  <div className="
    relative
    z-10
    mx-auto
    max-w-7xl
    px-6
    sm:px-8
  ">

    {/* Heading */}

    <div className="
      services-heading
      mb-16
      text-center
      sm:mb-20
    ">

      <p
        className="
          uppercase
          tracking-[6px]
          text-[#09a5ff]
        "
      >
        We Offering
      </p>

      <h2
        className="
          mt-4
          text-4xl
          font-bold
          leading-tight
          text-gray-500
          sm:text-5xl
          lg:text-6xl
        "
      >
        Building Excellence
        <br className="sm:hidden" />
        Every Step.
      </h2>

    </div>


    {/* Service Cards */}

    <div
      className="
        grid
        gap-8
        md:grid-cols-2
        xl:grid-cols-4
        xl:gap-12
      "
    >

      {services.map((service, index) => (

        <div
          key={`${service.title}-${index}`}
          className={`
            service-card

            ${
              index % 2 === 1
                ? "xl:mt-20"
                : ""
            }
          `}
        >

          <ServiceCard {...service} />

        </div>

      ))}

    </div>

  </div>

</section>
  );
}