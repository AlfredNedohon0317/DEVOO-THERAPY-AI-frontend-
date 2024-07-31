import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode'; // Ensure this is installed and imported
import './ChatInterface.css';

function ChatInterface() {
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserName(decoded.username || 'Unknown User');
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  const handleSendMessage = async () => {
    if (!message.trim()) {
      console.error('Prompt cannot be empty');
      return;
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await axios.post(`${apiUrl}/generate-response/`, { prompt: message });

      setChatLog([
        ...chatLog,
        { sender: userName, message },
        { sender: 'DEVOO', message: res.data.response }
      ]);
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      setChatLog([
        ...chatLog,
        { sender: userName, message },
        { sender: 'DEVOO', message: 'Failed to get a response from the AI.' }
      ]);
      setMessage('');
    }
  };

  return (
    <div className="chat-interface">
      <h2>Chat with DEVOO</h2>
      <div className="chat-log">
        {chatLog.map((entry, index) => (
          <div key={index} className={`chat-entry ${entry.sender === userName ? 'user' : 'devoo'}`}>
            <strong>{entry.sender}:</strong> {entry.message}
          </div>
        ))}
      </div>
      <div className="input-area">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <div className="button-group">
          <button onClick={handleSendMessage}>Send</button>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;
