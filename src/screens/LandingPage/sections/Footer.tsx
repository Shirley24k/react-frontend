import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React, { JSX } from "react";

export const Footer = (): JSX.Element => {
  const socialIcons = [
    { src: "/icon-1.svg", alt: "Icon" },
    { src: "/icon-2.svg", alt: "Icon" },
    { src: "/icon.svg", alt: "Icon" },
    { src: "/icon-3.svg", alt: "Icon" },
  ];

  const resourceLinks = [{ title: "Home" }, { title: "Login" }];

  const contactInfo = [
    { icon: <PhoneIcon className="w-6 h-6" />, text: "+6012-345 6789" },
    { icon: <MailIcon className="w-6 h-6" />, text: "revenueup@gmail.com" },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      text: "Unit 24, Revenue Road, 43000 Selangor, Malaysia.",
    },
  ];

  return (
    <footer className="w-full bg-dark-plum py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Social Icons */}
          <div className="flex flex-col gap-8">
            <div className="font-['Irish_Grover',Helvetica] font-normal text-4xl leading-[54px]">
              <span className="text-[#f7f7e8]">R</span>
              <span className="text-[#d1c4e9]">B</span>
              <span className="text-[#f7f7e8]">F</span>
            </div>

            <div className="flex items-start gap-2">
              {socialIcons.map((icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded flex items-center justify-center"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <img className="w-5 h-5" alt={icon.alt} src={icon.src} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="flex flex-col gap-6">
            <div className="font-small-text font-[number:var(--small-text-font-weight)] text-beige text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
              Resources
            </div>

            {resourceLinks.map((link, index) => (
              <div
                key={index}
                className="font-small-text font-[number:var(--small-text-font-weight)] text-beige text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]"
              >
                {link.title}
              </div>
            ))}
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col gap-6">
            <div className="font-small-text font-[number:var(--small-text-font-weight)] text-beige text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
              Contact Us
            </div>

            <div className="flex flex-col gap-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  {item.icon}
                  <div className="font-small-text font-[number:var(--small-text-font-weight)] text-beige text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
