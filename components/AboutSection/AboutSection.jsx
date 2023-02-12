import React from "react";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="w-full min-h-screen flex justify-center">
      <div className="w-full flex flex-col md:flex-row gap-10 md:gap-4 xl:gap-20 justify-start items-center max-w-[1200px] m-auto h-full px-6 md:px-4 py-20 md:py-0">
        {/* =====> left section */}
        <div className="w-full md:w-[50%] flex flex-col gap-6 justify-center md:items-start items-center">
          <h1 className="text-center md:text-start text-[40px] md:text-[56px] font-Playfair font-semibold leading-[58px] md:leading-[78px] text-white">
            History About Factory
          </h1>
          <p className="text-center md:text-start w-full max-w-[850px] text-[18px] text-white font-OpenSans">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <div className="w-full flex justify-center md:justify-start py-8  ">
          <button className="w-full max-w-[170px] text-[20px] text-blue font-OpenSans bg-yellow py-2 rounded-lg cursor-pointer">
            Read More
          </button>
        </div>
        </div>
        {/* =======> right section */}
        <div className="w-full md:w-[50%] flex justify-center items-center xs:h-[300px] sm:h-[450px] md:h-[320px] lg:h-[390px] xl:h-[450px] relative">
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
