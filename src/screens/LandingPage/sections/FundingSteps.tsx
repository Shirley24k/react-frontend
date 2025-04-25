import React, { JSX } from "react";
import { Card, CardContent } from "../../../components/ui/card";

export const FundingSteps = (): JSX.Element => {
  // Define the steps data for the funding process
  const fundingSteps = [
    {
      id: 1,
      title: "Check your eligibility",
      description: (
        <>
          <span className="font-medium text-black tracking-[-0.12px]">
            We welcome all{" "}
          </span>
          <span className="font-[number:var(--description-font-weight)] text-[#574964c7] tracking-[var(--description-letter-spacing)] font-description [font-style:var(--description-font-style)] leading-[var(--description-line-height)] text-[length:var(--description-font-size)]">
            Malaysia startups
          </span>
          <span className="font-medium text-black tracking-[-0.12px]">
            {" "}
            from{" "}
          </span>
          <span className="font-[number:var(--description-font-weight)] text-[#574964c7] tracking-[var(--description-letter-spacing)] font-description [font-style:var(--description-font-style)] leading-[var(--description-line-height)] text-[length:var(--description-font-size)]">
            technology
          </span>
          <span className="font-medium text-[#073b1d] tracking-[0] leading-[0.1px]">
            &nbsp;
          </span>
          <span className="font-medium text-black tracking-[-0.12px]">
            sector who have business model that generates{" "}
          </span>
          <span className="font-[number:var(--description-font-weight)] text-[#574964c7] tracking-[var(--description-letter-spacing)] font-description [font-style:var(--description-font-style)] leading-[var(--description-line-height)] text-[length:var(--description-font-size)]">
            predictable revenue stream
          </span>
        </>
      ),
    },
    {
      id: 2,
      title: "Submit application online",
      description: "Submit your funding application with business proposal",
    },
    {
      id: 3,
      title: "Select investor & get approval",
      description:
        "From the list of recommended investors, you can send your application to your selected investor and wait for investor accepts your application. If your application is rejected, you can resend application to other recommended investor.",
    },
    {
      id: 4,
      title: "Negotiate funding terms",
      description:
        "Startup proceeds to negotiate funding terms with the selected investor. After negotiation, both parties sign an agreement and upload to our platform.",
    },
    {
      id: 5,
      title: "Receive funds",
      description:
        "Upon approval from administrator, fund will be disbursed automatically to your bank account.",
    },
  ];

  return (
    <section className="w-full py-16 bg-warm-off-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-16 font-section-title font-[number:var(--section-title-font-weight)] text-black text-[length:var(--section-title-font-size)] tracking-[var(--section-title-letter-spacing)] leading-[var(--section-title-line-height)] [font-style:var(--section-title-font-style)]">
          Unlock Capital in Few Steps
        </h2>

        <Card className="max-w-4xl mx-auto bg-transparent border-none shadow-none">
          <CardContent className="p-0">
            <div className="relative">
              {/* Timeline line */}
              <div
                className="absolute left-3.5 top-[30px] w-[5px] h-[calc(100%-60px)] bg-no-repeat bg-center"
                style={{ backgroundImage: "url('/line-2.svg')" }}
              />

              {/* Timeline steps */}
              <div className="flex flex-col gap-[50px]">
                {fundingSteps.map((step, index) => (
                  <div key={step.id} className="flex items-start gap-12">
                    {/* Timeline marker */}
                    <div
                      className={`relative w-[30px] h-[30px] bg-[#d9d9d9] rounded-[15px] flex-shrink-0 ${index === 0 ? "rotate-180" : ""}`}
                    />

                    {/* Step content */}
                    <div className="flex flex-col gap-[13px]">
                      <h3 className="[font-family:'Lora',Helvetica] font-semibold text-black text-[32px] tracking-[-0.64px] leading-[normal]">
                        {step.title}
                      </h3>
                      <div
                        className={
                          typeof step.description === "string"
                            ? "font-description font-[number:var(--description-font-weight)] text-black text-[length:var(--description-font-size)] tracking-[var(--description-letter-spacing)] leading-[var(--description-line-height)] [font-style:var(--description-font-style)]"
                            : "relative text-2xl leading-6"
                        }
                      >
                        {step.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
