import React, { JSX } from "react";
import { Button } from "../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-light-green py-12 md:py-0 min-h-[917px]">
      <div className="container mx-auto">
        {/* Header/Navigation */}
        <header className="flex justify-between items-center py-12">
          <div className="[font-family:'Irish_Grover',Helvetica] font-normal text-5xl tracking-[0] leading-[72px] whitespace-nowrap">
            <span className="text-[#073b1d]">R</span>
            <span className="text-[#574964c7]">B</span>
            <span className="text-[#073b1d]">F</span>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="h-12 px-6 py-[35px] rounded-lg shadow-shadow-dark-500-20 [font-family:'Roboto',Helvetica] font-bold text-dark-plum text-sm"
            >
              Register
            </Button>

            <Button
              variant="outline"
              className="h-12 px-6 py-[35px] rounded-lg border border-solid border-[#574964c7] [font-family:'Roboto',Helvetica] font-bold text-dark-plum text-sm"
            >
              Login
            </Button>
          </div>
        </header>

        {/* Hero Content */}
        <div className="flex flex-col md:flex-row items-center mt-12 md:mt-24">
          <div className="md:w-1/2 space-y-12">
            <h1 className="[font-family:'Lora',Helvetica] font-bold text-5xl md:text-8xl tracking-[-1.92px] text-black leading-tight max-w-[684px]">
              Revenue-Based Financing
            </h1>

            <p className="[font-family:'Lato',Helvetica] font-normal text-[#000000bf] text-xl md:text-[32px] tracking-[0] leading-[1.5] max-w-[556px]">
              Get fast capital when you need it, pay it back as you earn - no
              equity, no dilution
            </p>

            <Button className="px-6 py-4 bg-dark-plum rounded-lg text-white [font-family:'Roboto',Helvetica] font-medium text-xl">
              Get Funded
            </Button>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              className="w-full h-auto object-cover max-w-[992px]"
              alt="Startup growth and investment"
              src="/startup-growth-and-investment-transparent-1.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};