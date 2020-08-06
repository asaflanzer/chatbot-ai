import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import Chatbot from '../index';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Chatbot></Chatbot>, div);
});
