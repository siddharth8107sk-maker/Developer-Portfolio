export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f0f4ff 0%, #fafaff 40%, #eef2ff 70%, #f5f3ff 100%)',
      }}
    >
      {/* background blobs for glass to refract */}
      <div className="absolute top-[-80px] left-[-60px] w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a5b4fc 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-60px] right-[-40px] w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c4b5fd 0%, transparent 70%)' }} />
      <div className="absolute top-[30%] right-[10%] w-64 h-64 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)' }} />
      <p className="text-indigo-600 text-xs font-semibold tracking-widest uppercase mb-4">
        {"Full-Stack Developer | Software Developer"}
      </p>
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-none mb-6">
        Siddharth S
      </h1>
      <p className="text-slate-500 max-w-xl text-lg leading-relaxed mb-10">
        Computer Science and Engineering student at Karunya Institute of Technology and Sciences, passionate about building scalable full-stack web applications and AI-powered platforms using React, Flask, and PostgreSQL.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="#projects"
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-slate-300 hover:border-indigo-400 text-slate-600 hover:text-indigo-600 text-sm font-semibold rounded-lg transition-colors"
        >
          Contact Me
        </a>
      </div>

      <div className="flex gap-5 mt-14">
        <a
          href="mailto:siddharth8107sk@gmail.com"
          aria-label="Email"
          className="text-slate-400 hover:text-indigo-600 transition-colors text-xl"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a
          href="https://github.com/siddharth8107sk-maker/"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-slate-400 hover:text-indigo-600 transition-colors text-xl"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/siddharth-s-76330a377/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-slate-400 hover:text-indigo-600 transition-colors text-xl"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>

      <div className="mt-16 animate-bounce text-slate-300">
        <i className="fa-solid fa-chevron-down"></i>
      </div>
    </section>
  )
}
