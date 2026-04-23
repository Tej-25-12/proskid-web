import React from 'react';
import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/1234567890" 
      className="floating-wa" 
      target="_blank" 
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={30} />
      <span className="wa-tooltip">Need Help? Chat with us!</span>
    </a>
  );
};

export default FloatingWhatsApp;
