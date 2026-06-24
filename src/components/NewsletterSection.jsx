import { useState } from 'react'
import { Mail, ArrowRight, CheckCircle } from 'lucide-react'
import SwirlBackground from './SwirlBackground'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.includes('@') || !email.includes('.')) {
      setError('Zadej prosím platný e-mail.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <section id="kontakt" className="relative bg-navy-dark py-24 md:py-32 overflow-hidden">
      <SwirlBackground />

      {/* Gold corner accent */}
      <div className="absolute top-0 right-0 w-px h-32 bg-gradient-to-b from-gold/40 to-transparent" />
      <div className="absolute top-0 right-0 w-32 h-px bg-gradient-to-l from-gold/40 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <span className="gold-badge mb-6 inline-block">Newsletter</span>
        <h2 className="section-heading mb-4">
          NOVÁ EPIZODA
          <br />
          <span className="text-gradient-gold">DO E-MAILU.</span>
        </h2>
        <p className="text-muted font-body text-lg max-w-lg mx-auto leading-relaxed mb-10">
          Každý týden krátký e-mail — téma nové epizody, klíčové myšlenky
          a přímý odkaz. Žádný spam. Žádná sleva na matrace.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-6">
            <CheckCircle size={48} className="text-gold" />
            <p className="font-heading text-2xl text-white uppercase tracking-wide">
              Výborně. Uvídíme se ve schránce.
            </p>
            <p className="text-muted font-body text-sm">
              Přihlásil/a ses na: <span className="text-white">{email}</span>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <div className="flex-1 relative">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/50" />
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError('') }}
                placeholder="tvůj@email.cz"
                className="w-full bg-navy border border-white/15 text-white font-body text-sm
                           pl-10 pr-4 py-4 rounded-xl outline-none
                           focus:border-gold/50 focus:shadow-[0_0_20px_rgba(227,176,75,0.1)]
                           placeholder:text-muted/40 transition-all duration-300"
                aria-label="E-mailová adresa"
              />
              {error && (
                <p className="absolute -bottom-5 left-0 text-red-400 text-xs font-body">{error}</p>
              )}
            </div>
            <button
              type="submit"
              className="btn-primary justify-center py-4 px-7 flex-shrink-0 shadow-[0_0_30px_rgba(227,176,75,0.15)]"
            >
              Přihlásit se
              <ArrowRight size={16} />
            </button>
          </form>
        )}

        <p className="text-muted/50 text-xs font-body mt-8">
          Odhlásit se můžeš kdykoliv jedním kliknutím. Žádné kecy.
        </p>
      </div>
    </section>
  )
}
