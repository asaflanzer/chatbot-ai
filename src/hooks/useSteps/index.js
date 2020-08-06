import { useState, useEffect } from 'react';
// delay
import delay from 'delay';
// Cookies
import Cookies from 'universal-cookie';
// mathjs
import { create, all } from 'mathjs';

const math = create(all);
const cookies = new Cookies();

const useSteps = () => {
  const [current, setCurrent] = useState(0);
  const [messages, setMessages] = useState([]);
  const [agentTyping, setAgentTyping] = useState(false);
  const [username, setUserName] = useState('');
  const [mathExpression, setMathExpression] = useState('');

  const steps = [
    { agent: "Hi, I'm Maya! Today you're going to help me to ace my game" },
    { agent: "Let's start by telling me your name" },
    { user: username },
    { agent: `Nice to meet you ${username}!` },
    {
      agent:
        "Alright, this is how it going to work. List any mathematical expression you can think of - I'll crunch it in no time",
    },
    { user: mathExpression },
    { agent: math.evaluate(mathExpression) },
    { agent: 'This was easy, give me something harder 😃' },
    {
      agent: [
        'Got it! Hit me again',
        'That one was tough! Got any more?',
        'Piece of cake, want to try another one?',
      ],
    },
  ];

  useEffect(() => {
    (async () => {
      console.log('current: ', current);

      if (current === 3 && username !== '') {
        cookies.set('user', username, { path: '/' });
        await delay(1500);
        setAgentTyping(true);
        await delay(2000);
        setAgentTyping(false);
        setMessages((messages) => [...messages, steps[current]]);
        setCurrent(current + 1);
      }
      if (current === 4) {
        await delay(1500);
        setAgentTyping(true);
        await delay(3000);
        setAgentTyping(false);
        setMessages((messages) => [...messages, steps[current]]);
        setCurrent(current + 1);
      }
      if (current === 6) {
        await delay(1500);
        setAgentTyping(true);
        await delay(3000);
        setAgentTyping(false);
        // setMessages((messages) => [
        //   ...messages,
        //   { agent: math.evaluate(mathExpression) },
        // ]);
        setMessages((messages) => [...messages, steps[current]]);
        setCurrent(current + 1);
      }
      if (current === 7) {
        await delay(1500);
        setAgentTyping(true);
        await delay(3000);
        setAgentTyping(false);
        setMessages((messages) => [...messages, steps[current]]);
        setCurrent(current + 1);
      }
    })();
    // eslint-disable-next-line
  }, [current]);

  return {
    steps,
    messages,
    setMessages,
    current,
    setCurrent,
    agentTyping,
    setAgentTyping,
    username,
    setUserName,
    mathExpression,
    setMathExpression,
  };
};

export default useSteps;
