import { useState, useEffect } from 'react';
import {
  TrendingUp,
  Clock,
  FileText,
  Play,
  Menu,
  X,
  ArrowUp,
  Youtube,
  BookOpen,
  Instagram,
  MessageCircle
} from "lucide-react";
import Atropos from "atropos/react";
import "atropos/css";
import useSound from "use-sound";
// Component Imports
import FilmCard from "./components/FilmCard";
import ThemeSwitcher from "./components/ThemeSwitcher";
import FilmScene from "./components/FilmScene";
import UpcomingProjects from "./components/UpcomingProjects";
import AboutSection from "./components/AboutSection";
import ArtGallery from "./components/ArtGallery";
import ContentCategories from "./components/ContentCategories";
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

  // SAME CINEMATIC HOVER SOUND
  const [playHover] = useSound("/hover-whoosh.mp3", {
    volume: 0.15,
    interrupt: true,
  });

  return (
    <section
      className="py-20 md:py-28 bg-base-100 relative overflow-hidden"
      id="journal"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/5 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* SECTION TITLE */}
        <div className="mb-16">

          <p className="text-[10px] uppercase tracking-[0.8em] text-primary font-black mb-4">
            Written Works
          </p>

          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-base-content leading-none">
            The Production{" "}
            <span className="text-primary text-outline-sm">
              Journal
            </span>
          </h2>

        </div>

        {/* MAIN CARD */}
        <div className="group relative bg-base-300/30 border border-white/5 rounded-[2.5rem] overflow-hidden p-8 md:p-12 flex flex-col lg:flex-row items-center gap-14 hover:border-primary/40 transition-all duration-700">

          {/* CONTENT SIDE */}
          <div className="flex-1 text-center lg:text-left z-20">

            {/* TOP TAG */}
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-8">

              <div className="bg-[#ff5722] p-2.5 rounded-xl shadow-[0_0_20px_rgba(255,87,34,0.4)]">
                <BookOpen size={22} className="text-white" />
              </div>

              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/50">
                Production Pipeline
              </span>

            </div>

            {/* HEADING */}
            <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white mb-6 leading-[0.9] max-w-xl">
              From Concept To{" "}
              <span className="text-primary">
                Final Cut
              </span>
            </h3>

            {/* DESCRIPTION */}
            <p className="text-white/40 font-bold text-[11px] uppercase tracking-[0.3em] leading-loose max-w-2xl mb-10">
              Explore the MSR methodology. Our journal documents every phase
              of filmmaking — from early scripting and cinematic planning to
              VFX compositing, CGI workflows, sound design, and final mastering.
            </p>

            {/* BUTTON */}
            <div className="flex justify-center lg:justify-start">

              <a
                href="https://msrworldstudios.blogspot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative overflow-hidden bg-primary px-10 py-4 rounded-xl transition-all duration-300 active:scale-95 shadow-[0_0_30px_rgba(255,77,0,0.25)]"
              >

                <span className="relative z-10 text-black font-black italic uppercase tracking-[0.3em] text-[11px]">
                  Visit Blogspot
                </span>

                <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>

              </a>

            </div>
          </div>

          {/* 3D IMAGE SIDE */}
          <div className="flex-1 relative w-full max-w-2xl">

            <Atropos
              className="w-full h-full"
              activeOffset={40}
              shadow={false}
              highlight={true}
              rotateTouch="scroll-y"
              onEnter={() => playHover()}
            >

              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#090909] p-3 shadow-2xl transition-all duration-500 hover:border-primary/40">

                {/* IMAGE WRAPPER */}
                <div className="relative overflow-hidden rounded-[1.5rem]">

                  <img
                    src="/journal.jpg"
                    alt="MSR Journal"
                    className="w-full h-auto object-cover rounded-[1.5rem] scale-105 group-hover:scale-100 transition-all duration-700 grayscale-[10%] group-hover:grayscale-0"
                    data-atropos-offset="-5"
                  />

                  {/* CINEMATIC SHINE */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                </div>

                {/* FLOATING FRAME */}
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  data-atropos-offset="6"
                >
                  <div className="w-[94%] h-[94%] border border-primary/10 rounded-[1.5rem]"></div>
                </div>

                {/* DIGITAL SCANLINES */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  data-atropos-offset="10"
                >

                  <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.08)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,4px_100%]"></div>

                  {/* CORNERS */}
                  <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-primary/60"></div>

                  <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-primary/60"></div>

                </div>

              </div>

            </Atropos>

            {/* AMBIENT GLOW */}
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
    { 
      label: "Total Views", 
      value: "158.5k", 
      detail: "158,491 Total", 
      progress: "85%", 
      icon: <TrendingUp size={16}/> 
    },

    { 
      label: "Watch Time", 
      value: "1.4K", 
      detail: "Hours of Content", 
      progress: "70%", 
      icon: <Clock size={16}/> 
    },

    { 
      label: "Video Projects", 
      value: "68", 
      detail: "Total Released", 
      progress: "95%", 
      icon: <Play size={16}/> 
    },

    { 
      label: "Scripts Written", 
      value: "32", 
      detail: "Original Stories", 
      progress: "82%", 
      icon: <FileText size={16}/> 
    }
  ];

  return (
    <section className="py-24 bg-base-300/20 border-y border-white/5 relative overflow-hidden" id="analytics">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">

          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-base-content leading-none">
              Channel <span className="text-primary">Analytics</span>
            </h2>

            <p className="text-[10px] uppercase tracking-[0.8em] opacity-40 mt-4 font-bold">
              Graphic Performance Insights
            </p>
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

                <p className="text-[9px] uppercase tracking-[0.4em] font-bold">
                  {stat.label}
                </p>
              </div>

              <h3 className="text-5xl font-black italic tracking-tighter text-base-content mb-4">
                {stat.value}
              </h3>

              <div className="w-full h-[2px] bg-white/5 relative overflow-hidden mb-3">
                <div 
                  className="absolute top-0 left-0 h-full bg-primary transition-all duration-1000"
                  style={{ width: stat.progress }}
                ></div>
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
    {
      id: "1",
      title: "Isolation | Short Film Trailer",
      vId: "YdP5mKEU8aI",
      category: "Psychological"
    },

    {
      id: "2",
      title: "Pac-man in Real Life | VFX",
      vId: "1gVPZH-wpYQ",
      category: "CGI Animated"
    },

    {
      id: "3",
      title: "Strange Neighbour | Trailer",
      vId: "VlkbJPDmDbk",
      category: "Thriller"
    },

    {
      id: "4",
      title: "Strange Neighbour | Full Movie",
      vId: "RT01Oz_JgwE",
      category: "Thriller Experience"
    }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText("siddharthmishra457@gmail.com");

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
  { name: "Upcoming", href: "#upcoming" },
  { name: "Concept-Art", href: "#art" },
  { name: "Journal", href: "#journal" },
  { name: "Expertise", href: "#expertise" },
  { name: "Analytics", href: "#analytics" },
  { name: "Team", href: "#about" },
  { name: "Works", href: "#gallery" },
];

  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-500 overflow-x-hidden scroll-smooth scroll-pt-20 cinematic-texture selection:bg-primary selection:text-black">

      <CustomCursor />

      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b ${
        scrolled
          ? "bg-base-100/90 backdrop-blur-2xl py-3 border-white/5 shadow-2xl"
          : "bg-transparent py-6 border-transparent"
      }`}>

        <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">

          <div className="font-black text-2xl tracking-tighter italic text-base-content">
            <a href="#" className="hover:text-primary transition-colors">
              MSR<span className="text-primary">WORLD</span>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-10">

            <ul className="flex gap-8 font-black uppercase text-[10px] tracking-[0.3em] text-base-content">

              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-all hover:tracking-[0.5em]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

            </ul>

            <ThemeSwitcher />
          </div>

          <div className="lg:hidden flex items-center gap-4">

            <ThemeSwitcher />

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-base-content"
            >
              {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>

          </div>

        </div>

        {/* MOBILE MENU */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-base-100 border-b border-white/5 transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}>

          <ul className="flex flex-col p-8 gap-6 font-black uppercase text-xs tracking-widest text-center">

            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}

          </ul>
        </div>

      </nav>

      {/* HERO */}
      <FilmScene />


  {/* UPCOMING PROJECTS */}
    <UpcomingProjects />
      <ArtGallery />
        <ContentCategories />
        <BlogSection />
        <AnalyticsSection />
        <AboutSection />
      {/* FEATURED WORKS */}
      <main className="p-6 md:p-24 max-w-7xl mx-auto" id="gallery">

        <div className="mb-20">

          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-base-content">
            Featured <span className="text-primary">Works</span>
          </h2>

          <div className="h-1.5 w-24 bg-primary mt-6 shadow-[0_0_15px_#ff4d00]"></div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

          {films.map((film) => (
            <FilmCard
              key={film.id}
              title={film.title}
              videoId={film.vId}
              category={film.category}
            />
          ))}

        </div>
      </main>

      {/* FOOTER */}
      <footer className="relative bg-[#050505] pt-32 pb-12 overflow-hidden border-t border-white/5" id="contact">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[18vw] font-black uppercase italic text-white/[0.01] pointer-events-none whitespace-nowrap select-none leading-none">
          MSR WORLD
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">

            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

              <p className="text-[10px] uppercase tracking-[0.8em] text-primary font-black mb-8 animate-pulse">
                Contact Me
              </p>

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

{/* SOCIAL CARDS */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">

  {/* BLOG CARD */} 
  <a
    href="https://msrworldstudios.blogspot.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col justify-between min-h-[300px] bg-white/[0.05] border border-white/10 p-8 rounded-3xl hover:border-orange-500/50 transition-all duration-500 w-full relative overflow-hidden backdrop-blur-md"
  >

    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 blur-[80px] -mr-16 -mt-16 group-hover:bg-orange-600/20 transition-all duration-500"></div>

    <div className="flex items-center gap-4 mb-6 w-full text-white flex-1">

      <div className="bg-[#ff5722] p-3 rounded-2xl shadow-[0_0_25px_rgba(255,87,34,0.4)] group-hover:scale-110 transition-transform">
        <BookOpen className="text-white" size={28}/>
      </div>

      <div className="text-left">
        <h4 className="font-black italic uppercase tracking-tighter text-2xl">
          MSR <span className="text-[#ff5722]">BLOG</span>
        </h4>

        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/50">
          OFFICIAL JOURNAL
        </p>
      </div>

    </div>

    <div className="w-full mt-auto bg-[#ff5722] text-white font-black text-[11px] uppercase tracking-[0.4em] py-4 rounded-xl text-center group-hover:bg-[#e64a19] shadow-lg transition-all">
      Read Articles
    </div>

  </a>


  {/* YOUTUBE CARD */}
  <a
    href="https://www.youtube.com/@msrworldstudios"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col justify-between min-h-[300px] bg-white/[0.05] border border-white/10 p-8 rounded-3xl hover:border-red-600/50 transition-all duration-500 w-full relative overflow-hidden backdrop-blur-md"
  >

    <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-[80px] -mr-16 -mt-16 group-hover:bg-red-600/20 transition-all duration-500"></div>

    <div className="flex items-center gap-4 mb-6 w-full text-white flex-1">

      <div className="bg-red-600 p-3 rounded-2xl shadow-[0_0_25px_rgba(220,38,38,0.4)] group-hover:scale-110 transition-transform">
        <Youtube className="text-white" size={28}/>
      </div>

      <div className="text-left">
        <h4 className="font-black italic uppercase tracking-tighter text-2xl">
          MSR <span className="text-red-600">YT</span>
        </h4>

        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/50">
           CHANNEL
        </p>
      </div>

    </div>

    <div className="w-full mt-auto bg-red-600 text-white font-black text-[11px] uppercase tracking-[0.4em] py-4 rounded-xl text-center group-hover:bg-red-700 shadow-lg transition-all">
      Subscribe Now
    </div>

  </a> 

{/* WHATSAPP CHANNEL CARD */}
<a
  href="https://www.whatsapp.com/channel/0029VbCcZZ18V0tpD965tn2j"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex flex-col justify-between min-h-[300px] bg-white/[0.05] border border-white/10 p-8 rounded-3xl hover:border-green-500/50 transition-all duration-500 w-full relative overflow-hidden backdrop-blur-md"
>

  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[80px] -mr-16 -mt-16 group-hover:bg-green-500/20 transition-all duration-500"></div>

  <div className="flex items-center gap-4 mb-6 w-full text-white flex-1">

    <div className="bg-green-500 p-3 rounded-2xl shadow-[0_0_25px_rgba(34,197,94,0.4)] group-hover:scale-110 transition-transform">
      <MessageCircle className="text-white" size={28} />
    </div>

    <div className="text-left">

      <h4 className="font-black italic uppercase tracking-tighter text-2xl">
        MSR <span className="text-green-500">WHATSAPP</span>
      </h4>

      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/50">
        OFFICIAL CHANNEL
      </p>

    </div>

  </div>

  <div className="w-full mt-auto bg-green-500 text-white font-black text-[11px] uppercase tracking-[0.4em] py-4 rounded-xl text-center shadow-lg transition-all group-hover:bg-green-600">
    Join Channel
  </div>

</a>

  {/* INSTAGRAM CARD */}
  <a
    href="https://www.instagram.com/msrworldstudios"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col justify-between min-h-[300px] bg-white/[0.05] border border-white/10 p-8 rounded-3xl hover:border-pink-500/50 transition-all duration-500 w-full relative overflow-hidden backdrop-blur-md"
  >

    <div className="absolute top-0 right-0 w-32 h-32 bg-pink-600/10 blur-[80px] -mr-16 -mt-16 group-hover:bg-pink-600/20 transition-all duration-500"></div>

    <div className="flex items-center gap-4 mb-6 w-full text-white flex-1">

      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 p-3 rounded-2xl shadow-[0_0_25px_rgba(236,72,153,0.4)] group-hover:scale-110 transition-transform">
        <Instagram className="text-white" size={28}/>
      </div>

      <div className="text-left">

        <h4 className="font-black italic uppercase tracking-tighter text-2xl">
          MSR <span className="text-pink-500">INSTA</span>
        </h4>

        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/50">
          OFFICIAL PROFILE
        </p>

      </div>

    </div>

    <div className="w-full mt-auto bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white font-black text-[11px] uppercase tracking-[0.4em] py-4 rounded-xl text-center shadow-lg transition-all group-hover:scale-[1.02]">
      Follow Now
    </div>

  </a>

</div>
</div>

          {/* FOOTER BOTTOM */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/5 pt-16">

            <div className="flex flex-col gap-6">
              <div className="font-black text-3xl italic tracking-tighter uppercase text-white">
                MSR<span className="text-primary">WORLD</span>
              </div>

              <p className="text-[10px] uppercase font-bold tracking-widest text-white/30 leading-loose">
                Independent Filmmaker & VFX Artist specializing in cinematic experiences.
              </p>
            </div>

            <div className="flex flex-col gap-8">

              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-primary">
                Sitemap
              </span>

              <div className="grid grid-cols-2 gap-4">

                {navLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}

              </div>
            </div>

            <div className="flex flex-col items-center md:items-end justify-between">

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-all shadow-xl"
              >

                <span className="text-[10px] font-black uppercase tracking-widest text-white/60 group-hover:text-primary transition-colors">
                  Back to Top
                </span>

                <ArrowUp size={16} className="text-white/60 group-hover:text-primary group-hover:-translate-y-1 transition-all" />

              </button>

              <div className="mt-8 text-right text-white/10 text-[9px] font-black uppercase tracking-widest">
                © 2026 MSR WORLD PRODUCTIONS
              </div>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;