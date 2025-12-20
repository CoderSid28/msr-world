import React from 'react';
import useSound from 'use-sound';

export default function AboutFlipCard({ frontImage, name, role, description }) {
  const [playFlip] = useSound('/flip.mp3', { 
    volume: 0.1, 
    interrupt: true 
  });

  return (
    <div 
      className="group h-[450px] w-full [perspective:1000px] cursor-pointer"
      onMouseEnter={() => playFlip()}
    >
      <div className="relative h-full w-full rounded-2xl transition-all duration-[800ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-2xl">
        
        {/* FRONT FACE */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden border border-white/5 group-hover:border-primary/40 transition-all duration-500 shadow-[inset_0_0_80px_rgba(0,0,0,0.9)]">
          <img
            src={frontImage}
            alt={name}
            className="h-full w-full rounded-2xl object-cover grayscale-[50%] group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-1000"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity group-hover:opacity-80" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white z-10">
            <span className="text-primary font-black text-[8px] uppercase tracking-[0.4em] block mb-1">
              {role}
            </span>
            <h3 className="text-2xl font-black italic uppercase tracking-tighter group-hover:text-primary transition-colors duration-500 leading-tight">
              {name}
            </h3>
          </div>
        </div>

        {/* BACK FACE */}
        <div className="absolute inset-0 h-full w-full rounded-2xl bg-primary p-8 flex flex-col justify-center items-start text-primary-content [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h3 className="text-xl font-black italic uppercase tracking-tighter mb-1">{name}</h3>
          <p className="text-[9px] uppercase tracking-[0.2em] font-black opacity-60 mb-4">{role}</p>
          
          <div className="w-12 h-[2px] bg-primary-content/30 mb-4" />
          
          <p className="text-xs font-bold leading-relaxed italic opacity-95">
            "{description}"
          </p>
          
          {/* MSR Branding */}
          <div className="absolute bottom-6 right-6 opacity-10">
             <div className="w-8 h-8 border-2 border-primary-content rounded-full flex items-center justify-center font-black text-[10px]">M</div>
          </div>
        </div>
        
      </div>
    </div>
  );
}