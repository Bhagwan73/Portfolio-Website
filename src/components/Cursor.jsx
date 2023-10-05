import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css/Cursor.css';

export default function StylishCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  return (
    <motion.div
      className='custom-cursor'
      style={{ left: cursorPosition.x, top: cursorPosition.y }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 2 }}
    >
    </motion.div>
  );
};

