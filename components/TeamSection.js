import Image from "next/image";
import React from "react";

const teams = [
  {
    name: 'M.V aka "KessiC0de"',
    title: "Co-Founder / Dev. & Security lead",
    img: {
      src: "/img/tof_de_mario.jpg.webp",
      width: 634,
      height: 576,
    },
  },
  {
    name: 'Durandal aka "A.L"',
    title: "Co-Founder / Marketing Lead",
    img: {
      src: "/img/AL-profile-pic.jpg.webp",
      width: 333,
      height: 332,
    },
  },
  {
    name: 'Cédric aka "Tugg"',
    title: "Co-Founder / Social media lead",
    img: {
      src: "/img/photo_2022-02-17_09-08-57.jpg.webp",
      width: 222,
      height: 293,
    },
  },
];

const TeamSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <p className="text-base font-semibold text-primary text-center mb-3">
          GET TO KNOW US
        </p>
        <h2 className="title_lg text-center">Our Team</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-7">
          {teams.map(({ img, name, title }, i) => (
            <div
              key={i}
              className="border-2 border-[#343434] rounded bg-[#1D1D1D] p-2.5"
            >
              <div className="flex justify-center">
                <Image {...img} alt={name} objectFit="cover" />
              </div>
              <div className="text-[18px] leading-[18px] font-bold text-center">
                <h4 className="my-5 text-primary">{name}</h4>
                <p>{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
