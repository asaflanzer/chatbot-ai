import styled from 'styled-components';
import Icon from '../Icon';
import SubmitIcon from '../../assets/submit_icon.png';
import AgentIcon from '../../assets/cowboy.png';
import UserIcon from '../../assets/user_avatar.png';

export default styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

export const Chat = styled.div`
  width: 300px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 999;
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  justify-content: center;
  flex-direction: column;
  font-family: Roboto;
  color: #000;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
  @media (max-width: 768px) {
    width: 100%;
    bottom: 0;
    right: 0;
  }
`;

export const ChatHeader = styled.div`
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  align-items: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  justify-content: space-between;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  padding: 5px 10px 5px 15px;
  font-size: 12px;
  color: #fff;
  background: #ff0083;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const SvgClose = styled(Icon)`
  fill: #fff;
  position: relative;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const Scrollbar = styled.div`
  display: flex;
  height: 275px;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  @media (max-width: 768px) {
    height: 100vh;
  }
`;

export const MessageList = styled.div`
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  justify-content: flex-end;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  flex-direction: column;
  height: 100%;
  width: 300px;
  margin-top: ${(props) =>
    (props.length <= 4
      ? -(props.length * 25) + 'px'
      : props.length <= 7
      ? -(props.length * 12) + 'px'
      : props.length * 18 + 'px') || '0px'};
  padding-top: ${(props) =>
    (props.length <= 4
      ? props.length * 25 + 'px'
      : props.length <= 7
      ? props.length * 12 + 'px'
      : props.length * 18 + 'px') || '40px'};
  background-color: #fff;
`;

//padding-top: ${(props) => props.length * 25 + 'px' || 40};

// margin-top: ${(props) =>
//   (props.length <= 4
//     ? -(props.length * 25) + 'px'
//     : props.length <= 7
//     ? -(props.length * 12) + 'px'
//     : props.length * 18 + 'px') || '0px'};

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
  background-image: url(${AgentIcon});
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

export const ChatFooter = styled.div`
  display: flex;
  border: none;
  border-radius: 0;
  position: relative;
  background-color: #efefef;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 1px solid #eee;
`;

export const Input = styled.input`
  order: 0;
  height: 37px;
  background-color: #fff;
  border: 1px solid #e2e0e0;
  border-radius: 4px;
  margin: 7px;
  box-shadow: none;
  box-sizing: border-box;
  font-size: 16px;
  opacity: 1;
  outline: none;
  padding: 16px 16px 16px 10px;
  width: 100%;
  -webkit-appearance: none;
`;

export const Submit = styled.img`
  order: 1;
  background-image: url(${SubmitIcon});
  background-repeat: no-repeat;
  background-size: 15px 15px;
  background-position: center;
  cursor: pointer;
  opacity: 1;
  outline: none;
  padding: 16px;
  &:hover {
    opacity: 0.7;
  }
`;
