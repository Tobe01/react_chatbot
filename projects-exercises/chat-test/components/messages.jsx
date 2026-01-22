import { ChatStructure } from "./chat-structure";

export function Messages({messages}){
  return(
    <>
     {messages.map((message) => {
        return (
          <>
            <ChatStructure message={message.message} sender={message.sender} key={message.id} />
          </>
        );
      })}
    </>
  )
}