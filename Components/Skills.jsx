import React from "react";
import * as Icons from "lucide-react";
import { skills } from "../data/mock";

const Skills = () => {
  return (
    <section id="skills" className="section-pad diagonal-divider">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <h2 className="section-title text-[36px] md:text-[48px] mt-3 text-[#2B1A24]">
              Skills
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group) => {
            const Ico = Icons[group.icon] || Icons.Sparkles;
            return (
              <div
                key={group.category}
                className="bg-white border border-black rounded-xl p-6 card-lift"
              >
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-[#5C3A4F] text-[#F5EDE0] flex items-center justify-center">
                    <Ico size={18} />
                  </span>
                  <h3 className="font-display text-[17px] text-[#2B1A24]">
                    {group.category}
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    );
};

export default Skills;