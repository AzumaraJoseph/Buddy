import React, { useState } from "react";
// import ChatList from "./ChatList";
// import ChatMessages from "./ChatMessages";
import Sidebar from "../SideBar";
import imgLogout from '../assets/img/img-logout.png';
import img1 from '../assets/img/img-1.png';
import img2 from '../assets/img/img-2.png';
import img3 from '../assets/img/img-3.png'
import img4 from '../assets/img/img-4.png';
import img5 from '../assets/img/img-5.png';
import img6 from '../assets/img/img-6.png';


import {
    FaSearch,
   
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
      { sender: "Jane Smith", message: "Hey! How are you?", image: img2 },
      { sender: "You", message: "I'm good, thanks! How about you?", image: img5 },
    ],
    2: [
      { sender: "Michael Johnson", message: "What's up?", image: img3 },
      { sender: "You", message: "Not much, just working.", image: img6 },
    ],
    3: [
      { sender: "Emily Davis", message: "Can we talk later?", image: img4 },
      { sender: "You", message: "Sure, anytime after 4!", image: img1 },
    ],
    4: [
      { sender: "Sarah Wilson", message: "Meeting at 5 PM?", image: img5 },
      { sender: "You", message: "Yes, see you then!", image: img4 },
    ],
    5: [
      { sender: "John Doe", message: "Thanks for your help!", image: img6 },
      { sender: "You", message: "You're welcome!", image: img2 },
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

        {/* <Sidebar user={user}/> */}
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
                                    {chat.image && (
                                    <img src={chat.image} alt="ChatImage" className="chat-image" />
                                    )}
                                    <div className="message-bubble">
                                    <p>{chat.message}</p>
                                    
                                    </div>
                                </div>
                                ))}
                            </div>

                            {/* Chat input section */}
                            {/* <div className="chatbox-input-container">
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
                            </div> */}

                            <div className="chatbox-input-container">
                                <div className="input-wrapper">
                                    {/* <FaMicrophone className="icon mic-icon" /> */}
                                    <svg className="icon mic-icon" width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_4975_158)">
                                    <path d="M11.3476 22.0001H4.69042C4.04739 22.0001 3.55566 21.5242 3.55566 20.9019C3.55566 20.2796 4.04739 19.8037 4.69042 19.8037H11.3476C11.9907 19.8037 12.4824 20.2796 12.4824 20.9019C12.4824 21.5242 11.9528 22.0001 11.3476 22.0001Z" fill="#8D8D8D"/>
                                    <path d="M8.01903 22.0001C7.376 22.0001 6.88428 21.5242 6.88428 20.9019V17.8271C6.88428 17.2048 7.376 16.7289 8.01903 16.7289C8.66206 16.7289 9.15378 17.2048 9.15378 17.8271V20.9019C9.15378 21.5242 8.62423 22.0001 8.01903 22.0001Z" fill="#8D8D8D"/>
                                    <path d="M8.01891 18.9252C3.59338 18.9252 0 15.4476 0 11.1648V9.00503C0 8.38273 0.491726 7.90686 1.13475 7.90686C1.77778 7.90686 2.2695 8.38273 2.2695 9.00503V11.1648C2.2695 14.2396 4.84161 16.7288 8.01891 16.7288C11.1962 16.7288 13.7683 14.2396 13.7683 11.1648V9.00503C13.7683 8.38273 14.26 7.90686 14.9031 7.90686C15.5461 7.90686 16.0378 8.38273 16.0378 9.00503V11.1648C16 15.4476 12.4066 18.9252 8.01891 18.9252Z" fill="#8D8D8D"/>
                                    <path d="M8.01873 15.411C5.82488 15.411 4.00928 13.6539 4.00928 11.5308V4.9418C4.00928 4.3195 4.501 3.84363 5.14403 3.84363C5.78706 3.84363 6.27878 4.3195 6.27878 4.9418V11.5308C6.27878 12.446 7.07311 13.2147 8.01873 13.2147C8.96436 13.2147 9.75869 12.446 9.75869 11.5308V4.9418C9.75869 4.3195 10.2504 3.84363 10.8934 3.84363C11.5365 3.84363 12.0282 4.3195 12.0282 4.9418V11.5308C12.0282 13.6539 10.2126 15.411 8.01873 15.411Z" fill="#8D8D8D"/>
                                    <path d="M10.8934 11.5674C10.2504 11.5674 9.75869 11.0915 9.75869 10.4692V3.8802C9.75869 2.96506 8.96436 2.19634 8.01873 2.19634C7.07311 2.19634 6.27878 2.96506 6.27878 3.8802V10.4692C6.27878 11.0915 5.78706 11.5674 5.14403 11.5674C4.501 11.5674 4.00928 11.0915 4.00928 10.4692V3.8802C4.00928 1.75707 5.78706 0 8.01873 0C10.2504 0 12.0282 1.75707 12.0282 3.8802V10.4692C12.0282 11.0915 11.4986 11.5674 10.8934 11.5674Z" fill="#8D8D8D"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_4975_158">
                                    <rect width="16" height="22" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>

                                    <input
                                    type="text"
                                    placeholder="Write Something..."
                                    className="chatbox-input"
                                    />
                                    {/* <div className="adjust"> */}
                                        {/* <FaPaperclip className="icon paperclip-icon" /> */}
                                        <svg className="icon paperclip-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_544_2450)">
                                        <path d="M7.10511 22.8991C5.42331 22.8991 3.88775 22.2775 2.75436 21.1442C1.54785 19.9011 0.926319 18.2558 0.999441 16.4278C1.10912 14.6729 1.8769 12.9545 3.15653 11.6749L12.2602 2.57122C14.271 0.560374 17.3787 0.450691 19.2068 2.27874C21.0348 4.10678 20.9251 7.25102 18.9143 9.22531L9.48157 18.7311C8.89659 19.3161 8.16538 19.6452 7.36104 19.6817C6.52014 19.7183 5.75236 19.4258 5.20394 18.8774C4.07056 17.744 4.14368 15.8063 5.35019 14.5998L15.2948 4.65519C15.7335 4.21646 16.4281 4.21646 16.8303 4.65519C17.269 5.09392 17.269 5.78858 16.8303 6.19075L6.88574 16.1353C6.52014 16.5009 6.44701 17.0128 6.7395 17.3053C6.88575 17.4515 7.10511 17.4881 7.25135 17.4881C7.50728 17.4881 7.72665 17.3784 7.90945 17.159L17.3787 7.68975C18.5121 6.55636 18.6584 4.80144 17.6712 3.81429C16.6841 2.82715 14.9657 2.93683 13.7958 4.10678L4.72865 13.247C3.81463 14.161 3.26622 15.331 3.19309 16.574C3.11997 17.744 3.52214 18.8408 4.28992 19.6086C5.0577 20.3764 6.15453 20.7785 7.32448 20.7054C8.53098 20.6323 9.73749 20.0839 10.6515 19.1699L20.2305 9.59091C20.6692 9.15218 21.3639 9.15218 21.766 9.59091C22.2048 10.0296 22.2048 10.7243 21.766 11.1265L12.2236 20.742C10.9074 22.0582 9.22564 22.826 7.47072 22.8991C7.36104 22.8991 7.21479 22.8991 7.10511 22.8991Z" fill="#8D8D8D"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_544_2450">
                                        <rect width="21.1322" height="21.9" fill="white" transform="translate(1 1)"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                        {/* <FaCamera className="icon camera-icon" /> */}
                                        <svg className="icon camera-icon" width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.8 20H1.2C0.52 20 0 19.4715 0 18.7805V4.39024C0 3.69919 0.52 3.17073 1.2 3.17073H6.6L6.88 1.05691C6.96 0.447154 7.48 0 8.08 0H16C16.6 0 17.12 0.447154 17.2 1.05691L17.48 3.17073H22.8C23.48 3.17073 24 3.69919 24 4.39024V18.7398C24 19.4309 23.48 20 22.8 20ZM2.4 17.561H21.6V5.60976H16.36C15.76 5.60976 15.24 5.1626 15.16 4.55285L14.92 2.43902H9.12L8.84 4.55285C8.76 5.1626 8.24 5.60976 7.64 5.60976H2.4V17.561Z" fill="#8D8D8D"/>
                                        <path d="M12 16.4229C9.28004 16.4229 7.04004 14.1464 7.04004 11.3822C7.04004 8.61797 9.28004 6.34155 12 6.34155C14.72 6.34155 16.96 8.61797 16.96 11.3822C16.96 14.1464 14.76 16.4229 12 16.4229ZM12 8.78058C10.6 8.78058 9.44004 9.95944 9.44004 11.3822C9.44004 12.805 10.6 13.9838 12 13.9838C13.4 13.9838 14.56 12.805 14.56 11.3822C14.56 9.95944 13.44 8.78058 12 8.78058Z" fill="#8D8D8D"/>
                                        </svg>
                                        {/* <FaSmile className="icon smile-icon" /> */}
                                        <svg className="icon smile-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0001 -0.000976562C15.5238 -0.000976562 20.0016 4.47687 20.0016 10.0006C20.0016 15.5243 15.5238 20.0021 10.0001 20.0021C4.47638 20.0021 -0.00146484 15.5243 -0.00146484 10.0006C-0.00146484 4.47687 4.47638 -0.000976562 10.0001 -0.000976562ZM10.0001 1.49902C5.30481 1.49902 1.49854 5.3053 1.49854 10.0006C1.49854 14.6959 5.30481 18.5021 10.0001 18.5021C14.6954 18.5021 18.5016 14.6959 18.5016 10.0006C18.5016 5.3053 14.6954 1.49902 10.0001 1.49902ZM6.46183 12.7839C7.31096 13.8616 8.60198 14.5021 10.0001 14.5021C11.3963 14.5021 12.6858 13.8633 13.535 12.7881C13.7918 12.463 14.2634 12.4076 14.5884 12.6644C14.9135 12.9211 14.9689 13.3927 14.7122 13.7178C13.5814 15.1495 11.8602 16.0021 10.0001 16.0021C8.13743 16.0021 6.4142 15.1472 5.2836 13.7122C5.02725 13.3869 5.08319 12.9153 5.40855 12.6589C5.73391 12.4026 6.20548 12.4585 6.46183 12.7839ZM7.00053 6.75121C7.6905 6.75121 8.24982 7.31054 8.24982 8.0005C8.24982 8.69047 7.6905 9.24979 7.00053 9.24979C6.31057 9.24979 5.75124 8.69047 5.75124 8.0005C5.75124 7.31054 6.31057 6.75121 7.00053 6.75121ZM13.0005 6.75121C13.6905 6.75121 14.2498 7.31054 14.2498 8.0005C14.2498 8.69047 13.6905 9.24979 13.0005 9.24979C12.3106 9.24979 11.7512 8.69047 11.7512 8.0005C11.7512 7.31054 12.3106 6.75121 13.0005 6.75121Z" fill="#8D8D8D"/>
                                        </svg>

                                    {/* </div> */}
                                </div>
                                {/* Send button */}
                                <button className="send-btn"> <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="18" cy="18" r="18" fill="#FF8600"/>
                                    <path d="M20.8322 18.6573L10.805 20.3045C10.6897 20.3234 10.5815 20.372 10.4913 20.4453C10.4011 20.5185 10.332 20.6139 10.2911 20.7218L6.83375 29.854C6.5036 30.694 7.39422 31.4946 8.21163 31.0904L32.1747 19.2781C32.3403 19.1963 32.4796 19.0706 32.5769 18.9152C32.6742 18.7598 32.7258 18.5807 32.7258 18.3981C32.7258 18.2154 32.6742 18.0364 32.5769 17.881C32.4796 17.7256 32.3403 17.5999 32.1747 17.5181L8.21163 5.70583C7.39422 5.3029 6.5036 6.1035 6.83375 6.94217L10.2924 16.0744C10.3334 16.1823 10.4024 16.2777 10.4926 16.3509C10.5828 16.4242 10.691 16.4728 10.8063 16.4917L20.8335 18.1389C20.8961 18.1487 20.953 18.1802 20.9941 18.2277C21.0352 18.2752 21.0578 18.3356 21.0578 18.3981C21.0578 18.4605 21.0352 18.5209 20.9941 18.5684C20.953 18.616 20.8961 18.6475 20.8335 18.6573H20.8322Z" fill="white"/>
                                    </svg>
                                </button>
                                
                            </div>


                        </div>
                    )}
                    </div>
                    



            {/* </div> */}
            
        </div>
            
    </div>
  );
};

export default ChatApp;

