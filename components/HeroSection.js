import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("/img/hero-bg.jpeg")',
      }}
      className="h-[600px] lg:h-screen bg-no-repeat bg-center-right bg-cover lg:bg-right-top"
    >
      <div className="container flex flex-col items-center text-center lg:block lg:text-left h-full">
        <div className="max-w-[300px] pt-[200px] lg:pt-[180px]">
          <Image
            src={"/img/logo.webp"}
            width={300}
            height={149}
            alt="Pad Club"
          />
        </div>
        <h1 className="max-w-[675px] text-[22px] leading-[22px] lg:text-[60px] lg:leading-[60px] font-medium my-5">
          Innovation in the NFT world!
        </h1>
        <p className="text-lg lg:text-[22px] lg:leading-[33px]">
          NFT owners just have to claim !
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
