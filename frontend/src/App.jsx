import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Industries from './pages/Industries';
import Careers from './pages/Careers';
import JobDetail from './pages/JobDetail';
import SisterCompany from './pages/SisterCompany';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import AdminPanel from './pages/AdminPanel';
import AdminLogin from './pages/AdminLogin';
import PrivateRoute from './components/PrivateRoute';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import EntryAnimation from './components/EntryAnimation';
import AnimatedPage from './components/AnimatedPage';
import './index.css';

function App() {
  const [showEntry, setShowEntry] = useState(() => {
    // Check session storage immediately during initialization to prevent flicker
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('hasSeenEntry');
    }
    return false;
  });

  useEffect(() => {
    if (showEntry) {
      sessionStorage.setItem('hasSeenEntry', 'true');
    }
  }, [showEntry]);

  return (
    <ThemeProvider>
      <Router>
        <AppContent showEntry={showEntry} setShowEntry={setShowEntry} />
      </Router>
    </ThemeProvider>
  );
}

const AppContent = ({ showEntry, setShowEntry }) => {
  const location = useLocation();

  return (
    <div className={`app-container ${showEntry ? 'overflow-hidden' : ''}`}>
      {showEntry && <EntryAnimation onComplete={() => setShowEntry(false)} />}
      {!showEntry && (
        <>
          <Navbar />
          <main>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname.split('/')[1]}>
                <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
                <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
                <Route path="/services" element={<AnimatedPage><Services /></AnimatedPage>} />
                <Route path="/services/:id" element={<AnimatedPage><ServiceDetail /></AnimatedPage>} />
                <Route path="/industries" element={<AnimatedPage><Industries /></AnimatedPage>} />
                <Route path="/careers" element={<AnimatedPage><Careers /></AnimatedPage>} />
                <Route path="/careers/:id" element={<AnimatedPage><JobDetail /></AnimatedPage>} />
                <Route path="/sister-company" element={<AnimatedPage><SisterCompany /></AnimatedPage>} />
                <Route path="/projects" element={<AnimatedPage><Projects /></AnimatedPage>} />
                <Route path="/certifications" element={<AnimatedPage><Certifications /></AnimatedPage>} />
                <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
                <Route path="/admin/login" element={<AnimatedPage><AdminLogin /></AnimatedPage>} />
                <Route path="/admin/*" element={
                  <PrivateRoute>
                    <AdminPanel />
                  </PrivateRoute>
                } />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </>
      )}
    </div>
  );
};

export default App;
