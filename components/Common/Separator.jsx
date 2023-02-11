import React from "react";

function Separator() {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1200px] m-auto py-20 flex justify-center items-center">
        <div className="w-[43%] h-[2px] border-[2px] border-solid border-[#58805a]"></div>
        <div className="w-[12%] flex gap-4 justify-center items-center ">
          {/* ====> one circle */}
          <div className="w-[24px] h-[26px] hexagon"></div>
          {/* ======> 2nd circle */}
          <div className="w-[36px] h-[40px] hexagon"></div>
          {/* ======> 2nd circle */}
          <div className="w-[24px] h-[26px]  hexagon"></div>
        </div>
        <div className="w-[43%] h-[2px] border-[2px] border-solid border-[#58805a]"></div>
      </div>
    </div>
  );
}

export default Separator;
