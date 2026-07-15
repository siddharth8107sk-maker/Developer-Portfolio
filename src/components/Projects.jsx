import { SectionLabel } from './About'

const projects = [
  {
    title: 'AI-Powered Event Management Platform',
    type: 'Full Stack',
    description:
      'A full-stack event management platform with AI-based recommendations and intelligent event assistance.',
    points: [
      'Built with React.js, Tailwind CSS, Flask, PostgreSQL, and Python.',
      'Frontend modules for event scheduling, participant management, and analytics dashboards using React.js, Axios, Chart.js, and React Router DOM.',
      'Backend APIs using Flask, psycopg2, and PostgreSQL for authentication, scheduling workflows, and database management.',
      'Integrated Hugging Face Inference API (Qwen2.5-72B-Instruct) for AI-based recommendations.',
    ],
    tags: ['React.js', 'Flask', 'PostgreSQL', 'Tailwind CSS', 'Hugging Face API', 'Chart.js'],
    icon: 'fa-calendar-days',
    github: 'https://github.com/your-username/ai-event-management',
  },
  {
    title: 'Course Registration System',
    type: 'Desktop Application',
    description:
      'A desktop Course Registration System built with Python, Tkinter, and PostgreSQL. It provides separate dashboards for students and administrators — students can browse and enroll in courses, while admins can manage the course catalog and track enrollments.',
    points: [
      'Built using Python Tkinter and PostgreSQL.',
      'Implemented CRUD operations and database connectivity using psycopg2.',
    ],
    tags: ['Python', 'Tkinter', 'PostgreSQL', 'psycopg2'],
    icon: 'fa-users',
    github: 'https://github.com/siddharth8107sk-maker/Course-Registration-System',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Projects</SectionLabel>
        <h2 className="text-3xl font-bold text-slate-900 mt-4 mb-12">Things I&apos;ve Built</h2>
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-indigo-300 hover:shadow-md transition-all"
            >
              {/* Header row */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className={`fa-solid ${project.icon} text-indigo-600 text-lg`}></i>
                  </div>
                  <div>
                    <span className="text-xs text-indigo-600 font-semibold tracking-wide uppercase">
                      {project.type}
                    </span>
                    <h3 className="text-slate-900 font-bold text-xl mt-0.5">{project.title}</h3>
                  </div>
                </div>

                {/* GitHub button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View on GitHub"
                  className="flex items-center gap-2 px-4 py-2 border border-slate-200 hover:border-indigo-400 hover:text-indigo-600 text-slate-500 rounded-lg text-sm font-medium transition-all flex-shrink-0"
                >
                  <i className="fa-brands fa-github text-base"></i>
                  <span className="hidden sm:inline">View Repo</span>
                </a>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-5">{project.description}</p>

              <ul className="space-y-2 mb-6">
                {project.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-500">
                    <i className="fa-solid fa-circle-dot text-indigo-400 mt-0.5 flex-shrink-0 text-xs"></i>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
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
