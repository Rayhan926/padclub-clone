import React from "react";
import {
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
} from "react-icons/fa";

const ContactsSection = () => {
  return (
    <section className="py-20 bg-soft-dark">
      <div className="container flex flex-col gap-y-6 md:flex-row md:justify-between">
        <div>
          <h5 className="text-xl font-semibold mb-5">LINKS</h5>
          <div className="space-y-2.5">
            <LinkWithIcon
              text={"Terms and Conditions"}
              url={
                "https://www.freeprivacypolicy.com/live/a826eb3d-caca-45c8-b2cb-668ea088f202"
              }
            />
            <LinkWithIcon
              text={"Privacy Policy"}
              url={
                "https://www.freeprivacypolicy.com/live/c6588070-f1b9-481c-b2ea-30020898b4c4"
              }
            />
            <LinkWithIcon
              text={"Cookie Policy"}
              url={
                "https://www.freeprivacypolicy.com/live/bbb8a02c-1680-439d-8b1a-e707349706c4"
              }
            />
          </div>
        </div>
        <div>
          <h5 className="text-xl font-semibold mb-5">CONTACTS</h5>
          <div className="space-y-2.5">
            <ContactWithIcon
              icon={<FaPhoneAlt size={16} />}
              text={"Tel: Contact us"}
              url={"https://discord.gg/DRc7ASctYT"}
            />
            <ContactWithIcon
              text={"Email: services@padclub.io"}
              url={"mailto:servicesl@padclub.io"}
              icon={<FaRegEnvelope size={16} />}
            />
            <ContactWithIcon
              text={"Address: Belgium"}
              icon={<FaMapMarkerAlt size={16} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;

const LinkWithIcon = ({ text, url }) => {
  return (
    <a href={url} className="flex items-center gap-3 group cursor-pointer">
      <FaChevronRight size={15} className="text-primary" />
      <span className="group-hover:underline text-base">{text}</span>
    </a>
  );
};

const ContactWithIcon = ({ icon, url, text }) => {
  if (!url) {
    return (
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="text-primary">{icon}</div>
        <span className="text-base">{text}</span>
      </div>
    );
  }
  return (
    <a href={url} className="flex items-center gap-2 cursor-pointer">
      <div className="text-primary">{icon}</div>
      <span className="text-base">{text}</span>
    </a>
  );
};
