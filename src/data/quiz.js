// NOTE: restructured from the original site. There, answer-to-character scoring
// lived in a separate array matched by question index + option index — fragile
// if questions are reordered. Here each option carries its own `points` target,
// so the data is self-contained and safe to reorder, add to, or fetch from an API.

export const QUIZ_QUESTIONS = [
  {
    q: 'A mission puts your comrades at risk for an uncertain outcome. What do you do?',
    opts: [
      { text: 'Lead from the front regardless', points: 'Eren Yeager' },
      { text: 'Calculate odds carefully first', points: 'Armin Arlert' },
      { text: "Follow your commander's orders", points: 'Levi Ackerman' },
      { text: 'Do whatever protects the most people', points: 'Erwin Smith' },
    ],
  },
  {
    q: 'What drives you most?',
    opts: [
      { text: 'Freedom above everything', points: 'Eren Yeager' },
      { text: 'Protecting those I love', points: 'Mikasa Ackerman' },
      { text: 'Uncovering the truth', points: 'Armin Arlert' },
      { text: 'Duty to my regiment', points: 'Erwin Smith' },
    ],
  },
  {
    q: 'Your enemy has a point. How do you respond?',
    opts: [
      { text: 'I refuse to acknowledge it', points: 'Levi Ackerman' },
      { text: 'I listen but hold my conviction', points: 'Erwin Smith' },
      { text: 'I research before deciding', points: 'Armin Arlert' },
      { text: 'I adapt my strategy', points: 'Hange Zoë' },
    ],
  },
  {
    q: 'In a crisis, you are most likely to:',
    opts: [
      { text: 'Charge headfirst', points: 'Eren Yeager' },
      { text: 'Formulate a plan', points: 'Armin Arlert' },
      { text: 'Ask questions first', points: 'Hange Zoë' },
      { text: 'Protect the weakest link', points: 'Mikasa Ackerman' },
    ],
  },
  {
    q: 'How do you feel about sacrifice?',
    opts: [
      { text: 'Necessary for freedom', points: 'Eren Yeager' },
      { text: 'Tragic but sometimes needed', points: 'Erwin Smith' },
      { text: 'Avoidable with the right plan', points: 'Armin Arlert' },
      { text: 'The ultimate act of love', points: 'Mikasa Ackerman' },
    ],
  },
]

export const QUIZ_RESULTS = [
  { char: 'Eren Yeager', icon: '🔥', desc: 'You are driven by an unbreakable desire for freedom. You will sacrifice everything — and everyone — for what you believe is right. Your conviction is both your greatest strength and your greatest danger.' },
  { char: 'Levi Ackerman', icon: '⚔', desc: "Cool-headed and ruthlessly efficient. You don't waste words or effort. You make hard decisions without hesitation and carry the weight of those choices alone, in silence." },
  { char: 'Armin Arlert', icon: '📖', desc: 'Your weapon is your mind. You see possibilities others miss and devise plans in the heat of battle. Your empathy for all sides makes you uniquely qualified to end conflicts, not just win them.' },
  { char: 'Mikasa Ackerman', icon: '🗡', desc: 'Loyalty defines you. You possess extraordinary ability and would lay down your life for the people who matter to you without a second thought.' },
  { char: 'Erwin Smith', icon: '🎖', desc: "You are a visionary. You see the larger picture and are willing to bear the burden of terrible decisions for the sake of humanity's future. People follow you because you give them a reason to." },
  { char: 'Hange Zoë', icon: '🔬', desc: 'Boundlessly curious and brilliant. You see wonder where others see danger, and your unconventional methods often yield the breakthroughs no one else could achieve.' },
]
