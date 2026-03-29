import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';

/** Place your artwork in `public/` and set the filename here (jpg, png, or webp). */
const HERO_BACKGROUND_SRC = '/hero-bg.png';

function EyebrowRow({ style }: { style?: CSSProperties }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        ...style,
      }}
    >
      <div className="hero-line" />
      <span className="hero-eyebrow">A MESSAGE FROM EARTH</span>
      <div className="hero-line hero-line--mirror" />
    </div>
  );
}

const Hero = () => {
  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  const bracketWhite = '2px solid rgba(255,255,255,0.92)';

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#070010]"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BACKGROUND_SRC}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-bottom"
          decoding="async"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#070010]/50 via-transparent to-[#070010]/70 pointer-events-none"
          aria-hidden
        />
      </div>

      <div
        className="relative z-10 flex min-h-screen flex-col"
        style={{ pointerEvents: 'none' }}
      >
        <div
          className="shrink-0 px-3 pt-20 text-center sm:pt-24"
          style={{ pointerEvents: 'none' }}
        >
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
          >
            <EyebrowRow style={{ marginBottom: '14px' }} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="hero-outlined-title mx-auto mb-6 max-w-[22ch]"
            style={{
              fontSize: 'clamp(1.65rem, 4.8vw, 4.25rem)',
              lineHeight: 1.08,
            }}
          >
            HELLO FELLOW
            <br />
            GALAXY MEMBER
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="hero-outlined-name mx-auto max-w-[90vw]"
            style={{
              fontSize: 'clamp(1.35rem, 3.5vw, 3rem)',
              lineHeight: 1.15,
            }}
          >
            I AM KRISH SHAH
          </motion.h2>
        </div>

        <div className="flex flex-1 flex-col justify-end pb-10 sm:pb-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.85 }}
            className="mx-auto"
            style={{ pointerEvents: 'auto' }}
            onClick={scrollToAbout}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollToAbout();
              }
            }}
            role="button"
            tabIndex={0}
          >
            <div className="relative h-[54px] w-[118px] cursor-pointer">
              {(
                [
                  { top: 0, left: 0, borderTop: bracketWhite, borderLeft: bracketWhite },
                  { top: 0, right: 0, borderTop: bracketWhite, borderRight: bracketWhite },
                  { bottom: 0, left: 0, borderBottom: bracketWhite, borderLeft: bracketWhite },
                  {
                    bottom: 0,
                    right: 0,
                    borderBottom: bracketWhite,
                    borderRight: bracketWhite,
                  },
                ] as const
              ).map((corner, i) => (
                <div
                  key={i}
                  className="absolute h-[15px] w-[15px] transition-all duration-300"
                  style={corner}
                />
              ))}
              <div
                className="absolute inset-0 flex items-center justify-center text-center font-orbitron text-[10px] tracking-[0.2em] text-white/95"
                style={{
                  lineHeight: 1.45,
                  textShadow:
                    '0 0 14px rgba(255,255,255,0.55), 0 0 28px rgba(192,132,252,0.35)',
                  animation: 'bracketPulse 3s ease-in-out infinite',
                }}
              >
                CLICK
                <br />
                TO OPEN
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;