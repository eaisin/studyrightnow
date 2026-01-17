import React from "react";
import { BookOpen, Clock, AlertCircle } from "lucide-react";
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

  const glassStyle =
    "bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg";

  return (
    <div className="w-full max-w-sm flex flex-col bg-neutral-950 border border-neutral-900 rounded-3xl sm:rounded-4xl overflow-hidden hover:border-red-600/30 transition-all duration-500 group relative">
      {/* TOP SECTION */}
      <div className="p-4 sm:p-6 pb-2 flex justify-between items-start z-10 gap-4">
        {/* Logo */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl bg-neutral-900/50 border border-neutral-800 p-2.5 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          <img
            src={logo}
            alt={title}
            className="w-full h-full object-contain drop-shadow-md"
          />
        </div>

        {/* Level Badge */}
        <div className="flex flex-col items-end gap-3">
          <div
            className={`
              ${glassStyle} px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl flex items-center gap-2 w-fit cursor-default
            `}
          >
            <div
              className={`w-2 h-2 shrink-0 rounded-full ${
                isBeginner
                  ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"
                  : "bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"
              }`}
            />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-neutral-300">
              {level}
            </span>
          </div>
        </div>
      </div>

      {/* MIDDLE SECTION*/}
      <div className="px-4 sm:px-6 py-2 sm:py-4 z-10">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 leading-tight">
          {title}
        </h3>

        {prerequisites && (
          <div
            className={`${glassStyle} rounded-2xl p-3 sm:p-4 mb-3 sm:mb-4 flex items-start gap-3 hover:bg-white/10 transition-colors cursor-default`}
          >
            <AlertCircle
              size={18}
              className="text-neutral-400 shrink-0 mt-0.5"
            />
            <span className="text-xs sm:text-sm text-neutral-300 font-medium leading-tight">
              {prerequisites}
            </span>
          </div>
        )}

        {/* Stats Row */}
        <div
          className={`${glassStyle} rounded-2xl p-3 sm:p-4 flex flex-row items-center justify-around space-x-4 sm:space-x-6 hover:bg-white/10 transition-colors cursor-default`}
        >
          {/* Hours */}
          <div className="flex items-center gap-2.5">
            <Clock size={18} className="text-red-500 shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-neutral-200">
              {lectures}
              {lectures !== "in progress" && " Hours"}
            </span>
          </div>

          {/* Separator Line */}
          <div className="w-px h-8 bg-white/10" />

          {/* Lessons */}
          <div className="flex items-center gap-2.5">
            <BookOpen size={18} className="text-blue-500 shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-neutral-200">
              {practices}
              {practices !== "in progress" && " Lessons"}
            </span>
          </div>
        </div>
      </div>

      {/* PRICE SECTION */}
      <div className="px-4 sm:px-6 py-2 grid grid-cols-2 gap-2 sm:gap-3 z-10">
        {/* Self Study */}
        <div
          className={`${glassStyle} rounded-2xl p-2 sm:p-4 flex flex-col items-center justify-center gap-1 hover:bg-white/10 transition-colors cursor-default`}
        >
          <span className="text-[9px] sm:text-[10px] text-neutral-400 uppercase font-bold tracking-wider text-center">
            Self Study
          </span>
          <span className="text-lg sm:text-xl font-bold text-white whitespace-nowrap">
            {selfPacedPrice}{" "}
            <span className="text-xs font-normal text-neutral-500">MMK</span>
          </span>
        </div>

        {/* Zoom Class */}
        <div
          className={`${glassStyle} rounded-2xl p-2 sm:p-4 flex flex-col items-center justify-center gap-1 hover:bg-white/10 transition-colors cursor-default relative overflow-hidden`}
        >
          <div className="absolute top-0 right-0 w-8 h-8 bg-red-500/20 blur-xl rounded-full" />
          <span className="text-[9px] sm:text-[10px] text-red-400 uppercase font-bold tracking-wider text-center flex items-center gap-1">
            Zoom Class
          </span>
          <span className="text-lg sm:text-xl font-bold text-white whitespace-nowrap">
            {zoomPrice}{" "}
            <span className="text-xs font-normal text-neutral-500">MMK</span>
          </span>
        </div>
      </div>

      {/* BUTTON SECTION */}
      <div className="p-4 sm:p-6 pt-3 sm:pt-4 mt-auto z-10">
        <AnimatedBtn
          to="#"
          className="w-full py-3 sm:py-4 rounded-xl text-xs sm:text-sm uppercase tracking-widest font-bold bg-white text-black hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5"
        >
          Learn Now
        </AnimatedBtn>
      </div>
    </div>
  );
};

export default CourseCard;
