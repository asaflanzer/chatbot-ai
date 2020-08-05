import React from 'react';
import mayaAvatar from './assets/mayas_avatar.png';
import './App.css';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className='App'>
      <br />
      <img src={mayaAvatar} alt='Maya AI' />
      <h1 className='app-title'>Forget everything you know about Chatbots</h1>
      <p className='typewriter-text'>Meet Maya AI our math problem solver</p>
      <Chatbot />
    </div>
  );
}

export default App;
