import React, { useState, useEffect, useRef } from 'react';
// components
import Launcher from '../Launcher';
import ChatMessage from '../ChatMessage';
import ChatTyping from '../ChatTyping';
// Cookies
import Cookies from 'universal-cookie';
// delay
import delay from 'delay';
// mathjs
import { create, all } from 'mathjs';
// lodash
import _ from 'lodash';
// styles
import * as S from './styles';

import stepsConst from './steps';

import ScrollToBottom, { useScrollToBottom } from 'react-scroll-to-bottom';

const math = create(all);
const cookies = new Cookies();

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [botTyping, setBotTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = useScrollToBottom();

  let nextMessage;

  useEffect(
    (nextMessage) => {
      const lastStep = _.findLast(messages, (step) => {
        return step;
      });

      const { responseType, waitForUserInput } = lastStep || {};

      !waitForUserInput &&
        setDelayedMessage(
          { ...nextMessage, message: stepsConst[responseType] },
          true
        );
    },
    [messages]
  );

  useEffect(() => {
    scrollToBottom(messagesEndRef);
  }, [messages, scrollToBottom]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleFirstResponse = () => {
    // Initial message from bot
    if (cookies.get('user') === undefined) {
      const greeting = stepsConst['GREETING_1'];
      setDelayedMessage({ ...nextMessage, message: greeting }, true);
    } else {
      const greet_back = stepsConst['GREET_BACK_1'];
      setDelayedMessage({ ...nextMessage, message: greet_back }, true);
    }
  };

  const handleUserMessage = (e) => {
    // user response
    e.preventDefault();
    let userMsg = input;
    setInput('');
    setDelayedMessage(
      {
        message: {
          type: 'USER',
          text: `${userMsg}`,
        },
      },
      false
    );
    // check for bot response
    handleBotResponse(userMsg);
  };

  const handleBotResponse = (userMsg) => {
    // bot response
    const lastStep = _.findLast(messages, (step) => {
      console.log('last step before BOT', step);
      return step;
    });

    const { responseType } = lastStep || {};

    let username;
    if (responseType === 'NAME_RESPONSE') {
      username = userMsg.charAt(0).toUpperCase() + userMsg.slice(1);
      cookies.set('user', username);
      setDelayedMessage(
        {
          ...nextMessage,
          message: {
            type: 'BOT',
            action: 'NAME_RESPONSE',
            text: () => `Nice to meet you ${username}!`,
            responseType: 'GREETING_3',
            waitForUserInput: false,
          },
        },
        true
      );
    } else if (responseType === 'MATH_CALC_1') {
      setDelayedMessage(
        {
          ...nextMessage,
          message: {
            type: 'BOT',
            action: responseType,
            text: () => `${math.evaluate(userMsg)}`,
            responseType: 'MATH_RESPONSE_1',
            waitForUserInput: false,
          },
        },
        true
      );
    } else if (responseType === 'MATH_CALC_2') {
      setDelayedMessage(
        {
          ...nextMessage,
          message: {
            type: 'BOT',
            action: responseType,
            text: () => `${math.evaluate(userMsg)}`,
            responseType: 'RANDOM_RESPONSE',
            waitForUserInput: false,
          },
        },
        true
      );
    } else {
      setDelayedMessage(
        { ...nextMessage, message: stepsConst[responseType] },
        true
      );
    }
  };

  const setDelayedMessage = async ({ message, delayBot = true }) => {
    try {
      const res = await message.type;
      if (res === 'USER') {
        setMessages((messages) => [...messages, message]);
      } else if (await delayBot) {
        await delay(2000);
        setBotTyping(true);
        await delay(2000);
        setBotTyping(false);
        setMessages((messages) => [...messages, message]);
      }
    } catch (error) {
      console.log(error);
    }
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
                {console.log(messages)};
                {messages && (
                  <ChatMessage messages={messages} data-testid='chat-message' />
                )}
                <ChatTyping isTyping={botTyping} />
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
