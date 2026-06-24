import { Play, ChevronDown } from 'lucide-react'
import SwirlBackground from './SwirlBackground'

export default function Hero() {
  const scrollToEpisodes = () => {
    document.querySelector('#epizody')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-navy overflow-hidden noise-overlay">
      <SwirlBackground />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <div className="max-w-4xl">

          {/* Episode badge */}
          <div className="flex items-center gap-3 mb-8">
            <span className="gold-box-filled text-xs tracking-[0.2em]">DUO</span>
            <span className="text-muted text-sm font-body tracking-widest uppercase">Podcast</span>
            <span className="w-8 h-px bg-gold/40" />
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-muted text-xs font-body">Nová epizoda každý týden</span>
            </span>
          </div>

          {/* Main headline */}
          <h1 className="section-heading mb-2 leading-[0.9]">
            <span className="text-white">JEDNA </span>
            <span className="text-gradient-gold">OTÁZKA.</span>
          </h1>
          <h1 className="section-heading mb-2 leading-[0.9]">
            <span className="text-white">DVA </span>
            <span className="text-gradient-gold">POHLEDY.</span>
          </h1>
          <h1 className="section-heading mb-8 leading-[0.9] text-white/30">
            HODINA PRAVDY.
          </h1>

          {/* Descriptor */}
          <p className="text-muted text-lg md:text-xl font-body max-w-xl leading-relaxed mb-10">
            Vojta a Vašek berou aktuální témata bez cenzury.
            {' '}<span className="text-white font-semibold">Skeptik</span> vs.{' '}
            <span className="text-gold font-semibold">Nadšenec</span>.
            Hodina rozhovoru, která stojí za to.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={scrollToEpisodes}
              className="btn-primary text-base px-8 py-4 text-lg shadow-[0_0_40px_rgba(227,176,75,0.2)]"
            >
              <Play size={18} className="fill-navy-dark" />
              Poslouchat epizody
            </button>
            <button
              onClick={() => document.querySelector('#o-nas')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline text-base px-8 py-4"
            >
              O DUO Podcastu
            </button>
          </div>

          {/* Host cards */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
            {/* Vojta */}
            <div className="flex-1 bg-navy-dark/80 backdrop-blur-sm border border-white/10 rounded-2xl p-5
                            hover:border-gold/30 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center
                                justify-center font-heading text-sm text-white group-hover:border-gold/40
                                transition-colors">
                  V
                </div>
                <div>
                  <div className="text-white font-body font-semibold text-sm">Vojta</div>
                  <div className="text-muted text-xs font-body tracking-wider">
                    <span className="gold-box text-[10px] px-2 py-0.5">SKEPTIK</span>
                  </div>
                </div>
              </div>
              <p className="text-muted text-xs font-body leading-relaxed">
                „Počkej, to zní moc hezky. V praxi to tak nefunguje."
              </p>
            </div>

            {/* Vašek */}
            <div className="flex-1 bg-navy-dark/80 backdrop-blur-sm border border-gold/20 rounded-2xl p-5
                            hover:border-gold/50 transition-all duration-300 group
                            shadow-[inset_0_0_20px_rgba(227,176,75,0.03)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center
                                justify-center font-heading text-sm text-gold group-hover:border-gold/60
                                transition-colors">
                  V
                </div>
                <div>
                  <div className="text-white font-body font-semibold text-sm">Vašek</div>
                  <div className="text-muted text-xs font-body tracking-wider">
                    <span className="gold-box-filled text-[10px] px-2 py-0.5">NADŠENEC</span>
                  </div>
                </div>
              </div>
              <p className="text-muted text-xs font-body leading-relaxed">
                „Ale je to přesně ta příležitost, na kterou jsme čekali!"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={scrollToEpisodes}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2
                   text-muted/60 hover:text-gold transition-colors duration-300 group"
        aria-label="Scrollovat dolů"
      >
        <span className="text-xs font-body tracking-[0.2em] uppercase">Epizody</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-dark to-transparent z-[5]" />
    </section>
  )
}
