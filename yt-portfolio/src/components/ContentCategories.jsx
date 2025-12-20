import { Film, Video, Tv, Layers, Cpu } from 'lucide-react';

const ContentCategories = () => {
  const categories = [
    { 
      title: "Cinematic Films", 
      desc: "High-concept storytelling & direction.", 
      tooltip: "Visual masterpieces with professional grading\nand narrative depth for big screens.",
      size: "md:col-span-2", tag: "CORE", icon: <Film size={24}/> 
    },
    { 
      title: "3D & VFX", 
      desc: "Advanced compositing.", 
      tooltip: "Merging reality with CGI using motion tracking\nand environment replacement.",
      size: "md:col-span-1", tag: "VFX", icon: <Layers size={24}/> 
    }
    // Add other categories here...
  ];

  return (
    <section className="py-24 bg-base-100" id="expertise">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-6xl font-black uppercase italic tracking-tighter mb-16">
          Type of <span className="text-primary">Content</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((item, i) => (
            <div key={i} className={`${item.size} group relative bg-base-300/30 border border-white/5 p-8 rounded-2xl transition-all duration-500 overflow-hidden`}>
              <div className="text-primary mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-2">{item.title}</h3>
              
              <div className="relative h-12">
                {/* Short Desc (Fades Out) */}
                <p className="absolute top-0 opacity-40 group-hover:opacity-0 transition-all duration-500 font-bold text-[10px] uppercase">
                  {item.desc}
                </p>
                {/* 2-Line Tooltip (Fades In) */}
                <p className="absolute top-0 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-primary font-black text-[11px] whitespace-pre-line leading-tight">
                  {item.tooltip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCategories;