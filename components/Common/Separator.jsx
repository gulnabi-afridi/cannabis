import React from "react";

function Separator() {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1200px] m-auto py-20 flex gap-2 md:gap-0 justify-center items-center px-6 md:px-4">
        <div className="w-[35%] md:w-[43%] h-[2px] border-[2px] border-solid border-[#58805a]"></div>
        <div className="w-[30%] md:w-[12%] flex gap-4 justify-center items-center ">
          {/* ====> one circle */}
          <div className="w-[24px] h-[26px] hexagon"></div>
          {/* ======> 2nd circle */}
          <div className="w-[36px] h-[40px] hexagon"></div>
          {/* ======> 2nd circle */}
          <div className="w-[24px] h-[26px]  hexagon"></div>
        </div>
        <div className="w-[35%] md:w-[43%] h-[2px] border-[2px] border-solid border-[#58805a]"></div>
      </div>
    </div>
  );
}

export default Separator;
