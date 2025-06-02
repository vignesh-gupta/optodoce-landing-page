import { timelineData } from "./timeline";

const TimelineMD = () => {
  return (
    <div className="relative max-w-6xl mx-auto py-12 md:hidden">
      <div className="relative space-y-32">
        <div
          className="absolute left-4 sm:left-6 top-4 w-0.5 bg-gray-300 z-0"
          style={{
            height: "calc(100% - 32px)",
          }}
        />

        {timelineData.map((step) => (
          <div key={step.id} className="relative flex items-start">
            <div className="absolute left-4 sm:left-6 transform -translate-x-1/2 z-20 mt-2">
              <div className="size-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full outline-2 outline-offset-4 outline-red-500 shadow-lg" />
            </div>

            <div className="ml-8 sm:ml-12 w-full">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 leading-tight">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineMD;
