import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'; // Import Link
import axios from "axios";
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import './CommunityChat.css';

function CommunityChat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Fetch messages from backend
    axios.get(`${import.meta.env.VITE_API_URL}/community_messages/`)
      .then(response => setMessages(response.data))
      .catch(error => console.error('Error fetching messages:', error));

    // Check if the user is authenticated
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert("You need to log in to send messages.");
      return;
    }

    const token = localStorage.getItem('token');
    axios.post(`${import.meta.env.VITE_API_URL}/community_messages/`, 
      { message: newMessage },
      { headers: { Authorization: `Token ${token}` } }
    )
      .then(response => {
        setMessages([...messages, response.data]);
        setNewMessage("");
      })
      .catch(error => console.error('Error sending message:', error));
  };

  const addEmoji = (emoji) => {
    setNewMessage(newMessage + emoji.native);
  };

  return (
    <div className="community-chat">
      <Link to="/">
        <button className="home-button">Home</button>
      </Link>
      <h2>Community Chat</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">{msg.message}</div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <textarea
          id="newMessage"
          name="newMessage"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          required
        />
        <div className="button-group">
          <button type="button" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😊</button>
          <button type="submit">Send</button>
        </div>
        {showEmojiPicker && <Picker data={data} onEmojiSelect={addEmoji} />}
      </form>
    </div> 
  );
}

export default CommunityChat;

