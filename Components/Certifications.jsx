import React from "react";
import { Award, BadgeCheck } from "lucide-react";
import { certifications } from "../data/mock";

const Certifications = () => {
  return (
    <section id="certifications" className="section-pad diagonal-divider">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="mb-10">
          <h2 className="section-title text-[36px] md:text-[48px] mt-3 text-[#2B1A24]">
            Certifications
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, k) => (
            <div
              key={k}
              className="bg-white border border-black rounded-xl p-6 card-lift relative overflow-hidden"
            >
              <Award
                size={120}
                className="absolute -right-6 -bottom-6 text-[#E8DCC4]"
              />
              <div className="relative">
                <span className="w-10 h-10 rounded-md bg-[#5C3A4F] text-[#F5EDE0] flex items-center justify-center mb-4">
                  <BadgeCheck size={18} />
                </span>
                <h3 className="font-display text-[18px] text-[#2B1A24] leading-snug">
                  {c.title}
                </h3>
                <p className="text-[13px] text-[#6B5560] mt-1.5">
                  Issued by{" "}
                  <span className="text-[#5C3A4F] font-medium">
                    {c.issuer}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
