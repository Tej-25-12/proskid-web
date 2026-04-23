import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Phone, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Careers', path: '/careers' },
    { name: 'Sister Co.', path: '/sister-company' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-info">
            <span><Phone size={14} /> +1 (555) 123-4567</span>
            <span><Mail size={14} /> info@proskidengineering.com</span>
          </div>
          <div className="top-announcement">
            <span>Global Industrial Solutions & Workforce Deployment</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="container main-nav">
        <Link to="/" className="logo">
          <Logo size={40} />
        </Link>

        {/* Desktop Nav */}
        <div className="desktop-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="mobile-controls">
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
