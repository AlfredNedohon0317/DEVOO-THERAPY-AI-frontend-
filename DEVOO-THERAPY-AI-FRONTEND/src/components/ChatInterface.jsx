// src/components/ChatInterface.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ChatInterface() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSendMessage = async () => {
    if (!message.trim()) {
      console.error('Prompt cannot be empty');
      setResponse('Please enter a message.');
      return;
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL; // Access the API URL from the environment variables
      const res = await axios.post(`${apiUrl}/generate-response/`, { prompt: message });
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error sending message:', error);
      setResponse('Failed to get a response from the AI.');
    }
  };

  return (
    <div>
      <h2>Chat with AI</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSendMessage}>Send</button>
      <div>
        <h3>AI Response:</h3>
        <p>{response}</p>
      </div>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}

export default ChatInterface;
