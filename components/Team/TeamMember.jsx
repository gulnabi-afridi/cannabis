import React from "react";
import Image from "next/image";

function TeamMember({ image, name, description }) {
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center px-6 md:px-4">
      {/* =====> image*/}
      <div className="w-[300px] h-[300px] relative rounded-full border-4 border-solid border-green">
        <Image
          src={image}
          fill
          className="cover rounded-full"
          alt="team-image"
        ></Image>
      </div>
      {/* ======>  */}
      <p className="text-[34px] font-semibold text-green font-OpenSans">
        {name}
      </p>
      <p className="text-[16px] font-normal text-center font-OpenSans text-white">
        {description}
      </p>
    </div>
  );
}

export default TeamMember;
