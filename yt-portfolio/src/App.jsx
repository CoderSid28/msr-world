import { useState, useEffect } from 'react';
import { 
  Film, Video, Tv, Layers, Cpu, Box, Share2, 
  TrendingUp, Clock, FileText, Play, Menu, X, ArrowUp, Youtube, BookOpen 
} from 'lucide-react';
import Atropos from 'atropos/react';
import useSound from 'use-sound';
import 'atropos/css';

// Component Imports
import FilmCard from "./components/FilmCard";
import ThemeSwitcher from "./components/ThemeSwitcher";
import FilmScene from "./components/FilmScene";
import AboutSection from "./components/AboutSection";
import ArtGallery from "./components/ArtGallery";

// --- CUSTOM CURSOR ---
const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div 
      className="fixed w-8 h-8 border border-primary rounded-full pointer-events-none z-[9999] transition-transform duration-150 ease-out mix-blend-difference hidden lg:block"
      style={{ left: pos.x, top: pos.y, transform: 'translate(-50%, -50%)' }}
    />
  );
};

// --- BLOG SECTION ---
const BlogSection = () => {
  // Sound setup for the 3D hover
  const [playHover] = useSound('/hover-whoosh.mp3', { 
    volume: 0.15, 
    interrupt: true 
  });

  return (
    <section className="py-24 bg-base-100 relative overflow-hidden" id="journal">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <p className="text-[10px] uppercase tracking-[0.8em] text-primary font-black mb-4">Written Works</p>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-base-content leading-none">
            The Production <span className="text-primary text-outline-sm">Journal</span>
          </h2>
        </div>

        <div className="group relative bg-base-300/30 border border-white/5 p-8 md:p-12 rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row items-center gap-16 hover:border-primary/40 transition-all duration-700">
          
          {/* Content Side */}
          <div className="flex-1 text-center md:text-left z-20">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-8">
               <div className="bg-[#ff5722] p-2.5 rounded-xl shadow-[0_0_20px_rgba(255,87,34,0.4)]">
                  <BookOpen size={22} className="text-white" />
               </div>
               <span className="text-[10px] font-black tracking-[0.3em] opacity-50 uppercase text-white">Production Pipeline</span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white mb-6 leading-[0.9] lg:max-w-md">
              From Concept To <span className="text-primary">Final Cut</span>
            </h3>
            
            <p className="text-white/40 font-bold text-xs uppercase tracking-widest mb-10 leading-relaxed max-w-xl">
              Explore the MSR methodology. Our journal documents every phase of the filmmaking tree—from the first script draft to complex VFX compositing and final sound mastering.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="https://msrworldstudios.blogspot.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/btn relative overflow-hidden bg-primary px-10 py-4 rounded-xl transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(255,77,0,0.2)]"
              >
                <span className="relative z-10 text-black font-black italic uppercase tracking-widest text-sm">Visit Blogspot</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
              </a>
            </div>
          </div>

          {/* ATROPOS 3D IMAGE SIDE WITH PARALLAX & SOUND */}
          <div className="flex-1 relative w-full max-w-2xl px-4 md:px-0">
            <Atropos 
              activeOffset={40} 
              shadow={true} 
              shadowOffset={50}
              highlight={true} 
              onEnter={() => playHover()}
              className="my-atropos-journal cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] p-3 shadow-2xl">
                
                {/* LAYER 1: The Main Flowchart Image (Deepest) */}
                <img 
                  src="/journal.jpg" 
                  alt="MSR Production Tree" 
                  className="w-full h-auto rounded-2xl opacity-80"
                  data-atropos-offset="-3"
                />

                {/* LAYER 2: Middle Floating UI Frame */}
                <div 
                  className="absolute inset-0 pointer-events-none flex items-center justify-center"
                  data-atropos-offset="7"
                >
                  <div className="w-[94%] h-[94%] border border-primary/10 rounded-2xl shadow-[inset_0_0_40px_rgba(255,77,0,0.05)]"></div>
                  
                  {/* Subtle Grid Pattern overlay */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
                </div>

                {/* LAYER 3: Top Layer Floating Accents (High Offset) */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  data-atropos-offset="14"
                >
                  {/* Digital Scanlines */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,4px_100%] opacity-40"></div>
                  
                  {/* Glowing Corners */}
                  <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-primary/60"></div>
                  <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-primary/60"></div>
                </div>

              </div>
            </Atropos>
            
            {/* Ambient Background Glow */}
            <div className="absolute -inset-10 bg-primary/10 blur-[120px] rounded-full -z-10 opacity-30 group-hover:opacity-60 transition-opacity duration-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- ANALYTICS SECTION ---
const AnalyticsSection = () => {
  const stats = [
    { label: "Total Views", value: "138.5K", detail: "138,538 Total", progress: "85%", icon: <TrendingUp size={16}/> },
    { label: "Watch Time", value: "1.3K", detail: "Hours of Content", progress: "70%", icon: <Clock size={16}/> },
    { label: "Video Projects", value: "30", detail: "Total Released", progress: "95%", icon: <Play size={16}/> },
    { label: "Scripts Written", value: "32", detail: "Original Stories", progress: "100%", icon: <FileText size={16}/> }
  ];

  return (
    <section className="py-24 bg-base-300/20 border-y border-white/5 relative overflow-hidden" id="analytics">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-base-content leading-none">
              Channel <span className="text-primary">Analytics</span>
            </h2>
            <p className="text-[10px] uppercase tracking-[0.8em] opacity-40 mt-4 font-bold">Graphic Performance Insights</p>
          </div>
          <div className="text-right text-[10px] bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full uppercase tracking-widest font-black flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            YouTube Verified
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="group">
              <div className="flex items-center gap-2 mb-3 opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all">
                {stat.icon}
                <p className="text-[9px] uppercase tracking-[0.4em] font-bold">{stat.label}</p>
              </div>
              <h3 className="text-5xl font-black italic tracking-tighter text-base-content mb-4">{stat.value}</h3>
              <div className="w-full h-[2px] bg-white/5 relative overflow-hidden mb-3">
                <div className="absolute top-0 left-0 h-full bg-primary transition-all duration-1000" style={{ width: stat.progress }}></div>
              </div>
              <div className="flex justify-between items-center opacity-20 group-hover:opacity-100 transition-opacity text-[9px] font-black uppercase tracking-widest">
                <p>{stat.detail}</p>
                <p className="text-primary">{stat.progress}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CONTENT CATEGORIES ---
const ContentCategories = () => {
  const categories = [
    { title: "Cinematic Films", desc: "High-concept storytelling.", tooltip: "Professional color grading and\nnarrative depth for the big screen.", size: "md:col-span-2", tag: "CORE", icon: <Film size={24}/> },
    { title: "Short Films", desc: "Narratives under 6 mins.", tooltip: "Compact stories optimized for\nfestivals and digital platforms.", size: "md:col-span-1", tag: "SHORT", icon: <Video size={24}/> },
    { title: "Trailers", desc: "High-energy teaser clips.", tooltip: "Intense editing and sound design\nto build hype for major releases.", size: "md:col-span-1", tag: "PROMO", icon: <Tv size={24}/> },
    { title: "3D & Green Screen", desc: "Advanced VFX & compositing.", tooltip: "CGI integration with live action\nusing industry-standard tracking.", size: "md:col-span-2", tag: "VFX", icon: <Layers size={24}/> },
    { title: "AI Integration", desc: "Next-gen AI workflows.", tooltip: "Leveraging AI for scriptwriting,\nstoryboarding and efficiency.", size: "md:col-span-1", tag: "TECH", icon: <Cpu size={24}/> },
    { title: "Animated Movies", desc: "Full CGI animation.", tooltip: "Character design and world building\nin full 3D environments.", size: "md:col-span-2", tag: "CGI", icon: <Box size={24}/> },
    { title: "YouTube Shorts", desc: "Viral-ready filmography.", tooltip: "Fast-paced vertical content\ndesigned for social engagement.", size: "md:col-span-1", tag: "SOCIAL", icon: <Share2 size={24}/> }
  ];

  return (
    <section className="py-24 bg-base-100" id="expertise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-[10px] uppercase tracking-[0.8em] text-primary font-black mb-4">The Portfolio</p>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-base-content leading-none">
            Type of <span className="text-primary">Content</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((item, i) => (
            <div key={i} className={`${item.size} group relative bg-base-300/30 border border-white/5 p-8 rounded-2xl hover:border-primary/40 transition-all duration-500 overflow-hidden`}>
              <div className="flex justify-between mb-8">
                <div className="text-primary group-hover:scale-110 transition-transform">{item.icon}</div>
                <span className="text-[8px] font-black tracking-[0.3em] opacity-40 uppercase">{item.tag}</span>
              </div>
              <h3 className="text-2xl font-black uppercase italic tracking-tighter text-base-content mb-2">{item.title}</h3>
              <div className="relative h-12">
                <p className="absolute top-0 opacity-40 group-hover:opacity-0 group-hover:-translate-y-2 transition-all duration-500 font-bold text-[10px] uppercase tracking-widest leading-relaxed">
                  {item.desc}
                </p>
                <p className="absolute top-0 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-primary font-black text-[11px] whitespace-pre-line leading-tight uppercase tracking-wider">
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

function App() {
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const films = [
    { id: "1", title: "Isolation | Short Film Trailer", vId: "YdP5mKEU8aI", category: "Psychological" },
    { id: "2", title: "Pac-man in Real Life | VFX", vId: "1gVPZH-wpYQ", category: "CGI Animated" },
    { id: "3", title: "Strange Neighbour | Trailer", vId: "VlkbJPDmDbk", category: "Thriller" },
    { id: "4", title: "Strange Neighbour | Full Movie", vId: "RT01Oz_JgwE", category: "Thriller Experience" }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText("siddharthmishra457@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: "Works", href: "#gallery" },
    { name: "Concept-Art", href: "#art" },
    { name: "Journal", href: "#journal" },
    { name: "Expertise", href: "#expertise" },
    { name: "Analytics", href: "#analytics" },
    { name: "Team", href: "#about" },
  ];

  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-500 overflow-x-hidden scroll-smooth scroll-pt-20 cinematic-texture selection:bg-primary selection:text-black">
      <CustomCursor />
      
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b ${
        scrolled ? "bg-base-100/90 backdrop-blur-2xl py-3 border-white/5 shadow-2xl" : "bg-transparent py-6 border-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
          <div className="font-black text-2xl tracking-tighter italic text-base-content">
            <a href="#" className="hover:text-primary transition-colors">MSR<span className="text-primary">WORLD</span></a>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex gap-8 font-black uppercase text-[10px] tracking-[0.3em] text-base-content">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary transition-all hover:tracking-[0.5em]">{link.name}</a>
                </li>
              ))}
            </ul>
            <ThemeSwitcher />
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <ThemeSwitcher />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-base-content">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className={`lg:hidden absolute top-full left-0 w-full bg-base-100 border-b border-white/5 transition-all duration-500 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`}>
          <ul className="flex flex-col p-8 gap-6 font-black uppercase text-xs tracking-widest text-center">
            {navLinks.map((link) => (
              <li key={link.name}><a href={link.href} onClick={() => setIsMenuOpen(false)}>{link.name}</a></li>
            ))}
          </ul>
        </div>
      </nav>

      <FilmScene />

      <main className="p-6 md:p-24 max-w-7xl mx-auto" id="gallery">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-base-content">
            Featured <span className="text-primary">Works</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary mt-6 shadow-[0_0_15px_#ff4d00]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {films.map((film) => (
            <FilmCard key={film.id} {...film} videoId={film.vId} />
          ))}
        </div>
      </main>

      <ArtGallery />
      <ContentCategories />
      <BlogSection />
      <AnalyticsSection />
      <AboutSection />

      <footer className="relative bg-[#050505] pt-32 pb-12 overflow-hidden border-t border-white/5" id="contact">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[18vw] font-black uppercase italic text-white/[0.01] pointer-events-none whitespace-nowrap select-none leading-none">
          MSR WORLD
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="text-[10px] uppercase tracking-[0.8em] text-primary font-black mb-8 animate-pulse">Contact Me</p>
              <button onClick={handleCopy} className="group relative">
                <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white group-hover:text-primary transition-all duration-500">
                  LET'S WORK <span className="text-primary group-hover:text-white transition-all">TOGETHER</span>
                </h3>
                <div className="h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-700 mt-4 shadow-[0_0_15px_#ff4d00]"></div>
                <p className="mt-6 text-[11px] font-black uppercase tracking-[0.4em] text-white/60 group-hover:text-white transition-colors">
                  {copied ? "COPIED TO CLIPBOARD" : "Siddharthmishra457@gmail.com"}
                </p>
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-center lg:items-end gap-6 w-full lg:justify-end">
              <a href="https://msrworldstudios.blogspot.com/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center bg-white/[0.05] border border-white/10 p-8 rounded-3xl hover:border-orange-500/50 transition-all duration-500 w-full max-w-sm relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 blur-[80px] -mr-16 -mt-16 group-hover:bg-orange-600/20 transition-all duration-500"></div>
                <div className="flex items-center gap-4 mb-6 w-full text-white">
                   <div className="bg-[#ff5722] p-3 rounded-2xl shadow-[0_0_25px_rgba(255,87,34,0.4)] group-hover:scale-110 transition-transform">
                      <BookOpen className="text-white" size={28} />
                   </div>
                   <div className="text-left">
                      <h4 className="font-black italic uppercase tracking-tighter text-2xl">MSR <span className="text-[#ff5722]">BLOG</span></h4>
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/50">OFFICIAL JOURNAL</p>
                   </div>
                </div>
                <div className="w-full bg-[#ff5722] text-white font-black text-[11px] uppercase tracking-[0.4em] py-4 rounded-xl text-center group-hover:bg-[#e64a19] shadow-lg transition-all">Read Articles</div>
              </a>

              <a href="https://www.youtube.com/@msrworldstudios" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center bg-white/[0.05] border border-white/10 p-8 rounded-3xl hover:border-red-600/50 transition-all duration-500 w-full max-w-sm relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-[80px] -mr-16 -mt-16 group-hover:bg-red-600/20 transition-all duration-500"></div>
                <div className="flex items-center gap-4 mb-6 w-full text-white">
                   <div className="bg-red-600 p-3 rounded-2xl shadow-[0_0_25px_rgba(220,38,38,0.4)] group-hover:scale-110 transition-transform">
                      <Youtube className="text-white" size={28} />
                   </div>
                   <div className="text-left">
                      <h4 className="font-black italic uppercase tracking-tighter text-2xl">MSR <span className="text-red-600">WORLD</span></h4>
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/50">STUDIOS CHANNEL</p>
                   </div>
                </div>
                <div className="w-full bg-red-600 text-white font-black text-[11px] uppercase tracking-[0.4em] py-4 rounded-xl text-center group-hover:bg-red-700 shadow-lg transition-all">Subscribe Now</div>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/5 pt-16">
            <div className="flex flex-col gap-6">
              <div className="font-black text-3xl italic tracking-tighter uppercase text-white">MSR<span className="text-primary">WORLD</span></div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/30 leading-loose">Independent Filmmaker & VFX Artist specializing in cinematic experiences.</p>
            </div>
            <div className="flex flex-col gap-8">
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-primary">Sitemap</span>
              <div className="grid grid-cols-2 gap-4">
                {navLinks.map(link => (
                  <a key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-primary transition-colors">{link.name}</a>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end justify-between">
              <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="group flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-all shadow-xl">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60 group-hover:text-primary transition-colors">Back to Top</span>
                <ArrowUp size={16} className="text-white/60 group-hover:text-primary group-hover:-translate-y-1 transition-all" />
              </button>
              <div className="mt-8 text-right text-white/10 text-[9px] font-black uppercase tracking-widest">© 2026 MSR WORLD PRODUCTIONS</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;