import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6, // Adjusted for snappier feel
  staggerChildren = false,
  scale = 1,
  blur = false,
  className = ""
}) => {
  const getInitialProps = () => {
    let initial = { opacity: 0 };
    
    if (direction === 'up') initial.y = 50;
    else if (direction === 'down') initial.y = -50;
    else if (direction === 'left') initial.x = 50;
    else if (direction === 'right') initial.x = -50;
    
    if (scale !== 1) initial.scale = scale;
    if (blur) initial.filter = "blur(10px)";
    
    return initial;
  };

  const containerVariants = {
    hidden: getInitialProps(),
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
        when: staggerChildren ? "beforeChildren" : undefined,
        staggerChildren: staggerChildren ? 0.15 : undefined // Standardized stagger gap
      }
    }
  };

  const itemVariants = {
    hidden: getInitialProps(),
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  // If it's a stagger container, we wrap children in motion.div items
  const renderChildren = () => {
    if (staggerChildren && Array.isArray(children)) {
      return children.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ));
    }
    return children;
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {renderChildren()}
    </motion.div>
  );
};

export default ScrollReveal;
