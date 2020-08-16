import React, { useState, useEffect } from 'react';
import mayaAvatar from './assets/cowboy.png';
import './App.css';
// components
import Chatbot from './components/Chatbot';
// transition
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

function App() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInProp(true);
    }, 1000);
  }, []);
  return (
    <div className='App'>
      <br />
      <img src={mayaAvatar} alt='Maya AI' className='app-logo' />
      <h1 className='app-title'>Forget everything you know about Chatbots</h1>
      <p className='typewriter-text'>Howdy! Y'all in need of a math expert?</p>

      <Transition in={inProp} timeout={500}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <Chatbot />
          </div>
        )}
      </Transition>
    </div>
  );
}

export default App;
