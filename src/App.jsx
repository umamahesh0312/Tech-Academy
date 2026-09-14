import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import About from './components/About'
import Services from './components/Services'
import Programs from './components/Programs'
import HowWeWork from './components/HowWeWork'
import WhyChooseUs from './components/WhyChooseUs'
import StudentOutcomes from './components/StudentOutcomes'
import PartnerCTA from './components/PartnerCTA'
import Testimonials from './components/Testimonials'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Services />
        <Programs />
        <HowWeWork />
        <WhyChooseUs />
        <StudentOutcomes />
        <PartnerCTA />
        <Testimonials />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
