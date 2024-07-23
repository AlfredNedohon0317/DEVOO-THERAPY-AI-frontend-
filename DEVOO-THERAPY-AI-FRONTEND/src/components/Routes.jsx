import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Therapists from './Therapists';
import Exercises from './Exercises';
import CommunityChat from './CommunityChat';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/therapists" element={<Therapists />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/community-chat" element={<CommunityChat />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
