import { useState } from 'react';
import TitleHeader from '../components/TitleHeader';
import { projects, projectCategories } from '../constants';

function LuxuryTab({ label, active, ...props }) {
  return (
    <button
      {...props}
      className={`
        px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300
        ${active
          ? 'bg-gradient-to-r from-[#4ade80] via-[#60a5fa] to-[#c084fc] text-white border-transparent shadow-lg scale-105'
          : 'bg-black-200 border-black-50 text-white-50 hover:border-[#4ade80] hover:text-[#4ade80]'}
        relative overflow-hidden
      `}
      style={{
        letterSpacing: '0.02em',
        boxShadow: active ? '0 1.5px 24px 0 #4ade8033' : '',
      }}
    >
      <span className="relative z-10">{label}</span>
      {active && (
        <span className="absolute inset-0 rounded-full pointer-events-none bg-white/10 blur-[2px]" />
      )}
    </button>
  );
}

function GlassProjectCard({ project }) {
  return (
    <div className="
        card card-border rounded-xl overflow-hidden backdrop-blur-md
        hover:scale-[1.025] transition-all duration-300 group
        flex flex-col h-full
      "
    >
      <div className="glow"></div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full aspect-video block overflow-hidden relative z-10"
        tabIndex={-1}
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" 
          loading="lazy" 
        />
      </a>
      <div className="flex-1 flex flex-col p-6 gap-3 relative z-10">
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
        <p className="text-white-50 text-sm mb-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-black-200 border border-black-50 text-white-50 rounded-full text-xs font-semibold hover:border-[#4ade80] hover:text-[#4ade80] transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-3 inline-block text-white-50 font-semibold hover:text-[#4ade80] transition-colors duration-200"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Featured Projects"
          sub="🚀 Showcasing my best work and achievements"
        />

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap mt-8">
          {projectCategories.map((cat) => (
            <LuxuryTab
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              type="button"
            />
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <GlassProjectCard key={index} project={project} />
            ))
          ) : (
            <p className="text-center text-white-50 col-span-full">
              No projects found for this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
