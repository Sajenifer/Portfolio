import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, personal } from "./data/mock";
import { Button } from "./components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 bg-white`}> 
    
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5"
        >
          <span className="avatar-grad w-9 h-9 rounded-md flex items-center justify-center text-[13px] font-semibold text-[#F5EDE0] tracking-wider">
            {personal.initials}
          </span>
          <div className="leading-tight">
            <p className="font-display text-[15px] font-semibold text-[#2B1A24]">
              {personal.shortName}
            </p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#8E5A7B] font-mono">
              Portfolio
            </p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(l.href);
              }}
              className="nav-link text-[14px] text-black hover:text-black"
            >
              {l.label}
            </a>
          ))}
          <Button
            onClick={() => handleNav("#contact")}
            className="rounded-md px-4 h-9 text-[13px] bg-white text-black border"
          >
            Get in touch
          </Button>
        </nav>

        <button
          className="md:hidden p-2 text-[#2B1A24]"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-5 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(l.href);
                }}
                className="py-2 text-[15px] text-black border-b border-gray-200"
              >
                {l.label}
              </a>
            ))}
            <Button
              onClick={() => handleNav("#contact")}
              className="rounded-md mt-2 bg-white text-black border"
            >
              Get in touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
