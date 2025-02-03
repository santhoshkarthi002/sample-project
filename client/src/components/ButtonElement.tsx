// src/components/Button.tsx
import React from 'react';

type ButtonProps = {
  type?: 'submit' | 'button'; // Type of button (submit or button)
  colorVariant?: 'primary' | 'secondary' | 'danger' | 'success'; // Color variant for the button
  size?: 'small' | 'medium' | 'large'; // Button size
  width?: 'full' | 'auto' | string; // Button width: 'full', 'auto', or custom class
  disabled?: boolean; // Disable button
  onClick?: () => void; // Click handler for button
  children: React.ReactNode; // Button text or content
};

const ButtonElement: React.FC<ButtonProps> = ({
  type = 'button',
  colorVariant = 'primary',
  size = 'medium',
  width = 'auto', // Default width is 'auto'
  disabled = false,
  onClick,
  children,
}) => {
  // Define color classes based on the color variant
  const colorClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
    danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
    success: 'bg-green-600 hover:bg-green-700 focus:ring-green-500',
  };

  // Define size classes based on the button size
  const sizeClasses = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };

  // Determine the width class based on the width prop
  const widthClasses = width === 'full' ? 'w-full' : width;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`block ${colorClasses[colorVariant]} ${sizeClasses[size]} ${widthClasses} text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50`}
    >
      {children}
    </button>
  );
};

export default ButtonElement;
