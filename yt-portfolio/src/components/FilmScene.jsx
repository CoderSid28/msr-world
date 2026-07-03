import PatternBackground from "./PatternBackground";

export default function FilmScene() {
  return (
    <div className="h-[52vh] md:h-[78vh] w-full">
      <PatternBackground>

        <div className="flex flex-col items-center text-center px-4 -mt-6">

          {/* MAIN TITLE */}
          <h1 className="bg-gradient-to-b from-base-content to-base-content/50 bg-clip-text text-5xl sm:text-7xl md:text-8xl font-black text-transparent uppercase italic tracking-tighter leading-none">
            MSR WORLD
          </h1>

          {/* SUB TITLE */}
          <div className="mt-3 flex items-center gap-3">

            <span className="h-[1px] w-10 bg-primary"></span>

            <p className="text-xs md:text-lg font-light uppercase tracking-[0.3em] text-base-content/70">
              Visual Storyteller
            </p>

            <span className="h-[1px] w-10 bg-primary"></span>

          </div>

          {/* CINEMATIC DESCRIPTION */}
          <p className="mt-5 max-w-2xl text-[9px] md:text-[10px] uppercase tracking-[0.35em] text-base-content/40 font-bold leading-relaxed">
            Independent Filmmaker • VFX Artist • CGI • AI Integrated Production
          </p>

          {/* BUTTONS */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3">

            <a
              href="#gallery"
              className="bg-primary text-black px-7 py-3 rounded-xl font-black uppercase tracking-[0.3em] text-[9px] hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(255,77,0,0.4)]"
            >
              Explore Works
            </a>

            <a
              href="#about"
              className="border border-base-content/20 text-base-content px-7 py-3 rounded-xl font-black uppercase tracking-[0.3em] text-[9px] hover:border-primary hover:text-primary transition-all duration-300"
            >
              Meet The Team
            </a>

          </div>

        </div>

      </PatternBackground>
    </div>
  );
}