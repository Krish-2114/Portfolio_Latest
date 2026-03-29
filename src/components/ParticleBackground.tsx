import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine, ISourceOptions } from 'tsparticles-engine';
import { useCallback, useMemo } from 'react';

const options: ISourceOptions = {
  fullScreen: { enable: true, zIndex: -1 },
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  particles: {
    number: { value: 100, density: { enable: true, value_area: 800 } },
    color: { value: ['#ffffff', '#06B6D4', '#A78BFA'] },
    shape: { type: 'circle' },
    opacity: {
      value: { min: 0.3, max: 0.8 },
      animation: { enable: true, speed: 1, minimumValue: 0.1 },
    },
    size: { value: { min: 1, max: 3 } },
    move: {
      enable: true,
      speed: 0.5,
      direction: 'none',
      random: true,
      outModes: { default: 'out' },
    },
    links: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.2,
      width: 1,
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'grab' },
      onClick: { enable: true, mode: 'push' },
    },
    modes: {
      grab: { distance: 140, links: { opacity: 0.5 } },
      push: { quantity: 4 },
    },
  },
  detectRetina: true,
};

export function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const opts = useMemo(() => options, []);

  return <Particles id="tsparticles" init={particlesInit} options={opts} />;
}
