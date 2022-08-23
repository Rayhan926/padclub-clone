import Image from "next/image";
import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqs = [
  {
    title: "WHEN WILL MINTING START ?",
    body: "The target is late february for the public sale. Stay tuned",
  },
  {
    title: "HOW MANY NFTs HAS YOUR COLLECTION ?",
    body: "In total 6666 NFTs will be minted. ",
  },
  {
    title: "HOW MUCH WILL THE MINT COST ?",
    body: "We target a final price of 0.15 ETH for the mint. Due to the curent market situation the price might vary in any direction.",
  },
  {
    title: "HOW CAN I GET INTO THE PRE-SALE/PRIVATE-SALE?",
    body: "There are many giveaways on our discord and twitter just follow us 😉",
  },
  {
    title: "HOW MUCH MONEY CAN I MAKE WITH YOUR NFT?",
    body: (
      <p>
        Well that is up to you to define your own strategy. You can hold the
        rewarded tokens or sell them. We don’t offer financial advise. For
        estimations check our{" "}
        <a href="https://whitepaper.padclub.io/" className="text-blue">
          whitepaper
        </a>{" "}
        .
      </p>
    ),
  },
  {
    title: "DON'T SEE MY QUESTION ANSWERED ?",
    body: "Feel free to ping us on discord we will gladely provide all needed details.",
  },
];

const FaqSection = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  const onChangeHandler = (index) => {
    setActiveFaqIndex((prev) => (prev === index ? null : index));
  };
  return (
    <section className="py-20 bg-soft-dark">
      <div className="container">
        <h2 className="title_lg text-center">Frequently Asked Question</h2>

        <div className="grid grid-cols-1 lg:grid-cols-[540px,auto] gap-6 mt-8">
          <div>
            <Image
              src={"/img/Unrevealed_Top_Picture.png.webp"}
              width={540}
              height={357}
              alt="Unrevealed_Top_Picture"
            />
          </div>
          <div>
            <div className="border border-[#686868]">
              {faqs.map((faq, i) => {
                const isActive = i === activeFaqIndex;
                return (
                  <div key={i} className="border-b border-[#686868]">
                    <div
                      onClick={() => onChangeHandler(i)}
                      className="flex justify-between items-center p-5 text-[15px] leading-[15px] cursor-pointer"
                    >
                      {faq.title}

                      <div className="text-primary">
                        {isActive ? <FaMinus /> : <FaPlus />}
                      </div>
                    </div>
                    <div
                      className={`border-t ${
                        isActive ? "border-[#686868]" : "border-transparent"
                      }`}
                    >
                      <Collapsible
                        open={isActive}
                        transitionTime={200}
                        trigger={""}
                      >
                        <div className="px-5 py-[15px]">{faq.body}</div>
                      </Collapsible>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
