import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { socialLinks } from '../data/social';

const exploreBarByPlatform: Record<string, string> = {
  GitHub: 'bg-gradient-to-r from-gray-400 to-white',
  LinkedIn: 'bg-gradient-to-r from-blue-400 to-blue-600',
  LeetCode: 'bg-gradient-to-r from-yellow-400 to-orange-500',
};

export function Explore() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="explore" ref={ref} className="section font-inter">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="outlined-text text-4xl md:text-6xl text-center mb-4"
      >
        EXPLORE
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-400 text-center mb-12"
      >
        Connect with me across the galaxy
      </motion.p>

      <div
        className="max-w-3xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6"
        style={{ perspective: '1000px' }}
      >
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: `0 0 30px ${link.color}80`,
              }}
              className="glass rounded-xl overflow-hidden text-center hover:bg-white/10 transition-all duration-300 group block"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className={`h-1 w-full rounded-t-xl ${exploreBarByPlatform[link.platform] ?? 'bg-gradient-to-r from-cyan-400 to-accent'}`}
              />
              <div className="p-8">
              <Icon
                className="text-6xl mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ color: link.color }}
              />
              <h3 className="text-xl font-orbitron font-bold mb-2 text-white">{link.platform}</h3>
              <p className="text-gray-400 text-sm">{link.username}</p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
