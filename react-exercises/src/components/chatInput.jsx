import sendPng from '../assets/send.png';
// Chat input Component
function ChatInput(){
  return(
    <div>
      <input placeholder="Type a message" size="30" />
    <button><img src={sendPng} width="10" /></button>
    </div>
  )
};

export default ChatInput;
