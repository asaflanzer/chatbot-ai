import React from 'react';
import mayaAvatar from './assets/mayas_avatar.png';
import './App.css';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className='App' data-testid='app'>
      <br />
      <img src={mayaAvatar} alt='Maya AI' />
      <h1 className='app-title' data-testid='app-title'>
        Forget everything you know about Chatbots
      </h1>
      <p className='typewriter-text' data-testid='typewriter'>
        Meet Maya AI our math problem solver
      </p>
      <Chatbot data-testid='chatbot-ai' />
    </div>
  );
}

export default App;
