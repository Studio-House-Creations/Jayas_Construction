import { createPortal } from "react-dom";
import { useRef, useEffect, useState } from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";
import "swiper/css/pagination";
import hero1 from "../../assets/heroImage1.webp";
import hero3 from "../../assets/heroImage3.webp";
import hero4 from "../../assets/balajinagar.webp";
import hero5 from "../../assets/heroImage6.webp";

import client4 from "../../assets/client4.jpg";

gsap.registerPlugin(ScrollTrigger);

// =====================================================
// TESTIMONIAL DATA
// =====================================================

const testimonials = [
  {
    id: 1,
    name: "Thurayur client",
    project: "Residential Villa",
    rating: 5,
    review:
      "Initially when I searched for an efficient building constructor after long analysis I choose Mr. Ragul(Jaya's construction Trichy) from the drawings plan and other protocols were successfully carried out by his guidance He regularly visited the field and offered guidance and his team effectively and efficiently constructed my dream home on time His construction is innovative and elegant and the quality of building is excellent which fulfilled my needs more than I expected He proved my choice of selection is the best. I assure that the Jaya's construction Trichy is the ultimate choice of building construction.",
    company: "Google Review",
    image: hero3,
  },
  {
    id: 2,
    name: "Balaji Nagar Client",
    project: "Residential Villa",
    rating: 5,
    review:
      "I had an excellent experience with Jaya’s Construction while building my home.Rahul,the project engineer,is highly knowledgeable, skilled, and professional. He listened carefully to our requirements, understood our vision, and translated it into high-quality workmanship.What impressed us most was his flexibility and customer-focused approach. He welcomed our suggestions, provided practical guidance, and never hesitated to accommodate our requests. He managed the civil construction work with great attention to detail, ensuring that every stage was completed efficiently and to a high standard.Jaya’s Construction also offers transparent, reasonable, and competitive pricing. After comparing several contractors, we found their services to be cost-effective and reliable without compromising on quality.We sincerely appreciate Rahul and the entire team for their dedication, cooperation, and commitment. I highly recommend Jaya’s Construction to anyone looking for dependable, professional, and affordable home construction services.",
    company: "Google Review",
    image: hero4,
  },
  {
    id: 3,
    name: "Anbu nagar Client",
    project: "Residential Villa",
    rating: 5,
    review:
      "Thank you Jayas team for giving shape to our dream. From planning to completion they are open to ideas, discussions and flexible. It's been a hassle free experience and every penny spent with Jayas team is worth it.",
    company: "Google Review",
    image: hero5,
  },
  {
    id: 4,
    name: "K.K.Kottai Client",
    project: "Residential Villa",
    rating: 5,
    review: "Beautiful interiors with premium finishing and exceptional attention to every detail. The team took the time to understand our ideas, preferences, and requirements, transforming our vision into a stunning reality. From the initial planning to the final touches, everything was handled with professionalism and care. The quality of materials, elegant designs, and flawless execution truly exceeded our expectations. Their creativity and commitment to perfection made the entire experience smooth and enjoyable. We are extremely happy with the results and highly recommend their interior design services to anyone looking for stylish, functional, and premium interiors.",
    company: "Google Review",
    image: hero1,
  },
];

// =====================================================
// TESTIMONIAL CARD
// =====================================================

function TestimonialCard({ testimonial }) {
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const reviewRef = useRef(null);

  useEffect(() => {
    const element = reviewRef.current;
    if (!element) return;

    const checkOverflow = () => {
      // Temporarily remove clamping to measure the full review height.
      element.classList.remove("line-clamp-4");
      const fullHeight = element.scrollHeight;
      element.classList.add("line-clamp-4");

      setShowReadMore(fullHeight > element.clientHeight + 2);
    };

    checkOverflow();
    const observer = new ResizeObserver(checkOverflow);
    observer.observe(element);
    window.addEventListener("resize", checkOverflow);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkOverflow);
    };
  }, [testimonial.review]);

  return (
    <div
      className="
        group
        relative
        flex
        h-[390px]
        flex-col
        overflow-hidden
        rounded-[28px]
        bg-white
        flex
        h-full
        flex-col
        p-8
        shadow-[0_15px_50px_rgba(0,0,0,0.06)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]
        sm:p-10
      "
    >

      {/* Quote Icon */}

      <Quote
        className="
          absolute
          right-8
          top-8
          h-24
          w-24
          rotate-180
          text-[#006B43]/10
        "
      />

      {/* =============================================
          CLIENT
      ============================================== */}

      <div className="relative z-10 flex items-center gap-5">

        {/* Client Image */}

        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="
            h-14
            w-14
            shrink-0
            sm:h-16
            sm:w-16
            rounded-sm
            object-cover
            transition
            duration-500
            group-hover:scale-110
          "
        />

        {/* Client Info */}

        <div>

          <h3
            className="
              text-lg
              font-semibold
              leading-snug
              text-[#003466]
              sm:text-xl
            "
          >
            {testimonial.name}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {testimonial.project}
          </p>

        </div>

      </div>

      
      {/* Review preview */}
      <div className="mt-7 sm:mt-8">
        <p className="line-clamp-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
          {testimonial.review}
        </p>
        {testimonial.review.length > 160 && (
          <button
            type="button"
            onClick={() => setIsReviewOpen(true)}
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#006B43] transition-colors hover:text-[#003466] focus:outline-none focus-visible:underline"
            aria-haspopup="dialog"
          >
            Read more <span aria-hidden="true">↗</span>
          </button>
        )}
      </div>

      {/* Full review modal */}
      {isReviewOpen && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/55 p-4 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsReviewOpen(false);
          }}
          role="presentation"
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby={`review-title-${testimonial.id}`}
            className="relative my-auto max-h-[calc(100dvh-2rem)] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-[0_25px_100px_rgba(0,0,0,0.25)] sm:max-h-[calc(100dvh-3rem)] sm:p-8"
          >
            <button
              type="button"
              onClick={() => setIsReviewOpen(false)}
              aria-label="Close review"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-xl text-gray-600 transition hover:bg-gray-100"
            >
              ×
            </button>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#006B43]">
              Client testimonial
            </p>
            <h3 id={`review-title-${testimonial.id}`} className="pr-10 text-xl font-semibold text-[#003466] sm:text-2xl">
              {testimonial.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{testimonial.project}</p>
            <div className="my-5 flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
              {[...Array(testimonial.rating)].map((_, index) => (
                <Star key={index} size={18} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            <p className="whitespace-pre-line text-base leading-7 text-gray-600">
              {testimonial.review}
            </p>
            <button
              type="button"
              onClick={() => setIsReviewOpen(false)}
              className="mt-7 rounded-full bg-[#006B43] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#005236]"
            >
              Close review
            </button>
          </section>
        </div>,
        document.body
      )}

      {/* Divider */}

      <div className="my-5 h-px w-full shrink-0 bg-gray-200 sm:my-6" />

      {/* =============================================
          BOTTOM
      ============================================== */}

      <div className="mt-auto flex shrink-0 items-center justify-between gap-4">

        {/* Stars */}

        <div className="flex gap-1">
          {[...Array(testimonial.rating)].map((_, index) => (
            <Star
              key={index}
              size={22}
              fill="#F59E0B"
              color="#F59E0B"
            />
          ))}
        </div>

        {/* Company */}

        <div className="flex items-center gap-3">

          <div className="h-3 w-3 rounded-full bg-[#09a5ff]" />

          <span className="font-semibold text-gray-700">
            {testimonial.company}
          </span>

        </div>

      </div>

    </div>
  );
}

// =====================================================
// MAIN TESTIMONIALS SECTION
// =====================================================

export default function Testimonials() {
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);

  // ===================================================
  // GSAP SCROLL ANIMATION
  // ===================================================

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      tl.from(".testimonial-heading", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }).from(
        ".testimonial-card",
        {
          y: 80,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="
        overflow-hidden
        bg-[#ffffff]/85
        py-24
        sm:py-28
      "
    >
      <div className="mx-auto max-w-[1500px] px-6 sm:px-8">

        {/* =============================================
            HEADING
        ============================================== */}

        <div className="testimonial-heading mb-14 text-center sm:mb-16">

          <p
            className="
              uppercase
              tracking-[6px]
              text-[#003466]
            "
          >
            Testimonials
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
            What Our Clients
            <br className="sm:hidden" /> Say About Us
          </h2>

        </div>

        {/* =============================================
            SWIPER
        ============================================== */}

        <Swiper
          modules={[
            Navigation,
            Pagination,
            Autoplay,
          ]}
          loop={true}
          speed={1000}
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".testimonial-pagination",
            clickable: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card h-full">
                <TestimonialCard
                  testimonial={testimonial}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* =============================================
            BOTTOM CONTROLS
        ============================================== */}

     <div
  className="
    mt-14
    flex
    w-full
    items-center
    justify-between
  "
>
  {/* Previous */}

  <button
    onClick={() => swiperRef.current?.slidePrev()}
    aria-label="Previous testimonial"
    className="
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      border
      border-[#006B43]
      text-[#006B43]
      transition-all
      duration-300
      hover:bg-[#006B43]
      hover:text-white
      sm:h-14
      sm:w-14
    "
  >
    <ChevronLeft size={22} />
  </button>

  {/* Pagination */}

  <div
    className="
      testimonial-pagination
      flex
      items-center
      justify-center
    "
  />

  {/* Next */}

  <button
    onClick={() => swiperRef.current?.slideNext()}
    aria-label="Next testimonial"
    className="
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      border
      border-[#006B43]
      text-[#006B43]
      transition-all
      duration-300
      hover:bg-[#006B43]
      hover:text-white
      sm:h-14
      sm:w-14
    "
  >
    <ChevronRight size={22} />
  </button>
</div>

      </div>
    </section>
  );
}