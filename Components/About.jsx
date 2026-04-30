import React from "react";
import { personal } from "../data/mock";

const About = () => {
  return (
    <section id="about" className="section-pad relative">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <h2 className="section-title text-[36px] md:text-[48px] mt-3 text-[#2B1A24]">
              About Me
            </h2>
          </div>

          <div className="md:col-span-8 space-y-6">
            <div className="bg-white border border-black rounded-2xl p-7 md:p-9 relative overflow-hidden">
              <p className="relative font-display text-[18px] md:text-[20px] leading-relaxed text-[#2B1A24] text-justify">
                I am a Computer Science and Engineering student specializing in Information Technology. I am passionate about software development and enjoy building web applications using Java, MySQL, and the MERN stack.In my Internship where I worked on React development and API integration, and I have contributed to several full-stack projects.

                I actively participate in hackathons and technical events, and I have experience organizing college coding activities. I am a quick learner, adaptable, and focused on continuous improvement. My goal is to grow as a software developer and pursue opportunities in enterprise and web technologies.
              </p>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
