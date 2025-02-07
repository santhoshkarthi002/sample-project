import React from "react";

interface TooltipProps {
  text: string;
  position?: "top" | "bottom" | "left" | "right";
  enabled?: boolean; // Enable or disable the tooltip
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, position = "top", enabled = true, children }) => {
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div className="relative group w-max">
      {children}
      {enabled && (
        <div
          className={`absolute ${positionClasses[position]} hidden group-hover:block bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-lg whitespace-nowrap`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
