const navItems = ["Skills", "Projects", "Experience"];

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-semibold tracking-wide">
          Ishan Rajvi
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-sm text-gray-400 transition hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-gradient-to-r after:from-cyan-300 after:to-purple-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}