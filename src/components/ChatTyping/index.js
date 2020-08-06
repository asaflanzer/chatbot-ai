import React from 'react';
// styles
import * as S from './styles';
// animejs
// import anime from 'animejs';

const ChatTyping = (props) => {
  const { isTyping } = props;

  return (
    <>
      {isTyping && (
        <S.MessageItem className='text-message typing'>
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
    </>
  );
};

export default ChatTyping;
