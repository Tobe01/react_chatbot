import { useState, useRef, useEffect } from 'react'
import './App.css'

      // Custom hook
      function useAutoScroll(dependencies){
        const chatMessageRef = useRef(null);

        useEffect(() =>{
          const chatMessageElem = chatMessageRef.current;

          { chatMessageElem ? chatMessageElem.scrollTop = chatMessageElem.scrollHeight : ''}
        }, dependencies);

        return chatMessageRef;
      }

      // Input Component
      function ChatInput({ chatMessages, setChatMessage}){

        const [ inputText, setInputText ] = useState('');

        function fetchMessage(event){
          setInputText(event.target.value);
        }


        // fetch chatmessage using the spread operator (...) 
        async function sendMessage(){
          const newMessage = [
            ...chatMessages,
            {
              message: inputText,
              sender: 'user',
              id: crypto.randomUUID()
            }
          ]
       
          setChatMessage(newMessage)
          setInputText('');
          setChatMessage([
            ...newMessage,
            {
            message: <img src="loading-spinner.gif" width="30" />,
              sender: 'robot',
              id: crypto.randomUUID() 
            }
          ])

          const response = await Chatbot.getResponseAsync(inputText);
            setChatMessage([
              ...newMessage,
              {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
              }
            ])
  
        };

        // function to check for the "Enter" key
        function enterKey(event){
          setInputText(event.target.key);

          { event.key === "Enter" ? sendMessage() : '' }
          { event.key === "Escape" ?  setInputText('') : ''}
        }

        const [ content, setContent ] = useState('Move textbox to bottom');


        // function to flip the text content below the input field onclick
        function updateContent(){
          setContent ( content === "Move textbox to bottom" ? "Move textbox to top" : "Move textbox to bottom" );
        }

        return(
          <>
            <div className="input-container">
              <input placeholder="Send a message to Chatbot" size="30"
                className="inputField"  
              
                onChange={fetchMessage}
                value={inputText}
                onKeyDown={enterKey}
              />
              <button
                className="sendButton"

                onClick={sendMessage}
              >Send</button>
            </div>
            <div className="moveText">
              <p
               onClick={updateContent}
              >{content}</p>
            </div>
          </>
        )
      }

      // Chat Component
      function ChatMessage({message, sender}){
        return(
          <div className={ sender === "user" ? "user-container" : "robot-container"}>
           {sender === "robot" && (<img className="chatImage" src="robot.png" />)}
            <div className="messageContainer">
              {message}
            </div>
           {sender === "user" && (<img className="chatImage" src="user.png" />)}
          </div>
        )
      }

      // ChatMessages Component
      function ChatMessages({chatMessages}){
        
        const chatMessageRef = useAutoScroll([chatMessages]);

          return(
           <div className="chat-message-container"
            ref={chatMessageRef}
           >
              {chatMessages.map((chatMessage)=>{
                  return(
                      <ChatMessage 
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        key={chatMessage.id}
                      />
                    )
              })}
            </div>
          );
      }


      function MessagePrompt(){

        const [ prompt, setPrompt ] = useState('Welcome to the chatbot project! Send a message using the textbox below.')

        return(
          <div className="prompt">
            <p>{prompt}</p>
          </div> 
        )
      }

  // Main App Component
      function App(){
        // add chatmessage in use state and save usestate in an array variable
        const [ chatMessages, setChatMessage] = useState([]);

        return(
           <div className="appContainer">
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
