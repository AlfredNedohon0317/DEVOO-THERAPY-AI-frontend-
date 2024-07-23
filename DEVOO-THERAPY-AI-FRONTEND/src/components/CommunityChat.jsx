import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CommunityChat.css';  // Importing the CSS file specific to the CommunityChat component

function CommunityChat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/community_messages`)
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => console.error('Error fetching messages:', error));
  }, []);

  return (
    <div>
      <h1>Community Chat</h1>
      <ul>
        {messages.map(message => (
          <li key={message.id}>{message.user} - {message.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default CommunityChat;
