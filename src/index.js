import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// fonts
import './fonts/Merriweather-Black.ttf';
import './fonts/Merriweather-BlackItalic.ttf';
import './fonts/Merriweather-Bold.ttf';
import './fonts/Merriweather-BoldItalic.ttf';
import './fonts/Merriweather-Italic.ttf';
import './fonts/Merriweather-Light.ttf';
import './fonts/Merriweather-LightItalic.ttf';
import './fonts/Merriweather-Regular.ttf';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
