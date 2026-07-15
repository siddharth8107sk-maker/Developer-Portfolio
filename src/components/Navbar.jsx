import { useState } from 'react'

const links = ['About', 'Skills', 'Projects', 'Education', 'Certifications', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar-glass fixed top-0 inset-x-0 z-50">

      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between relative">
        <a
          href="#hero"
          className="font-bold text-lg tracking-tight text-slate-900/90 [text-shadow:0_1px_2px_rgba(255,255,255,0.6)]"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Siddharth<span className="text-indigo-600">.</span>
        </a>

        <nav className="hidden md:flex gap-7">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-slate-500 hover:text-slate-900 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {open && (
        <nav className="navbar-glass-mobile md:hidden px-6 py-5 flex flex-col gap-4 relative">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
