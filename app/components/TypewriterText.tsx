'use client';

import { useState, useEffect, FC } from 'react';
import { TypewriterProps } from '../types';

const DEFAULT_TYPING_SPEED = 80;
const DEFAULT_DELETING_SPEED = 50;
const DEFAULT_PAUSE_TIME = 2000;

export const TypewriterText: FC<TypewriterProps> = ({ 
  text, 
  typingSpeed = DEFAULT_TYPING_SPEED, 
  deletingSpeed = DEFAULT_DELETING_SPEED,
  pauseTime = DEFAULT_PAUSE_TIME,
  className = '' 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handlePause = () => {
      const timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(timeout);
    };

    const handleTyping = () => {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    };

    const handleDeleting = () => {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length - 1));
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    };

    if (isPaused) {
      return handlePause();
    }

    if (!isDeleting && displayText.length < text.length) {
      return handleTyping();
    }

    if (!isDeleting && displayText.length === text.length) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && displayText.length > 0) {
      return handleDeleting();
    }

    if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
    }
  }, [displayText, isDeleting, isPaused, text, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse text-current" aria-hidden="true">|</span>
    </span>
  );
};
