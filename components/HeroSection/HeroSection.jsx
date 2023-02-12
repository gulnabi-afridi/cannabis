import React from "react";

function HeroSection() {
  return (
    <div
      id="home"
      className="w-full heroBg min-h-[calc(100vh-90px)] flex justify-center -z-10 relative md:px-4 px-6 md:py-0 py-8"
    >
      {/* ======> overly */}
      <div className="absolute top-0 left-0 w-full h-full bgOverly"></div>
      <div className="w-full flex flex-col gap-8 justify-center items-start max-w-[1200px] m-auto h-full text-white relative ">
        <h1 className="text-[52px] md:text-[76px] text-center md:text-start font-Playfair font-semibold leading-[78px]">
          <span className="text-darkGreen">Recreational</span> & Medical
          <br /> Marijuana
        </h1>
        <p className="w-full md:text-start text-center max-w-[850px] text-[18px] text-white font-OpenSans">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy
        </p>
        <div className="w-full  flex  justify-center md:justify-start md:py-0 py-4">
          <button className="w-full max-w-[170px] text-[20px] text-blue font-OpenSans bg-yellow py-2 rounded-lg cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
