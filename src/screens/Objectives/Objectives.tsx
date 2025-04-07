import { ArrowLeftIcon, LightbulbIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Separator } from "../../components/ui/separator";

// Campaign objectives data
const objectives = [
  {
    id: "lead-generation",
    title: "Lead generation",
    description: "Drive leads, such as email signups.",
    icon: "https://c.animaapp.com/m95u7vbvjJDPfz/img/email.svg",
  },
  {
    id: "online-purchases",
    title: "Online purchases",
    description: "Get people to buy your products.",
    icon: "https://c.animaapp.com/m95u7vbvjJDPfz/img/shopping-cart.svg",
  },
  {
    id: "website-engagement",
    title: "Website engagement",
    description: "Increase user engagement and pageviews.",
    icon: "https://c.animaapp.com/m95u7vbvjJDPfz/img/remove-red-eye.svg",
  },
  {
    id: "brand-awareness",
    title: "Brand awareness",
    description: "Increase awareness of your brand.",
    icon: "https://c.animaapp.com/m95u7vbvjJDPfz/img/campaign.svg",
  },
  {
    id: "app-promotion",
    title: "App promotion",
    description: "Get people to install your app.",
    icon: "https://c.animaapp.com/m95u7vbvjJDPfz/img/ad-units.svg",
  },
];

// Navigation steps data
const navigationSteps = [
  {
    number: 1,
    title: "Campaign creation",
    active: true,
    subSteps: [
      { title: "Objectives", active: true },
      { title: "Landing page", active: false },
      { title: "Audiences", active: false },
      { title: "Target cost", active: false },
      { title: "Budget", active: false },
      { title: "Ads", active: false },
    ],
  },
  {
    number: 2,
    title: "Review & Submit",
    active: false,
  },
  {
    number: 3,
    title: "Payment",
    active: false,
  },
  {
    number: 4,
    title: "Tracking & Conversions",
    active: false,
  },
];

export const Objectives = (): JSX.Element => {
  const [selectedObjective, setSelectedObjective] = useState("lead-generation");

  return (
    <div className="flex flex-col h-screen items-start relative bg-white">
      <header className="flex flex-col h-[60px] items-start gap-2.5 p-5 relative self-stretch w-full bg-[#1d4488]">
        <div className="relative w-[75.71px] h-5">
          <img
            className="absolute w-[69px] h-[18px] top-px left-px"
            alt="Logo"
            src="https://c.animaapp.com/m95u7vbvjJDPfz/img/group.png"
          />
          <img
            className="absolute w-[3px] h-2 top-[9px] left-[72px]"
            alt="Vector"
            src="https://c.animaapp.com/m95u7vbvjJDPfz/img/vector.svg"
          />
        </div>
      </header>

      <div className="flex flex-1 items-start relative self-stretch w-full">
        <div className="flex items-start relative self-stretch w-full flex-1">
          <aside className="flex flex-col w-[213px] h-full items-start justify-between p-6 relative bg-white border-r border-[#d4d9df]">
            <img
              className="absolute w-[45px] h-[45px] top-[43px] left-[191px]"
              alt="Arrow"
              src="https://c.animaapp.com/m95u7vbvjJDPfz/img/arrow.svg"
            />

            <div className="flex flex-col h-[643px] items-start gap-8 relative self-stretch w-full">
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                    <div className="flex h-9 items-center gap-2 relative self-stretch w-full">
                      <div className="inline-flex flex-col min-w-6 h-6 items-center justify-center px-[7px] py-0 relative flex-[0_0_auto] rounded-[100px] border-[1.5px] border-solid border-blue">
                        <div className="mt-[-1.50px] font-medium text-blue relative flex-1 self-stretch font-sans text-xs text-center tracking-[0.40px] leading-[19.9px]">
                          1
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-sans font-medium text-gray-9 text-sm tracking-[0] leading-[18px] whitespace-nowrap">
                          Campaign creation
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start relative self-stretch w-full">
                    <div className="flex h-6 items-center gap-2.5 px-[11px] py-0 relative self-stretch w-full">
                      <div className="bg-blue relative self-stretch w-0.5" />
                    </div>

                    <div className="inline-flex h-2 items-center gap-2 pl-[5px] pr-0 py-0 relative">
                      <div className="flex flex-col w-3.5 h-3.5 items-center justify-center gap-2.5 relative mt-[-3.00px] mb-[-3.00px] rounded-[20px]">
                        <div className="relative w-2 h-2 bg-blue rounded" />
                      </div>
                      <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] mt-[-3.00px] mb-[-3.00px]">
                        <div className="relative w-fit mt-[-1.00px] font-sans font-bold text-blue text-sm tracking-[0] leading-[14px] whitespace-nowrap">
                          Objectives
                        </div>
                      </div>
                    </div>

                    {navigationSteps[0].subSteps
                      .slice(1)
                      .map((subStep, index) => (
                        <React.Fragment key={index}>
                          <div className="flex h-8 items-center gap-2.5 px-[11px] py-0 relative self-stretch w-full">
                            <div className="bg-gray-6 relative self-stretch w-0.5" />
                          </div>
                          <div className="inline-flex h-2 items-center gap-2 pl-[5px] pr-0 py-0 relative">
                            <div className="flex flex-col w-3.5 h-3.5 items-center justify-center gap-2.5 relative mt-[-3.00px] mb-[-3.00px] rounded-[20px]">
                              <div className="relative w-2 h-2 bg-gray-6 rounded" />
                            </div>
                            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] mt-[-3.00px] mb-[-3.00px]">
                              <div className="relative w-[77px] h-3.5 mt-[-1.00px] font-sans font-normal text-gray-6 text-sm tracking-[0] leading-[14px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                                {subStep.title}
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}

                    <div className="flex h-6 items-center gap-2.5 px-[11px] py-0 relative self-stretch w-full">
                      <div className="bg-gray-6 relative self-stretch w-0.5" />
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                    {navigationSteps.slice(1).map((step, index) => (
                      <div
                        key={index}
                        className="flex h-9 items-center gap-2 relative self-stretch w-full"
                      >
                        <div className="inline-flex flex-col min-w-6 h-6 items-center justify-center px-[7px] py-0 relative flex-[0_0_auto] rounded-[100px] border border-solid border-[#667686]">
                          <div className="mt-[-1.00px] font-typography-caption text-gray-7 relative flex-1 self-stretch text-[length:var(--typography-caption-font-size)] text-center tracking-[var(--typography-caption-letter-spacing)] leading-[var(--typography-caption-line-height)]">
                            {step.number}
                          </div>
                        </div>
                        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                          <div className="relative w-fit mt-[-1.00px] font-sans font-normal text-gray-7 text-sm tracking-[0] leading-[18px] whitespace-nowrap">
                            {step.title}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Card className="flex h-10 items-center justify-center gap-2 p-4 relative self-stretch w-full mt-auto rounded-md border-[1.5px] border-solid border-[#8051e3]">
              <CardContent className="flex items-center p-0">
                <LightbulbIcon className="w-6 h-6" />
                <div className="flex items-center justify-center gap-2.5 relative flex-1 grow">
                  <div className="relative flex-1 mt-[-1.00px] font-sans font-normal text-gray-9 text-base tracking-[0] leading-6">
                    <span className="font-medium text-[#212832]">Tip: </span>
                    <span className="text-[#4b545f]">Conversion rules</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          <main className="flex-col items-end flex-1 grow flex relative">
            <div className="h-[769px] items-center justify-center gap-2.5 self-stretch w-full flex relative">
              <div className="inline-flex flex-col items-center gap-10 relative flex-[0_0_auto]">
                <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                    <h1 className="relative w-fit mt-[-1.00px] font-28-bold text-gray-9 text-[length:var(--28-bold-font-size)] tracking-[var(--28-bold-letter-spacing)] leading-[var(--28-bold-line-height)] whitespace-nowrap">
                      What is your primary advertising goal?
                    </h1>
                    <p className="relative w-fit font-20-regular text-gray-7 text-[length:var(--20-regular-font-size)] text-center tracking-[var(--20-regular-letter-spacing)] leading-[var(--20-regular-line-height)] whitespace-nowrap">
                      Select your campaign goal
                    </p>
                  </div>

                  <RadioGroup
                    value={selectedObjective}
                    onValueChange={setSelectedObjective}
                    className="flex flex-col items-start gap-4 relative self-stretch w-full"
                  >
                    {objectives.map((objective) => (
                      <Card
                        key={objective.id}
                        className={`flex flex-col h-[72px] items-start justify-around gap-2 p-4 relative self-stretch w-full rounded-md overflow-hidden border-2 border-solid transition-all duration-300 ease-in-out ${
                          selectedObjective === objective.id
                            ? "border-[#00CB84]"
                            : "border-[#d4d9df] hover:border-[#9CA8B5] hover:shadow-md"
                        }`}
                      >
                        <CardContent className="flex items-center justify-between relative self-stretch w-full p-0">
                          <div className="inline-flex flex-col items-start gap-2 relative">
                            <div className="inline-flex items-center gap-1.5 relative">
                              <RadioGroupItem
                                value={objective.id}
                                id={objective.id}
                                className={
                                  selectedObjective === objective.id
                                    ? "text-[#00CB84]"
                                    : "text-gray-7"
                                }
                              />
                              <label
                                htmlFor={objective.id}
                                className={`relative w-fit mt-[-1.00px] font-sans font-semibold ${
                                  selectedObjective === objective.id
                                    ? "text-gray-9"
                                    : "text-gray-7"
                                } text-base tracking-[0] leading-4 whitespace-nowrap`}
                              >
                                {objective.title}
                              </label>
                            </div>
                            <div className="inline-flex items-start relative">
                              <div className="relative w-[21px] h-3.5" />
                              <div className="relative w-[385px] mt-[-1.00px] font-sans font-normal text-gray-8 text-sm tracking-[0] leading-4">
                                {objective.description}
                              </div>
                            </div>
                          </div>
                          <div className="relative w-10 h-10 bg-[#edf3fd] rounded-md">
                            <img
                              className="absolute w-6 h-6 top-2 left-2"
                              alt={objective.title}
                              src={objective.icon}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </div>

            <footer className="relative self-stretch w-full h-[71px] bg-white">
              <Separator className="absolute w-full h-px top-0 left-0" />
              <div className="flex justify-between items-center px-4 py-4 w-full">
                <Button
                  variant="ghost"
                  className="inline-flex items-center gap-0.5 pl-2 pr-4 py-2"
                >
                  <ArrowLeftIcon className="w-5 h-5" />
                  <span className="font-sans font-medium text-gray-7 text-sm text-center tracking-[0.50px] leading-6">
                    Back
                  </span>
                </Button>
                <Button className="inline-flex items-center justify-center gap-2.5 px-4 py-2 bg-blue rounded">
                  <span className="font-sans font-medium text-white text-sm text-center tracking-[0.50px] leading-6">
                    Next
                  </span>
                </Button>
              </div>
            </footer>
          </main>

          <aside className="flex w-[430px] h-full items-center justify-center px-0 py-[142px] relative bg-light-blue border-l border-[#d4d9df]">
            <img
              className="relative w-[430px] h-[430px]"
              alt="Campaign illustration"
              src="https://c.animaapp.com/m95u7vbvjJDPfz/img/layer-1.png"
            />
          </aside>
        </div>
      </div>
    </div>
  );
};
