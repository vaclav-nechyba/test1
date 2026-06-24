import { useState } from 'react'
import { Play, Clock, Calendar, ChevronRight } from 'lucide-react'
import SwirlBackground from './SwirlBackground'

const episodes = [
  {
    number: '042',
    title: 'AI vezme práci milionům. Co budeme dělat?',
    description:
      'Vašek věří, že AI otevře nové příležitosti, o kterých dnes nemáme tušení. Vojta má jiné čísla — a horší zprávy. Hodina argumentů, která nestárne.',
    duration: '1:04:32',
    date: '17. 6. 2025',
    tags: ['Technologie', 'Budoucnost práce'],
    vojtaStance: 'Masová nezaměstnanost je reálná hrozba.',
    vasekStance: 'Každá revoluce vytvořila víc míst než zničila.',
    hot: true,
  },
  {
    number: '041',
    title: 'Vlastní bydlení je sen nebo past?',
    description:
      'Hypotéka na 30 let nebo svoboda nájemníka? Vojta spočítal, kolik tě vlastní byt doopravdy stojí. Vašek mu to vyvrátil — a pak zase ne.',
    duration: '58:14',
    date: '10. 6. 2025',
    tags: ['Finance', 'Nemovitosti', 'Lifestyle'],
    vojtaStance: 'Byt jako investice je mýtus střední třídy.',
    vasekStance: 'Bezpečí domova má hodnotu, která se nedá změřit.',
    hot: false,
  },
  {
    number: '040',
    title: 'Sociální sítě a mentální zdraví: kde je hranice?',
    description:
      'Scroll, lajky, FOMO. Vašek sám bojuje se závislostí a říká to nahlas. Vojta má data a jsou brutální. Jeden z nejpoctivějších dílů, co jsme natočili.',
    duration: '1:12:08',
    date: '3. 6. 2025',
    tags: ['Psychologie', 'Technologie'],
    vojtaStance: 'Platformy jsou designovány jako sloty.',
    vasekStance: 'Zodpovědnost je na nás, ne na firmách.',
    hot: false,
  },
  {
    number: '039',
    title: 'Česká politika: proč nás nudí a co s tím',
    description:
      'Nezajímáš se o politiku? Vojta říká, že tím dáváš hlas ostatním. Vašek to vidí jinak — nuda je racionální reakce na systém. Tohle jsme museli říct.',
    duration: '1:08:55',
    date: '27. 5. 2025',
    tags: ['Politika', 'Společnost'],
    vojtaStance: 'Apatie je luxus, který si nemůžeme dovolit.',
    vasekStance: 'Systém záměrně navozuje apatii. Je to feature, ne bug.',
    hot: false,
  },
]

function EpisodeCard({ ep, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article
      className={`card-dark group transition-all duration-300 ${
        ep.hot ? 'border-gold/30 shadow-[0_4px_30px_rgba(227,176,75,0.08)]' : ''
      }`}
    >
      <div className="p-6 md:p-7">
        {/* Top row */}
        <div className="flex items-start gap-5">
          {/* Play button */}
          <button
            className="play-btn mt-1 flex-shrink-0"
            aria-label={`Přehrát epizodu ${ep.number}: ${ep.title}`}
          >
            <Play size={16} className="fill-navy-dark text-navy-dark ml-0.5" />
          </button>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Number + hot badge */}
            <div className="flex items-center gap-3 mb-2">
              <span className="font-heading text-4xl text-white/15 leading-none">{ep.number}</span>
              {ep.hot && (
                <span className="gold-badge animate-pulse-glow">Nová epizoda</span>
              )}
            </div>

            {/* Title */}
            <h3 className="font-heading text-xl md:text-2xl text-white uppercase tracking-wide leading-tight mb-2
                           group-hover:text-gradient-gold transition-all duration-300">
              {ep.title}
            </h3>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3">
              <span className="flex items-center gap-1.5 text-muted text-xs font-body">
                <Clock size={12} />
                {ep.duration}
              </span>
              <span className="flex items-center gap-1.5 text-muted text-xs font-body">
                <Calendar size={12} />
                {ep.date}
              </span>
              {ep.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-body text-muted/70 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/8"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-muted text-sm font-body leading-relaxed mb-4">{ep.description}</p>

            {/* Expand stances */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1.5 text-gold/70 hover:text-gold text-xs font-body font-medium
                         transition-colors duration-200"
            >
              <ChevronRight
                size={14}
                className={`transition-transform duration-300 ${expanded ? 'rotate-90' : ''}`}
              />
              {expanded ? 'Skrýt postoje' : 'Postoje moderátorů'}
            </button>

            {/* Stances expanded */}
            <div
              className={`overflow-hidden transition-all duration-400 ${
                expanded ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <div className="text-white/40 text-[10px] font-body tracking-[0.15em] uppercase mb-1.5">
                    Vojta · Skeptik
                  </div>
                  <p className="text-white/80 text-xs font-body italic">„{ep.vojtaStance}"</p>
                </div>
                <div className="bg-gold/5 border border-gold/15 rounded-xl p-3">
                  <div className="text-gold/60 text-[10px] font-body tracking-[0.15em] uppercase mb-1.5">
                    Vašek · Nadšenec
                  </div>
                  <p className="text-gold/80 text-xs font-body italic">„{ep.vasekStance}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function EpisodesSection() {
  return (
    <section id="epizody" className="relative bg-navy py-24 md:py-32 overflow-hidden">
      <SwirlBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="gold-badge mb-4 inline-block">Epizody</span>
            <h2 className="section-heading">
              POSLEDNÍ
              <br />
              <span className="text-gradient-gold">DÍLY</span>
            </h2>
          </div>
          <p className="text-muted font-body max-w-sm leading-relaxed md:text-right">
            Vyberte si téma, které vás zajímá.
            Každý díl stojí sám o sobě — žádný backstory potřeba.
          </p>
        </div>

        {/* Episode list */}
        <div className="flex flex-col gap-4 mb-10">
          {episodes.map((ep, i) => (
            <EpisodeCard key={ep.number} ep={ep} index={i} />
          ))}
        </div>

        {/* All episodes CTA */}
        <div className="text-center">
          <button className="btn-outline px-8 py-3.5">
            Všechny epizody
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
