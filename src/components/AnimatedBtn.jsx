import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const AnimatedBtn = ({ to, children, className = "", ...props }) => {
  const baseClasses = `
    relative z-10 inline-flex items-center justify-center gap-3 px-10 py-4 
    overflow-hidden font-bold text-black transition-all duration-300 
    bg-white border-2 border-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] 
    group hover:text-white hover:border-red-600 hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]
    
    before:absolute 
    before:w-full before:aspect-square 
    before:-left-full 
    before:rounded-full 
    before:bg-red-600 
    before:-z-10 
    before:transition-all before:duration-700 
    
    hover:before:left-0 
    hover:before:scale-150
  `;

  // twMerge intelligently combines the default classes with your custom ones
  // It effectively replaces 'px-10' with 'px-6' cleanly
  const finalClass = twMerge(baseClasses, className);

  if (to) {
    return (
      <Link to={to} className={finalClass} {...props}>
        <span className="relative z-10 flex items-center gap-3">
          {children}
        </span>
      </Link>
    );
  }

  return (
    <button className={finalClass} {...props}>
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </button>
  );
};

export default AnimatedBtn;
