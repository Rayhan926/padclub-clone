import React from "react";
import { FaPeopleCarry, FaRegCreditCard } from "react-icons/fa";

const stats = [
  {
    icon: <FaRegCreditCard size={45} />,
    value: "0",
    label: "Total NFTs",
  },
  {
    icon: <FaPeopleCarry size={45} />,
    value: "0",
    label: "Public Sale",
  },
  {
    icon: "",
    value: "0",
    label: "Early Adopter's Sale",
  },
  {
    icon: "",
    value: "0",
    label: "Gifts",
  },
];
const StatsSecton = () => {
  return (
    <section className="py-[60px] bg-soft-dark">
      <div className="container">
        {stats.map(({ icon, label, value }, i) => (
          <div key={i} className="flex flex-col items-center w-[224px]">
            {icon}
            <p className="text-[32px] leading-[48px] font-bold">{value}</p>
            <h6 className="text-lg font-semibold text-primary">{label}</h6>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSecton;
