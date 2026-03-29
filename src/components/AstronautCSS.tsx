import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';

const s = (obj: CSSProperties): CSSProperties => obj;

const AstronautCSS = () => (
  <motion.div
    animate={{ y: [0, -14, 0], rotate: [-1.5, 1.5, -1.5] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    style={s({ position: 'relative', width: '140px', height: '160px' })}
  >
    <div
      style={s({
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '72px',
        height: '72px',
        borderRadius: '50%',
        background:
          'radial-gradient(ellipse at 38% 32%, #f0f0f0 0%, #d8d8d8 40%, #b0b0b0 70%, #888 100%)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.5), inset 0 -4px 8px rgba(0,0,0,0.2)',
        zIndex: 10,
      })}
    >
      <div
        style={s({
          position: 'absolute',
          top: '22%',
          left: '15%',
          width: '70%',
          height: '52%',
          borderRadius: '45% 45% 48% 48%',
          background: 'linear-gradient(145deg, #0c1445 0%, #1a237e 40%, #0d47a1 70%, #01579b 100%)',
          boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.6), 0 0 12px rgba(6,182,212,0.3)',
          overflow: 'hidden',
          animation: 'visorFlicker 8s ease-in-out infinite',
        })}
      >
        <div
          style={s({
            position: 'absolute',
            top: '10%',
            left: '12%',
            width: '28%',
            height: '45%',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.22)',
            transform: 'rotate(-20deg)',
          })}
        />
        <div
          style={s({
            position: 'absolute',
            top: '15%',
            left: '55%',
            width: '12%',
            height: '20%',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.10)',
          })}
        />
        <div
          style={s({
            position: 'absolute',
            bottom: '8%',
            left: '10%',
            width: '80%',
            height: '3px',
            background: 'rgba(6,182,212,0.5)',
            borderRadius: '2px',
          })}
        />
      </div>

      <div
        style={s({
          position: 'absolute',
          top: '38%',
          left: '-8%',
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          background: 'radial-gradient(#cccccc, #888888)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
        })}
      />

      <div
        style={s({
          position: 'absolute',
          top: '38%',
          right: '-8%',
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          background: 'radial-gradient(#cccccc, #888888)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
        })}
      />

      <div
        style={s({
          position: 'absolute',
          top: '-12px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '3px',
          height: '12px',
          background: '#aaaaaa',
          borderRadius: '2px',
        })}
      />
      <div
        style={s({
          position: 'absolute',
          top: '-18px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          background: '#06B6D4',
          boxShadow: '0 0 8px rgba(6,182,212,0.9)',
          animation: 'bracketPulse 2s ease-in-out infinite',
        })}
      />
    </div>

    <div
      style={s({
        position: 'absolute',
        top: '66px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '28px',
        height: '10px',
        background: 'linear-gradient(#cccccc, #999999)',
        borderRadius: '3px',
        zIndex: 9,
      })}
    />

    <div
      style={s({
        position: 'absolute',
        top: '74px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '68px',
        height: '54px',
        borderRadius: '12px 12px 8px 8px',
        background: 'radial-gradient(ellipse at 40% 30%, #f5f5f5 0%, #e0e0e0 40%, #c8c8c8 100%)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.4), inset 0 -4px 8px rgba(0,0,0,0.1)',
        zIndex: 8,
      })}
    >
      <div
        style={s({
          position: 'absolute',
          top: '20%',
          left: '18%',
          width: '64%',
          height: '55%',
          borderRadius: '5px',
          background: 'linear-gradient(135deg, #1e3a8a, #0c4a6e)',
          boxShadow: '0 0 10px rgba(6,182,212,0.4), inset 0 0 6px rgba(0,0,0,0.4)',
        })}
      >
        <div
          style={s({
            position: 'absolute',
            inset: '3px',
            borderRadius: '3px',
            background: 'rgba(6,182,212,0.12)',
            animation: 'laptopGlow 3s ease-in-out infinite',
          })}
        />
        {['#00e676', '#ffd740', '#ff5252'].map((c, i) => (
          <div
            key={c}
            style={s({
              position: 'absolute',
              bottom: '18%',
              left: `${22 + i * 28}%`,
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: c,
              boxShadow: `0 0 6px ${c}`,
            })}
          />
        ))}
      </div>

      <div
        style={s({
          position: 'absolute',
          top: '10%',
          left: '-2px',
          width: '4px',
          height: '70%',
          background: 'rgba(0,0,0,0.12)',
          borderRadius: '2px',
        })}
      />
      <div
        style={s({
          position: 'absolute',
          top: '10%',
          right: '-2px',
          width: '4px',
          height: '70%',
          background: 'rgba(0,0,0,0.12)',
          borderRadius: '2px',
        })}
      />
    </div>

    <div
      style={s({
        position: 'absolute',
        top: '76px',
        left: '4px',
        width: '22px',
        height: '46px',
        borderRadius: '12px',
        background: 'linear-gradient(170deg, #e8e8e8, #c0c0c0)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        transform: 'rotate(20deg)',
        transformOrigin: 'top center',
        zIndex: 7,
      })}
    />
    <div
      style={s({
        position: 'absolute',
        top: '112px',
        left: '0px',
        width: '24px',
        height: '20px',
        borderRadius: '50% 50% 40% 40%',
        background: 'radial-gradient(#777777, #444444)',
        boxShadow: '0 2px 6px rgba(0,0,0,0.5)',
        zIndex: 7,
      })}
    />

    <div
      style={s({
        position: 'absolute',
        top: '76px',
        right: '4px',
        width: '22px',
        height: '46px',
        borderRadius: '12px',
        background: 'linear-gradient(170deg, #e8e8e8, #c0c0c0)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        transform: 'rotate(-20deg)',
        transformOrigin: 'top center',
        zIndex: 7,
      })}
    />
    <div
      style={s({
        position: 'absolute',
        top: '112px',
        right: '0px',
        width: '24px',
        height: '20px',
        borderRadius: '50% 50% 40% 40%',
        background: 'radial-gradient(#777777, #444444)',
        boxShadow: '0 2px 6px rgba(0,0,0,0.5)',
        zIndex: 7,
      })}
    />

    <div
      style={s({
        position: 'absolute',
        top: '118px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '56px',
        height: '36px',
        zIndex: 8,
      })}
    >
      <div
        style={s({
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '8px',
          background: '#2a2a2a',
          borderRadius: '0 0 4px 4px',
        })}
      />
      <div
        style={s({
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '30px',
          background: 'linear-gradient(135deg, #0c1444, #1a237e)',
          borderRadius: '3px 3px 0 0',
          overflow: 'hidden',
          boxShadow: '0 0 18px rgba(6,182,212,0.6)',
          animation: 'laptopGlow 2s ease-in-out infinite',
        })}
      >
        <div
          style={s({
            position: 'absolute',
            top: '20%',
            left: '8%',
            width: '60%',
            height: '2px',
            background: '#06B6D4',
            borderRadius: '1px',
            opacity: 0.9,
          })}
        />
        <div
          style={s({
            position: 'absolute',
            top: '42%',
            left: '8%',
            width: '40%',
            height: '2px',
            background: '#A78BFA',
            borderRadius: '1px',
            opacity: 0.8,
          })}
        />
        <div
          style={s({
            position: 'absolute',
            top: '64%',
            left: '8%',
            width: '52%',
            height: '2px',
            background: '#06B6D4',
            borderRadius: '1px',
            opacity: 0.7,
          })}
        />
        <div
          style={s({
            position: 'absolute',
            inset: 0,
            background: 'rgba(6,182,212,0.08)',
          })}
        />
      </div>
      <div
        style={s({
          position: 'absolute',
          top: '-10px',
          left: '-10px',
          right: '-10px',
          bottom: '-5px',
          background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        })}
      />
    </div>

    <div
      style={s({
        position: 'absolute',
        bottom: '0px',
        left: '2px',
        width: '54px',
        height: '22px',
        borderRadius: '50% 20% 20% 50%',
        background: 'linear-gradient(135deg, #e8e8e8, #c8c8c8)',
        boxShadow: '0 3px 8px rgba(0,0,0,0.35)',
        zIndex: 6,
      })}
    />
    <div
      style={s({
        position: 'absolute',
        bottom: '0px',
        right: '2px',
        width: '54px',
        height: '22px',
        borderRadius: '20% 50% 50% 20%',
        background: 'linear-gradient(135deg, #d8d8d8, #b8b8b8)',
        boxShadow: '0 3px 8px rgba(0,0,0,0.35)',
        zIndex: 5,
      })}
    />
    <div
      style={s({
        position: 'absolute',
        bottom: '-6px',
        left: '-4px',
        width: '32px',
        height: '14px',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at 40% 35%, #555, #222)',
        boxShadow: '0 3px 8px rgba(0,0,0,0.5)',
        zIndex: 6,
      })}
    />
    <div
      style={s({
        position: 'absolute',
        bottom: '-6px',
        right: '-4px',
        width: '32px',
        height: '14px',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at 40% 35%, #555, #222)',
        boxShadow: '0 3px 8px rgba(0,0,0,0.5)',
        zIndex: 5,
      })}
    />

    <div
      style={s({
        position: 'absolute',
        bottom: '-10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '120px',
        height: '80px',
        background: 'radial-gradient(ellipse, rgba(6,182,212,0.10) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 4,
      })}
    />
  </motion.div>
);

export default AstronautCSS;
