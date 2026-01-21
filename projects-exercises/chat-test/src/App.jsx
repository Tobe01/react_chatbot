import { useState } from 'react';
import { Input } from "../components/input";
import { ChatMessage } from "../components/chat-message";

function App() {

  const [ messages, setMessages ] = useState([
    {
      message: "",
      id: crypto.randomUUID(),
    },
  ]);

  return (
    <>
      <Input messages={messages} setMessages={setMessages} />

      <div>
        {messages.map((message) => {
          return (
            <>
              <ChatMessage message={message.message} key={message.id} />
              {/* <ChatMessage message={message.message} key={message.id2} sender="robot" /> */}
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
