import { useState } from 'react';
import Atropos from 'atropos/react';
import useSound from 'use-sound';
import 'atropos/css';

export default function FilmCard({ title, videoId, category }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // 1. Setup the sound hook. 
  // Ensure 'hover-whoosh.mp3' is inside your /public folder.
  const [playHover] = useSound('/hover-whoosh.mp3', { 
    volume: 0.15, // Keep it subtle so it's not annoying
    interrupt: true // This stops the sound and restarts it if you hover quickly
  });

  const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <Atropos className="w-full h-full cursor-default group" shadow={false}>
      <div 
        className="card bg-base-100 shadow-2xl image-full h-80 overflow-hidden relative border border-base-content/5 transition-all duration-500 hover:border-primary/40"
        onMouseEnter={() => {
          setIsHovered(true);
          playHover(); // 2. Trigger sound only on this specific card hover
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <figure className="relative w-full h-full bg-neutral-900">
          {isHovered ? (
            <div className="absolute inset-0 w-full h-full scale-110 pointer-events-none">
              <iframe
                className="w-full h-[150%] -translate-y-[15%]" 
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1`}
                allow="autoplay; encrypted-media"
              ></iframe>
            </div>
          ) : (
            <img 
              src={thumbnail} 
              alt={title} 
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
            />
          )}
          
          {/* Visual reflection shine */}
          <div className="absolute inset-0 z-10 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          {/* Dark vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        </figure>

        <div className="card-body justify-end p-8 z-20">
          <div data-atropos-offset="5">
             <span className="badge badge-primary font-bold uppercase text-[10px] tracking-widest mb-2 border-none">
               {category}
             </span>
             <h2 className="card-title text-2xl md:text-3xl font-black text-white leading-tight uppercase italic group-hover:text-primary transition-colors duration-300">
               {title}
             </h2>
          </div>
        </div>
      </div>
    </Atropos>
  );
}