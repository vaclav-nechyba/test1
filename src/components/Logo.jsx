// DUO Podcast logo — microphone-apostrophe mark + DUO wordmark (white on dark)
export default function Logo({ className = 'h-10 w-auto' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 140 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="DUO Podcast"
    >
      {/* Microphone apostrophe mark */}
      <g>
        {/* Mic body */}
        <rect x="16" y="4" width="12" height="20" rx="6" fill="white" />
        {/* Mic stand arc */}
        <path
          d="M11 20 C11 28 33 28 33 20"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Mic stand pole */}
        <line x1="22" y1="27" x2="22" y2="34" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        {/* Base */}
        <line x1="16" y1="34" x2="28" y2="34" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        {/* Apostrophe dot — golden accent */}
        <circle cx="33" cy="8" r="3.5" fill="#E3B04B" />
      </g>

      {/* DUO wordmark */}
      <g>
        {/* D */}
        <text
          x="44"
          y="34"
          fontFamily="'Anton', 'Impact', sans-serif"
          fontSize="28"
          letterSpacing="1"
          fill="white"
        >
          DUO
        </text>
        {/* Golden box around DUO */}
        <rect
          x="42"
          y="10"
          width="88"
          height="28"
          rx="5"
          stroke="#E3B04B"
          strokeWidth="1.5"
          fill="rgba(227,176,75,0.08)"
        />
      </g>

      {/* Tagline — tiny */}
      <text
        x="44"
        y="46"
        fontFamily="'Inter', system-ui, sans-serif"
        fontSize="7"
        letterSpacing="2.5"
        fill="#C7CEDA"
        opacity="0.7"
      >
        PODCAST
      </text>
    </svg>
  )
}
