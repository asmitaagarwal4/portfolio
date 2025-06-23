import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=" w-screen pt-4 px-4 md:pt-8 md:px-8  box-border z-10">
      <header className="box-border w-full top-4 border rounded-xl text-white p-2 bg-white/0 backdrop-blur-xs flex items-center justify-between">
        <p className="text-2xl px-2 font-bold">ASMITA</p>
        {/* Hamburger menu button for small screens */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Navigation */}
        <nav className={`mt-0 ${menuOpen ? 'flex' : 'hidden'} flex-col absolute top-full left-0 w-full bg-black/80 rounded-b-xl md:static md:flex md:flex-row md:bg-transparent md:rounded-none md:w-auto md:items-center md:space-x-4 md:mt-0`}> 
          <ul className="flex flex-col md:flex-row w-full md:w-auto items-center md:space-x-4">
            <li className="w-full md:w-auto"><a href="/" className="block px-4 py-2 hover:underline">About me</a></li>
            <li className="w-full md:w-auto"><a href="/about" className="block px-4 py-2 hover:underline">Projects</a></li>
            <li className="w-full md:w-auto"><a href="/contact" className="block px-4 py-2 hover:underline">Skills</a></li>
            <li className="w-full md:w-auto"><a href="/contact" className="block px-4 py-2 hover:underline">Badges</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;