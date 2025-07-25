import { ReactNode, useState } from "react";
import { FaCheck } from "react-icons/fa";

interface ToolTipProps {
  children: ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  showIcon?: boolean;
  iconColor?: string;
}

export default function ToolTip({
  children,
  content,
  position = 'top',
  className = '',
  showIcon = false,
  iconColor = 'text-green-500'
}: ToolTipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };

  const arrowClasses = {
    top: 'top-full left-1/2 transform -translate-x-1/2 border-t-gray-800',
    bottom: 'bottom-full left-1/2 transform -translate-x-1/2 border-b-gray-800',
    left: 'left-full top-1/2 transform -translate-y-1/2 border-l-gray-800',
    right: 'right-full top-1/2 transform -translate-y-1/2 border-r-gray-800'
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}

      <div className={`absolute z-50 ${positionClasses[position]} transition-all duration-200 ease-out ${isVisible
        ? 'opacity-100 scale-100 translate-y-0'
        : 'opacity-0 scale-95 translate-y-1 pointer-events-none'
        }`}>
        <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap transform transition-all duration-200 ease-out flex items-center gap-2">
          {content}
          {showIcon && <FaCheck className={iconColor} size={14} />}
          <div className={`absolute w-0 h-0 border-4 border-transparent ${arrowClasses[position]} transition-all duration-200 ease-out`}></div>
        </div>
      </div>
    </div>
  );
}