import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  // Matching your index.css list
  const themes = [
    "night", "luxury", "coffee", "black", 
    "bumblebee", "retro"
  ];
  
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "night");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-sm md:btn-md border border-base-content/10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.903a9.2 9.2 0 0 1 2.24-4.054L15 7.5 16.5 6L18 7.5 15 10.5V10.5L7.5 18l-1.5 1.5-1.902-1.597Z" />
        </svg>
        <span className="hidden sm:inline">Theme</span>
      </div>
      <ul tabIndex={0} className="dropdown-content z-[100] menu p-2 shadow-2xl bg-base-300 rounded-box w-52 mt-2 border border-base-content/5">
        {themes.map((t) => (
          <li key={t}>
            <button 
              className={`capitalize ${theme === t ? "bg-primary text-primary-content" : ""}`}
              onClick={() => setTheme(t)}
            >
              {t}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}