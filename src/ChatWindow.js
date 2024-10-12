import React, { useState } from "react";
import ChatList from "./ChatList";
import ChatMessages from "./ChatMessages";
import Sidebar from "./SideBar";
import imgLogout from './assets/img/img-logout.png';
import img1 from './assets/img/img-1.png';
import img2 from './assets/img/img-2.png';
import img3 from './assets/img/img-3.png';
import img4 from './assets/img/img-4.png';
import img5 from './assets/img/img-5.png';
import img6 from './assets/img/img-6.png';




import {
    FaSearch,
    FaStar,
    FaPlus,
    FaBell,
    FaMicrophone,
    FaPaperclip,
    FaCamera,
    FaSmile,
  } from "react-icons/fa";




const ChatApp = () => {
  // User data with profile picture, full name, last message, and unread message count
//   const users = [
//     {
//       id: 1,
//       profilePicture: img2,
//       fullName: "Jane Smith",
//       chatMessage: "Hey! How are you?",
//       unreadMessage: 2,
//     },
//     {
//       id: 2,
//       profilePicture: img3,
//       fullName: "Amy Frost",
//       chatMessage: "What's up?",
//       unreadMessage: 0,
//     },
//     {
//       id: 3,
//       profilePicture: img4,
//       fullName: "Emily Davis",
//       chatMessage: "Can we talk later?",
//       unreadMessage: 1,
//     },
//     {
//       id: 4,
//       profilePicture: img5,
//       fullName: "Sarah Wilson",
//       chatMessage: "Meeting at 5 PM?",
//       unreadMessage: 3,
//     },
//     {
//       id: 5,
//       profilePicture: img6,
//       fullName: "John Doe",
//       chatMessage: "Thanks for your help!",
//       unreadMessage: 0,
//     },
//   ];
    const users = [
        {
        id: 1,
        profilePicture: img2,
        fullName: "Jane Smith",
        chatMessage: "Hey! How are you?",
        unreadMessage: 0,
        time: "10:15 AM",  // Time when the message was sent
        delivered: true,   // Whether the message was delivered
        },
        {
        id: 2,
        profilePicture: img3,
        fullName: "Amy Frost",
        chatMessage: "What's up?",
        unreadMessage: 3,
        time: "09:45 AM",
        delivered: false,
        },
        {
        id: 3,
        profilePicture: img4,
        fullName: "Emily Davis",
        chatMessage: "Can we talk later?",
        unreadMessage: 0,
        time: "11:00 AM",
        delivered: true,  // Message not delivered yet
        },
        {
        id: 4,
        profilePicture: img5,
        fullName: "Sarah Wilson",
        chatMessage: "Meeting at 5 PM?",
        unreadMessage: 0,
        time: "08:30 AM",
        delivered: true,
        },
        {
        id: 5,
        profilePicture: img6,
        fullName: "John Doe",
        chatMessage: "Thanks for your help!",
        unreadMessage: 1,
        time: "Yesterday",
        delivered: false,
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
                        placeholder="Search"
                        className="search-input"
                        />
                    </div>

                    {/* Add button */}
                    <button className="add-btn">
                        {/* <FaPlus className="add-icon" /> */}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 6H8V0H6V6H0V8H6V14H8V8H14V6Z" fill="#000F29"/>
                        </svg>
                    </button>

                    {/* Notification icon with badge */}
                    <div className="notification-container">
                        {/* <FaBell className="notification-icon" /> */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 13.18V10C17.9986 8.58312 17.4958 7.21247 16.5806 6.13077C15.6655 5.04908 14.3971 4.32615 13 4.09V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V4.09C9.60294 4.32615 8.33452 5.04908 7.41939 6.13077C6.50425 7.21247 6.00144 8.58312 6 10V13.18C5.41645 13.3863 4.911 13.7681 4.55294 14.2729C4.19488 14.7778 4.00174 15.3811 4 16V18C4 18.2652 4.10536 18.5196 4.29289 18.7071C4.48043 18.8946 4.73478 19 5 19H8.14C8.37028 19.8474 8.873 20.5954 9.5706 21.1287C10.2682 21.6621 11.1219 21.951 12 21.951C12.8781 21.951 13.7318 21.6621 14.4294 21.1287C15.127 20.5954 15.6297 19.8474 15.86 19H19C19.2652 19 19.5196 18.8946 19.7071 18.7071C19.8946 18.5196 20 18.2652 20 18V16C19.9983 15.3811 19.8051 14.7778 19.4471 14.2729C19.089 13.7681 18.5835 13.3863 18 13.18ZM8 10C8 8.93913 8.42143 7.92172 9.17157 7.17157C9.92172 6.42143 10.9391 6 12 6C13.0609 6 14.0783 6.42143 14.8284 7.17157C15.5786 7.92172 16 8.93913 16 10V15H12H8V10ZM12 20C11.651 19.9979 11.3086 19.9045 11.0068 19.7291C10.7051 19.5536 10.4545 19.3023 10.28 19H13.72C13.5455 19.3023 13.2949 19.5536 12.9932 19.7291C12.6914 19.9045 12.349 19.9979 12 20ZM18 17H6V16C6 15.7348 6.10536 15.4804 6.29289 15.2929C6.48043 15.1054 6.73478 15 7 15H12H17C17.2652 15 17.5196 15.1054 17.7071 15.2929C17.8946 15.4804 18 15.7348 18 16V17Z" fill="#3B3B45"/>
                        </svg>
                        <span className="notification-badge"></span>
                    </div>
                </div>
                
            </div>

            {/* <div className="flex"> */}
                {/* ChatList component */}
                {/* <ChatList
                    users={users}
                    onSelectUser={(user) => setSelectedUser(user)} // Passing selected user to state
                /> */}

                {/* ChatMessages component */}
                {/* {selectedUser && (
                    <ChatMessages
                    user={selectedUser}
                    chatHistory={chatHistory[selectedUser.id]}
                    />
                )} */}



                <div className="flex">
                    {/* User List Section */}
                    <div className="user-list">
                        {/* User info */}
                        <div className="user">
                        <img
                            src={img1}
                            alt="Jossy"
                            className="profile-picture"
                        />
                        <div className="user-info">
                            <h4>David Peters</h4>
                            <p>Software Developer</p>
                        </div>
                        </div>

                        {/* Search bar */}
                        <div className="search-bar  ">
                        <FaSearch className="input-icon" />
                        <input type="text" placeholder="Search Here..." className="search-bar--input" />
                        </div>

                        {/* List of users */}
                        {/* <div className="user-border">
                        {users.map((user) => (
                            <div
                            key={user.id}
                            className="user"
                            onClick={() => setSelectedUser(user)} // Selecting user on click
                            >
                            <img
                                src={user.profilePicture}
                                alt={user.fullName}
                                className="profile-picture"
                            />
                            <div className="user-info">
                                <h4>{user.fullName}</h4>
                                <p>{user.chatMessage}</p>
                                {user.unreadMessage > 0 && (
                                <span className="unread-badge">{user.unreadMessage}</span>
                                )}
                            </div>
                            </div>
                        ))}
                        </div> */}
                        <div className="user-border">
                            {users.map((user) => (
                                <div
                                key={user.id}
                                className="user"
                                onClick={() => setSelectedUser(user)} // Selecting user on click
                                >
                                <img
                                    src={user.profilePicture}
                                    alt={user.fullName}
                                    className="profile-picture"
                                />
                                <div className="user-info">
                                    <h4>{user.fullName}</h4>
                                    <p>{user.chatMessage}</p>
                                    <div className="message-status">
                                        <span className="message-time">{user.time}</span>
                                        {user.delivered && (
                                            <span className="checkmark-icon">
                                            <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z"
                                                fill="currentColor"
                                                />
                                            </svg>
                                            </span>
                                        )}
                                        {user.unreadMessage > 0 && (
                                        <span className="unread-badge">{user.unreadMessage}</span>
                                    )}
                                    </div>
                                    {/* {user.unreadMessage > 0 && (
                                    <span className="unread-badge">{user.unreadMessage}</span>
                                    )} */}
                                </div>
                                </div>
                            ))}
                            </div>

                    </div>

                    {/* Chat Section */}
                    {selectedUser && (
                        <div className="chat-container">
                        {/* Chat header */}
                        <div className="chat-header">
                            <div className="chat-user-info">
                            <img
                                src={selectedUser.profilePicture}
                                alt={selectedUser.fullName}
                                className="header-profile-pic"
                            />
                            <div className="header-user-details">
                                <h4>{selectedUser.fullName}</h4>
                                <span className="online-badge"></span>
                            </div>
                            </div>

                            {/* Icons on the right-hand side */}
                            <div className="header-icons">
                            {/* <FaSearch className="icon" /> */}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.55295 17.105C10.4506 17.1046 12.2936 16.4694 13.7884 15.3004L18.4883 20L20 18.4883L15.3002 13.7888C16.4698 12.2938 17.1054 10.4505 17.1059 8.55249C17.1059 3.83686 13.2688 0 8.55295 0C3.83707 0 0 3.83686 0 8.55249C0 13.2681 3.83707 17.105 8.55295 17.105ZM8.55295 2.13812C12.0907 2.13812 14.9677 5.01497 14.9677 8.55249C14.9677 12.09 12.0907 14.9669 8.55295 14.9669C5.01523 14.9669 2.13824 12.09 2.13824 8.55249C2.13824 5.01497 5.01523 2.13812 8.55295 2.13812Z" fill="#8D8D8D"/>
                            </svg>
                            {/* <FaStar className="icon" /> */}
                            <svg width="20" height="20" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 1C3.239 1 1 3.36095 1 6.27377C1 8.62513 1.875 14.2057 10.488 19.8471C10.6423 19.9471 10.8194 20 11 20C11.1806 20 11.3577 19.9471 11.512 19.8471C20.125 14.2057 21 8.62513 21 6.27377C21 3.36095 18.761 1 16 1C13.239 1 11 4.19623 11 4.19623C11 4.19623 8.761 1 6 1Z" stroke="#8D8D8D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            {/* <FaBell className="icon" /> */}
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.7718 16.8328C19.1246 16.2774 18.558 15.6407 18.0872 14.9399C17.5733 13.9725 17.2653 12.916 17.1812 11.8324V8.6409C17.1857 6.93896 16.5443 5.29403 15.3777 4.01518C14.211 2.73632 12.5994 1.91157 10.8456 1.69588V0.862475C10.8456 0.633733 10.7512 0.414359 10.5832 0.252613C10.4152 0.0908677 10.1873 0 9.94967 0C9.71204 0 9.48414 0.0908677 9.31612 0.252613C9.14809 0.414359 9.05369 0.633733 9.05369 0.862475V1.7088C7.31561 1.94004 5.72347 2.76978 4.57217 4.04433C3.42086 5.31889 2.78841 6.9519 2.79195 8.6409V11.8324C2.70789 12.916 2.39985 13.9725 1.88591 14.9399C1.42341 15.6391 0.865903 16.2757 0.228188 16.8328C0.156598 16.8933 0.0992224 16.9679 0.0598775 17.0514C0.0205325 17.135 0.000120669 17.2256 0 17.3173V18.196C0 18.3673 0.0707093 18.5316 0.196573 18.6528C0.322436 18.774 0.493143 18.842 0.671141 18.842H19.3289C19.5069 18.842 19.6776 18.774 19.8034 18.6528C19.9293 18.5316 20 18.3673 20 18.196V17.3173C19.9999 17.2256 19.9795 17.135 19.9401 17.0514C19.9008 16.9679 19.8434 16.8933 19.7718 16.8328ZM1.39597 17.5499C2.02041 16.9693 2.5702 16.3186 3.03356 15.6118C3.68095 14.4434 4.05868 13.1542 4.14094 11.8324V8.6409C4.11432 7.88376 4.24626 7.1292 4.52889 6.42216C4.81152 5.71512 5.23907 5.07005 5.78607 4.52538C6.33308 3.98071 6.98835 3.54756 7.71287 3.25174C8.4374 2.95592 9.21635 2.80347 10.0034 2.80347C10.7904 2.80347 11.5693 2.95592 12.2938 3.25174C13.0184 3.54756 13.6736 3.98071 14.2206 4.52538C14.7676 5.07005 15.1952 5.71512 15.4778 6.42216C15.7605 7.1292 15.8924 7.88376 15.8658 8.6409V11.8324C15.948 13.1542 16.3258 14.4434 16.9732 15.6118C17.4365 16.3186 17.9863 16.9693 18.6107 17.5499H1.39597Z" fill="#8D8D8D"/>
                            </svg>
                            </div>
                        </div>

                        {/* Chat messages */}
                        <div className="chat-box">
                            {chatHistory[selectedUser.id]?.map((chat, index) => (
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

                        {/* Chat input section */}
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

                        {/* Send button */}
                        <button className="send-btn">Send</button>
                        </div>
                    )}
                    </div>
                    



            {/* </div> */}
            
        </div>

        
            
        </div>
  );
};

export default ChatApp;

