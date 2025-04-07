import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

// Define the main process steps
const processSteps = [
  {
    number: 1,
    name: "Campaign creation",
    status: "current",
    subSteps: [
      { name: "Objectives", status: "completed" },
      { name: "Landing page", status: "current" },
      { name: "Audiences", status: "pending" },
      { name: "Target cost", status: "pending" },
      { name: "Budget", status: "pending" },
      { name: "Ads", status: "pending" },
    ],
  },
  { number: 2, name: "Review & Submit", status: "pending" },
  { number: 3, name: "Payment", status: "pending" },
  { number: 4, name: "Tracking & Conversions", status: "pending" },
];

export const LandingPage = (): JSX.Element => {
  return (
    <div className="flex flex-col h-[900px] items-start relative bg-white">
      {/* Header */}
      <header className="flex flex-col h-[60px] items-start gap-2.5 p-5 relative self-stretch w-full bg-[#1d4488]">
        <div className="relative w-[75.71px] h-5">
          <img
            className="absolute w-[69px] h-[18px] top-px left-px"
            alt="Group"
            src="https://c.animaapp.com/m96rp6hibI0ow1/img/group.png"
          />
          <img
            className="absolute w-[3px] h-2 top-[9px] left-[72px]"
            alt="Vector"
            src="https://c.animaapp.com/m96rp6hibI0ow1/img/vector.svg"
          />
        </div>
      </header>

      {/* Main content */}
      <div className="flex items-center relative self-stretch w-full flex-1">
        {/* Sidebar */}
        <aside className="flex flex-col w-[213px] h-[840px] items-start justify-between p-6 relative bg-white border-r border-solid border-gray-4">
          <div className="flex flex-col items-start gap-8 relative self-stretch w-full">
            <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                {/* Process steps */}
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                  {processSteps.map((step, index) => (
                    <React.Fragment key={`process-step-${index}`}>
                      <div
                        className={`flex h-9 items-center gap-2 relative self-stretch w-full ${
                          index > 0 ? "mt-2" : ""
                        }`}
                      >
                        <Badge
                          variant="outline"
                          className={`flex-col min-w-6 h-6 items-center justify-center px-[7px] py-0 rounded-[100px] ${
                            step.status === "current"
                              ? "border-[1.5px] border-blue text-blue"
                              : "border-gray-7 text-gray-7"
                          }`}
                        >
                          {step.number}
                        </Badge>
                        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                          <div
                            className={`relative w-fit mt-[-1.00px] font-medium text-sm tracking-[0] leading-[18px] whitespace-nowrap ${
                              step.status === "current"
                                ? "text-gray-9"
                                : "text-gray-7"
                            }`}
                          >
                            {step.name}
                          </div>
                        </div>
                      </div>

                      {/* Sub-steps for Campaign creation */}
                      {step.subSteps && (
                        <div className="flex flex-col items-start relative self-stretch w-full ml-4">
                          {step.subSteps.map((subStep, subIndex) => (
                            <React.Fragment key={`sub-step-${subIndex}`}>
                              <div
                                className={`flex h-${
                                  subIndex === 0 ||
                                  subIndex === step.subSteps.length - 1
                                    ? "6"
                                    : "8"
                                } items-center gap-2.5 px-[11px] py-0 relative self-stretch w-full`}
                              >
                                <div
                                  className={`relative self-stretch w-0.5 ${
                                    subStep.status === "current"
                                      ? "bg-blue"
                                      : subStep.status === "completed"
                                      ? "bg-gray-8"
                                      : "bg-gray-6"
                                  }`}
                                />
                              </div>
                              <div className="inline-flex h-2 items-center gap-2 pl-[5px] pr-0 py-0 relative">
                                <div className="flex flex-col w-3.5 h-3.5 items-center justify-center gap-2.5 relative mt-[-3.00px] mb-[-3.00px] rounded-[20px]">
                                  <div
                                    className={`relative w-2 h-2 rounded ${
                                      subStep.status === "current"
                                        ? "bg-blue"
                                        : subStep.status === "completed"
                                        ? "bg-gray-8"
                                        : "bg-gray-6"
                                    }`}
                                  />
                                </div>
                                <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] mt-[-3.00px] mb-[-3.00px]">
                                  <div
                                    className={`relative w-fit mt-[-1.00px] text-sm tracking-[0] leading-[14px] whitespace-nowrap ${
                                      subStep.status === "current"
                                        ? "font-bold text-blue"
                                        : subStep.status === "completed"
                                        ? "font-normal text-gray-8"
                                        : "font-normal text-gray-6"
                                    }`}
                                  >
                                    {subStep.name}
                                  </div>
                                </div>
                              </div>
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tip card */}
          <Card className="flex h-10 items-center justify-center gap-2 p-4 relative self-stretch w-full rounded-md border-[1.5px] border-[#8051e3]">
            <CardContent className="flex items-center p-0">
              <img
                className="relative w-6 h-6"
                alt="Lightbulb"
                src="https://c.animaapp.com/m96rp6hibI0ow1/img/lightbulb.svg"
              />
              <div className="flex items-center justify-center gap-2.5 relative flex-1 grow">
                <div className="relative flex-1 mt-[-1.00px] font-normal text-gray-9 text-base tracking-[0] leading-6">
                  <span className="font-medium text-[#212832]">Tip: </span>
                  <span className="text-[#4b545f]">Conversion rules</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <img
            className="absolute w-[45px] h-[45px] top-[43px] left-[191px]"
            alt="Arrow"
            src="https://c.animaapp.com/m96rp6hibI0ow1/img/arrow.svg"
          />
        </aside>

        {/* Main content area */}
        <main className="flex flex-col items-start gap-px relative flex-1">
          <div className="flex flex-col h-[768px] items-center justify-center gap-2.5 relative self-stretch w-full">
            <div className="flex flex-col items-center gap-10 relative self-stretch w-full">
              <div className="inline-flex flex-col items-center gap-8 relative">
                <div className="inline-flex flex-col items-center gap-4 relative">
                  <h1 className="text-[28px] font-bold text-gray-9 text-center leading-[28px] max-w-[527px]">
                    Where would you like to direct people after clicking your
                    ad?
                  </h1>
                  <p className="text-xl font-normal text-gray-7 text-center leading-6">
                    After entering your landing page we will scan the website{" "}
                    <br />
                    and create ads automatically for this campaign
                  </p>
                </div>

                <div className="inline-flex flex-col items-start gap-4 relative">
                  <div className="inline-flex flex-col items-start gap-2 relative">
                    <Input
                      className="w-[520px] px-3 py-[11px] text-gray-6 border-gray-5 rounded-md"
                      placeholder="Enter your landing page"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="relative self-stretch w-full h-[71px] bg-white">
            <Separator className="absolute w-full h-px top-0 left-0" />
            <div className="flex justify-between items-center px-4 py-4 w-full">
              <Button
                variant="ghost"
                className="inline-flex items-center gap-0.5 pl-2 pr-4 py-2 text-gray-7"
              >
                <ChevronLeftIcon className="w-5 h-5" />
                <span className="font-medium text-sm tracking-[0.50px] leading-6">
                  Back
                </span>
              </Button>

              <Button className="inline-flex items-center justify-center gap-2.5 px-4 py-2 bg-blue rounded">
                <span className="font-medium text-white text-sm text-center tracking-[0.50px] leading-6">
                  Next
                </span>
              </Button>
            </div>
          </footer>
        </main>

        {/* Right sidebar */}
        <aside className="relative self-stretch w-[430px] bg-light-blue border-l border-solid border-gray-4">
          <div className="absolute w-[430px] h-[660px] top-[50px] left-0">
            <div className="inline-flex flex-col items-center gap-3 absolute top-0 left-[39px]">
              <h2 className="font-bold text-gray-9 text-2xl text-center tracking-[0] leading-6 whitespace-nowrap">
                Top It Off With A Visual
              </h2>
              <p className="w-[352.15px] font-normal text-gray-7 text-base text-center tracking-[0] leading-5">
                Adding a picture at the beginning or midway the article will
                help make your page inviting
              </p>
            </div>

            <div className="absolute w-[430px] h-[627px] top-[33px] left-0">
              <div className="relative w-[473px] h-[690px] left-[-43px] bg-[url(https://c.animaapp.com/m96rp6hibI0ow1/img/mock.png)] bg-cover bg-[50%_50%]">
                <img
                  className="absolute w-[229px] h-[451px] top-[120px] left-[143px]"
                  alt="Mask group"
                  src="https://c.animaapp.com/m96rp6hibI0ow1/img/mask-group.png"
                />
                <img
                  className="absolute w-[229px] h-[26px] top-[95px] left-[143px]"
                  alt="Union"
                  src="https://c.animaapp.com/m96rp6hibI0ow1/img/union.svg"
                />
              </div>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex w-[430px] items-center justify-center gap-2 px-4 py-8 absolute top-[768px] left-0">
            <div className="opacity-20 relative w-2 h-2 bg-blue rounded" />
            <div className="relative w-2 h-2 bg-blue rounded" />
            <div className="opacity-20 relative w-2 h-2 bg-blue rounded" />
          </div>
        </aside>
      </div>
    </div>
  );
};
