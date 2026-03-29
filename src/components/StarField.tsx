import { useMemo } from 'react';

const generateBoxShadow = (count: number): string => {
  const stars: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    stars.push(`${x}px ${y}px #fff`);
  }
  return stars.join(', ');
};

const StarField = () => {
  const smallStars = useMemo(() => generateBoxShadow(180), []);
  const mediumStars = useMemo(() => generateBoxShadow(80), []);
  const largeStars = useMemo(() => generateBoxShadow(30), []);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      <div
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          borderRadius: '50%',
          background: 'transparent',
          boxShadow: smallStars,
          animation: 'twinkle 4s ease-in-out infinite',
          top: 0,
          left: 0,
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: '2px',
          height: '2px',
          borderRadius: '50%',
          background: 'transparent',
          boxShadow: mediumStars,
          animation: 'twinkleSlow 7s ease-in-out infinite',
          animationDelay: '1s',
          top: 0,
          left: 0,
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: '3px',
          height: '3px',
          borderRadius: '50%',
          background: 'transparent',
          boxShadow: largeStars,
          animation: 'twinkle 10s ease-in-out infinite',
          animationDelay: '2s',
          top: 0,
          left: 0,
        }}
      />

      {[
        { top: '8%', left: '5%', delay: '0s', duration: '2.5s' },
        { top: '18%', left: '55%', delay: '3s', duration: '2s' },
        { top: '5%', left: '30%', delay: '6s', duration: '3s' },
        { top: '25%', left: '75%', delay: '9s', duration: '2.2s' },
      ].map((star, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: star.top,
            left: star.left,
            width: '120px',
            height: '1.5px',
            background:
              'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(6,182,212,0.4) 100%)',
            borderRadius: '50%',
            transform: 'rotate(35deg)',
            animation: `shootingStar ${star.duration} ease-in infinite`,
            animationDelay: star.delay,
            opacity: 0,
          }}
        />
      ))}

      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: '400px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(88,28,135,0.25) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'nebulaDrift 20s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '40%',
          right: '-10%',
          width: '350px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(6,182,212,0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'nebulaDrift 25s ease-in-out infinite reverse',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '20%',
          width: '500px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(168,85,247,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'nebulaDrift 30s ease-in-out infinite',
          animationDelay: '-10s',
        }}
      />
    </div>
  );
};

export default StarField;
