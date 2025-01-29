import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/about/About.jsx';
import Alumni from './pages/alumni/Alumni.jsx';
import Home from './pages/home/Home.jsx';
import Footer from './components/footer/Footer';
import Career from './pages/career/Career.jsx';
import News from './pages/news/News.jsx';
import NewsAfter from './pages/news/NewsAfter.jsx';
import Learning from './pages/learning/Learning.jsx';
import Team from './pages/team/Team.jsx';
import Regular from './pages/regular/Regular.jsx';
import "./App.css";
import Msib from './pages/msib/Msib.jsx';
import Learningdet from './pages/learningdet/Learningdet.jsx';
import AdminRoutes from './Admin.jsx';


function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learning" element={<Learning />} />
      <Route path="/news" element={<News />} />
      <Route path="/newsafter/:newsId" element={<NewsAfter />} />
      <Route path="/alumni" element={<Alumni />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Career />} />
      <Route path="/team" element={<Team />} />
      <Route path="/regular" element={<Regular />} />
      <Route path="/msib" element={<Msib />} />
      <Route path="/learningdet" element={<Learningdet />} />
    </Routes>
  );
}

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen">
      {isAdminRoute ? <AdminRoutes /> : <PublicRoutes />}
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
