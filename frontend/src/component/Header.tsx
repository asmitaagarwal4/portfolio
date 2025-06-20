function Header() {
  return (
    <header className="border rounded-xl text-white p-4 bg-white/0 backdrop-blur-xs flex items-center justify-between">
      <p className="text-2xl font-bold">ASMITA AGARWAL</p>
      <nav className="mt-0">
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;