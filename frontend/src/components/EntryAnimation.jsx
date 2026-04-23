import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import './EntryAnimation.css';

const EntryAnimation = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Allow time for exit animation
    }, 3500); // 3.5 seconds total

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="entry-animation-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="entry-content">
            <Logo size={120} animated={true} />
            
            <motion.div 
              className="tagline-reveal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              <div className="divider"></div>
              <p>Workforce & Mechanical Excellence</p>
            </motion.div>
          </div>

          <motion.div 
            className="loading-bar-wrapper"
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 3, ease: "linear" }}
          >
            <div className="loading-bar-progress"></div>
          </motion.div>

          <button className="skip-btn" onClick={() => setIsVisible(false)}>
            Skip Animation
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EntryAnimation;
