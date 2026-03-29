interface TerrainProps {
  side: 'left' | 'right';
}

const RockyTerrain = ({ side }: TerrainProps) => {
  const isLeft = side === 'left';
  const gradId = `rockGrad${side}`;
  const pinkId = `pinkOrb${side}`;
  const glowId = `glow${side}`;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        [isLeft ? 'left' : 'right']: 0,
        width: '22%',
        height: '75%',
        zIndex: 15,
        pointerEvents: 'none',
        transform: isLeft ? 'none' : 'scaleX(-1)',
      }}
    >
      <svg
        viewBox="0 0 200 500"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <radialGradient id={pinkId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff2d78" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#c0134e" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ff2d78" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={gradId} cx="30%" cy="20%" r="70%">
            <stop offset="0%" stopColor="#1a1030" />
            <stop offset="100%" stopColor="#0a0614" />
          </radialGradient>
          <filter id={glowId}>
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M 20,500 L 40,200 L 55,180 L 70,210 L 80,500 Z"
          fill={`url(#${gradId})`}
          stroke="rgba(88,28,135,0.3)"
          strokeWidth="1"
        />

        <path
          d="M 60,500 L 90,260 L 108,235 L 125,265 L 140,500 Z"
          fill={`url(#${gradId})`}
          stroke="rgba(88,28,135,0.2)"
          strokeWidth="1"
        />

        <path
          d="M 100,500 L 130,320 L 155,295 L 175,325 L 200,500 Z"
          fill={`url(#${gradId})`}
          stroke="rgba(168,85,247,0.15)"
          strokeWidth="1"
        />

        <path
          d="M 40,200 L 55,180 L 70,210"
          fill="none"
          stroke="rgba(168,85,247,0.5)"
          strokeWidth="1.5"
        />
        <path
          d="M 90,260 L 108,235 L 125,265"
          fill="none"
          stroke="rgba(168,85,247,0.4)"
          strokeWidth="1.5"
        />

        <circle cx="75" cy="420" r="28" fill={`url(#${pinkId})`} filter={`url(#${glowId})`} />

        <circle
          cx="140"
          cy="460"
          r="18"
          fill={`url(#${pinkId})`}
          filter={`url(#${glowId})`}
          opacity="0.7"
        />

        <ellipse
          cx="100"
          cy="495"
          rx="100"
          ry="12"
          fill="rgba(88,28,135,0.2)"
          filter={`url(#${glowId})`}
        />
      </svg>
    </div>
  );
};

export default RockyTerrain;
