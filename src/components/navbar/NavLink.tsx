const navLinks = [
  { name: "Beranda", url: "/" },
  { name: "Berita", url: "/" },
  { name: "Pemerintahan", url: "/menu-1" },
  { name: "Penghargaan", url: "/menu-2" },
  { name: "Smart City", url: "/menu-3" },
  { name: "Event", url: "/menu-5" },
  { name: "Foto", url: "/menu-4" },
  { name: "Video", url: "/menu-4" },
];

const NavLink = () => {
  return (
    <div className="z-[999] h-10 lg:sticky lg:top-14 lg:h-12 flex items-center backdrop-blur bg-[#1A3C61]/95 dark:bg-[#111928]/95 overflow-hidden dark:from-dark-secondary dark:to-dark-secondary transition-all ease-in-out duration-300">
      <div className="px-4 lg:px-0 container max-w-6xl lg:mx-auto">
        <div className="relative -mx-4">
          <div className="flex items-center space-x-6 flex-nowrap overflow-x-scroll scrollbar-hide px-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className={`text-white/90 text-[10px] md:text-xs text-nowrap font-medium tracking-wider hover:text-accent transition ease-in-out duration-300`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLink;
