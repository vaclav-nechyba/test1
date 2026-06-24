import SwirlBackground from './SwirlBackground'

const hosts = [
  {
    name: 'Vojta',
    role: 'SKEPTIK',
    roleStyle: 'gold-box',
    color: 'white',
    borderClass: 'border-white/15 hover:border-white/30',
    avatarBg: 'bg-white/10 border-white/20 text-white',
    description:
      'Vojta věří, že každá dobrá idea potřebuje pořádný stress test. Klade nepříjemné otázky, hledá mezery v argumentech a nesouhlasí z principu — dokud ho nepřesvědčíš fakty.',
    quote: '„Pokud to nedokážeš vysvětlit jednoduše, nejspíš tomu sám nerozumíš."',
    traits: ['Analytický', 'Přímý', 'Bez iluzí'],
    stat: { label: 'Protiargumenty za epizodu', value: '12+' },
  },
  {
    name: 'Vašek',
    role: 'NADŠENEC',
    roleStyle: 'gold-box-filled',
    color: 'gold',
    borderClass: 'border-gold/20 hover:border-gold/50',
    avatarBg: 'bg-gold/10 border-gold/30 text-gold',
    glowClass: 'shadow-[0_0_60px_rgba(227,176,75,0.06)]',
    description:
      'Vašek vidí potenciál tam, kde ostatní vidí riziko. Přináší kontext, příběhy a energii. Přesvědčí tě, že změna je možná — a pak se Vojta postará o to, aby ses zamyslel.',
    quote: '„Žijeme v nejlepší době v historii lidstva. Tomu věřím každé ráno."',
    traits: ['Zvídavý', 'Energický', 'Optimistický'],
    stat: { label: 'Nová témata za měsíc', value: '24' },
  },
]

export default function AboutSection() {
  return (
    <section id="o-nas" className="relative bg-navy-dark py-24 md:py-32 overflow-hidden">
      <SwirlBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="gold-badge mb-4 inline-block">O nás</span>
          <h2 className="section-heading mb-4">
            DVA LIDI.
            <br />
            <span className="text-gradient-gold">JEDEN PODCAST.</span>
          </h2>
          <p className="text-muted text-lg font-body max-w-2xl mx-auto leading-relaxed">
            DUO Podcast vznikl z jednoduché myšlenky: nejzajímavější rozhovory jsou ty,
            kde dva inteligentní lidé nesouhlasí — a oba mají pravdu.
          </p>
        </div>

        {/* Host cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {hosts.map((host) => (
            <div
              key={host.name}
              className={`card-dark ${host.borderClass} ${host.glowClass || ''} p-8`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center
                                font-heading text-2xl ${host.avatarBg}`}
                  >
                    {host.name[0]}
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl text-white tracking-wide">{host.name}</h3>
                    <div className="mt-1">
                      <span className={host.roleStyle}>{host.role}</span>
                    </div>
                  </div>
                </div>
                {/* Stat */}
                <div className="text-right">
                  <div className="font-heading text-3xl text-gradient-gold">{host.stat.value}</div>
                  <div className="text-muted text-xs font-body leading-tight max-w-[90px] text-right">
                    {host.stat.label}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted font-body leading-relaxed mb-5">{host.description}</p>

              {/* Quote */}
              <blockquote
                className={`border-l-2 pl-4 mb-6 font-body text-sm italic leading-relaxed
                            ${host.color === 'gold' ? 'border-gold text-gold/80' : 'border-white/30 text-white/70'}`}
              >
                {host.quote}
              </blockquote>

              {/* Traits */}
              <div className="flex flex-wrap gap-2">
                {host.traits.map((trait) => (
                  <span
                    key={trait}
                    className="text-xs font-body font-medium text-muted/80 bg-white/5 border border-white/10
                               px-3 py-1 rounded-full"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider quote */}
        <div className="text-center mt-16 md:mt-20 max-w-3xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-10" />
          <p className="font-heading text-2xl md:text-3xl text-white/60 uppercase tracking-wide leading-snug">
            Formát, který věříme:{' '}
            <span className="text-white">
              žádné skryté záměry. Jen dva lidi a{' '}
            </span>
            <span className="text-gradient-gold">dobrá otázka.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
