import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import EpisodesSection from './components/EpisodesSection'
import ManifestoSection from './components/ManifestoSection'
import PlatformsSection from './components/PlatformsSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-navy font-body">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <EpisodesSection />
        <ManifestoSection />
        <PlatformsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
