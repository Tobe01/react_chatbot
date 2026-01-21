import "./chat-message.css";

export function ChatMessage({ message }) {
  return (
    <div className="chatContainer">
      {message && (
        <div>
          {message}
          <img src="../public/images.png" width="50" />
        </div>
      )}
    </div>
  );
}
