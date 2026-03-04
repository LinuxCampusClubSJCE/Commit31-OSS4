import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home",     to: "/" },
  { label: "Login",    to: "/login" },
  { label: "Register", to: "/register" },
  { label: "Profile",  to: "/profile" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-navbar-Primary border-b border-navbar-Secondary sticky top-0 z-50 shadow-[0_2px_12px_rgba(0,0,0,0.4)]">

      {/* Desktop bar */}
      <div className="w-full px-10 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-3 shrink-0 no-underline"
        >
          <span className="w-9 h-9 shrink-0 rounded-[10px] bg-linear-to-br from-navbar-Secondary to-navbar-Accent flex items-center justify-center text-white font-bold text-[17px]">
            S
          </span>
          <span className="text-navbar-TextPrimary font-bold text-[1.1rem] whitespace-nowrap">
            Student Developer<span className="text-navbar-Accent"> Platform</span>
          </span>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                [
                  "whitespace-nowrap text-[0.9rem] font-medium px-5 py-[0.4rem] transition-colors duration-200",
                  isActive
                    ? "text-navbar-Accent underline decoration-navbar-Accent decoration-2 underline-offset-[5px]"
                    : "text-navbar-Muted no-underline hover:text-navbar-TextPrimary",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="flex md:hidden flex-col justify-center items-center gap-[5px] p-2 rounded-lg shrink-0 bg-transparent border-none cursor-pointer"
        >
          <span className="block w-5 h-[2px] bg-navbar-TextPrimary rounded-[2px]" />
          <span className="block w-5 h-[2px] bg-navbar-TextPrimary rounded-[2px]" />
          <span className="block w-5 h-[2px] bg-navbar-TextPrimary rounded-[2px]" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-navbar-Primary border-t border-navbar-Secondary px-6 pt-3 pb-5 flex flex-col gap-[6px]">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                [
                  "block text-[0.9rem] font-medium px-4 py-[0.7rem] transition-colors duration-200",
                  isActive
                    ? "text-navbar-Accent underline decoration-navbar-Accent decoration-2 underline-offset-[5px]"
                    : "text-navbar-Muted no-underline hover:text-navbar-TextPrimary",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;