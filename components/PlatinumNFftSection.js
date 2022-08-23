import React from "react";

const PlatinumNFftSection = () => {
  return (
    <section className="py-20 bg-soft-dark">
      <div className="container">
        <h2 className="title_lg text-center font-jost">Platinum NFT</h2>
        <p className="text-sm mt-3 font-jost font-semibold text-center">
          (Early 3d rendering Q1 2022)
        </p>
        <div className="mt-5 max-w-[1120px] mx-auto">
          <iframe
            src="https://www.youtube-nocookie.com/embed/7RZYgW20Dio?autoplay=1&feature=oembed&autoplay=0&loop=1&rel=0&controls=0&showinfo=0&mute=0&wmode=opaque&enablejsapi=1&playlist=7RZYgW20Dio"
            frameBorder="0"
            allowFullScreen="1"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            className="w-full aspect-video"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default PlatinumNFftSection;
