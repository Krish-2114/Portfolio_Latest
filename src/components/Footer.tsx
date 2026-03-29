import { socialLinks } from '../data/social';

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
  { label: 'Explore', id: 'explore' },
] as const;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Footer() {
  return (
    <footer className="glass border-t border-cyan-500/40 py-8 px-4 font-inter">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
        <button
          type="button"
          onClick={() => scrollToSection('hero')}
          className="font-orbitron font-bold text-xl text-white glow cursor-pointer"
        >
          KRISH SHAH.
        </button>

        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-accent transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
              >
                <Icon
                  className="text-2xl hover:scale-125 transition-transform"
                  style={{ color: link.color }}
                />
              </a>
            );
          })}
        </div>
      </div>

      <div className="border-t border-white/10 mt-6 pt-4 text-center text-gray-500 text-sm max-w-7xl mx-auto space-y-3">
        <p className="text-gray-500">Designed &amp; Built from Earth · 2025</p>
        <p className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 text-gray-400">
          <a
            href="tel:+918657125517"
            className="hover:text-accent transition-colors"
          >
            +91 86571 25517
          </a>
          <span className="hidden sm:inline text-gray-600" aria-hidden>
            ·
          </span>
          <a
            href="mailto:krish.r.shah2004@gmail.com"
            className="hover:text-accent transition-colors break-all px-2"
          >
            krish.r.shah2004@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}