import React, { JSX } from "react";
import { Card, CardContent } from "../../../components/ui/card";

export const WhatRBF = (): JSX.Element => {
  const rbfBenefits = [
    "No equity dilution - you keep full control of your company.",
    "No personal guarantees or collateral - No personal assets are required.",
    "Flexible repayments - your repayments scale with your revenue.",
    "Fast, data-driven approvals - no more weeks-long waits and credit checks.",
  ];

  return (
    <section className="w-full bg-dark-beige py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-12 font-section-title font-[number:var(--section-title-font-weight)] text-black text-[length:var(--section-title-font-size)] tracking-[var(--section-title-letter-spacing)] leading-[var(--section-title-line-height)] [font-style:var(--section-title-font-style)]">
          What is Revenue-Based Financing?
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-[130px]">
          <div className="flex-shrink-0">
            <img
              className="w-full max-w-[489px] h-auto object-cover rounded-full"
              alt="Revenue-Based Financing illustration"
              src="/chatgpt-image-apr-16--2025--10-32-03-pm-photoroom-1.png"
            />
          </div>

          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="p-0 space-y-8">
              <p className="font-description font-[number:var(--description-font-weight)] text-[length:var(--description-font-size)] tracking-[var(--description-letter-spacing)] text-black leading-[var(--description-line-height)] [font-style:var(--description-font-style)]">
                Revenue-Based Financing (RBF) is a flexible approach to fund
                your business by paying back a percentage of your future monthly
                revenue.
              </p>

              <p className="font-description font-[number:var(--description-font-weight)] text-black text-[length:var(--description-font-size)] tracking-[var(--description-letter-spacing)] leading-[var(--description-line-height)] [font-style:var(--description-font-style)]">
                Repayments in RBF are adjusted based on your business&apos;s
                performance. When your revenue slows down, you pay less. When
                you grow, you repay faster. This helps reduce financial strain
                during slower periods.
              </p>

              <div className="font-description font-[number:var(--description-font-weight)] text-black text-[length:var(--description-font-size)] tracking-[var(--description-letter-spacing)] leading-[var(--description-line-height)] [font-style:var(--description-font-style)]">
                <p>RBF is designed to be founder-friendly:</p>
                <ul className="mt-2 space-y-1">
                  {rbfBenefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};