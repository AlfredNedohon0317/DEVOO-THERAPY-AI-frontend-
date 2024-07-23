import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Correct the path here
import Therapists from './Therapists'; // Correct the path here
import Exercises from './Exercises'; // Correct the path here
import CommunityChat from './CommunityChat'; // Correct the path here
import Signup from './Signup'; // Correct the path here

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/therapists" element={<Therapists />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/community-chat" element={<CommunityChat />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
