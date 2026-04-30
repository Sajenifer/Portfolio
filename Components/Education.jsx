import React from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { education } from "../data/mock";

const Education = () => {
  return (
    <section id="education" className="section-pad">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="mb-10">
          <h2 className="section-title text-[36px] md:text-[48px] mt-3 text-[#2B1A24]">
            Education
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {education.map((e, idx) => (
            <div
              key={idx}
              className="bg-white border border-black rounded-xl p-7 card-lift"
            >
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-lg bg-[#5C3A4F] text-[#F5EDE0] flex items-center justify-center">
                  <GraduationCap size={20} />
                </span>
                <span className="chip">{e.score}</span>
              </div>
              <h3 className="font-display text-[22px] text-[#2B1A24] mt-5 leading-snug">
                {e.school}
              </h3>
              <p className="text-[14px] text-[#5C3A4F] mt-1">{e.degree}</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-[#6B5560]">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> {e.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} /> {e.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
