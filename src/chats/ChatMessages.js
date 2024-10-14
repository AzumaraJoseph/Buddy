import React from "react";
import { FaSearch, FaStar, FaBell, FaMicrophone, FaPaperclip, FaCamera, FaSmile } from "react-icons/fa"; // Using FontAwesome for icons


const ChatMessages = ({ user, chatHistory }) => {
  return (
    <div className="chat-container">

      <div className="chat-header">
        <div className="chat-user-info">
          <img
            src={user.profilePicture}
            alt={user.fullName}
            className="header-profile-pic"
          />
          <div className="header-user-details">
            <h4>{user.fullName}</h4>
            <span className="online-badge"></span>
          </div>
        </div>

        <div className="header-icons">
          <FaSearch className="icon" />
          <FaStar className="icon" />
          <FaBell className="icon" />
        </div>
      </div>

      <div className="chat-box">
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`chat-message ${
              chat.sender === "You" ? "sent" : "received"
            }`}
          >
            <div className="message-bubble">
              <p>{chat.message}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="chatbox-input-container">
        <FaMicrophone className="mic-icon" />

        <input
          type="text"
          placeholder="Type a message..."
          className="chatbox-input"
        />

        <div className="right-icons">
          <FaPaperclip className="icon" />
          <FaCamera className="icon" />
          <FaSmile className="icon" />
        </div>
      </div>

      <button className="send-btn">Send</button>
    </div>
  );
};

export default ChatMessages;
