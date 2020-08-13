import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

it('renders without crashing', () => {
  const wrapper = render(<App />);
});

it('renders the correct content', () => {
  const wrapper = render(<App />);

  const { getByText } = wrapper;
  // test app h1 title
  getByText('Forget everything you know about Chatbots');
  // test app paragraph
  getByText('Meet Maya AI our math problem solver');
});
