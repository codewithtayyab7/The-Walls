import { useEffect, useState } from 'react'
import { getPosts, getPollData, getRankings } from '../../services/communityService'
import PollBar from '../ui/PollBar'
import SectionHeader from '../ui/SectionHeader'
import FadeIn from '../ui/FadeIn'

export default function Community() {
  const [posts, setPosts] = useState([])
  const [poll, setPoll] = useState([])
  const [rankings, setRankings] = useState([])

  useEffect(() => {
    getPosts().then(setPosts)
    getPollData().then(setPoll)
    getRankings().then(setRankings)
  }, [])

  return (
    <section id="community" className="py-24 px-4 md:px-8 bg-bg2">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader eyebrow="Join the Regiment" title="Community" />
        </FadeIn>

        <FadeIn className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          <div className="grid gap-4">
            {posts.map((p) => (
              <div
                key={p.title}
                className="bg-card border border-border p-5 transition-colors cursor-pointer hover:border-gold"
              >
                <div className="text-[0.62rem] tracking-[0.2em] text-gold uppercase mb-2">
                  {p.cat}
                </div>
                <div className="font-serif text-base text-ink mb-2 leading-snug">
                  {p.title}
                </div>
                <div className="text-[0.72rem] text-gray flex gap-4 flex-wrap">
                  <span>{p.author}</span>
                  <span>{p.time}</span>
                  <span>♥ {p.likes}</span>
                  <span>💬 {p.comments}</span>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="bg-card border border-border p-5 mb-4">
              <div className="font-display text-[0.8rem] tracking-[0.15em] text-gold uppercase mb-4 border-b border-border pb-3">
                Fan Poll
              </div>
              <p className="text-[0.78rem] text-gray mb-4">
                Who had the best character arc?
              </p>
              {poll.map((p) => (
                <PollBar key={p.name} name={p.name} pct={p.pct} />
              ))}
            </div>

            <div className="bg-card border border-border p-5">
              <div className="font-display text-[0.8rem] tracking-[0.15em] text-gold uppercase mb-4 border-b border-border pb-3">
                Character Rankings
              </div>
              {rankings.map((r) => (
                <div
                  key={r.rank}
                  className="flex items-center gap-3 py-2 border-b border-border last:border-b-0 text-[0.82rem]"
                >
                  <span className="font-display font-bold text-gold w-5 text-right text-[0.9rem]">
                    {r.rank}
                  </span>
                  <span className="text-ink flex-1">{r.name}</span>
                  <span className="text-gray text-[0.75rem]">{r.score}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
