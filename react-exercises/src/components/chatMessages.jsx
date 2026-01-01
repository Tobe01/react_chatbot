import { personJpg } from '../assets/person.jpg';

// Chat message Component
function ChatMessages({message, sender}){
  return(
    <div>
        { sender === "user" && ''}
        { sender === "admin" && <img src={personJpg} width="50" />}
        {message}
    </div>
  )
}

export default ChatMessages;