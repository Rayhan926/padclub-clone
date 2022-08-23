import React from "react";
import cx from "classnames";
import { FaRegDotCircle, FaStar } from "react-icons/fa";

const RoadmapSection = () => {
  return (
    <section className="py-20 bg-dark">
      <div className="container">
        <h2 className="title_lg text-center">ROADMAP</h2>

        <div className="mt-10 relative space-y-9">
          <div className="w-[3px] h-[92.2%] lg:h-[90%] absolute top-0 left-[21px] lg:left-1/2 lg:-translate-x-1/2 bg-white"></div>
          <RoadmapBox title={"Q4 2021"}>
            <ul className="text-[#ffcc00] [&>li]:list-item [&>li]:list-disc">
              <li>Core concept draft / Market research </li>
              <li>Alpha Whitepaper & R.O.I analysis </li>
              <li>Team recruitment & project graphical design</li>
              <li>Beginning of DAPP & Smart contract development</li>
              <li>Web site & social media content creation</li>
              <li>NFT membership 2d and 3d design</li>
            </ul>
          </RoadmapBox>
          <RoadmapBox leftAlign title="Q1 2022" Icon={FaStar}>
            <ul className="text-[#ffcc00] [&>li]:list-item [&>li]:list-disc">
              <li>Social media interaction start</li>
              <li>Website/discord/twitter launch</li>
              <li>Whitepaper V1.0 release</li>
              <li>Final membership 2d and 3d modeling</li>
              <li>Final 3d NFT Animation </li>
              <li>Project promotion, giveaways, contests</li>
              <li>
                IDO start (all dates are ETAs subject to change, please check
                announcements)
                <ul className="[&>li]:list-item [&>li]:list-[circle] pl-10">
                  <li>
                    Early adopter&apos;s Sale 40% Diamond / 60% Platinum (March
                    27th 2022)
                  </li>
                  <li>
                    Extraordinary public sale (April 3rd 2022) community voted
                  </li>
                  <li>Public Sale start( April. 24th 2022)</li>
                </ul>
              </li>
              <li>
                Reveal & contract lock (April 26th 2022). Contract lock pushed
                back
              </li>
              <li>DAPP release V1.0</li>
              <li>DAO principles in action and first DAO Vote</li>
              <li>Launchpads subscriptions</li>
            </ul>
          </RoadmapBox>
          <RoadmapBox title={"Q2 2022"}>
            <ul className="[&>li]:list-item [&>li]:list-disc text-[#666699] marker:text-primary">
              <li>Claiming&quot; Smart Contract beta test</li>
              <li>On going community events</li>
              <li>DAPP V1.1 profit dashboard release</li>
              <li>
                &quot;Claiming&quot; Smart Contract (BSC/ETH) V1.0 release
              </li>
            </ul>
          </RoadmapBox>

          <RoadmapBox leftAlign title={"Q3 2022"}>
            <ul className="[&>li]:list-item [&>li]:list-disc text-[#666699] marker:text-primary">
              <li>
                Multi-blockchain integration(intialy only ETH/BSC are launched)
              </li>
              <li>
                Pad Club v2.0 presentation (beyond Pad Club initial concept)
              </li>
              <li>V2.0 core smart contract release</li>
              <li>V2.0 NFT distribution</li>
            </ul>
          </RoadmapBox>
          <RoadmapBox title={"Q4 2022"}>
            <ul className="[&>li]:list-item [&>li]:list-disc text-[#666699] marker:text-primary">
              <li>Pad Club v2.0 official Launch</li>
              <li>Pad Club v2.0 tokenomics release</li>
              <li>V2.0 Partnerships</li>
            </ul>
          </RoadmapBox>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;

const RoadmapBox = ({ leftAlign, title, Icon, children }) => {
  const FinalIcon = Icon || FaRegDotCircle;
  return (
    <div className="grid grid-cols-[45px,1fr] lg:grid-cols-[1fr,45px,1fr] gap-5 lg:gap-6 relative z-[2]">
      <div
        className={cx(
          "grow hidden lg:block",
          leftAlign ? "order-3" : "order-[unset]",
        )}
      ></div>
      <div
        className={cx(
          "w-[45px] h-[45px] rounded-full bg-white shrink-0 text-primary flex justify-center items-center",
          leftAlign ? "lg:order-2" : "order-[unset]",
        )}
      >
        <FinalIcon size={28} />
      </div>
      <a
        href="#"
        className={cx(
          "grow p-[35px] bg-soft-dark block",
          leftAlign ? "lg:order-1" : "order-[unset]",
        )}
      >
        <h5 className="text-[22px] leading-[26px] font-semibold mb-2">
          {title}
        </h5>
        <div className="pl-10 text-[18px] leading-[24px]">{children}</div>
      </a>
    </div>
  );
};
