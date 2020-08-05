import React from 'react';
// styles
import * as S from './styles';

const ChatTyping = (props) => {
  const { agent, user } = props;
  return (
    <>
      {agent && (
        <S.MessageItem>
          <S.Agent>
            <S.Avatar />
          </S.Agent>
          <S.Text>
            <S.Dot></S.Dot>
            <S.SecondDot></S.SecondDot>
            <S.ThirdDot></S.ThirdDot>
          </S.Text>
        </S.MessageItem>
      )}
      {user !== '' && (
        <S.MessageItemUser>
          <S.User>
            <S.AvatarUser />
          </S.User>
          <S.TextUser>
            <S.Dot></S.Dot>
            <S.SecondDot></S.SecondDot>
            <S.ThirdDot></S.ThirdDot>
          </S.TextUser>
        </S.MessageItemUser>
      )}
    </>
  );
};

export default ChatTyping;
