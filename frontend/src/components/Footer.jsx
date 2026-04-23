import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Send, Globe, Camera, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span className="logo-text">PRO<span className="accent">SKID</span></span>
              <span className="logo-sub">ENGINEERING</span>
            </Link>
            <p className="footer-desc">
              Leading the way in mechanical excellence and industrial workforce solutions. 
              Providing world-class engineering services across global industries.
            </p>
            <div className="social-links">
              <a href="#"><MessageCircle size={20} /></a>
              <a href="#"><Send size={20} /></a>
              <a href="#"><Globe size={20} /></a>
              <a href="#"><Camera size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/projects">Projects</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Piping & Fabrication</Link></li>
              <li><Link to="/services">Pressure Vessels</Link></li>
              <li><Link to="/services">Pump Maintenance</Link></li>
              <li><Link to="/services">Skid Fabrication</Link></li>
              <li><Link to="/services">Manpower Supply</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <div className="contact-item">
              <MapPin size={20} className="accent" />
              <span>123 Industrial Park, Engineering Way, Houston, TX</span>
            </div>
            <div className="contact-item">
              <Phone size={20} className="accent" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <Mail size={20} className="accent" />
              <span>info@proskidengineering.com</span>
            </div>
            <div className="newsletter">
              <p>Subscribe to our newsletter</p>
              <div className="subscribe-form">
                <input type="email" placeholder="Email Address" />
                <button><ArrowRight size={20} /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PROSKID Engineering. All Rights Reserved.</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
