import React from "react";
import { Building2, MapPin, Calendar, Trophy, Users } from "lucide-react";
import {
  internships,
  eventsParticipated,
  eventsConducted,
  volunteer,
} from "../data/mock";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

const Experience = () => {
  return (
    <section id="experience" className="section-pad diagonal-divider">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="mb-10">
          <h2 className="section-title text-[36px] md:text-[48px] mt-3 text-[#2B1A24]">
            Internships & Participations
          </h2>
        </div>

        <Tabs defaultValue="internships" className="w-full">
          <TabsList className="bg-white border border-black p-1 h-auto rounded-lg flex flex-wrap">
            <TabsTrigger
              value="internships"
              className="data-[state=active]:bg-[#5C3A4F] data-[state=active]:text-[#F5EDE0] rounded-md px-4 py-2 text-[13px]"
            >
              Internships
            </TabsTrigger>
            <TabsTrigger
              value="organized"
              className="data-[state=active]:bg-[#5C3A4F] data-[state=active]:text-[#F5EDE0] rounded-md px-4 py-2 text-[13px]"
            >
              Events Organized
            </TabsTrigger>
            <TabsTrigger
              value="participated"
              className="data-[state=active]:bg-[#5C3A4F] data-[state=active]:text-[#F5EDE0] rounded-md px-4 py-2 text-[13px]"
            >
              Participations
            </TabsTrigger>
            <TabsTrigger
              value="volunteer"
              className="data-[state=active]:bg-[#5C3A4F] data-[state=active]:text-[#F5EDE0] rounded-md px-4 py-2 text-[13px]"
            >
              Volunteer
            </TabsTrigger>
          </TabsList>

          {/* Internships */}
          <TabsContent value="internships" className="mt-8">
            <div className="relative">
              <div className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-[#DDC9B0]" />
              <div className="space-y-6">
                {internships.map((i, idx) => (
                  <div key={idx} className="relative pl-10 md:pl-14">
                    <span className="absolute left-0 md:left-1 top-1 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#5C3A4F] text-[#F5EDE0] flex items-center justify-center">
                      <Building2 size={14} />
                    </span>
                    <div className="bg-white border border-black rounded-xl p-6 card-lift">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-[20px] text-[#2B1A24]">
                            {i.role}
                          </h3>
                          <p className="text-[14px] text-[#5C3A4F] font-medium mt-0.5">
                            {i.company}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1 text-[12px] text-[#6B5560]">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={12} /> {i.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={12} /> {i.location}
                          </span>
                        </div>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {i.points.map((pt, k) => (
                          <li
                            key={k}
                            className="flex gap-3 text-[14px] text-[#2B1A24] leading-relaxed"
                          >
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#8E5A7B] shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Events conducted */}
          <TabsContent value="organized" className="mt-8">
            <div className="grid md:grid-cols-3 gap-5">
              {eventsConducted.map((e, k) => (
                <div
                  key={k}
                  className="bg-white border border-black rounded-xl p-6 card-lift"
                >
                  <span className="w-9 h-9 rounded-md bg-[#5C3A4F] text-[#F5EDE0] flex items-center justify-center mb-4">
                    <Trophy size={16} />
                  </span>
                  <p className="eyebrow">{e.role}</p>
                  <h3 className="font-display text-[18px] text-[#2B1A24] mt-2">
                    {e.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] text-[#6B5560] leading-relaxed">
                    {e.body}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Events participated */}
          <TabsContent value="participated" className="mt-8">
            <div className="grid md:grid-cols-2 gap-5">
              {eventsParticipated.map((e, k) => (
                <div
                  key={k}
                  className="bg-white border border-black rounded-xl p-6 card-lift"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-[18px] text-[#2B1A24]">
                      {e.title}
                    </h3>
                    <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#8E5A7B] whitespace-nowrap">
                      {e.date}
                    </span>
                  </div>
                  <p className="mt-3 text-[13.5px] text-[#6B5560] leading-relaxed">
                    {e.note}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Volunteer */}
          <TabsContent value="volunteer" className="mt-8">
            <div className="grid sm:grid-cols-2 gap-5">
              {volunteer.map((v, k) => (
                <div
                  key={k}
                  className="bg-white border border-black rounded-xl p-6 card-lift flex items-start gap-4"
                >
                  <span className="w-10 h-10 rounded-md bg-[#5C3A4F] text-[#F5EDE0] flex items-center justify-center shrink-0">
                    <Users size={16} />
                  </span>
                  <div>
                    <h3 className="font-display text-[18px] text-[#2B1A24]">
                      {v.role}
                    </h3>
                    <p className="text-[13.5px] text-[#6B5560] mt-1">
                      {v.org}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
