import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import * as Icons from "lucide-react";
import { personal, socials, education } from "../data/mock";
import profileImg from "../assets/profile.jpeg";

const Contact = () => {
  const contactBlocks = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: personal.location, href: null },
  ];

  return (
    <section id="contact" className="section-pad">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-3">{personal.name}</h2>
            <p className="text-sm text-gray-600 mb-4">{personal.objective}</p>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              {socials.map((s) => {
                const Ico = Icons[s.icon] || Icons.Link;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-md border border-black bg-white hover:bg-white transition text-sm text-black"
                  >
                    <Ico size={14} />
                    <span className="hidden sm:inline">{s.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="space-y-3">
              {contactBlocks.map(({ icon: Ico, label, value, href }) => {
                const Wrap = href ? "a" : "div";
                return (
                  <Wrap
                    key={label}
                    href={href || undefined}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <Ico size={16} />
                    <div>
                      <div className="font-medium">{value}</div>
                      <div className="text-xs text-gray-500">{label}</div>
                    </div>
                  </Wrap>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full md:w-72 rounded-lg overflow-hidden">
              <div className="w-full aspect-[3/4] bg-white border border-black flex items-center justify-center">
                {profileImg ? (
                  <img src={profileImg} alt={personal.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-7xl md:text-8xl font-serif text-black">{personal.initials}</div>
                )}
              </div>
            </div>

            {/* repeated small profile block removed to avoid duplication */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
