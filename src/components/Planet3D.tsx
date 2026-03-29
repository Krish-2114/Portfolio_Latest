const Planet3D = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '320px',
        height: '320px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '-24px',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse at center, transparent 55%, rgba(6,182,212,0.12) 70%, rgba(168,85,247,0.08) 85%, transparent 100%)',
          animation: 'rimGlow 4s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: `
          radial-gradient(ellipse at 35% 35%,
            #38bdf8 0%,
            #2563eb 16%,
            #1d4ed8 30%,
            #0f766e 44%,
            #0e7490 56%,
            #0c4a6e 70%,
            #082f49 84%,
            #020617 100%)
        `,
          animation: 'planetPulse 5s ease-in-out infinite',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '8%',
            left: '12%',
            width: '38%',
            height: '32%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.18) 0%, transparent 70%)',
            transform: 'rotate(-20deg)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: '5%',
            left: '20%',
            width: '20%',
            height: '15%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.10) 0%, transparent 70%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at 80% 55%, rgba(0,0,0,0.55) 0%, transparent 60%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at 75% 80%, rgba(0,0,0,0.4) 0%, transparent 50%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            overflow: 'hidden',
            animation: 'continentDrift 90s linear infinite',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '28%',
              left: '22%',
              width: '38%',
              height: '26%',
              borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%',
              background: 'rgba(15,118,110,0.75)',
              boxShadow: 'inset -4px -4px 8px rgba(0,0,0,0.3)',
            }}
          />

          <div
            style={{
              position: 'absolute',
              top: '52%',
              left: '45%',
              width: '28%',
              height: '20%',
              borderRadius: '45% 55% 60% 40% / 55% 45% 55% 45%',
              background: 'rgba(13,148,136,0.65)',
              boxShadow: 'inset -3px -3px 6px rgba(0,0,0,0.3)',
            }}
          />

          <div
            style={{
              position: 'absolute',
              top: '18%',
              left: '55%',
              width: '16%',
              height: '12%',
              borderRadius: '50%',
              background: 'rgba(15,118,110,0.55)',
            }}
          />

          <div
            style={{
              position: 'absolute',
              top: '2%',
              left: '25%',
              width: '50%',
              height: '18%',
              borderRadius: '50%',
              background: 'rgba(220,240,255,0.18)',
            }}
          />

          <div
            style={{
              position: 'absolute',
              top: '38%',
              left: '8%',
              width: '45%',
              height: '8%',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.07)',
              filter: 'blur(4px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '60%',
              left: '30%',
              width: '35%',
              height: '6%',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
              filter: 'blur(3px)',
            }}
          />
        </div>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            boxShadow:
              'inset 0 0 30px rgba(6,182,212,0.2), inset 0 0 60px rgba(0,0,0,0.4)',
          }}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotateX(75deg)',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          border: '2px solid rgba(6,182,212,0.15)',
          boxShadow: '0 0 20px rgba(6,182,212,0.08)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotateX(75deg)',
          width: '460px',
          height: '460px',
          borderRadius: '50%',
          border: '1px solid rgba(168,85,247,0.10)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '-20px',
          left: '10%',
          width: '80%',
          height: '20px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(6,182,212,0.25) 0%, transparent 70%)',
          filter: 'blur(8px)',
        }}
      />
    </div>
  );
};

export default Planet3D;
