import React from "react";
import {
  FaCartArrowDown,
  FaPaintBrush,
  FaRegCreditCard,
  FaRegLightbulb,
  FaVectorSquare,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaPaintBrush size={50} />,
    title: "Innovative NFT concept",
    subtitle: "Lauchpad tier fragmentation.",
    hoverTitle: "Lauchpad tier fragmentation.",
    hoverDescription:
      "We offer you a simple yet effective solution to participate in early crypto projects.",
  },
  {
    icon: <FaRegCreditCard size={50} />,
    title: "How our NFTs work?",
    subtitle: "Sit, relax and claim!",
    hoverTitle: "Sit, relax and claim!",
    hoverDescription:
      "Our membership offers you a way to passively participate in all Launchpad project without any further cost.",
  },
  {
    icon: <FaRegLightbulb size={50} />,
    title: "What is the risk ?",
    subtitle: "Highest risk is... Time to ROI!",
    hoverTitle: "What is the risk ?",
    hoverDescription:
      "Market movement as well as quality and number of projects launched might impact your time to ROI as. No matter what you will get rewarded on a monthly basis your fair share of tokens.",
  },

  {
    icon: <FaVectorSquare size={50} />,
    title: "Project Sustainability ?",
    subtitle: "Transparent, monthly reports.",
    hoverTitle: "Transparent with monthly reports.",
    hoverDescription:
      "The project has been designed to ensure a long term sustainability. Monthly reports will be available for our members.",
  },
  {
    icon: <FaCartArrowDown size={50} />,
    title: "Community driven (DAO)",
    subtitle: "You decide on the futur.",
    hoverTitle: "Community driven (DAO)",
    hoverDescription:
      "All Pad Club NFTs holders will be able to vote on the project's future direction or changes that will be implemented.",
  },
];

const CardsSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        {cards.map(
          ({ icon, title, subtitle, hoverDescription, hoverTitle }, i) => (
            <div
              className="border border-[#414141] h-[400px] relative text-center group overflow-hidden"
              key={i}
            >
              <div className="w-full h-full flex flex-col justify-center items-center p-9">
                <div>{icon}</div>
                <h3 className="text-[22px] leading-[22px] text-primary font-semibold mb-5 mt-6">
                  {title}
                </h3>
                <p className="title_md leading-[1.5]">{subtitle}</p>
              </div>

              <div
                style={{
                  backgroundColor: "black",
                  backgroundImage: 'url("/img/bg-icon-box.jpeg")',
                }}
                className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-9 translate-y-full duration-[0.6s] ease-in-out group-hover:translate-y-0"
              >
                <h4 className="text-[26px] text-primary font-semibold leading-[1] mb-5">
                  {hoverTitle}
                </h4>
                <p className="text-lg font-medium">{hoverDescription}</p>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
};

export default CardsSection;
