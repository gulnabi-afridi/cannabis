import React from "react";
import Image from "next/image";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full py-20  bg-green">
      <div className="w-full max-w-[1200px] text-white m-auto flex flex-col gap-8 justify-center items-center">
        {/* =======>logo */}
        <div className="w-[100px] h-[100px] relative">
          <Image src="/logo.png" fill alt="logo image"></Image>
        </div>
        <h2 className="uppercase text-[26px] font-OpenSans">
          cannabis landing page
        </h2>
        <p className="text-white text-[26px] font-OpenSans font-thin">
          All Rights Reserved 2021
        </p>
        <p className="text-white text-[26px] font-OpenSans font-thin">
          Terms and conditions
        </p>
        <p>0xF3114DD5c5b50a573E66596563D15A630ED359b4</p>
        {/* ========> Social icons */}
        <div className="flex justify-center items-center gap-6 py-4">
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

const SocilIcons = [
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

export default Footer;
