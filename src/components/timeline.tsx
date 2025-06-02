import { cn } from "@/utils";
import React from "react";

interface TimelineStep {
  id: string;
  title: string;
  description: string;
}

export const timelineData: TimelineStep[] = [
  {
    id: "01",
    title: "LET'S HAVE A CUP OF COFFEE:",
    description:
      "Initiate a meeting to understand the requirements and goals of the client.",
  },
  {
    id: "02",
    title: "PLAN FOR THE SUCCESS:",
    description:
      "We analyze, design, develop and test the whole project with eagle vision.",
  },
  {
    id: "03",
    title: "QUALITY SOLUTIONS:",
    description:
      "For us, the quality solution is what brings clients success & exposure together.",
  },
  {
    id: "04",
    title: "YOUR DREAMOUR GOAL:",
    description:
      "We discover & innovate your dream with a look & feel experience.",
  },
];

const Timeline = () => {
  return (
    <div className="relative max-w-6xl mx-auto py-12 md:block hidden">
      
      <div className="relative space-y-32">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 z-0"
          style={{
            height: "calc(100% - 60px)",
            top: "20px",
          }}
        />

        {timelineData.map((step, idx) => (
          <div key={step.id} className="relative flex items-center">
            <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
              <div className="size-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full outline-2 outline-offset-4 outline-red-500 shadow-lg" />
            </div>

            <div
              className={cn(
                "absolute w-5/12 z-10 flex items-center",
                idx % 2 === 0
                  ? "right-1/2 pr-12 justify-end"
                  : "left-1/2 pl-12 justify-start"
              )}
            >
              <span className="text-transparent font-bold text-7xl opacity-10 text-stroke">
                {step.id}
              </span>
            </div>

            <div
              className={cn(
                "w-5/12 z-10",
                idx % 2 === 0 ? "ml-auto text-left" : "text-right"
              )}
            >
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
