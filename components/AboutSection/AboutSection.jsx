import React from "react";
import Image from "next/image";

function AboutSection() {
  return (
    <div className="w-full h-screen" >
      <div className="w-full flex gap-20 justify-start items-center max-w-[1200px] m-auto h-full">
        {/* =====> left section */}
        <div className="w-[50%] flex flex-col gap-6 justify-center items-start">
          <h1 className="text-[56px] font-Playfair font-semibold leading-[78px] text-white">
            History About Factory
          </h1>
          <p className="w-full max-w-[850px] text-[18px] text-white font-OpenSans">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <div className="py-8">
            <button className="text-[20px] text-blue font-OpenSans bg-yellow py-2 px-6 rounded-lg cursor-pointer">
              Read More
            </button>
          </div>
        </div>
        {/* =======> right section */}
        <div className="w-[50%] flex justify-center items-center h-[450px] relative">
          <Image
            src="/Assets/about.png"
            fill
            className="cover"
            alt="about image"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
