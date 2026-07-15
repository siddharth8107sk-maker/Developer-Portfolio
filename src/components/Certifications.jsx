import { SectionLabel } from './About'

const certs = [
  { name: 'Google Cloud Digital Leader Certification', issuer: 'Google Cloud', icon: 'fa-cloud' },
  { name: 'Red Hat System Administration I (RH124 – Ver.10)', issuer: 'Red Hat', icon: 'fa-hat-cowboy' },
  { name: 'HTML Essentials Certification', issuer: 'Cisco NetAcad', icon: 'fa-code' },
  { name: 'CSS Essentials Certification', issuer: 'Cisco NetAcad', icon: 'fa-palette' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Certifications</SectionLabel>
        <h2 className="text-3xl font-bold text-slate-900 mt-4 mb-12">Credentials</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {certs.map(({ name, issuer, icon }) => (
            <div
              key={name}
              className="bg-white border border-slate-200 rounded-xl p-6 flex gap-4 items-start hover:border-indigo-300 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className={`fa-solid ${icon} text-indigo-600`}></i>
              </div>
              <div>
                <h3 className="text-slate-800 text-sm font-semibold leading-snug">{name}</h3>
                <p className="text-slate-400 text-xs mt-1">{issuer}</p>
              </div>
              <i className="fa-solid fa-certificate text-indigo-200 ml-auto flex-shrink-0 mt-0.5"></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
