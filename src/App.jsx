import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import StatsBar from './components/sections/StatsBar'
import Characters from './components/sections/Characters'
import Titans from './components/sections/Titans'
import Timeline from './components/sections/Timeline'
import WorldMap from './components/sections/WorldMap'
import Rumbling from './components/sections/Rumbling'
import Quiz from './components/sections/Quiz'
import Community from './components/sections/Community'

export default function App() {
  return (
    <div className="bg-bg text-ink font-sans">
      <Navbar />
      <Hero />
      <StatsBar />
      <Characters />
      <Titans />
      <Timeline />
      <WorldMap />
      <Rumbling />
      <Quiz />
      <Community />
      <Footer />
    </div>
  )
}
