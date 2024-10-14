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

  return (
    <div className="chat-app-container">


        {/* Sidebar remains persistent */}
        {/* <Sidebar user={user}/> */}

        {/* Route components will render here */}
        <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/chatwindow" element={<ChatWindow />} />
            {/* <Route path="*" element={<MainComponent />} /> This will act as a catch-all for undefined routes */}
            <Route path="/main" element={<MainComponent />} />

        </Routes>
    </div>
  );
};

export default DashBoardPage
;

