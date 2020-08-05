import styled, { keyframes } from 'styled-components';
import MayaIcon from '../../assets/mayas_avatar.png';
import UserIcon from '../../assets/user_avatar.png';

export const MessageItem = styled.div`
  margin: 5px;
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  align-items: flex-end;
  -webkit-align-items: flex-end;
  -webkit-box-align: flex-end;
  -ms-flex-align: flex-end;
  justify-content: flex-start;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
`;

export const MessageItemUser = styled(MessageItem)`
  justify-content: flex-end;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
`;

export const Agent = styled.div`
  display: flex;
  order: 0;
  -webkit-order: 0;
  -ms-flex-order: 0;
`;

export const User = styled.div`
  display: flex;
  order: 1;
  -webkit-order: 1;
  -ms-flex-order: 1;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 2px;
  border-radius: 50%;
  background-image: url(${MayaIcon});
  background-repeat: no-repeat;
  background-size: contain;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;
  transform-origin: bottom right;
  -webkit-transform-origin: bottom right;
  -ms-transform-origin: bottom right;
`;

export const AvatarUser = styled(Avatar)`
  background-image: url(${UserIcon});
`;

export const Text = styled.div`
  display: inline-block;
  font-size: 12px;
  text-align: left;
  max-width: 50%;
  overflow: hidden;
  position: relative;
  padding: 8px 12px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);

  color: #282c34;
  background-color: #efefef;
  border-radius: 18px 18px 18px 0;
  transform-origin: bottom left;
  -webkit-transform-origin: bottom left;
  -ms-transform-origin: bottom left;
`;

export const TextUser = styled(Text)`
  margin-right: 2px;
  color: #fff;
  background-color: #3f434b;
  border-radius: 18px 18px 18px 18px;
  transform-origin: bottom left;
  -webkit-transform-origin: bottom left;
  -ms-transform-origin: bottom left;
`;

const typingDots = keyframes`
  20% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-2px);
  }
`;

export const Dot = styled.span`
  width: 5px;
  height: 5px;
  margin: 0 2px;
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;
  animation: ${typingDots} 1.4s infinite linear;
`;

export const SecondDot = styled(Dot)`
  animation-delay: 0.4s;
`;

export const ThirdDot = styled(Dot)`
  animation-delay: 0.8s;
`;
