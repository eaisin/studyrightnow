import React from "react";
import { BookOpen, Clock, Video, AlertCircle } from "lucide-react";
import AnimatedBtn from "./AnimatedBtn";

const CourseCard = ({
  title,
  level,
  logo,
  lectures,
  practices,
  selfPacedPrice,
  zoomPrice,
  prerequisites,
}) => {
  const isBeginner = level === "Beginner";

  // liquid glass f
  const glassStyle =
    "bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg";

  return (
    <div className="w-full max-w-sm flex flex-col bg-neutral-950 border border-neutral-900 rounded-3xl sm:rounded-4xl overflow-hidden hover:border-red-600/30 transition-all duration-500 group relative">
      {/* top */}

      <div className="p-4 sm:p-6 pb-2 flex justify-between items-start z-10 gap-4">
        {/* left div */}
        <div className="flex flex-col gap-3 max-w-[60%]">
          {/* level */}
          <div
            className={`
              ${glassStyle} px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl flex items-center gap-2 w-fit cursor-default
            `}
          >
            <div
              className={`w-2 h-2 shrink-0 rounded-full ${
                isBeginner ? "bg-emerald-400" : "bg-red-600"
              }`}
            />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-neutral-300">
              {level}
            </span>
          </div>

          {/* requriement - Hidden if null or empty string */}
          {prerequisites && (
            <div
              className={`${glassStyle} p-2 sm:p-3 rounded-2xl flex flex-col gap-1 cursor-default`}
            >
              <p className="text-xs sm:text-sm text-neutral-300 font-medium leading-tight">
                {prerequisites}
              </p>
            </div>
          )}
        </div>

        {/* right */}
        <div className="w-20 h-20 sm:w-28 sm:h-28 shrink-0 rounded-2xl bg-neutral-900/50 border border-neutral-800 p-3 flex items-center justify-center">
          <img
            src={logo}
            alt={title}
            className="w-full h-full object-contain transition-transform duration-500"
          />
        </div>
      </div>

      {/* title */}
      <div className="px-4 sm:px-6 py-2 sm:py-4 z-10">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 leading-tight">
          {title}
        </h3>

        {/* stats */}
        <div
          className={`${glassStyle} rounded-2xl p-3 sm:p-4 flex flex-row items-center justify-around space-x-4 sm:space-x-6 hover:bg-white/10 transition-colors cursor-default`}
        >
          {/* hours */}
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-red-500 shrink-0" />
            <span className="text-xs sm:text-sm font-medium">
              {lectures}
              {lectures !== "in progress" && " Hours +"}
            </span>
          </div>

          {/* lessons */}
          <div className="flex items-center gap-2">
            <BookOpen size={16} className="text-blue-500 shrink-0" />
            <span className="text-xs sm:text-sm font-medium">
              {practices}
              {practices !== "in progress" && " +"}
            </span>
          </div>
        </div>
      </div>

      {/* price div */}
      <div className="px-4 sm:px-6 py-2 grid grid-cols-2 gap-2 sm:gap-3 z-10">
        {/* self */}
        <div
          className={`${glassStyle} rounded-2xl p-2 sm:p-4 flex flex-col items-center justify-center gap-0.5 sm:gap-1 hover:bg-white/10 transition-colors cursor-default`}
        >
          <span className="text-[9px] sm:text-[10px] text-neutral-400 uppercase font-bold tracking-wider text-center">
            Self Study
          </span>
          <span className="text-lg sm:text-xl font-bold text-white whitespace-nowrap">
            {selfPacedPrice} MMK
          </span>
        </div>

        {/* zoom */}
        <div
          className={`${glassStyle} rounded-2xl p-2 sm:p-4 flex flex-col items-center justify-center gap-0.5 sm:gap-1 hover:bg-white/10 transition-colors cursor-default relative overflow-hidden`}
        >
          <div className="absolute top-0 right-0 w-8 h-8 bg-red-500/20 blur-xl rounded-full" />
          <div className="flex items-center gap-1">
            <span className="text-[9px] sm:text-[10px] text-red-400 uppercase font-bold tracking-wider text-center">
              Zoom Class
            </span>
          </div>
          <span className="text-lg sm:text-xl font-bold text-white whitespace-nowrap">
            {zoomPrice} MMK
          </span>
        </div>
      </div>

      {/* btn */}
      <div className="p-4 sm:p-6 pt-3 sm:pt-4 mt-auto z-10">
        <AnimatedBtn
          to="#"
          className="w-full py-3 sm:py-4 rounded-xl text-xs sm:text-sm uppercase tracking-widest font-bold bg-white text-black hover:bg-neutral-200 transition-colors"
        >
          Learn Now
        </AnimatedBtn>
      </div>
    </div>
  );
};

export default CourseCard;
