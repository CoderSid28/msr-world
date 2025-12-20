import PatternBackground from "./PatternBackground";

export default function FilmScene() {
  return (
    <div className="h-[60vh] md:h-screen w-full">
      <PatternBackground>
        <div className="flex flex-col items-center text-center px-4">
          <h1 className="bg-gradient-to-b from-base-content to-base-content/50 bg-clip-text text-5xl font-black text-transparent sm:text-8xl uppercase italic tracking-tighter">
            MSR WORLD
          </h1>
          <div className="mt-4 flex items-center gap-2">
            <span className="h-[1px] w-12 bg-primary"></span>
            <p className="text-sm md:text-xl font-light uppercase tracking-[0.3em] text-base-content/70">
              Visual Storyteller
            </p>
            <span className="h-[1px] w-12 bg-primary"></span>
          </div>
        </div>
      </PatternBackground>
    </div>
  );
}