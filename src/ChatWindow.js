import React, { useState } from "react";
import ChatList from "./ChatList";
import ChatMessages from "./ChatMessages";
import Sidebar from "./SideBar";
import imgLogout from './assets/img/img-logout.png'; // Import the image
import { FaSearch, FaPlus, FaBell } from "react-icons/fa"; // Using FontAwesome for icons




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

  const user = {
    profilePicture: "/path/to/profile.jpg",
    fullName: "Azumara Joseph",
    img: {imgLogout}
  };

  return (
    <div className="chat-app-container">

        <Sidebar user={user}/>
        <div className="main">
            <div className="top">
                <h4>Messages</h4>
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
                
            </div>

            {/* ChatList component */}
            <ChatList
                users={users}
                onSelectUser={(user) => setSelectedUser(user)} // Passing selected user to state
            />

            {/* ChatMessages component */}
            {/* {selectedUser && (
                <ChatMessages
                user={selectedUser}
                chatHistory={chatHistory[selectedUser.id]}
                />
            )} */}
        </div>

        
            
        </div>
  );
};

export default ChatApp;

