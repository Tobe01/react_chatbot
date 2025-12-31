import robotProfileImage from '../assets/robot.png';
import userProfileImage from '../assets/user.png';
import './ChatMessage.css';

// Chat Component
function ChatMessage({message, sender}){
  return(
    <div className={ sender === "user" ? "user-container" : "robot-container"}>
      {sender === "robot" && (<img className="chatImage" src={robotProfileImage} />)}
      <div className="messageContainer">
        {message}
      </div>
      {sender === "user" && (<img className="chatImage" src={userProfileImage} />)}
    </div>
  )
}

export default ChatMessage;