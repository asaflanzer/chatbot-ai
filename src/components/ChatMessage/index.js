import React from 'react';
// styles
import * as S from './styles';
// animejs
import anime from 'animejs';

const ChatMessage = (props) => {
  const { messages } = props;

  anime({
    targets: '.text-message',
    translateY: -10,
    duration: 1000,
    loop: false,
  });

  return (
    <>
      {messages.map((message, i) => {
        if (message !== undefined) {
          if (message.type === 'BOT') {
            return (
              <S.MessageItem className='text-message' key={i}>
                <S.Agent>
                  <S.Avatar />
                </S.Agent>
                <S.Text>{message.text()}</S.Text>
              </S.MessageItem>
            );
          } else {
            return (
              <S.MessageItemUser className='text-message' key={i}>
                <S.User>
                  <S.AvatarUser />
                </S.User>
                <S.TextUser>{message.text}</S.TextUser>
              </S.MessageItemUser>
            );
          }
        } else return true;
      })}
    </>
  );
};

export default ChatMessage;
