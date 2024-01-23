"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [shadow, setShadow] = useState("0");
  const [bg, setbg] = useState("transparent");

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroud);
  }, []);
  const changeBackgroud = () => {
    if (window.scrollY > 50) {
      setShadow("shadow-2xl");
      setbg("bg-white");
    } else {
      setShadow("shadow-0");
      setbg("bg-transparent");
    }
  };

  return (
    <nav
      className={`flexBetween padding-container fixed z-30 py-3 ${shadow}  w-screen transition-all ease-in-out duration-300 ${bg}`}
    >
      <Link href="/" className="flex justify-center items-center gap-3">
        <Image
          src="/logo.jpg"
          alt="logo"
          width={74}
          height={29}
          className="rounded-full"
        />
        <span className="text-semibold">AUROTRAVELS</span>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div> */}

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
