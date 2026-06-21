import { TITANS } from '../../data/titans'
import TitanCard from '../ui/TitanCard'
import SectionHeader from '../ui/SectionHeader'
import FadeIn from '../ui/FadeIn'

export default function Titans() {
  return (
    <section id="titans" className="py-24 px-4 md:px-8 bg-bg2">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader eyebrow="The Nine Powers" title="Titan Encyclopedia" />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TITANS.map((t) => (
            <TitanCard key={t.name} titan={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
