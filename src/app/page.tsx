import Footer from './components/Footer'
import FAQ from './components/FAQ'
import Hero from './components/Hero'
import Features from './components/Features'
import HowToInstall from './components/HowToInstall'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowToInstall />
 {/*      <Testimonials /> */}
      <FAQ />
      <Footer />
    </>
  )
}