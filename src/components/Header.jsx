import { useState } from "react";
import { NavLink } from "react-router-dom";
import AnimatedBtn from "./AnimatedBtn"; // <--- Import your reusable button

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative flex items-center px-4 md:px-8 py-4 bg-black border-b border-gray-800 z-50 gap-4">
      {/*  logo */}
      <div className="shrink-0">
        <h2 className="text-2xl font-bold text-white tracking-wide">
          <span className="md:hidden">SRN</span>
          <span className="hidden md:block">StudyRightNow</span>
        </h2>
      </div>

      {/* search bar */}
      <div className="flex-1 max-w-md mx-auto">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-900 text-gray-200 text-sm rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-red-900/50 border border-gray-800 placeholder-gray-500 transition-all"
          />
          <svg
            className="w-4 h-4 text-gray-500 absolute left-3 top-2.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* nav */}
      <nav className="hidden md:flex items-center gap-6 shrink-0">
        <NavLinks onClick={closeMenu} />
        <SignUpButton />
      </nav>

      {/* hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none shrink-0 group"
      >
        <span
          className={`block h-0.5 w-6 bg-gray-300 rounded-full transition-all duration-300 ease-out 
          ${
            isOpen ? "rotate-45 translate-y-2 bg-white" : "group-hover:bg-white"
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-gray-300 rounded-full transition-all duration-300 ease-out 
          ${
            isOpen
              ? "opacity-0 translate-x-3"
              : "opacity-100 group-hover:bg-white"
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-gray-300 rounded-full transition-all duration-300 ease-out 
          ${
            isOpen
              ? "-rotate-45 -translate-y-2 bg-white"
              : "group-hover:bg-white"
          }`}
        />
      </button>

      {/* menu drop down */}
      <div
        className={`
        absolute top-full left-0 w-full bg-black border-b border-gray-800 
        flex flex-col items-center gap-6 md:hidden shadow-xl overflow-hidden
        transition-all duration-300 ease-in-out origin-top
        ${
          isOpen
            ? "opacity-100 max-h-96 py-8"
            : "opacity-0 max-h-0 py-0 invisible"
        }
      `}
      >
        <NavLinks onClick={closeMenu} />
        <SignUpButton onClick={closeMenu} />
      </div>
    </header>
  );
};

// --- Sub Components ---

const NavLinks = ({ onClick }) => (
  <>
    <StyledNavLink to="/" onClick={onClick}>
      Home
    </StyledNavLink>
    <StyledNavLink to="/books" onClick={onClick}>
      Books
    </StyledNavLink>
    <StyledNavLink to="/courses" onClick={onClick}>
      Courses
    </StyledNavLink>
    <StyledNavLink to="/about" onClick={onClick}>
      About
    </StyledNavLink>
  </>
);

const StyledNavLink = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) => `
      relative pb-1 text-gray-400 transition-colors duration-300 hover:text-white
      ${isActive ? "text-white" : ""}
      after:content-[''] 
      after:absolute 
      after:left-0 
      after:bottom-0 
      after:h-0.5 
      after:bg-red-600 
      after:transition-all 
      after:duration-300
      ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
    `}
  >
    {children}
  </NavLink>
);

// REPLACED: Now uses AnimatedBtn
const SignUpButton = ({ onClick }) => (
  <AnimatedBtn
    to="/signup"
    onClick={onClick}
    // twMerge sees 'px-6' and knows it should overwrite the default 'px-10'
    className="px-6 py-2 text-sm whitespace-nowrap"
  >
    Sign Up
  </AnimatedBtn>
);

export default Header;
