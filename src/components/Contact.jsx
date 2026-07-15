import { SectionLabel } from './About'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Contact</SectionLabel>
        <h2 className="text-3xl font-bold text-slate-900 mt-4 mb-4">Get In Touch</h2>
        <p className="text-slate-500 max-w-lg mb-12">
          Feel free to reach out via email or connect on LinkedIn and GitHub.
        </p>
        <div className="grid sm:grid-cols-3 gap-5">
          <a
            href="mailto:siddharth8107sk@gmail.com"
            className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-indigo-300 hover:shadow-sm transition-all group"
          >
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
              <i className="fa-solid fa-envelope text-indigo-600 text-lg"></i>
            </div>
            <span className="text-slate-800 text-sm font-semibold">Email</span>
            <span className="text-slate-400 text-xs text-center break-all">siddharth8107sk@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/siddharth-s-76330a377/"
            target="_blank"
            rel="noreferrer"
            className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-indigo-300 hover:shadow-sm transition-all group"
          >
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
              <i className="fa-brands fa-linkedin text-indigo-600 text-lg"></i>
            </div>
            <span className="text-slate-800 text-sm font-semibold">LinkedIn</span>
            <span className="text-slate-400 text-xs">www.linkedin.com</span>
          </a>

          <a
            href="https://github.com/siddharth8107sk-maker/"
            target="_blank"
            rel="noreferrer"
            className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-indigo-300 hover:shadow-sm transition-all group"
          >
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
              <i className="fa-brands fa-github text-indigo-600 text-lg"></i>
            </div>
            <span className="text-slate-800 text-sm font-semibold">GitHub</span>
            <span className="text-slate-400 text-xs">github.com</span>
          </a>
        </div>

        <div className="mt-8 flex items-center gap-3 text-slate-400 text-sm">
          <i className="fa-solid fa-phone text-indigo-500"></i>
          <span>+91 93459 84288</span>
        </div>
      </div>
    </section>
  )
}
