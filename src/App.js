import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './pages/errorPage';
import LandingPage from './pages/landingPage';
import MovieDetailsModal from './pages/movie/[slug]';


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movie/:slug" element={<MovieDetailsModal />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
