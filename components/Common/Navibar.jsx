import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

function Navibar() {
  return (
    <div className="w-full  h-[90px]">
      <div className="w-full max-w-[1200px] h-full text-white m-auto flex justify-between items-center">
        {/* =====> logo */}
        <div className="flex gap-3 justify-center items-center">
          <div className=" flex justify-center items-center w-[75px] h-[70px] relative">
            <Image src="/logo.png" fill alt="logo"></Image>
          </div>
          <h2 className="uppercase text-[24px] font-Playfair">cannabis</h2>
        </div>
        {/* ========> links */}
        <div className="flex justify-center items-center gap-10">
          {navigate.map((navi, index) => {
            return (
              <Link key={index} href="/" className="font-OpenSans text-[18px]">
                {navi.label}
              </Link>
            );
          })}
        </div>
        {/* ========> Social icons */}
        <div className="flex justify-center items-center gap-6">
          {SocilIcons.map((navi, index) => {
            return (
              <Link href="" key={index}>
                {navi.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const navigate = [
  {
    label: "Home",
  },
  {
    label: "About Us",
  },
  {
    label: "Roadmap",
  },
  {
    label: "Faq",
  },
  {
    label: "Our Team",
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
export default Navibar;
