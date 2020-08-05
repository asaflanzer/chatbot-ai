import React from 'react';
// styles
import * as S from './styles';

const ChatMessage = (props) => {
  const messages = props.messages;
  return (
    <>
      {messages.map((message, i) => {
        if (message.agent) {
          return (
            <S.MessageItem key={i}>
              <S.Agent>
                <S.Avatar />
              </S.Agent>
              <S.Text>{message.agent}</S.Text>
            </S.MessageItem>
          );
        } else {
          return (
            <S.MessageItemUser key={i}>
              <S.User>
                <S.AvatarUser />
              </S.User>
              <S.TextUser>{message.user}</S.TextUser>
            </S.MessageItemUser>
          );
        }
      })}
    </>
  );
};

export default ChatMessage;
