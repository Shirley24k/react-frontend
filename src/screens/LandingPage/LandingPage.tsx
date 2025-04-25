import { JSX } from "react";
import { Footer } from "./sections/Footer";
import { FundingSteps } from "./sections/FundingSteps";
import { HeroSection } from "./sections/HeroSection";
import { WhatRBF } from "./sections/WhatRBF";
import { WhyRBF } from "./sections/WhyRBF";

export const LandingPage = (): JSX.Element => {
  return (
    <main className="bg-white w-full flex flex-col items-center">
      <div className="w-full max-w-[1512px]">
        <HeroSection />
        {/* <FundingSteps />
        <WhyRBF />
        <WhatRBF />
        <Footer /> */}
      </div>
    </main>
  );
};
