export const steps = [
  { agent: "Hi, I'm Maya! Today you're going to help me to ace my game" },
  { agent: "Let's start by telling me your name" },
  { user: 'username' },
  { agent: `Nice to meet you username` },
  {
    agent:
      "Alright, this is how it going to work. List any mathematical expression you can think of - I'll crunch it in no time",
  },
  { user: 'mathExpression' },
  { agent: 'math.evaluate(mathExpression)' },
  { agent: 'This was easy, give me something harder 😃' },
  {
    agent: [
      'Got it! Hit me again',
      'That one was tough! Got any more?',
      'Piece of cake, want to try another one?',
    ],
  },
];

export default steps;
