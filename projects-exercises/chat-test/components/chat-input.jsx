import { useState } from "react";
import { Chatbot } from 'supersimpledev';

export function ChatInput({ messages, setMessages }) {
  const [inputData, setInputData] = useState();

  function getData(event) {
    setInputData(event.target.value);
  }

  async function renderData() {
    const userMessage = [
      ...messages,
      {
        message: inputData,
        sender: "user",
        id: crypto.randomUUID()
      },
    ];

    setMessages(userMessage);

    const response = await Chatbot.getResponseAsync(inputData);
    setMessages([
      ...userMessage,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID()
      },
    ])

    setInputData("");
  }

  return (
    <>
      <input
        value={inputData}
        onChange={getData}
        placeholder="type message"
        size="25"
      />
      <button onClick={renderData}>Send</button>
    </>
  );
}
