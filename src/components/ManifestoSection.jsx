import SwirlBackground from './SwirlBackground'

export default function ManifestoSection() {
  return (
    <section className="relative bg-navy py-24 md:py-32 overflow-hidden">
      <SwirlBackground />

      {/* Strong horizontal lines like film leader */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Large blurred glow center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-gold/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Decorative element */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-gold/40" />
          <span className="gold-box-filled tracking-[0.3em] text-xs">MANIFESTO</span>
          <div className="h-px w-16 bg-gold/40" />
        </div>

        {/* Main quote */}
        <blockquote className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase
                               text-white leading-[1.1] tracking-wide mb-8">
          „KAŽDÉ DOBRÉ{' '}
          <span className="text-gradient-gold">ROZHODNUTÍ</span>
          <br className="hidden sm:block" />
          {' '}ZAČÍNÁ{' '}
          <span className="text-white/40">NEPŘÍJEMNOU</span>
          <br className="hidden sm:block" />
          {' '}
          <span className="text-gradient-gold">OTÁZKOU."</span>
        </blockquote>

        <p className="text-muted font-body text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Nesnažíme se mít pravdu. Snažíme se ji najít.
          Proto Vojta a Vašek nesouhlasí tak často —
          ne proto, že by se nevzájemně respektovali,
          ale proto, že víc perspektiv vede k lepším závěrům.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: '42+', label: 'Epizod' },
            { value: '60min', label: 'Průměrná délka' },
            { value: '1×', label: 'Týdně nová epizoda' },
            { value: '100%', label: 'Bez reklam v obsahu' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl md:text-4xl text-gradient-gold mb-1">
                {stat.value}
              </div>
              <div className="text-muted text-xs font-body tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
