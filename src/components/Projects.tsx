import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/projects';

const projectBarClasses = [
  'bg-gradient-to-r from-cyan-400 to-blue-500',
  'bg-gradient-to-r from-purple-400 to-pink-500',
  'bg-gradient-to-r from-green-400 to-cyan-500',
] as const;

const AUTO_ADVANCE_MS = 5500;

export function Projects() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.12 });
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    const len = projects.length;
    setIndex(((i % len) + len) % len);
  }, []);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % projects.length);
  }, []);

  useEffect(() => {
    if (!inView || paused || projects.length <= 1) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(next, AUTO_ADVANCE_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [inView, paused, next, index]);

  const project = projects[index];

  return (
    <section id="projects" ref={ref} className="section font-inter">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="outlined-text text-4xl md:text-6xl text-center mb-12"
      >
        PROJECTS
      </motion.h2>

      <div
        className="max-w-6xl mx-auto w-full px-3 sm:px-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
        }}
      >
        <div
          className="relative min-h-[360px] md:min-h-[380px] lg:min-h-[400px]"
          aria-roledescription="carousel"
          aria-label="Featured projects"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={project.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${projects.length}: ${project.title}`}
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -48 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-2xl overflow-hidden relative"
              whileHover={{
                boxShadow: '0 20px 40px rgba(6,182,212,0.25)',
              }}
            >
              <div
                className={`h-1.5 w-full rounded-t-2xl shrink-0 ${projectBarClasses[index] ?? projectBarClasses[0]}`}
              />
              <span className="absolute top-4 right-4 font-orbitron text-xs text-white/20 pointer-events-none z-10">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="p-8 sm:p-10 md:p-12">
                <div className="flex items-start justify-between mb-5 gap-4">
                  <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-accent flex-1">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl md:text-3xl text-white hover:text-accent transition-colors hover:scale-110 transform inline-block"
                        aria-label={`${project.title} GitHub`}
                      >
                        <FiGithub />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl md:text-3xl text-white hover:text-accent transition-colors hover:scale-110 transform inline-block"
                        aria-label={`${project.title} live site`}
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed text-base md:text-lg lg:text-xl max-w-4xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 text-xs sm:text-sm rounded-full bg-primary/30 border border-primary-light/30 text-primary-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8" role="tablist" aria-label="Select project">
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show project ${i + 1}: ${p.title}`}
              onClick={() => goTo(i)}
              className={
                i === index
                  ? 'h-2.5 w-8 rounded-full bg-accent transition-all duration-300 shadow-[0_0_12px_rgba(6,182,212,0.6)]'
                  : 'h-2.5 w-2.5 rounded-full bg-white/25 hover:bg-white/45 transition-all duration-300'
              }
            />
          ))}
        </div>

        <p className="text-center text-xs text-gray-500 mt-3" aria-live="polite">
          {paused ? 'Paused — hover or focus to hold' : 'Auto-advancing'}
        </p>
      </div>
    </section>
  );
}
