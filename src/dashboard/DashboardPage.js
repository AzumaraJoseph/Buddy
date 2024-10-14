import React, { useState } from "react";
// import ChatList from "./ChatList";
// import ChatMessages from "./ChatMessages";
import ChatWindow from '../chats/ChatWindow'
import Sidebar from "../SideBar";
import imgLogout from '../assets/img/img-logout.png';
import img1 from '../assets/img/img-1.png';
import img2 from '../assets/img/img-2.png';
import img3 from '../assets/img/img-3.png'
import img4 from '../assets/img/img-4.png';
import img5 from '../assets/img/img-5.png';
import img6 from '../assets/img/img-6.png';
import { Routes, Route, useNavigate } from "react-router-dom";


import {
    FaSearch,
   
} from "react-icons/fa";
import MainComponent from "./MainComponent";




const DashBoardPage
 = () => {

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
  const navigate = useNavigate();

  const user = {
    profilePicture: "/path/to/profile.jpg",
    fullName: "Azumara Joseph",
    img: {imgLogout}
  };

  return (
    <div className="chat-app-container">


        {/* Sidebar remains persistent */}
        {/* <Sidebar user={user}/> */}

        {/* Route components will render here */}
        <Routes>
            {/* <Route path="/main" element={<MainComponent />} />

            <Route path="/chatwindow" element={<ChatWindow />} /> */}
            <Route path="/" element={<MainComponent />} />
            <Route path="/chatwindow" element={<ChatWindow />} />
            {/* <Route path="*" element={<MainComponent />} /> This will act as a catch-all for undefined routes */}
            {/* <Route path="/main" element={<MainComponent />} /> */}

        </Routes>
    </div>
  );
};

export default DashBoardPage
;

