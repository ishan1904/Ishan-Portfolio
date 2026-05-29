const navItems = ["Projects", "Experience", "Skills", "Resume"];

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
              className="text-sm text-gray-400 transition hover:text-white"
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