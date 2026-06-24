import SwirlBackground from './SwirlBackground'

// Platform SVG icons as inline components
const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
)

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
  </svg>
)

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const PocketCastsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm4.948 12c0-2.73-2.218-4.948-4.948-4.948S7.052 9.27 7.052 12H4.418C4.418 7.8 7.8 4.418 12 4.418S19.582 7.8 19.582 12h-2.634zm-2.634 0c0-1.275-1.039-2.314-2.314-2.314S9.686 10.725 9.686 12H7.052c0-2.73 2.218-4.948 4.948-4.948S16.948 9.27 16.948 12h-2.634z" />
  </svg>
)

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c2.07 0 3.926.747 5.36 1.98L15.72 8.12A5.46 5.46 0 0 0 12 6.54 5.46 5.46 0 0 0 6.54 12a5.46 5.46 0 0 0 5.46 5.46c2.7 0 4.95-1.845 5.37-4.32H12V10.5h8.88c.12.51.12 1.02.12 1.5 0 4.97-3.33 8.46-9 8.46A8.46 8.46 0 0 1 3.54 12 8.46 8.46 0 0 1 12 3.54z" />
  </svg>
)

const platforms = [
  {
    name: 'Spotify',
    icon: <SpotifyIcon />,
    color: '#1DB954',
    colorClass: 'text-[#1DB954]',
    borderHover: 'hover:border-[#1DB954]/40',
    glowHover: 'hover:shadow-[0_4px_20px_rgba(29,185,84,0.12)]',
    url: '#',
    primary: true,
  },
  {
    name: 'Apple Podcasts',
    icon: <AppleIcon />,
    color: '#FC3C44',
    colorClass: 'text-[#FC3C44]',
    borderHover: 'hover:border-[#FC3C44]/40',
    glowHover: 'hover:shadow-[0_4px_20px_rgba(252,60,68,0.12)]',
    url: '#',
  },
  {
    name: 'YouTube',
    icon: <YoutubeIcon />,
    color: '#FF0000',
    colorClass: 'text-[#FF0000]',
    borderHover: 'hover:border-[#FF0000]/40',
    glowHover: 'hover:shadow-[0_4px_20px_rgba(255,0,0,0.1)]',
    url: '#',
  },
  {
    name: 'Pocket Casts',
    icon: <PocketCastsIcon />,
    color: '#F43E37',
    colorClass: 'text-[#F43E37]',
    borderHover: 'hover:border-[#F43E37]/40',
    glowHover: 'hover:shadow-[0_4px_20px_rgba(244,62,55,0.1)]',
    url: '#',
  },
  {
    name: 'Google Podcasts',
    icon: <GoogleIcon />,
    color: '#4285F4',
    colorClass: 'text-[#4285F4]',
    borderHover: 'hover:border-[#4285F4]/40',
    glowHover: 'hover:shadow-[0_4px_20px_rgba(66,133,244,0.1)]',
    url: '#',
  },
]

export default function PlatformsSection() {
  return (
    <section id="platformy" className="relative bg-navy-dark py-24 md:py-32 overflow-hidden">
      <SwirlBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 md:mb-18">
          <span className="gold-badge mb-4 inline-block">Kde poslouchat</span>
          <h2 className="section-heading mb-4">
            VAŠE{' '}
            <span className="text-gradient-gold">PLATFORMA,</span>
            <br />
            NÁŠ PODCAST.
          </h2>
          <p className="text-muted font-body text-lg max-w-xl mx-auto">
            DUO Podcast najdete na všech hlavních platformách.
            Stačí si vybrat tu svou.
          </p>
        </div>

        {/* Platforms grid */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              className={`platform-badge ${platform.borderHover} ${platform.glowHover}
                          ${platform.primary ? 'border-gold/25 shadow-[0_2px_15px_rgba(227,176,75,0.06)]' : ''}
                          group`}
              aria-label={`Poslouchat na ${platform.name}`}
            >
              <span className={`${platform.colorClass} transition-transform duration-300 group-hover:scale-110`}>
                {platform.icon}
              </span>
              <div>
                <div className="text-white font-body font-semibold text-sm">
                  {platform.name}
                </div>
                {platform.primary && (
                  <div className="text-gold text-[10px] font-body tracking-wider uppercase">
                    Doporučujeme
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* RSS */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl
                          px-6 py-4 hover:border-gold/20 transition-all duration-300 group cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold" fill="currentColor">
                <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-white font-body font-semibold text-sm">RSS feed</div>
              <div className="text-muted text-xs font-body">Pro pokročilé posluchače</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
