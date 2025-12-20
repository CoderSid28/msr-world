import React from 'react';
import { LayoutGrid, ArrowUpRight } from 'lucide-react';

const ArtGallery = () => {
  const artworks = [
    { 
      id: 1, title: "Survive the Dead", type: "Short Film", 
      size: "md:col-span-2 md:row-span-2", 
      desc: "Zombie Apocalypse Thriller", 
      tooltip: "A high-stakes survival story featuring\nadvanced makeup and cinematic action.",
      img: "/art1.jpg" 
    },
    { 
      id: 2, title: "Prime Glasses", type: "Web Series", 
      size: "md:col-span-1 md:row-span-1", // Now Middle Top (Small)
      desc: "Smart Watch 2036 Concept", 
      tooltip: "Expanding the tech-noir universe of\nthe 2036 series with wearable VFX.",
      img: "/art3.jpg" 
    },
    { 
      id: 3, title: "Ben 10 Ultimate Mission", type: "VFX Short", 
      size: "md:col-span-1 md:row-span-1", // Middle Bottom (Small)
      desc: "Advanced CGI Action", 
      tooltip: "Reimagining classic transformation VFX\nwith modern rendering techniques.",
      img: "/art4.png" 
    },
    { 
      id: 4, title: "Isolation", type: "Concept Art", 
      size: "md:col-span-1 md:row-span-2", // Now Tall Right (Feature)
      desc: "Psychological Exploration", 
      tooltip: "An intimate look into the human mind\nand the journey toward self-discovery.",
      img: "/art2.jpg" 
    },
    { 
      id: 5, title: "Zombie Effect", type: "Short Film", 
      size: "md:col-span-1 md:row-span-1", 
      desc: "The Prequel Story", 
      tooltip: "Uncovering how the outbreak began\nleading up to 'Survive the Dead'.",
      img: "/art6.jpg" 
    },
    { 
      id: 6, title: "A-Void", type: "Horror Film", 
      size: "md:col-span-2 md:row-span-1", 
      desc: "Atmospheric Supernatural", 
      tooltip: "Exploring atmospheric dread through\nminimalist lighting and sound design.",
      img: "/art5.jpg" 
    }
  ];

  return (
    <section className="py-24 bg-black text-white" id="art">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12 border-l-4 border-primary pl-6">
          <div className="flex items-center gap-3 text-white/40 mb-2">
            <LayoutGrid size={14} />
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Project Gallery</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
            CONCEPT <span className="text-white/20">& POSTERS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {artworks.map((art) => (
            <div 
              key={art.id} 
              className={`${art.size} group relative rounded-xl border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-500`}
            >
              <img 
                src={art.img} 
                alt={art.title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              />

              <div className="absolute top-4 right-4 text-white/20 group-hover:text-primary transition-colors">
                <ArrowUpRight size={20} />
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
                <h3 className="text-xl font-black uppercase italic tracking-tighter leading-tight">
                  {art.title}
                </h3>
                
                <div className="relative h-6 overflow-hidden mt-1">
                  <p className="text-[10px] text-primary font-bold uppercase tracking-widest transition-all duration-500 group-hover:-translate-y-full">
                    {art.type}
                  </p>
                  <p className="absolute top-0 text-[9px] text-white font-medium uppercase transition-all duration-500 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                    {art.tooltip.split('\n')[0]}
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl m-[2px]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtGallery;