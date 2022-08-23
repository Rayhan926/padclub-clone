import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const ProjectSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-center title_lg mb-10">The Project</h2>

        <div className="max-w-[1120px]">
          <TitleWithIcon title={"What is the project about?"} colored />
          <TitleWithIcon title={" What is a Launchpad ?"} />
          <TitleWithIcon title={" Pad Club NFTs ?"} />
          <TitleWithIcon title={" Expected profits"} />
          <TitleWithIcon title={" Project sustainability"} />
          <TitleWithIcon title={" Transparent NFT Sale"} />
          <TitleWithIcon title={" What is the project about? "} colored />
          <h4 className="title_sm">What is the project about? </h4>
          <p className="body_sm">
            Launchpads top tiers have historically been restricted to the
            “elite,” who can manage to invest hundreds of thousands dollars to
            access the highest allocation on new projects. Through a proof of
            membership, the Pad Club now allows each NFT holder to own a
            fraction of a guaranteed investment.
            <span className="block">&nbsp;</span>
            By holding just one NFT, and with no further cost, our members will
            be rewarded with a share(int tokens) of all the launchpads projects
            the Club participates in.
            <span className="block">&nbsp;</span>
            On this page we will provide all basic information needed to
            understand our project and strongly recommend you to read our
            whitepaper to dive into the details.
          </p>
          <ReadWhitePaper />
          <TitleWithIcon title={"What is a Launchpad ?"} />
          <h4 className="title_sm">What is a Launchpad?</h4>
          <p className="body_sm">
            Launchpad allows you to be an early investor (think “crowdfunding
            Business Angel”) on new crypto projects before they hit the market
            and are subject to high speculative movements.
            <span className="block">&nbsp;</span>
            People use launchpads as filters to choose the “best” projects that
            have undergone thorough screening. In the distribution of projects,
            many launchpads use a priority system aka as Tier ranks.
            <span className="block">&nbsp;</span>
            These ranks depends on the amount of tokens you hold and will define
            how much you can invest on a project and wether you have a guarantee
            allocation or need to “win” your seat in a lottery.
            <span className="block">&nbsp;</span>
            <span className="font-semibold">
              By holding only one of our NFTs you will be able to get all the
              rewards from all the projects launched by the major Launchpads.
              This on a monthly basis without any further cost to you! (see
              whitepaper on how it works)
            </span>
          </p>
          <p className="body_sm"> Some renowned launchpad:</p>
          <ul className="pl-10 mt-4 [&>li]:list-item [&>li]:list-disc">
            <li>
              <a href="https://gamefi.org/" className="text-blue block">
                https://gamefi.org/
              </a>
            </li>
            <li>
              <a href="https://bscpad.com/" className="text-blue block">
                https://bscpad.com/
              </a>
            </li>
            <li>
              <a
                href="https://launchpad.seedify.fund/"
                className="text-blue block"
              >
                https://launchpad.seedify.fund/
              </a>
            </li>
          </ul>
          <ReadWhitePaper />
          <TitleWithIcon title={"Pad Club NFTs ?"} />
          <h4 className="title_sm">Pad Club NFTs ?</h4>
          <p className="body_sm">
            They act as a proof of members and entitle holders to receive the
            benefits (the tokens) from all Lauchpad projects that the Club
            participates in.
            <span className="block">&nbsp;</span>
            They can be purchased either through one of our sales (see NFT
            Sales) or on the secondary market once the collection is sold out.
            Each NFT will have rarity and a weight attached to it. This will
            serve as a base to calculate the token rewards per NFT.
            <span className="block">&nbsp;</span>
            There will be a maximum of 6,666 NFTS minted (see: minting for more
            details)
            <span className="block">&nbsp;</span>
            NFT’s rarity and weight is split as follows:
          </p>
          <ul className="pl-10 mt-4 [&>li]:list-item [&>li]:list-disc">
            <li>Golden membership, 5,333 NFTs (80%) weight 1</li>
            <li>Platinium membership, 1,000 NFTs (15%) weight 2.5</li>
            <li>Diamond membership 333 NFTs (5%) weight 5</li>
          </ul>
          <span className="block">&nbsp;</span>
          <p className="body_sm">
            As a Pad Club member, no matter the membership status or amount of
            NFTs you own, you will be able to claim a certain amount of tokens
            per NFT. The amount will be determined by the weight of each NFT you
            own.
          </p>
          <ReadWhitePaper />
          <TitleWithIcon title={"Expected profits"} />
          <h4 className="title_sm">EXPECTED PROFITS</h4>
          <p className="body_style">
            We have been running several ROI/Profit analysis based 2021 data on
            the top 5 Launchpad .<span className="block">&nbsp;</span>
            Taking the average ROI of 2021 from the top five Launchpads (x38),
            an NFT , golden membership weight 1, would generate{" "}
            <strong>$15.04 on average per project!!</strong>! There are 4 to 8
            projects per month and subscription will be made on at least the top
            5 launchpads.
            <span className="block">&nbsp;</span>
            As an example a member will end up making on average after each
            vesting period with 1 golden NFT:
          </p>

          <ul className="pl-10 mt-4 [&>li]:list-item [&>li]:list-disc text-[#dcdad7]">
            <li>
              $15.04* 4 projects * 5 Launchpads = $102~$301 monthly with a low
              project count
            </li>
            <li>
              $15.04* 8 projects * 5 Launchpads = $204~$602 monthly with a high
              project count
            </li>
          </ul>
          <span className="block">&nbsp;</span>
          <p className="body_sm">
            <strong>
              Undertand that vesting periods, amount of projects and futur
              profits are not known.
            </strong>
            <span className="block">&nbsp;</span>
            <strong>
              It is your responsability to sell the tokens at the most
              appropriate moment.
            </strong>
          </p>
          <ReadWhitePaper />
          <TitleWithIcon title={"Project sustainability"} />
          <h4 className="title_sm">PROJECT SUSTAINABILITY</h4>
          <p className="body_sm">
            As all participations in Launchpad’s projects will have a guaranteed
            allocation, we need to be able to sustain the subscription’s prices.
            This ensures there is always enough cash flow available to continue
            registering for new launched projects in the long run.
            <span className="block">&nbsp;</span>
            The process in place will guarantee that Pad Club can run for as
            long as Launchpads exist and offer new projects. In other words, to
            ensure the The Pad Club sustainability the following process will be
            implemented:
          </p>

          <ul className="pl-10 mt-4 [&>li]:list-item [&>li]:list-disc">
            <li>3 % of the raised sales capital is kept as cash flow</li>
            <li>
              Projects are subscribed to using the cash flow capital (at no
              additional cost to our members)
            </li>
            <li>
              At first token release, Pad Club will sell the required amount of
              tokens to match the investment cost in USD. The rest will be
              distributed to our members.
            </li>
          </ul>
          <ReadWhitePaper />
          <TitleWithIcon title={"Transparent NFT Sale"} />
          <h4 className="title_sm">TRANSPARENT NFT SALE</h4>
          <span className="block">&nbsp;</span>
          <p className="body_sm">
            There will be different sales campaigns in order to reward our early
            supporters and create a vibrant community.
            <span className="block">&nbsp;</span>
          </p>
          <ul className="pl-10 mt-4 [&>li]:list-item [&>li]:list-disc">
            <li>The amount of NFTs will be split as follow:</li>
            <li>66 Gift (33 marketing/ 33 reward project funders) Free</li>
            <li>
              600 Early adepter’s sale (40% Diamond/60% Platinum no GOLD!!!!)
            </li>
            <li>6000 Public Sale Paid full price FCFS</li>
          </ul>
          <p className="body_style">
            <span className="block">&nbsp;</span>
            Upon selling out you will be able to see your UNREVEALED NFT on
            OpenSea/rarible and can start trading.
            <span className="block">&nbsp;</span>
            In the case a sale campaign doesn’t sell out (in example: Private
            Sale) , all unsold NFTs will be added to the public sale count.
          </p>

          <div className="mt-10">
            <ReadWhitePaper />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

const ReadWhitePaper = () => {
  return (
    <>
      <span className="block">&nbsp;</span>
      <div>
        <div className="body_sm font-semibold">
          READ OUR{" "}
          <a href="https://whitepaper.padclub.io/" className="text-blue">
            WHITEPAPER
          </a>
        </div>
      </div>
    </>
  );
};

const TitleWithIcon = ({ title, colored }) => {
  return (
    <div className={`flex items-center gap-2 ${colored ? "text-primary" : ""}`}>
      <FaRegArrowAltCircleRight size={20} />
      <p className="text-[20px] leading-[30px] font-medium">{title}</p>
    </div>
  );
};
