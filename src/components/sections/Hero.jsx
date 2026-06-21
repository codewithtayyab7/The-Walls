export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradients */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(85,107,47,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(139,0,0,0.06) 0%, transparent 50%), linear-gradient(180deg, #0D0D0D 0%, #111 50%, #0D0D0D 100%)',
        }}
      />

      {/* Wall silhouette at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-b from-transparent via-bg2/40 to-bg2">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>

      {/* Ambient fog */}
      <div
        className="absolute inset-0 animate-fog"
        style={{
          background:
            'radial-gradient(ellipse at 50% 80%, rgba(200,169,81,0.03) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-[2] text-center px-4 animate-heroIn">
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
          <a
            href="#characters"
            className="bg-gold text-bg font-display text-[0.75rem] font-bold tracking-[0.15em] px-8 py-3 no-underline inline-block transition-all hover:bg-[#d4b455] hover:-translate-y-0.5"
          >
            Enter The Walls
          </a>
          <a
            href="#timeline"
            className="bg-transparent text-gold font-display text-[0.75rem] font-semibold tracking-[0.15em] px-8 py-3 border border-gold no-underline inline-block transition-all hover:bg-goldsoft"
          >
            Begin The Journey
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray text-[0.7rem] tracking-[0.2em] animate-bounce2">
        Scroll
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  )
}
