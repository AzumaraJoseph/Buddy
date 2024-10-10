import React, { useState } from "react";
import ChatList from "./ChatList";
import ChatMessages from "./ChatMessages";

const ChatApp = () => {
  // User data with profile picture, full name, last message, and unread message count
  const users = [
    {
      id: 1,
      profilePicture: "https://via.placeholder.com/50",
      fullName: "Jane Smith",
      chatMessage: "Hey! How are you?",
      unreadMessage: 2,
    },
    {
      id: 2,
      profilePicture: "https://via.placeholder.com/50",
      fullName: "Michael Johnson",
      chatMessage: "What's up?",
      unreadMessage: 0,
    },
    {
      id: 3,
      profilePicture: "https://via.placeholder.com/50",
      fullName: "Emily Davis",
      chatMessage: "Can we talk later?",
      unreadMessage: 1,
    },
    {
      id: 4,
      profilePicture: "https://via.placeholder.com/50",
      fullName: "Sarah Wilson",
      chatMessage: "Meeting at 5 PM?",
      unreadMessage: 3,
    },
    {
      id: 5,
      profilePicture: "https://via.placeholder.com/50",
      fullName: "John Doe",
      chatMessage: "Thanks for your help!",
      unreadMessage: 0,
    },
  ];

  // Chat history data for each user
  const chatHistory = {
    1: [
      { sender: "Jane Smith", message: "Hey! How are you?" },
      { sender: "You", message: "I'm good, thanks! How about you?" },
    ],
    2: [
      { sender: "Michael Johnson", message: "What's up?" },
      { sender: "You", message: "Not much, just working." },
    ],
    3: [
      { sender: "Emily Davis", message: "Can we talk later?" },
      { sender: "You", message: "Sure, anytime after 4!" },
    ],
    4: [
      { sender: "Sarah Wilson", message: "Meeting at 5 PM?" },
      { sender: "You", message: "Yes, see you then!" },
    ],
    5: [
      { sender: "John Doe", message: "Thanks for your help!" },
      { sender: "You", message: "You're welcome!" },
    ],
  };

  // State to track the selected user
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="chat-app-container">
      {/* ChatList component */}
      <ChatList
        users={users}
        onSelectUser={(user) => setSelectedUser(user)} // Passing selected user to state
      />

      {/* ChatMessages component */}
      {selectedUser && (
        <ChatMessages
          user={selectedUser}
          chatHistory={chatHistory[selectedUser.id]}
        />
      )}
    </div>
  );
};

export default ChatApp;

