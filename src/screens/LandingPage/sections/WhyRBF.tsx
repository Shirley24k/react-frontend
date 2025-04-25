import React, { JSX } from "react";
import { Card, CardContent } from "../../../components/ui/card";

export const WhyRBF = (): JSX.Element => {
  // Define feature cards data for mapping
  const featureCards = [
    {
      id: 1,
      image: "/term-loan.png",
      imageAlt: "Term loan",
      title: "Flexible Repayments",
      description:
        "No fixed monthly repayment. RBF repayments are tied to your revenue.",
    },
    {
      id: 2,
      image: "/network.png",
      imageAlt: "Network",
      title: "Secure & Verified Network",
      description:
        "Connect with a network of verified investors and potential startups to ensure a trustworthy funding environment.",
    },
    {
      id: 3,
      image: "/check-1.png",
      imageAlt: "Check",
      title: "Fast & Intelligent Credit Check",
      description:
        "Our system uses machine learning to assess startup's financial health",
    },
    {
      id: 4,
      image: "/match-1.png",
      imageAlt: "Match",
      title: "Startup-Investor Matchmaking",
      description:
        "Get the right fit by matching with investors based on startup's funding needs and investors' preferences",
    },
  ];

  return (
    <section className="w-full bg-light-apple-green py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-16 font-section-title font-[number:var(--section-title-font-weight)] text-black text-[length:var(--section-title-font-size)] tracking-[var(--section-title-letter-spacing)] leading-[var(--section-title-line-height)] [font-style:var(--section-title-font-style)]">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureCards.map((card) => (
            <Card key={card.id} className="border-none bg-transparent">
              <CardContent className="flex flex-col items-center pt-6 px-4">
                <img
                  className="w-[120px] h-[120px] mb-5 object-cover"
                  alt={card.imageAlt}
                  src={card.image}
                />
                <h3 className="mb-4 [font-family:'Lora',Helvetica] font-semibold text-black text-[32px] text-center tracking-[-0.64px] leading-[normal]">
                  {card.title}
                </h3>
                <p className="font-description font-[number:var(--description-font-weight)] text-black text-[length:var(--description-font-size)] text-center tracking-[var(--description-letter-spacing)] leading-[var(--description-line-height)] [font-style:var(--description-font-style)]">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};