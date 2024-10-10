import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa"; // Using FontAwesome for icons


const ChatList = ({ users, onSelectUser }) => {

  return (
    <div className="user-list">
      <h2>Chats</h2>
      <div className="user">

      <img
            src={users.profilePicture}
            alt='Jossy'
            className="profile-picture"
          />
          <div className="user-info">
            <h4>Azumara Joseph</h4>
            <p>Software Developer</p>
            
          </div>
      </div>
      {/* Input field with search icon inside */}
      <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
        </div>
        <div className="user-border">

          {users.map((user) => (
            <div
              key={user.id}
              className="user"
              onClick={() => onSelectUser(user)} // Handle click to select user
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
        </div>
    </div>
  );
};

export default ChatList;
