export default function PatternBackground({ children }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-base-300 overflow-hidden">
      {/* Background Dot Grid */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Moving Light Beam (The Reflection Effect for the Hero) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent animate-pulse" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Radial fade to hide the edges of the grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-base-300)_80%)]" />
    </div>
  );
}