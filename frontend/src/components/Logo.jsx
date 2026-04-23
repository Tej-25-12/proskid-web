import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ size = 40, showText = true, animated = false, className = "" }) => {
  const strokeColor = "var(--accent-primary)";
  const textColor = "var(--text-primary)";

  return (
    <div className={`logo-container ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hexagonal Industrial Mark */}
        <motion.path
          d="M50 5L89.5 27.5V72.5L50 95L10.5 72.5V27.5L50 5Z"
          stroke={strokeColor}
          strokeWidth="6"
          strokeLinejoin="round"
          initial={animated ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Internal Mechanical Lines/Flow */}
        <motion.path
          d="M30 35L50 45L70 35M50 45V75M30 65L50 75L70 65"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
          initial={animated ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
        />
        
        {/* Central Precision Point */}
        <motion.circle
          cx="50"
          cy="45"
          r="4"
          fill={strokeColor}
          initial={animated ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
      </svg>

      {showText && (
        <motion.div 
          className="logo-text-wrapper"
          initial={animated ? { x: -10, opacity: 0 } : { x: 0, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <span className="logo-main" style={{ 
            fontSize: size * 0.6, 
            fontWeight: 800, 
            letterSpacing: '2px', 
            color: textColor,
            display: 'block',
            lineHeight: 1
          }}>
            PRO<span style={{ color: strokeColor }}>SKID</span>
          </span>
          <span className="logo-sub" style={{ 
            fontSize: size * 0.22, 
            fontWeight: 700, 
            letterSpacing: '4px', 
            color: 'var(--text-muted)',
            display: 'block',
            marginTop: '2px',
            textTransform: 'uppercase'
          }}>
            Engineering
          </span>
        </motion.div>
      )}
    </div>
  );
};

export default Logo;
