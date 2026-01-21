import './chat-message.css';

export function ChatMessage({message, sender}) {
  return (
    <div className="chatMessage">
     {sender === "robot" && <img width="50" src="../public/robot.avif" />}
     {message}
     {sender === "user" && <img width="50" src="../public/images.png" />}
    </div>
  );
}
