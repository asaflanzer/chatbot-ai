import React, { useState, useEffect, useRef } from 'react';
// components
import Launcher from '../Launcher';
import ChatMessage from '../ChatMessage';
import ChatTyping from '../ChatTyping';
// hooks
import useSteps from '../../hooks/useSteps';
// Cookies
import Cookies from 'universal-cookie';
// delay
import delay from 'delay';
// mathjs
import { create, all } from 'mathjs';
// styles
import * as S from './styles';

import ScrollToBottom, {
  useScrollToBottom,
  useSticky,
} from 'react-scroll-to-bottom';

const math = create(all);
const cookies = new Cookies();

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const {
    steps,
    messages,
    setMessages,
    current,
    setCurrent,
    agentTyping,
    setAgentTyping,
    setUserName,
    setMathExpression,
  } = useSteps();

  const messagesEndRef = useRef(null);
  const scrollToBottom = useScrollToBottom();

  useEffect(() => {
    scrollToBottom(messagesEndRef);
  }, [messages, input, agentTyping]);

  const handleFirstResponse = async () => {
    if (cookies.get('user') !== undefined) {
      await delay(1500);
      setAgentTyping(true);
      await delay(1500);
      setAgentTyping(false);
      setMessages((messages) => [
        ...messages,
        {
          agent: `Nice to see you again ${cookies.get(
            'user'
          )}. Let's pick this up from where we left off`,
        },
      ]);
      await delay(2000);
      setAgentTyping(true);
      await delay(2000);
      setAgentTyping(false);
      setMessages((messages) => [
        ...messages,
        {
          agent:
            "List any mathematical expression you can think of - I'll crunch it in no time",
        },
      ]);
      setUserName(cookies.get('user'));
      setCurrent(8);
    } else if (current === 0) {
      await delay(1500);
      setAgentTyping(true);
      await delay(2000);
      setAgentTyping(false);
      setMessages((messages) => [...messages, steps[0]]);
      setCurrent(1);
      await delay(2000);
      setAgentTyping(true);
      await delay(2000);
      setAgentTyping(false);
      setMessages((messages) => [...messages, steps[1]]);
      setCurrent(2);
    }
  };

  const handleUserMessage = async (e) => {
    e.preventDefault();
    let userMsg = input;
    setInput('');
    // Set user message
    setMessages((messages) => [...messages, { user: userMsg }]);
    // Wait for username question
    if (current === 2) {
      setUserName(userMsg.charAt(0).toUpperCase() + userMsg.slice(1));
      setCurrent(current + 1);
      // Wait for math expression question
    } else if (current === 5) {
      setMathExpression(userMsg);
      setCurrent(current + 1);
    } else if (current > 7) {
      // Keep calculating the last user userMsg
      await delay(1500);
      setAgentTyping(true);
      await delay(1500);
      setAgentTyping(false);
      setMessages((messages) => [
        ...messages,
        { agent: math.evaluate(userMsg) },
      ]);
      setAgentTyping(true);
      await delay(1500);
      setAgentTyping(false);
      setMessages((messages) => [
        ...messages,
        { agent: steps[8].agent[math.round(math.random(0, 2))] },
      ]);
      setCurrent(current + 1);
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const openChat = () => {
    setOpen(true);
    handleFirstResponse();
  };
  return (
    <>
      {open ? (
        <S.Chat>
          <S.ChatHeader>
            <h2>Let's Talk</h2>
            <S.SvgClose
              onClick={(e) => setOpen(false)}
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 0 24 24'
              width='24'
            >
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
            </S.SvgClose>
          </S.ChatHeader>

          <S.Scrollbar>
            <ScrollToBottom>
              <S.MessageList length={messages.length}>
                {messages && <ChatMessage messages={messages} />}
                {(agentTyping || input !== '') && (
                  <ChatTyping agent={agentTyping} user={input} />
                )}
              </S.MessageList>
              <div ref={messagesEndRef} />
            </ScrollToBottom>
          </S.Scrollbar>

          <form onSubmit={handleUserMessage}>
            <S.ChatFooter>
              <S.Input value={input} onChange={handleInput} />
              <S.Submit onClick={handleUserMessage} />
            </S.ChatFooter>
          </form>
        </S.Chat>
      ) : (
        <div onClick={openChat}>
          <Launcher />
        </div>
      )}
    </>
  );
};

export default Chatbot;
