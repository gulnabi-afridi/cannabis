import React from "react";
import TeamMember from "./TeamMember";

function Team() {
  return (
    <div id="team" className="w-full min-h-screen">
      <div className="w-full max-w-[1200px] flex flex-col justify-start items-center m-auto h-full mb-32">
        <h1 className="text-[60px] md:text-[86px] font-Playfair font-semibold leading-[78px] text-white py-2 md:py-10 mb-10 md:mb-20 px-6 md:px-4">
          Team
        </h1>
        {/* =======> Each team member */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center gap-20 xl:gap-10 items-center">
          {teamData.map((member, index) => {
            return (
              <TeamMember
                key={index}
                image={member.image}
                name={member.name}
                description={member.des}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const teamData = [
  {
    image: "/Assets/team/team1.png",
    name: "Team member name",
    des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    image: "/Assets/team/team1.png",
    name: "Team member name",
    des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    image: "/Assets/team/team1.png",
    name: "Team member name",
    des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

export default Team;
