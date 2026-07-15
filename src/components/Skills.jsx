import { SectionLabel } from './About'

const skillGroups = [
  {
    category: 'Languages',
    icon: 'fa-terminal',
    skills: ['Python', 'JavaScript', 'C', 'SQL'],
  },
  {
    category: 'Frontend',
    icon: 'fa-layer-group',
    skills: ['React.js', 'Vite', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: 'fa-server',
    skills: ['Flask', 'REST APIs'],
  },
  {
    category: 'Database',
    icon: 'fa-database',
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    category: 'Libraries & Tools',
    icon: 'fa-wrench',
    skills: ['Axios', 'Chart.js', 'Git', 'GitHub'],
  },
  {
    category: 'AI / API Integration',
    icon: 'fa-robot',
    skills: ['Hugging Face Inference API'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Skills</SectionLabel>
        <h2 className="text-3xl font-bold text-slate-900 mt-4 mb-12">Technical Stack</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map(({ category, icon, skills }) => (
            <div
              key={category}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-indigo-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center">
                  <i className={`fa-solid ${icon} text-indigo-600 text-sm`}></i>
                </div>
                <h3 className="text-slate-800 font-semibold text-sm">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
