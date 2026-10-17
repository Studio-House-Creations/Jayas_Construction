import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../assets/logo.png";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  /* ==========================================
     HANDLE SCROLL
  ========================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ==========================================
     CLOSE MOBILE MENU ON PAGE CHANGE
  ========================================== */

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /* ==========================================
     PREVENT BODY SCROLL WHEN MOBILE MENU OPEN
  ========================================== */

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        w-full
        transition-all
        duration-500

        ${
          scrolled
            ? "bg-[#F8F6F2]/95 py-2 shadow-xl backdrop-blur-xl"
            : "bg-transparent py-3"
        }
      `}
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]
          px-4

          sm:px-6

          md:px-8
        "
      >
        {/* =====================================================
            DESKTOP NAVBAR
        ===================================================== */}

        <div
          className="
            hidden
            items-center
            gap-4

            lg:grid
            lg:grid-cols-[140px_minmax(0,1fr)_200px]

            xl:grid-cols-[170px_minmax(0,1fr)_240px]

            2xl:grid-cols-[170px_minmax(0,1fr)_320px]
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <div className="flex items-center">
            <Link
              to="/"
              aria-label="Jayas Construction Home"
            >
              <img
                src={Logo}
                alt="Jayas Construction"
                className="
                  w-16
                  object-contain

                  xl:w-20
                "
              />
            </Link>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div className="flex min-w-0 justify-center">
            <nav
              className={`
                flex
                h-14
                max-w-full
                items-center
                rounded-lg
                px-4

                xl:px-6

                2xl:px-8

                transition-all
                duration-500

                ${
                  scrolled
                    ? `
                      bg-[#F8F6F2]/95
                      border
                      border-[#003466]/10
                      shadow-sm
                      backdrop-blur-xl
                    `
                    : `
                      border
                      border-white/20
                      bg-white/10
                      backdrop-blur-xl
                    `
                }
              `}
            >
              <ul
                className="
                  flex
                  items-center
                  justify-center
                  gap-5

                  xl:gap-7

                  2xl:gap-10
                "
              >
                {navLinks.map((item) => {
                  const active =
                    location.pathname === item.path;

                  return (
                    <li
                      key={item.name}
                      className="shrink-0"
                    >
                      <Link
                        to={item.path}
                        className={`
                          relative
                          whitespace-nowrap
                          uppercase
                          text-xs
                          font-medium
                          tracking-wide
                          transition-all
                          duration-300

                          xl:text-[16px]

                          2xl:text-[15px]

                          after:absolute
                          after:-bottom-1
                          after:left-0
                          after:h-[2px]
                          after:bg-current
                          after:transition-all

                          ${
                            active
                              ? "after:w-full"
                              : "after:w-0 hover:after:w-full"
                          }

                          ${
                            scrolled
                              ? "text-[#003466]"
                              : "text-white"
                          }
                        `}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* =================================================
              INTERIORS CTA
          ================================================= */}

          <div className="flex justify-end">
            <Link
              to="/interior"
              className={`
                flex
                h-14
                w-full
                max-w-[180px]
                items-center
                justify-center
                gap-2
                rounded-lg
                px-3
                uppercase
                text-xs
                font-semibold
                tracking-[1.2px]
                transition-all
                duration-500

                xl:max-w-[210px]
                xl:text-sm
                xl:tracking-[1.5px]

                2xl:max-w-[220px]

                ${
                  scrolled
                    ? `
                      bg-[#003466]
                      text-white
                      hover:bg-[#09a5ff]
                    `
                    : `
                      border
                      border-white/20
                      bg-white/10
                      text-white
                      backdrop-blur-xl
                      hover:bg-white
                      hover:text-black
                    `
                }
              `}
            >
              <ChevronRight size={18} />

              <span>Interiors</span>
            </Link>
          </div>
        </div>

        {/* =====================================================
            MOBILE + TABLET HEADER
        ===================================================== */}

        <div
          className="
            flex
            h-12
            items-center
            justify-between

            lg:hidden
          "
        >
          {/* LOGO */}

          <Link
            to="/"
            aria-label="Jayas Construction Home"
            className="shrink-0"
          >
            <img
              src={Logo}
              alt="Jayas Construction"
              className="
                w-20
                object-contain

                sm:w-24

                md:w-28
              "
            />
          </Link>

          {/* MENU BUTTON */}

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={
              open ? "Close menu" : "Open menu"
            }
            aria-expanded={open}
            className={`
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              transition-all
              duration-300

              ${
                scrolled
                  ? "bg-[#003466]/5 text-[#003466]"
                  : "bg-white/10 text-white backdrop-blur-md"
              }
            `}
          >
            {open ? (
              <X
                size={27}
                strokeWidth={1.8}
              />
            ) : (
              <Menu
                size={27}
                strokeWidth={1.8}
              />
            )}
          </button>
        </div>

        {/* =====================================================
            MOBILE / TABLET MENU
        ===================================================== */}

        <div
          className={`
            overflow-hidden
            transition-all
            duration-500
            ease-in-out

            lg:hidden

            ${
              open
                ? "max-h-[600px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className={`
              mt-4
              rounded-2xl
              p-5
              shadow-2xl
              backdrop-blur-xl
              transition-all
              duration-500

              sm:p-6

              ${
                scrolled
                  ? "bg-[#F8F6F2]/95"
                  : "bg-white/95"
              }
            `}
          >
            {/* NAV LINKS */}

            <nav>
              <ul>
                {navLinks.map((item) => {
                  const active =
                    location.pathname === item.path;

                  return (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className={`
                          block
                          border-b
                          border-black/5
                          py-3
                          text-base
                          font-medium
                          transition-all
                          duration-300

                          sm:py-4
                          sm:text-lg

                          ${
                            active
                              ? "pl-2 text-[#003466]"
                              : "text-[#003466] hover:pl-2 hover:text-[#09a5ff]"
                          }
                        `}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* MOBILE CTA */}

            <Link
              to="/interior"
              className="
                mt-5
                flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#003466]
                px-4
                text-sm
                font-semibold
                uppercase
                tracking-wide
                text-white
                transition-all
                duration-300

                hover:bg-[#09a5ff]

                sm:h-14
                sm:text-base
              "
            >
              <ChevronRight size={18} />

              <span>Interiors</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}