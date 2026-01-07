import TitleHeader from '../components/TitleHeader';
import GlowCard from '../components/GlowCard';

const skillsData = {
  'Programming Languages': ['Java', 'Python', 'JavaScript', 'SQL', 'TypeScript'],
  'Frameworks': ['Spring', 'Spring Boot', 'Flask', 'React.js', 'Tailwind CSS', 'Vite'],
  'Tools': ['Git', 'GitHub', 'VS Code', 'Docker', 'Postman', 'Eclipse'],
  'Technologies': ['Microsoft Azure', 'Machine Learning', 'Deep Learning', 'Scikit-learn', 'NumPy', 'Pandas', 'Streamlit'],
  'Core Skills': ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'DBMS', 'Software Engineering', 'Computer Networks'],
};
const Skills = () => {
  return (
    <section id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Skills & Expertise"
          sub="🚀 My technical toolkit and core competencies"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {Object.entries(skillsData).map(([categoryName, skills], index) => (
            <GlowCard 
              card={{
                title: categoryName,
                skills: skills,
              }}
              key={index}
              index={index}
            >
              <div>
                <p className="font-bold text-lg mb-4">{categoryName}</p>
                <ul className="space-y-2">
                  {skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="text-white-50 flex items-center gap-2">
                      <span className="text-white">✓</span> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;