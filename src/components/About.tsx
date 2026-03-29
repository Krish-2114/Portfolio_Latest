import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  'Python',
  'TypeScript',
  'React',
  'FastAPI',
  'Docker',
  'AWS',
  'PostgreSQL',
  'MySQL',
  'TailwindCSS',
  'NumPy',
  'Pandas',
  'Scikit-learn',
];

export function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="section font-inter">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="outlined-text text-4xl md:text-6xl text-center mb-16"
      >
        ABOUT ME
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto w-full pb-10 md:pb-16">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-1 shadow-glow-purple"
          >
            <div className="relative w-full h-full overflow-hidden rounded-full bg-space-darkest ring-0">
              <img
                src="/krish-profile.png"
                alt="Krish Shah"
                className="h-full w-full min-h-[100%] min-w-[100%] object-cover object-[50%_18%]"
                width={256}
                height={256}
                decoding="async"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-5 text-gray-300 leading-relaxed"
        >
          <p>
            I am currently pursuing my B.Tech at{' '}
            <span className="text-accent font-semibold">Sardar Patel Institute of Technology (SPIT)</span>,
            where I am building a strong foundation in analytical thinking, problem-solving, and structured
            learning. My academic experience has shaped the way I approach challenges—breaking problems down
            logically and focusing on clarity rather than shortcuts.
          </p>
          <p>
            I am an AI–ML enthusiast with a growing interest in understanding how intelligent, data-driven
            systems learn and make decisions. Alongside this, I have developed a working knowledge of web
            development, which helps me translate ideas into functional and presentable applications while
            keeping usability and structure in mind.
          </p>
          <p>
            Studying Engineering has encouraged me to balance theory with hands-on work through projects and
            continuous self-learning. I actively focus on improving my skills, refining my approach through
            practice, and building solutions that are thoughtful, maintainable, and practical.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 md:mt-12 max-w-6xl mx-auto w-full pt-10 md:pt-16 border-t border-white/5"
      >
        <h3 className="text-2xl font-orbitron text-center mb-8 text-white glow">Tech Stack</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 20px rgba(6,182,212,0.6)',
              }}
              className="glass rounded-lg p-4 text-center hover:bg-white/10 transition-all cursor-pointer text-sm md:text-base"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}