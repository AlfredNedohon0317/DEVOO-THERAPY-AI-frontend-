// src/components/ChatInterface.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ChatInterface.css';


function ChatInterface() {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);  // State to store the chat log

  const handleSendMessage = async () => {
    if (!message.trim()) {
      console.error('Prompt cannot be empty');
      return;
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL; // Access the API URL from the environment variables
      const res = await axios.post(`${apiUrl}/generate-response/`, { prompt: message });

      // Update chat log with user message and AI response
      setChatLog([...chatLog, { sender: 'User', message }, { sender: 'DEVOO', message: res.data.response }]);
      setMessage('');  // Clear the text area
    } catch (error) {
      console.error('Error sending message:', error);
      setChatLog([...chatLog, { sender: 'User', message }, { sender: 'DEVOO', message: 'Failed to get a response from the AI.' }]);
      setMessage('');  // Clear the text area
    }
  };

  return (
    <div>
      <h2>Chat with DEVOO</h2>
      <div className="chat-log">
        {chatLog.map((entry, index) => (
          <div key={index} className={`chat-entry ${entry.sender.toLowerCase()}`}>
            <strong>{entry.sender}:</strong> {entry.message}
          </div>
        ))}
      </div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSendMessage}>Send</button>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}

export default ChatInterface;
