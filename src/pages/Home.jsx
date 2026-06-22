import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AtmosphereBackground from '../components/ui/AtmosphereBackground'
import Parallax from '../components/motion/Parallax'
import FadeIn from '../components/ui/FadeIn'
import Emblem from '../components/ui/Emblem'
import { CHARACTERS } from '../data/characters'
import { TITANS } from '../data/titans'

const STATS = [
  { num: '9', label: 'Titan Shifters' },
  { num: '139', label: 'Manga Chapters' },
  { num: '2000+', label: 'Years of History' },
  { num: '7', label: 'Military Regiments' },
]

const TEASERS = [
  {
    to: '/characters',
    eyebrow: 'Soldier Registry',
    title: 'Characters',
    desc: 'Profiles, relationships, and combat stats for every soldier who shaped the story.',
    emblem: 'blades',
  },
  {
    to: '/titans',
    eyebrow: 'The Nine Powers',
    title: 'Titans',
    desc: 'Every Titan form, its holders through history, and the abilities that define it.',
    emblem: 'titan',
  },
  {
    to: '/timeline',
    eyebrow: 'History of the Walls',
    title: 'Timeline',
    desc: 'Two thousand years of history, from the first Titan to the final battle.',
    emblem: 'compass',
  },
  {
    to: '/world-map',
    eyebrow: 'Explore the World',
    title: 'World Map',
    desc: 'Walk through Paradis Island and the Marleyan mainland, region by region.',
    emblem: 'shield',
  },
  {
    to: '/rumbling',
    eyebrow: 'The Founding Titan Marches',
    title: 'The Rumbling',
    desc: 'Relive the moment the walls themselves rose up to end the world.',
    emblem: 'eye',
  },
  {
    to: '/quiz',
    eyebrow: 'Test Your Allegiance',
    title: 'Personality Quiz',
    desc: 'Answer five questions and find out which soldier you really are.',
    emblem: 'wings',
  },
]

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <AtmosphereBackground variant="default" showRidge />

        <motion.div
          className="relative z-[2] text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-[0.7rem] tracking-[0.4em] text-gold uppercase mb-6">
            The Complete World of Attack on Titan
          </div>
          <h1 className="font-display text-[clamp(3rem,10vw,7rem)] font-black tracking-[0.05em] leading-[0.95] mb-4 bg-gradient-to-b from-ink to-ink/70 bg-clip-text text-transparent">
            Dedicate
            <br />
            Your Heart
          </h1>
          <p className="text-[clamp(0.85rem,2vw,1rem)] text-gray tracking-[0.08em] mb-10 leading-loose">
            Explore the complete lore, characters, and history
            <br />
            of the world beyond the walls.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/characters"
              data-cursor-hover
              className="bg-gold text-bg font-display text-[0.75rem] font-bold tracking-[0.15em] px-8 py-3 no-underline inline-block transition-all hover:bg-[#d4b455] hover:-translate-y-0.5"
            >
              Enter The Walls
            </Link>
            <Link
              to="/timeline"
              data-cursor-hover
              className="bg-transparent text-gold font-display text-[0.75rem] font-semibold tracking-[0.15em] px-8 py-3 border border-gold no-underline inline-block transition-all hover:bg-goldsoft"
            >
              Begin The Journey
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray text-[0.7rem] tracking-[0.2em]"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
          <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </section>

      {/* STATS */}
      <div className="px-4 py-8 bg-bg2 border-y border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.08} className="text-center p-4 border-border border-r last:border-r-0 [&:nth-child(odd)]:md:border-r">
              <div className="font-display text-3xl font-bold text-gold">{s.num}</div>
              <div className="text-[0.7rem] tracking-[0.2em] text-gray uppercase mt-1">
                {s.label}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* TEASER GRID */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="block text-[0.65rem] tracking-[0.4em] text-gold uppercase mb-3">
              Begin Exploring
            </span>
            <h2 className="font-display text-[clamp(1.8rem,5vw,3rem)] font-bold text-ink">
              Everything Beyond the Walls
            </h2>
            <div className="w-[60px] h-[2px] bg-gold mx-auto mt-4" />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEASERS.map((t, i) => (
              <FadeIn key={t.to} delay={i * 0.06}>
                <Link
                  to={t.to}
                  data-cursor-hover
                  className="group block bg-card border border-border p-8 h-full transition-colors hover:border-gold relative overflow-hidden"
                >
                  <Emblem
                    type={t.emblem}
                    size={48}
                    className="text-gold/70 mb-5 transition-transform group-hover:scale-110 group-hover:text-gold"
                  />
                  <span className="block text-[0.62rem] tracking-[0.3em] text-gold uppercase mb-2">
                    {t.eyebrow}
                  </span>
                  <h3 className="font-display text-xl font-bold text-ink mb-3">{t.title}</h3>
                  <p className="text-[0.82rem] text-gray leading-relaxed">{t.desc}</p>
                  <span className="inline-flex items-center gap-1 text-[0.72rem] text-gold mt-5 tracking-wide">
                    Explore <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CHARACTERS STRIP */}
      <section className="py-24 px-4 md:px-8 bg-bg2 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="block text-[0.65rem] tracking-[0.4em] text-gold uppercase mb-3">
              Soldier Registry
            </span>
            <h2 className="font-display text-[clamp(1.8rem,5vw,3rem)] font-bold text-ink">
              Featured Soldiers
            </h2>
            <div className="w-[60px] h-[2px] bg-gold mx-auto mt-4" />
          </FadeIn>

          <Parallax strength={-20}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {CHARACTERS.slice(0, 4).map((c) => (
                <Link
                  key={c.id}
                  to={`/characters/${c.slug}`}
                  data-cursor-hover
                  className="group bg-card border border-border p-5 text-center transition-colors hover:border-gold"
                >
                  <div className="text-4xl mb-3 transition-transform group-hover:scale-110">
                    {c.emoji}
                  </div>
                  <div className="font-display text-sm font-semibold text-ink">{c.name}</div>
                  <div className="text-[0.68rem] text-gray mt-1">{c.role}</div>
                </Link>
              ))}
            </div>
          </Parallax>

          <FadeIn className="text-center mt-10">
            <Link
              to="/characters"
              className="text-gold text-[0.78rem] tracking-[0.15em] uppercase border-b border-gold/40 hover:border-gold transition-colors"
            >
              View Full Registry →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* TITAN PREVIEW */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <span className="block text-[0.65rem] tracking-[0.4em] text-gold uppercase mb-3">
              The Nine Powers
            </span>
            <h2 className="font-display text-3xl font-bold text-ink mb-5">
              Nine Titans. One Tragic History.
            </h2>
            <p className="text-gray leading-loose mb-6 text-[0.9rem]">
              Each of the Nine Titans carries a power, a curse, and a chain of
              inheritors stretching back two thousand years. Discover their
              abilities, their holders, and the price each one paid.
            </p>
            <Link
              to="/titans"
              data-cursor-hover
              className="inline-block bg-transparent text-gold font-display text-[0.75rem] font-semibold tracking-[0.15em] px-8 py-3 border border-gold transition-all hover:bg-goldsoft"
            >
              View Titan Encyclopedia
            </Link>
          </FadeIn>

          <FadeIn delay={0.1} className="grid grid-cols-3 gap-3">
            {TITANS.slice(0, 6).map((t) => (
              <Link
                key={t.slug}
                to={`/titans/${t.slug}`}
                data-cursor-hover
                className="group aspect-square bg-card border border-border flex items-center justify-center text-3xl transition-colors hover:border-blood"
              >
                <span className="transition-transform group-hover:scale-125">{t.emoji}</span>
              </Link>
            ))}
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
