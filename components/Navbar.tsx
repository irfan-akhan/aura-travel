"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [shadow, setShadow] = useState("0");
  const [bg, setBg] = useState("transparent");

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  const changeBackground = () => {
    if (window.scrollY > 50) {
      setShadow("shadow-2xl");
      setBg("bg-white");
    } else {
      setShadow("shadow-0");
      setBg("bg-transparent");
    }
  };

    return (
      <nav
        className={` padding-container fixed z-30 py-3 ${shadow}  w-screen transition-all ease-in-out duration-300 ${bg}`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-5 max-[600px]:hidden">
          <Link
            href="/"
            className="text-black font-semibold text-2xl flex justify-center items-center gap-2 -z-1 [600px]:hidden"
          >
            <Image
              src="/logo.jpg"
              alt="logo"
              loading="lazy"
              width={60}
              height={60}
              className="rounded-full "
            />
            Aura Stays
          </Link>
          {/* <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            href="https://wa.me/917051695835"
            type="button"
            className="text-white bg-[#25D366]  font-medium text-sm px-6 py-3 text-center flex items-center justify-center gap-1"
          >
            <FaWhatsapp color="#fff" fontSize={20} /> WhatsApp
          </Link>
        </div> */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 poppins z-50"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 poppins">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 poppins"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#tours"
                  className="block py-2 px-3 "
                >
                  Tour
                </Link>
              </li>
              <li>
                <Link
                  href="/#hotels"
                  className="block py-2 px-3"
                >
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className="block py-2 px-3"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="block py-2 px-3"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3 max-[600px]:flex max-[600px]:justify-between min-[768px]:hidden">
          <Link
            href="/"
            className="text-white font-semibold text-xl flex justify-center items-center gap-2 -z-1"
          >
            <Image
              src="/logo.jpg"
              alt="logo"
              loading="lazy"
              width={60}
              height={60}
              className="rounded-full"
            />
          </Link>
          <span className="text-normal text-lg text-green-300 w-36">
            Beauty and Trust Tour and Travels
          </span>
          <div className="flex">
            <div onClick={() => setNav(!nav)}>
              {nav ? (
                <IoMdClose size={30} color="#B8BDC6" />
              ) : (
                <RxHamburgerMenu size={30} color="#B8BDC6" />
              )}
            </div>

            <Link
              href="https://wa.me/917051695835"
              type="button"
              className="text-white bg-transparent  font-medium text-sm px-6 py-3 text-center flex items-center justify-center gap-1 max-[600px]:absolute max-[600px]:-bottom-[80vh] max-[600px]:right-0 max-[600px]:z-50"
            >
              <Image
                src="/whatsapp.png"
                width={50}
                height={50}
                alt="whatsApp-Icon"
                loading="lazy"
              />
            </Link>
            {nav ? (
              <ul className="flex flex-col gap-3 font-medium text-center pt-20 h-screen w-full mt-10 absolute top-10 left-0 text-lg">
                <li>
                  <Link
                    href="/"
                    className="block py-2 px-3 md:p-0 text-white bg-transparent"
                    aria-current="page"
                    onClick={() => setNav(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#tours"
                    className="block py-2 px-3 md:p-0 text-white bg-transparent"
                    onClick={() => setNav(false)}
                  >
                    Tour
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#hotels"
                    className="block py-2 px-3 md:p-0 text-white bg-transparent"
                    onClick={() => setNav(false)}
                  >
                    Hotels
                  </Link>
                </li>
                <li>
                  <Link
                    href="/aboutus"
                    className="block py-2 px-3 md:p-0 text-white rounded bg-transparent"
                    onClick={() => setNav(false)}
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block py-2 px-3 md:p-0 text-white rounded bg-transparent"
                    onClick={() => setNav(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </nav>
    );
  };


export default Navbar;
