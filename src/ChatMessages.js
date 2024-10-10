import React from "react";
import { FaSearch, FaStar, FaPlus, FaBell, FaMicrophone, FaPaperclip, FaCamera, FaSmile } from "react-icons/fa"; // Using FontAwesome for icons


const ChatMessages = ({ user, chatHistory }) => {
  return (
    <div className="chat-container">
      <div className="find">
        {/* Input field with search icon inside */}
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
        </div>

        {/* Add button */}
        <button className="add-btn">
          <FaPlus className="add-icon" /> Add
        </button>

        {/* Notification icon with badge */}
        <div className="notification-container">
          <FaBell className="notification-icon" />
          <span className="notification-badge"></span>
        </div>
      </div>

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

        {/* Icons on the right-hand side */}
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
        {/* Mic icon on the left */}
        <FaMicrophone className="mic-icon" />

        {/* Input field */}
        <input
          type="text"
          placeholder="Type a message..."
          className="chatbox-input"
        />

        {/* Icons on the right */}
        <div className="right-icons">
          <FaPaperclip className="icon" />
          <FaCamera className="icon" />
          <FaSmile className="icon" />
        </div>
      </div>

      {/* Button outside the chatbox input */}
      <button className="send-btn">Send</button>
    </div>
  );
};

export default ChatMessages;
