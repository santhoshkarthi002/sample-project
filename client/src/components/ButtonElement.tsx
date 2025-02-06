// src/components/Button.tsx
import React from "react";

type ButtonProps = {
  type?: "submit" | "button"; // Type of button (submit or button)
  colorVariant?: "primary" | "secondary" | "danger" | "success"; // Color variant for the button
  size?: "small" | "medium" | "large"; // Button size
  width?: "full" | "auto" | string; // Button width: 'full', 'auto', or custom class
  disabled?: boolean; // Disable button
  onClick?: () => void; // Click handler for button
  variant?: "contained" | "outlined" | "text"; // Button variant
  icon?: React.ReactNode; // Icon as a React element (e.g., <FontAwesomeIcon />)
  iconPosition?: "left" | "right"; // Position of the icon relative to the label
  isLoading?: boolean;
  label: string;
};

const ButtonElement: React.FC<ButtonProps> = ({
  type = "button",
  colorVariant = "primary",
  size = "medium",
  variant = "contained",
  width = "auto", // Default width is 'auto'
  disabled = false,
  onClick,
  icon,
  iconPosition = "left",
  isLoading = false,
  label,
}) => {
  // Define color classes based on the color variant
  const colorClasses = {
    primary: `${
      variant === "contained"
        ? "bg-blue-600 hover:bg-blue-700 text-white"
        : variant === "outlined"
        ? "border-blue-600 hover:shadow-blue-400 text-blue-600"
        : "text-blue-600"
    }  focus:ring-blue-500`,

    secondary: `${
      variant === "contained"
        ? "bg-gray-600 hover:bg-gray-700 text-white"
        : variant === "outlined"
        ? "border-gray-600 hover:shadow-gray-100 text-gray-600"
        : "text-gray-600"
    }  focus:ring-gray-500`,
    danger: `${
      variant === "contained"
        ? "bg-red-600 hover:bg-red-700 text-white"
        : variant === "outlined"
        ? "border border-red-600 text-red-600"
        : "text-red-600"
    }  focus:ring-red-500`,
    success: `${
      variant === "contained"
        ? "bg-green-600 hover:bg-green-700 text-white"
        : variant === "outlined"
        ? "border-green-600 hover:sahdow-green-100 text-green-600"
        : "text-green-600"
    }  focus:ring-green-500`,
  };

  // Define size classes based on the button size
  const sizeClasses = {
    small: "py-1 px-3 text-sm",
    medium: "py-2 px-4 text-base",
    large: "py-3 px-6 text-lg",
  };

  // Determine the width class based on the width prop
  const widthClasses = width === "full" ? "w-full" : width;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      style={{
        // backgroundColor: disabled || isLoading ? "#d1d5db" : "", // Gray for disabled or provided color
        cursor: disabled || isLoading ? "not-allowed" : "pointer",
      }}
      className={` flex flex-row items-center justify-center space-x-2 ${
        disabled || isLoading ? "#d1d5db" : colorClasses[colorVariant]
      }  ${
        sizeClasses[size]
      } ${widthClasses} cursor-pointer font-semibold rounded-md focus:outline-none disabled:opacity-50`}
    >
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          {icon && iconPosition === "left" && <span>{icon}</span>}
          <span>{label}</span>
          {icon && iconPosition === "right" && <span>{icon}</span>}
        </>
      )}
    </button>
  );
};

export default ButtonElement;
