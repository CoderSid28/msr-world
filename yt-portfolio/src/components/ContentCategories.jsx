import {
  Film,
  Video,
  Tv,
  Layers,
  Cpu,
  Box,
  Share2
} from "lucide-react";

const ContentCategories = () => {

  const categories = [
    {
      title: "Cinematic Films",
      desc: "High-concept storytelling.",
      tooltip: "Professional cinematic visuals and emotional storytelling.",
      size: "md:col-span-2",
      tag: "CORE",
      icon: <Film size={20}/>
    },

    {
      title: "Short Films",
      desc: "Narratives under 6 mins.",
      tooltip: "Compact stories designed for digital audiences.",
      size: "md:col-span-1",
      tag: "SHORT",
      icon: <Video size={20}/>
    },

    {
      title: "Trailers",
      desc: "High-energy teaser clips.",
      tooltip: "Fast cinematic edits and powerful teaser experiences.",
      size: "md:col-span-1",
      tag: "PROMO",
      icon: <Tv size={20}/>
    },

    {
      title: "3D & Green Screen",
      desc: "Advanced VFX & compositing.",
      tooltip: "Professional CGI integration and motion tracking effects.",
      size: "md:col-span-2",
      tag: "VFX",
      icon: <Layers size={20}/>
    },

    {
      title: "AI Integration",
      desc: "Next-gen AI workflows.",
      tooltip: "AI-assisted filmmaking, editing and production.",
      size: "md:col-span-1",
      tag: "TECH",
      icon: <Cpu size={20}/>
    },

    {
      title: "Animated Movies",
      desc: "Full CGI animation.",
      tooltip: "Stylized animated worlds with cinematic rendering.",
      size: "md:col-span-2",
      tag: "CGI",
      icon: <Box size={20}/>
    },

    {
      title: "YouTube Shorts",
      desc: "Viral-ready filmography.",
      tooltip: "Fast-paced vertical content optimized for engagement.",
      size: "md:col-span-1",
      tag: "SOCIAL",
      icon: <Share2 size={20}/>
    }
  ];

  return (
    <section className="py-24 bg-black" id="expertise">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-16">

          <p className="text-[10px] uppercase tracking-[0.8em] text-primary font-black mb-4">
            The Portfolio
          </p>

          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white leading-none">
            Type of <span className="text-primary">Content</span>
          </h2>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[130px]">

          {categories.map((item, i) => (

            <div
              key={i}
              className={`${item.size} group relative bg-[#080808] border border-white/5 rounded-2xl p-6 overflow-hidden hover:border-primary/40 transition-all duration-500 cursor-pointer`}
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full"></div>
              </div>

              {/* Shine */}
              <div className="absolute inset-0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"></div>

              {/* Top */}
              <div className="relative z-10 flex items-start justify-between mb-8">

                <div className="text-white group-hover:text-primary transition-all duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                <span className="text-[7px] uppercase tracking-[0.4em] text-primary/50 font-black">
                  {item.tag}
                </span>

              </div>

              {/* Stable Text Animation */}
              <div className="relative z-10 h-[48px] overflow-hidden">

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-primary leading-none transition-all duration-500 group-hover:-translate-y-1">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="absolute left-0 top-8 text-[8px] uppercase tracking-[0.25em] text-primary/30 font-bold transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
                  {item.desc}
                </p>

                {/* Tooltip */}
                <p className="absolute left-0 top-8 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-[9px] uppercase tracking-[0.18em] text-primary/70 font-black leading-relaxed">
                  {item.tooltip}
                </p>

              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/20 transition-all duration-500"></div>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
};

export default ContentCategories;