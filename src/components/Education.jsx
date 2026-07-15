export default function Education() {
  return (
    <section id="education" className="py-12 px-6 bg-white">
      <div className="max-w-5xl mx-auto border-t border-slate-200 pt-10">
        <p className="text-xs text-slate-400 font-semibold tracking-widest uppercase mb-5">Education</p>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              degree: 'B.Tech — Computer Science and Engineering',
              institution: 'Karunya Institute of Technology and Sciences',
              detail: '2025 – 2029',
            },
            {
              degree: 'Higher Secondary (Class XII)',
              institution: 'SRM Public School (CBSE)',
              detail: '72.2%',
            },
            {
              degree: 'Secondary (Class X)',
              institution: 'SRM Public School (CBSE)',
              detail: '89.2%',
            },
          ].map(({ degree, institution, detail }) => (
            <div
              key={degree}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-indigo-300 hover:shadow-sm transition-all"
            >
              <p className="text-slate-800 text-sm font-semibold leading-snug">{degree}</p>
              <p className="text-slate-400 text-xs mt-1">{institution}</p>
              <p className="text-slate-400 text-xs mt-2">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
