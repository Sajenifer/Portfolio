import React from "react";
import { Heart } from "lucide-react";
import { personal, socials, navLinks } from "../data/mock";
import * as Icons from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2B1A24] text-[#E8DCC4] mt-10">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="avatar-grad w-10 h-10 rounded-md flex items-center justify-center text-[13px] font-semibold text-[#F5EDE0] tracking-wider">
                {personal.initials}
              </span>
              <div>
                <p className="font-display text-[18px] text-[#F5EDE0]">
                  {personal.name}
                </p>
                <p className="text-[12px] font-mono uppercase tracking-[0.18em] text-[#C9B8A8]">
                  {personal.role}
                </p>
              </div>
            </div>
            <p className="mt-5 text-[14px] leading-relaxed text-[#C9B8A8] max-w-md">
              {personal.tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[12px] font-mono uppercase tracking-[0.18em] text-[#8E5A7B] mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[14px] text-[#E8DCC4] hover:text-[#F5EDE0] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[12px] font-mono uppercase tracking-[0.18em] text-[#8E5A7B] mb-4">
              Connect
            </p>
            <div className="space-y-2">
              <a
                href={`mailto:${personal.email}`}
                className="block text-[14px] text-[#E8DCC4] hover:text-[#F5EDE0]"
              >
                {personal.email}
              </a>
              <a
                href={`tel:${personal.phone.replace(/\s/g, "")}`}
                className="block text-[14px] text-[#E8DCC4] hover:text-[#F5EDE0]"
              >
                {personal.phone}
              </a>
            </div>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => {
                const Ico = Icons[s.icon] || Icons.Link;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-md border border-[#5C3A4F] flex items-center justify-center hover:bg-[#5C3A4F] transition-colors"
                  >
                    <Ico size={15} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#5C3A4F] flex flex-wrap items-center justify-between gap-3">
          <p className="text-[12.5px] text-[#C9B8A8]">
            © {new Date().getFullYear()} {personal.name}. All rights
            reserved.
          </p>
          <p className="text-[12.5px] text-[#C9B8A8] flex items-center gap-1.5">
            Built with <Heart size={12} className="text-[#C58FA8]" /> using
            React &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
