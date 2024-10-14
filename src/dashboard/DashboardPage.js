import React, { useState } from "react";
import ChatWindow from '../chats/ChatWindow'
import { Routes, Route } from "react-router-dom";
import MainComponent from "./MainComponent";

const DashBoardPage
 = () => {

  return (
    <div className="chat-app-container">

        <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/chatwindow" element={<ChatWindow />} />
            <Route path="/main" element={<MainComponent />} />
        </Routes>
    </div>
  );
};

export default DashBoardPage
;

