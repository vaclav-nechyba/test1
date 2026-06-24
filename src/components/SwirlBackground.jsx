export default function SwirlBackground({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {/* Main swirl spiral */}
      <svg
        className="swirl-element absolute -right-1/4 -top-1/4 w-[140%] h-[140%] opacity-[0.06]"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="swirl-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#E3B04B" />
          </linearGradient>
        </defs>
        {/* Concentric spiral arcs */}
        {[400, 350, 300, 250, 200, 150, 100, 60].map((r, i) => (
          <circle
            key={i}
            cx="400"
            cy="400"
            r={r}
            stroke="url(#swirl-grad-1)"
            strokeWidth={i % 2 === 0 ? 1.5 : 0.8}
            fill="none"
            opacity={0.4 + i * 0.08}
          />
        ))}
        {/* Radial lines */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i / 16) * Math.PI * 2
          const x1 = 400 + 60 * Math.cos(angle)
          const y1 = 400 + 60 * Math.sin(angle)
          const x2 = 400 + 400 * Math.cos(angle)
          const y2 = 400 + 400 * Math.sin(angle)
          return (
            <line
              key={`line-${i}`}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="url(#swirl-grad-1)"
              strokeWidth="0.5"
              opacity="0.3"
            />
          )
        })}
        {/* Spiral path */}
        <path
          d="M400,400 C400,300 500,200 600,250 C700,300 720,430 650,520 C580,610 430,630 340,570 C250,510 210,370 260,270 C310,170 470,130 570,170"
          stroke="#E3B04B"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M400,400 C380,280 480,160 600,200 C720,240 760,400 700,520 C640,640 480,680 360,630 C240,580 180,430 220,300 C260,170 420,110 550,140"
          stroke="#1D4ED8"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />
      </svg>

      {/* Secondary smaller swirl left */}
      <svg
        className="swirl-element-reverse absolute -left-1/3 bottom-0 w-[80%] h-[80%] opacity-[0.04]"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="swirl-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#E3B04B" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {[240, 200, 160, 120, 80, 50].map((r, i) => (
          <circle
            key={i}
            cx="250"
            cy="250"
            r={r}
            stroke="url(#swirl-grad-2)"
            strokeWidth="1"
            fill="none"
            opacity={0.3 + i * 0.1}
          />
        ))}
        <path
          d="M250,250 C250,180 310,120 380,140 C450,160 470,240 430,310 C390,380 300,400 230,370 C160,340 130,260 160,190"
          stroke="#1D4ED8"
          strokeWidth="1.2"
          fill="none"
          opacity="0.6"
        />
      </svg>

      {/* Radial glow spots */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-royal/10 blur-[100px]" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-gold/5 blur-[80px]" />
    </div>
  )
}
