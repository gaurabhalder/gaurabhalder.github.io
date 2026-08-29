import { useCallback, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { CustomCursor } from './components/CustomCursor'
import { CyberBackground } from './components/CyberBackground'
import { Experience } from './components/Experience'
import { Expertise } from './components/Expertise'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Stats } from './components/Stats'
import { TechStack } from './components/TechStack'
import { Testimonials } from './components/Testimonials'

export default function App() {
  const [booting, setBooting] = useState(true)
  const finishBoot = useCallback(() => setBooting(false), [])

  return (
    <>
      {booting && <LoadingScreen onDone={finishBoot} />}
      <CyberBackground />
      <CustomCursor />
      <div className={`relative z-10 ${booting ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Expertise />
          <TechStack />
          <Projects />
          <Experience />
          <Stats />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
