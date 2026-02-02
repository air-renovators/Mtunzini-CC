
import React from 'react';

interface IconProps {
  path: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ path, className = "w-6 h-6", onClick }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    onClick={onClick}
  >
    {path}
  </svg>
);

export default Icon;
