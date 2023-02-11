import React from "react";
import TeamMember from "./TeamMember";

function Team() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full max-w-[1200px] flex flex-col justify-start items-center m-auto h-full">
        <h1 className="text-[86px] font-Playfair font-semibold leading-[78px] text-white py-10 mb-20">
          Team
        </h1>
        {/* =======> Each team member */}
        <div className="flex justify-center gap-10 items-center">
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
    image: "/Assets/team/team2.jpg",
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
