// import React, { useState } from 'react';
// import axios from 'axios';

// function ChatInterface() {
//   const [message, setMessage] = useState('');
//   const [response, setResponse] = useState('');

//   const handleSendMessage = async () => {
//     try {
//       const res = await axios.post('/api/generate-response/', { prompt: message });
//       setResponse(res.data.response);
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Chat with AI</h2>
//       <textarea
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Type your message..."
//       />
//       <button onClick={handleSendMessage}>Send</button>
//       <div>
//         <h3>AI Response:</h3>
//         <p>{response}</p>
//       </div>
//       <button>
//      text
//       </button>
//     </div>
//   );
// }

// export default ChatInterface;



import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Add this import

function ChatInterface() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSendMessage = async () => {
    try {
      const res = await axios.post('/api/generate-response/', { prompt: message });
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error sending message:', error);
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
