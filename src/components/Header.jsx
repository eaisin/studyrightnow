import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import AnimatedBtn from "./AnimatedBtn";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (isOpen) setIsOpen(false);
  };

  return (
    <>
      {/* Sticky Header Wrapper */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50 
          transition-all duration-500 ease-in-out border-b
          ${
            scrolled || searchOpen
              ? "bg-black/60 backdrop-blur-xl border-white/10 py-3"
              : "bg-transparent border-transparent py-4"
          }
        `}
      >
        <div className="px-4 md:px-6 max-w-7xl mx-auto relative flex items-center justify-between">
          {/* --- LEFT SECTION --- */}
          <div className="flex items-center gap-4 z-20">
            {/* Mobile Hamburger (Visible below 900px) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="min-[900px]:hidden p-1 text-gray-300 hover:text-white transition-colors focus:outline-none"
            >
              {isOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>

            {/* Desktop Nav (Hidden below 900px) */}
            <nav className="hidden min-[900px]:flex items-center gap-8">
              <NavLinks onClick={closeMenu} />
            </nav>
          </div>

          {/* --- MIDDLE SECTION --- */}
          {/* Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="shrink-0 flex items-center">
              <Link to="/" onClick={closeMenu}>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                  <span className="min-[900px]:hidden text-red-600">SRN</span>
                  <span className="hidden min-[900px]:block">
                    <span className="text-red-600">Study</span>RightNow
                  </span>
                </h2>
              </Link>
            </div>
          </div>

          {/* --- RIGHT SECTION --- */}
          <div className="flex items-center gap-4 z-20">
            {/* SEARCH TRIGGER BUTTON */}
            <button
              onClick={toggleSearch}
              className={`
                w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300
                ${
                  searchOpen
                    ? "bg-red-600 border-red-500 text-white rotate-90"
                    : "bg-white border-white/10 text-black hover:bg-red-600 hover:border-red-500 hover:text-white"
                }
              `}
            >
              {searchOpen ? <X size={18} /> : <Search size={18} />}
            </button>

            {/* Sign Up Button (Hidden below 900px) */}
            <div className="hidden min-[900px]:block">
              <SignUpButton />
            </div>
          </div>
        </div>

        {/* --- SEARCH BAR DROPDOWN --- */}
        <div
          className={`
            absolute top-full left-0 w-full bg-transparent border-b border-white/0
            transition-all duration-300 ease-in-out origin-top overflow-hidden
            ${
              searchOpen
                ? "h-24 opacity-100 visible"
                : "h-0 opacity-0 invisible"
            }
        `}
        >
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="relative w-full max-w-3xl mx-auto group">
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors z-10"
                size={20}
              />

              {/* LIQUID GLASS INPUT FIELD */}
              <input
                type="text"
                placeholder="What do you want to learn?"
                className="
                          w-full 
                          bg-linear-to-br from-white/10 via-white/5 to-white/0 
                          backdrop-blur-2xl 
                          border border-white/20 
                          rounded-full 
                          py-4 pl-14 pr-6 
                          text-white placeholder-gray-400 
                          shadow-lg shadow-black/10
                          focus:outline-none focus:border-red-500/50 focus:shadow-red-900/20
                          transition-all duration-300
                        "
                autoFocus={searchOpen}
              />
            </div>
          </div>
        </div>

        {/* --- MOBILE MENU DROPDOWN (Hidden above 900px) --- */}
        <div
          className={`
            absolute top-full left-0 w-full 
            bg-black/60 backdrop-blur-2xl border-b border-white/10 
            flex flex-col items-center gap-8 min-[900px]:hidden overflow-hidden
            transition-all duration-300 ease-in-out origin-top z-0
            ${
              isOpen && !searchOpen
                ? "opacity-100 max-h-screen py-10"
                : "opacity-0 max-h-0 py-0 invisible"
            }
          `}
        >
          <NavLinks onClick={closeMenu} />
          <SignUpButton onClick={closeMenu} />
        </div>
      </header>

      {/* Spacer */}
      <div className="h-24" />
    </>
  );
};

// --- Sub Components ---

const NavLinks = ({ onClick }) => (
  <>
    <StyledNavLink to="/" onClick={onClick}>
      HOME
    </StyledNavLink>
    <StyledNavLink to="/books" onClick={onClick}>
      BOOKS
    </StyledNavLink>
    <StyledNavLink to="/courses" onClick={onClick}>
      COURSES
    </StyledNavLink>
    <StyledNavLink to="/about" onClick={onClick}>
      ABOUT
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
