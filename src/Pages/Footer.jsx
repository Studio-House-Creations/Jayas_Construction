import Logo from "../assets/logo.png";

import {
MapPin,
Phone,
Mail,
ArrowRight,
} from "lucide-react";
import { FaFacebookSquare, FaInstagramSquare, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative">

      {/* Slanted Top */}

      <div
        className="
        h-36
        bg-[#ececec]
        [clip-path:polygon(0_100%,100%_0,100%_100%,0_100%)]
        "
      ></div>

      {/* Footer */}

      <div className="bg-[#ececec] text-white">

        <div className="mx-auto max-w-[1500px] px-8 py-24">

          {/* Top */}

          <div className="flex flex-col items-start justify-between gap-10 border-b border-white/10 pb-14 lg:flex-row lg:items-center">

            {/* Logo */}

            <div className="flex items-center gap-5">

              <Link to="/">
  <img
    src={Logo}
    alt="Jayas Construction"
    className="
      w-20
      transition-transform
      duration-300
      hover:scale-105
    "
  />
</Link>

              <div>

                <h2 className="text-3xl font-bold text-[#003466]">
                  Jayas Construction
                </h2>

                <p className="mt-2 text-gray-500">
                  Building Dreams. Creating Landmarks.
                </p>

              </div>

            </div>

            {/* Social */}

            <div className="flex gap-5">

              {[ FaFacebookSquare, FaInstagramSquare, FaYoutube, FaLinkedin].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    bg-gray-500
                    transition-all
                    duration-300
                    hover:bg-[#003466]
                    "
                  >
                    <Icon size={18} />
                  </button>
                )
              )}

            </div>

          </div>

          {/* Columns */}

          <div className="mt-16 grid gap-16 md:grid-cols-2 lg:grid-cols-3">

            {/* Quick Links */}

           {/* Quick Links */}

<div>
  <h3 className="mb-8 text-xl font-semibold text-gray-500">
    Quick Links
  </h3>

  <ul className="space-y-5 text-gray-400">

    <li>
      <Link
        to="/"
        className="
          group
          flex
          items-center
          gap-2
          transition-all
          duration-300
          text-gray-800
          hover:translate-x-2
          hover:text-[#003466]
        "
      >
        <span className="text-[#003466]">
          ›
        </span>

        Home
      </Link>
    </li>

    <li>
      <Link
        to="/about"
        className="
          group
          flex
          items-center
          gap-2
          transition-all
          duration-300
          text-gray-800
          hover:translate-x-2
          hover:text-[#003466]
        "
      >
        <span className="text-[#003466]">
          ›
        </span>

        About
      </Link>
    </li>

    <li>
      <Link
        to="/services"
        className="
          group
          flex
          items-center
          gap-2
          transition-all
          duration-300
          text-gray-800
          hover:translate-x-2
          hover:text-[#003466]
        "
      >
        <span className="text-[#003466]">
          ›
        </span>

        Services
      </Link>
    </li>

    <li>
      <Link
        to="/gallery"
        className="
          group
          flex
          items-center
          gap-2
          transition-all
          duration-300
          text-gray-800
          hover:translate-x-2
          hover:text-[#003466]
        "
      >
        <span className="text-[#003466]">
          ›
        </span>

        Gallery
      </Link>
    </li>

    <li>
      <Link
        to="/contact"
        className="
          group
          flex
          items-center
          gap-2
          transition-all
          duration-300
          text-gray-800
          hover:translate-x-2
          hover:text-[#003466]
        "
      >
        <span className="text-[#003466]">
          ›
        </span>

        Contact
      </Link>
    </li>

  </ul>
</div>

            {/* Services */}

            <div>

              <h3 className="mb-8 text-xl font-semibold text-gray-500">
                Services
              </h3>

              <ul className="space-y-5 text-gray-800">

                <li>Architectural Design</li>

                <li>Residential Villas</li>

                <li>Commercial Buildings</li>

                <li>Interior Design</li>

                <li>Renovation</li>

              </ul>

            </div>

            {/* Contact */}

<div>

<h3 className="mb-8 text-xl font-semibold text-gray-500">
Contact Us
</h3>

<div className="space-y-6">

<div className="flex items-start gap-4">

<MapPin className="mt-1 text-[#003466]" size={20}/>

<div>

<p className="text-gray-800">
 101, Ariyamangalam, Tanjore main road,
</p>

<p className="text-gray-800">
Trichy, Tamil Nadu
</p>

</div>

</div>

<div className="flex items-center gap-4">

<Phone
size={20}
className="text-[#003466]"
/>

<span className="text-gray-800">
+91 9894097585
</span>

</div>

<div className="flex items-center gap-4">

<Mail
size={20}
className="text-[#003466]"
/>

<span className="text-gray-800">
jayasconstruction@gmail.com
</span>

</div>

</div>

</div>



          </div>

              <div
className="
mt-20
flex
flex-col
items-center
justify-around
border-t
border-white/10
pt-8
text-gray-800
lg:flex-row
"
>

<p>

© 2026 Jayas Construction.
All Rights Reserved.

</p>

<p className="text-gray-800">

Designed &
Developed by{"  "}
<span className="text-[#003466] font-semibold">

   Studio House

</span>

</p>

</div>

        </div>

    

      </div>
      

    </footer>
  );
}