import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import AnimatedBtn from "./AnimatedBtn";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for glass background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* sticky nav */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50 
          transition-all duration-500 ease-in-out border-b
          ${
            scrolled
              ? "bg-black/60 backdrop-blur-xl border-white/10 py-3"
              : "bg-transparent border-transparent py-4"
          }
        `}
      >
        <div className="px-4 md:px-6 max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between space-x-4">
          {/* logo */}
          <div className="shrink-0 flex items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
              <span className="md:hidden text-red-600">SRN</span>
              <span className="hidden md:block">
                <span className="text-red-600">Study</span>RightNow
              </span>
            </h2>
          </div>

          <div className="order-last md:order-0 w-full md:flex-1 md:max-w-xl md:mx-auto">
            <div className="relative group w-full">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-red-500 transition-colors duration-300" />

              <input
                type="text"
                placeholder="Search here"
                className="
                  w-full 
                  bg-[#111] 
                  text-base text-gray-200 
                  rounded-full
                  py-3 pl-12 pr-4 
                  border border-white/10 
                  placeholder-gray-600 
                  transition-all duration-300 ease-out
                  focus:bg-black
                  focus:border-red-500/50
                  focus:text-white
                  focus:outline-none
                "
              />
            </div>
          </div>

          {/* hambuger menu*/}
          <div className="shrink-0 flex items-center gap-4">
            {/* desktop nav */}
            <nav className="hidden md:flex items-center gap-8 mx-8">
              <NavLinks onClick={closeMenu} />
              <SignUpButton />
            </nav>

            {/* mobile hambuger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1 text-gray-300 hover:text-white transition-colors focus:outline-none"
            >
              {isOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/*mobile menu drop down*/}
        <div
          className={`
            absolute top-full left-0 w-full bg-black/95 border-b border-white/10 
            flex flex-col items-center gap-8 md:hidden overflow-hidden backdrop-blur-xl
            transition-all duration-300 ease-in-out origin-top
            ${
              isOpen
                ? "opacity-100 max-h-screen py-10"
                : "opacity-0 max-h-0 py-0 invisible"
            }
          `}
        >
          <NavLinks onClick={closeMenu} />
          <SignUpButton onClick={closeMenu} />
        </div>
      </header>

      {/* spacer to push cuz heigh is large n wraps to sec line */}
      <div className="h-32.5 md:h-27" />
    </>
  );
};

// sub components

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
      relative pb-1 font-medium transition-colors duration-300 text-base
      ${isActive ? "text-white" : "text-gray-400 hover:text-white"}
      
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

const SignUpButton = ({ onClick }) => (
  <AnimatedBtn
    to="/signup"
    onClick={onClick}
    className="px-8 py-2.5 text-sm font-bold uppercase tracking-wider shadow-lg"
  >
    Sign Up
  </AnimatedBtn>
);

export default Header;
