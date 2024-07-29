import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Therapists from './Therapists';
import Exercises from './Exercises';
import CommunityChat from './CommunityChat';
import Signup from './Signup';
import Login from './Login';
import ChatInterface from './ChatInterface'; 

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/therapists" element={<Therapists />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/community-chat" element={<CommunityChat />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<ChatInterface />} /> {/* Chat route */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;




