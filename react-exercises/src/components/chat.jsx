import ChatMessages from './chatMessages';
import ChatInput from './chatInput';

// Chat Component
function Chat(){
  const chatMessages = [
    { message: 'hello Chatbot', sender: 'user', id: '1' }, 
    { message: 'Hello! How can i help you?', sender: 'admin', id: '2'}, 
    { message: 'what is today?', sender: 'user', id: '3'}, 
    { message: 'Today is December 11', sender: 'admin', id: '4'}
  ];
  
  return(
  <>
    {chatMessages.map((ChatMessage) =>{
        return(
          <>
            <ChatMessages 
              message={ChatMessage.message}
              sender={ChatMessage.sender}
              key={ChatMessage.id}
            />
          </>
        )
      })}
    <ChatInput />
    </>
  )
};

export default Chat;
