import styled, { keyframes } from 'styled-components';
import AgentIcon from '../../assets/cowboy.png';

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

export const Agent = styled.div`
  display: flex;
  order: 0;
  -webkit-order: 0;
  -ms-flex-order: 0;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 2px;
  border-radius: 50%;
  border: none;
  border-style: none;
  outline: none;
  background-image: url(${AgentIcon});
  background-repeat: no-repeat;
  background-size: contain;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;
  transform-origin: bottom right;
  -webkit-transform-origin: bottom right;
  -ms-transform-origin: bottom right;
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
