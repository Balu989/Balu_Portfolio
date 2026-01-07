import { Download, GraduationCap, Briefcase, Award } from "lucide-react";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import resumePDF from "../assets/Balasubramanyam_resume1.pdf";

// Timeline card with website colors
function TimelineCard({ icon, title, children }) {
  return (
    <GlowCard 
      card={{
        title: title,
      }}
      index={0}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-black-200 border border-black-50 text-[#4ade80]">
          {icon}
        </div>
        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
          <div className="text-white-50 space-y-2">
            {children}
          </div>
        </div>
      </div>
    </GlowCard>
  );
}

const Experience = () => {
  return (
    <section id="experience" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Experience & Education"
          sub="📚 My professional journey and qualifications"
        />

        <div className="lg:columns-1 mt-16 space-y-6">
          {/* Education */}
          <TimelineCard
            icon={<GraduationCap size={24} />}
            title="Education"
          >
            <div>
              <h4 className="text-base font-semibold text-white">B.Tech in Computer Science</h4>
              <p className="text-white-50 text-sm">Mohan Babu University • 2022 - 2026</p>
              <p className="text-white mt-2">
                CGPA: <span className="font-bold text-[#4ade80]">9.5 / 10</span>
              </p>
            </div>
          </TimelineCard>

          {/* Work Experience */}
          <TimelineCard
            icon={<Briefcase size={24} />}
            title="Work Experience"
          >
            <div>
              <h4 className="text-base font-semibold text-white">Python Full Stack & ML Intern</h4>
              <p className="text-white-50 text-sm">Hubexus Solutions Pvt. Ltd. • Jun 2025 – Present</p>
              <ul className="list-disc list-inside text-white-50 text-sm space-y-2 mt-3">
                <li>
                  Developed end-to-end web applications using <span className="text-[#4ade80] font-semibold">Python</span>, <span className="text-[#4ade80] font-semibold">Flask</span>, and modern front-end technologies.
                </li>
                <li>
                  Built and evaluated machine learning models with <span className="text-[#4ade80] font-semibold">Scikit-learn</span> and <span className="text-[#4ade80] font-semibold">Pandas</span> on real-world datasets.
                </li>
                <li>
                  Deployed ML models with <span className="text-[#4ade80] font-semibold">Flask</span> and <span className="text-[#4ade80] font-semibold">Streamlit</span>, gaining exposure to essential MLOps workflows.
                </li>
                <li>
                  Built dynamic user interfaces with <span className="text-[#4ade80] font-semibold">React.js</span> and <span className="text-[#4ade80] font-semibold">Tailwind CSS</span>; improved web performance and accessibility.
                </li>
              </ul>
            </div>
          </TimelineCard>

          {/* Certifications */}
          <TimelineCard
            icon={<Award size={24} />}
            title="Certifications"
          >
            <ul className="list-disc list-inside text-white-50 text-sm space-y-2">
              <li>Microsoft Certified: Azure Fundamentals – Microsoft</li>
              <li>Java Full Stack Developer Virtual Internship – AICTE-Eduskills (Oct–Dec 2024)</li>
              <li>Completed Deloitte Australia Technology Job Simulation on Forage (June 2025)</li>
            </ul>
          </TimelineCard>

          {/* Download Resume */}
          <div className="mt-12 flex justify-center">
            <a
              href={resumePDF}
              download="Balasubramanyam_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#4ade80] via-[#60a5fa] to-[#c084fc] border border-black-50 hover:scale-105 transition-transform duration-300 shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
