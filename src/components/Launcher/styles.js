import styled, { keyframes } from 'styled-components';
import Icon from '../Icon';

export default styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

export const Svg = styled(Icon)`
  fill: #fff;
  position: absolute;
  top: 20px;
  left: 18px;
  &:hover {
    opacity: 0;
  }
`;

export const SvgHover = styled(Icon)`
  fill: #fff;
  position: absolute;
  top: 17px;
  left: 15px;
  display: none;
  height: 30px;
  width: 30px;
  &:hover {
    opacity: 1;
  }
`;

const glow = keyframes`
from {
  box-shadow: 0 0 2px -2px #ff0083;
}
to {
  box-shadow: 0 0 2px 2px #ff0083;
}
`;

export const Button = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 50%;
  background-color: #ff0083;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1;
  animation: ${glow} 0.5s infinite alternate;
  &:hover ${Svg} {
    display: none;
  }
  &:hover ${SvgHover} {
    display: block;
  }
  &:hover {
    cursor: pointer;
  }
`;
