import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { Spin as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { RxCross2 } from "react-icons/rx";
import Router, { useRouter } from "next/router";

function Navibar() {
  const [isOpen, setIsOpen] = useState(false);
  const Router = useRouter();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="w-full  h-[90px]">
      <div className="w-full max-w-[1200px] h-full text-white m-auto flex justify-between items-center md:px-4 px-6">
        {/* =====> logo */}
        <div className="flex gap-3 justify-center items-center">
          <div className=" flex justify-center items-center w-[75px] h-[70px] relative">
            <Image src="/logo.png" fill alt="logo"></Image>
          </div>
          <h2 className="uppercase text-[24px] font-Playfair">cannabis</h2>
        </div>
        {/* ========> links */}
        <div className="justify-center items-center lg:flex hidden gap-10">
          {navigate.map((navi, index) => {
            return (
              <Link
                key={index}
                href={navi.path}
                scroll={true}
                className={`font-OpenSans text-[18px]`}
              >
                {navi.label}
              </Link>
            );
          })}
        </div>
        {/* ========> Social icons */}
        <div className=" justify-center items-center lg:flex hidden gap-6">
          {SocilIcons.map((navi, index) => {
            return (
              <Link href="" key={index}>
                {navi.label}
              </Link>
            );
          })}
        </div>
        {/* ==========> Humburger */}
        <div className="lg:hidden w-full flex justify-end items-center ">
          <Hamburger
            className=" text-white"
            color="white"
            rounded
            size={34}
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="drawer"
        >
          <div className="flex flex-col p-6 justify-center items-center ">
            {/* =========>top bar */}
            <div className="w-full flex justify-end items-center">
              <RxCross2 onClick={toggleDrawer} className="text-[60px]  " />
            </div>
            {/* ========> sections links */}
            <div className="flex flex-col justify-center items-center gap-8 mt-16">
              {navigate.map((navi, index) => {
                return (
                  <Link onClick={toggleDrawer} href={navi.path} className="font-OpenSans text-[34px]">
                    {navi.label}
                  </Link>
                );
              })}
            </div>
            {/* ========> social links */}
            <div className="flex items-center justify-center gap-8 mt-20">
              {mobileSocialLinks.map((navi, index) => {
                return (
                  <Link href="/" key={index}>
                    {navi.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

const navigate = [
  {
    label: "Home",
    path: "#home",
  },
  {
    label: "About Us",
    path: "#about",
  },
  {
    label: "Roadmap",
    path: "#roadmap",
  },
  {
    label: "Faq",
    path: "#faq",
  },
  {
    label: "Our Team",
    path: "#team",
  },
];

const SocilIcons = [
  {
    label: <AiOutlineTwitter className="text-white text-[30px]" />,
  },
  {
    label: <AiFillInstagram className="text-white text-[30px]" />,
  },
  {
    label: <FaDiscord className="text-white text-[30px]" />,
  },
];

const mobileSocialLinks = [
  {
    label: <AiOutlineTwitter className="text-white text-[60px]" />,
  },
  {
    label: <AiFillInstagram className="text-white text-[60px]" />,
  },
  {
    label: <FaDiscord className="text-white text-[60px]" />,
  },
];
export default Navibar;
