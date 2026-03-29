import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        scrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollToSection('hero')}
          className="font-orbitron font-bold text-xl text-white glow cursor-pointer"
        >
          KRISH SHAH
        </button>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="text-white/90 hover:text-accent transition-all hover:scale-110"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass mt-0 mx-4 mb-4 rounded-lg p-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
                className="block w-full text-left py-2 text-white/90 hover:text-accent"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
