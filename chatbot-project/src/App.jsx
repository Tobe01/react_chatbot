import { useState } from 'react'
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import './components/ChatInput.css';
import './App.css';
import './index.css';

// function MessagePrompt(){

//   const [ prompt, setPrompt ] = useState('Welcome to the chatbot project! Send a message using the textbox below.')

//   return(
//     <div className="prompt">
//       <p>{prompt}</p>
//     </div> 
//   )
// }

// Main App Component
function App(){
  // add chatmessage in use state and save usestate in an array variable
  const [ chatMessages, setChatMessage] = useState([]);

  return(
      <div className="appContainer">
      {/* <MessagePrompt /> */}
      <ChatMessages 
        chatMessages={chatMessages}
      />
      <ChatInput 
          chatMessages={chatMessages}
          setChatMessage={setChatMessage}
      />
      </div>
    );
}

export default App
