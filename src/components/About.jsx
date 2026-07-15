export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionLabel>About</SectionLabel>
      <div className="grid md:grid-cols-2 gap-12 items-center mt-10">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-5">
            Building things that live on the web.
          </h2>
          <p className="text-slate-500 leading-relaxed mb-4">
            I&apos;m a second-year B.Tech Computer Science and Engineering student at Karunya
            Institute of Technology and Sciences, currently maintaining a CGPA of 7.9.
          </p>
          <p className="text-slate-500 leading-relaxed">
            I enjoy building full-stack applications — from designing clean React frontends
            to wiring up Flask backends with PostgreSQL databases. I also have hands-on
            experience integrating AI APIs to create smarter, more useful products.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: 'fa-code', label: 'Frontend', value: 'React · Vite · Tailwind' },
            { icon: 'fa-server', label: 'Backend', value: 'Flask · REST APIs' },
            { icon: 'fa-database', label: 'Database', value: 'PostgreSQL · MySQL' },
            { icon: 'fa-robot', label: 'AI/API', value: 'Hugging Face API' },
          ].map(({ icon, label, value }) => (
            <div key={label} className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-indigo-300 transition-colors">
              <i className={`fa-solid ${icon} text-indigo-600 text-xl mb-3`}></i>
              <p className="text-slate-800 text-sm font-semibold mb-1">{label}</p>
              <p className="text-slate-400 text-xs">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionLabel({ children }) {
  return (
    <p className="text-indigo-600 text-xs font-semibold tracking-widest uppercase flex items-center gap-2">
      <span className="w-6 h-px bg-indigo-600 inline-block"></span>
      {children}
    </p>
  )
}
