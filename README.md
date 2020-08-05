# A React Chatbot
Built with `React Hooks` and `styled-components` , The chatbot will solve any mathematical expression

[Demo](https://maya-ai.netlify.app/)

## Project Structure
* Created with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html)
* The main App.js component is located in `src/App.js`
* The sub comoponets are located in `src/components`
    1. Chatbot - The main Chatbot component
    2. ChatMessage - The single message bubble to be presented from the agent or user
    3. ChatTyping - The typing bubble to display when an agent or user is typing
    4. Launcher - The icon launcher to open the chatbot
    * Each folder has it's own stlyes.js for it's component
* I used the following additional packages:
    1. `styled-components` for styling css
    2. `mathjs` for resolving string mathematical expressions
    3. `delay` delay a promise a specified amount of time
    4. `universal-cookie` for saving data in cookies


## Local Installation & Setup
Clone this repository. You will need npm/yarn installed globally on your machine.

All commands run from project root:
1. `npm install`
2. `npm start`
6. Visit http://localhost:3000
7. Have fun!

