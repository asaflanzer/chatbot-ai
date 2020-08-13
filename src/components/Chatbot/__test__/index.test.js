import React from 'react';
import {
  render,
  cleanup,
  getByTestId,
  fireEvent,
  wait,
} from '@testing-library/react';
import Chatbot from '../index';
import Launcher from '../../Launcher';

afterEach(cleanup);

const getStyledComponentStyles = (StyledComponent, index = 0) => {
  const componentClass = StyledComponent().type.styledComponentId;
  const components = document.getElementsByClassName(componentClass);
  const style = window.getComputedStyle(components[index]);
};

const mockInput = jest.fn();

it('renders chat without crashing', () => {
  const wrapper = render(<Chatbot />);
});

it('renders laucher correctly', () => {
  const wrapper = render(<Launcher />);

  const LauncherClass = Launcher().type.styledComponentId;
  const LauncherRoots = document.getElementsByClassName(LauncherClass);
  const style = window.getComputedStyle(LauncherRoots[0]);
  expect(style.position).toBe('fixed');
  expect(style.bottom).toBe('40px');
  expect(style.right).toBe('40px');
});

it('allow users to open and close chatbot', () => {
  const wrapper = render(
    <>
      <Chatbot />
      <div onClick={openChat}>
        <Launcher />
      </div>
    </>
  );

  const openChat = () => {
    setOpen(true);
  };

  //const div = wrapper.parentElement('div');
  fireEvent.click(Launcher());
  expect(wrapper.state('open')).toBe(true);
  Chatbot().toBeVisible();
});

// it('allow users to send message in the chat', async () => {
//   const inputText = 'Some text here';
//   const inputObj =
//     ({
//       message: {
//         type: 'USER',
//         text: inputText,
//       },
//     },
//     false);
//   mockInput.mockResolvedValueOnce(inputObj);

//   const { findByTestId, getByTestId, getByText } = render(<Chatbot />);

//   const input = findByTestId('input-message');
//   const button = findByTestId('submit-message');

//   expect(input).toBeTruthy();

//   fireEvent.change(input, { target: { value: inputText } });
//   fireEvent.click(button);
//   expect(button).toBeTruthy();

//   expect(mockInput).toHaveBeenCalledTimes(1);
//   expect(mockInput).toHaveBeenCalledWith(inputObj);

//   await wait(() => getByText(inputText));
// });
