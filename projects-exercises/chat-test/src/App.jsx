import { useState } from "react";
import { ChatInput } from "../components/chat-input";
import { Messages } from "../components/messages";

function App() {
  const [messages, setMessages] = useState([]);
 
  return (
    <>
      <ChatInput messages={messages} setMessages={setMessages} />
      <Messages messages={messages} setMessages={setMessages} />
    </>
  );
}

export default App;
