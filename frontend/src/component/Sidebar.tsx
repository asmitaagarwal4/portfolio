function Sidebar() {
  return (
    <aside className="absolute left-8 top-1/2 -translate-y-1/2 w-20 bg-white/0 backdrop-blur-xs border border-white/20 rounded-xl p-6 flex flex-col items-start z-50 h-auto shadow-lg">
      <nav className="w-full">
        <ul className="flex flex-col space-y-4 w-full">
          <li><a href="/" className="hover:underline text-white">H</a></li>
          <li><a href="/about" className="hover:underline text-white">Ab</a></li>
          <li><a href="/contact" className="hover:underline text-white">Co</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
