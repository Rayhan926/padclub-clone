import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { BsDiscord, BsInstagram, BsTwitter } from "react-icons/bs";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import Collapsible from "react-collapsible";
import cx from "classnames";

const navLinks = [
  {
    text: "HOME",
    url: "#HOME",
  },
  {
    text: "PROJECT",
    url: "#PROJECT",
  },
  {
    text: "ROADMAP",
    url: "#ROADMAP",
  },
  {
    text: "FAQ",
    url: "#FAQ",
  },
  {
    text: "THE TEAM",
    url: "#THE-TEAM",
  },
  {
    text: "WHITEPAPER",
    url: "#WHITEPAPER",
  },
  {
    text: "MINT",
    url: "#MINT",
  },
];

const socialIcons = [
  {
    icon: <FaEnvelope size={19} />,
    link: "mailto:services@padclub.io",
  },
  {
    icon: <BsDiscord size={20} />,
    link: "https://discord.gg/3MbWUDgbHd",
  },
  {
    icon: <BsTwitter size={20} />,
    link: "https://twitter.com/PadClub_io",
  },
  {
    icon: <BsInstagram size={20} />,
    link: "https://www.instagram.com/padclub_io/",
  },
];

const Header = () => {
  const [isOpenDropdwon, setIsOpenDropdwon] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-[999] bg-[#1c1c1cb8] py-7">
      <div className="container flex justify-end">
        <div className="hidden lg:block">
          <NavContents />
        </div>

        <div className="lg:hidden">
          <button
            className="text-white outline-none"
            onClick={() => setIsOpenDropdwon((prev) => !prev)}
          >
            {isOpenDropdwon ? (
              <IoCloseSharp size={28} />
            ) : (
              <IoMenuSharp size={28} />
            )}
          </button>
          <div
            className={cx(
              "fixed top-[90px] left-0 w-full h-[calc(100vh-90px)] bg-[#1c1c1cb8] z-[999] duration-100",
              isOpenDropdwon
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none",
            )}
          >
            <Collapsible trigger={""} open={isOpenDropdwon}>
              <NavContents />
            </Collapsible>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

const NavContents = () => {
  return (
    <nav className="flex flex-col lg:flex-row md:items-center gap-4 px-5 lg:px-0">
      <ul className="flex flex-col lg:flex-row md:items-center gap-2">
        {navLinks.map((link, i) => {
          return (
            <li key={i}>
              <a
                href={link.url}
                className="text-primary text-lg font-medium hover:underline block p-2"
              >
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="flex gap-2">
        {socialIcons.map((social, i) => (
          <li key={i}>
            <a
              href={social.link}
              className="text-primary hover:text-white block p-2"
            >
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
