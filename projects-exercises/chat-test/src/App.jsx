import { useState } from 'react';
import { ChatInput } from '../components/chat-input';
import { ChatMessage } from '../components/chat-message';

function App() {
  const [ messages, setMessages ] = useState([{
  message: 'Hello robot',
  sender: 'user'
}, {
  message: 'Hi user, how can i help you',
  sender: 'robot'
}])

 return(
  <>
   <ChatInput messages={messages} setMessages={setMessages} />

   {messages.map((message) =>{
      return(
        <>
        <ChatMessage 
          message={message.message}
          sender={message.sender}
        />
        </>
      )
    })}
  </>
 )
}

export default App;
