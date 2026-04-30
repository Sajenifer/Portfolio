import React, { useState } from "react";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { projects } from "../data/mock";

const Projects = () => {
  const [active, setActive] = useState(projects[0].id);
  const current = projects.find((p) => p.id === active) || projects[0];

  return (
    <section id="projects" className="section-pad">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <h2 className="section-title text-[36px] md:text-[48px] mt-3 text-[#2B1A24]">
            Projects
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* List */}
          <div className="lg:col-span-5 space-y-3">
            {projects.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`w-full text-left rounded-xl border p-5 transition-all duration-300 ${
                  active === p.id
                    ? "bg-[#5C3A4F] border-[#5C3A4F] text-[#F5EDE0]"
                    : "bg-white border-black text-[#2B1A24] hover:border-[#8E5A7B]"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p
                      className={`text-[11px] font-mono tracking-[0.18em] uppercase ${
                        active === p.id ? "text-[#E8DCC4]" : "text-[#8E5A7B]"
                      }`}
                    >
                      0{idx + 1}
                    </p>
                    <h3 className="font-display text-[20px] mt-1">
                      {p.title}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className={`mt-1 shrink-0 transition-transform duration-300 ${
                      active === p.id ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <p
                  className={`mt-2 text-[13.5px] leading-relaxed ${
                    active === p.id ? "text-[#F5EDE0]/85" : "text-[#6B5560]"
                  }`}
                >
                  {p.summary}
                </p>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-7">
            <div
              key={current.id}
              className="reveal bg-white border border-black rounded-2xl p-7 md:p-9 h-full"
            >
              <div className="flex items-center gap-4 text-[12px] text-[#6B5560]">
                <span className="flex items-center gap-1.5">
                  <Briefcase size={13} /> {current.role}
                </span>
                {/* year removed as requested */}
              </div>
              <h3 className="font-display text-[28px] md:text-[34px] text-[#2B1A24] mt-2 leading-tight">
                {current.title}
              </h3>
              <p className="mt-3 text-[15px] text-[#5b4751] leading-relaxed">
                {current.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {current.stack.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-[#E8DCC4] pt-5">
                <p className="eyebrow mb-3">Highlights</p>
                <ul className="space-y-3">
                  {current.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-[14.5px] text-[#2B1A24] leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#8E5A7B] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
