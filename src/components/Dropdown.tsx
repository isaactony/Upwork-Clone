import React from 'react';
import { ExternalLink } from 'lucide-react';

interface DropdownItem {
  label: string;
  description?: string;
  hasExternalIcon?: boolean;
  hasSubmenu?: boolean;
  isProfile?: boolean;
  isToggle?: boolean;
  avatar?: string;
  icon?: React.ElementType;
  onClick?: string;
}

interface DropdownSection {
  title?: string;
  items: DropdownItem[];
}

interface DropdownProps {
  sections: DropdownSection[];
  isOpen: boolean;
  className?: string;
  onItemClick?: (onClick?: string) => void;
}

export default function Dropdown({ sections, isOpen, className = '', onItemClick }: DropdownProps) {
  if (!isOpen) return null;

  return (
    <div className={`absolute top-full mt-1 bg-gray-900 rounded-lg shadow-lg border border-gray-800 overflow-hidden ${className}`}>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className={`py-2 ${sectionIndex !== 0 ? 'border-t border-gray-800' : ''}`}>
          {section.title && (
            <h3 className="px-4 py-2 text-sm font-medium text-gray-500">
              {section.title}
            </h3>
          )}
          {section.items.map((item, itemIndex) => (
            <button
              key={itemIndex}
              className="w-full px-4 py-2 text-left hover:bg-gray-800 flex items-center justify-between"
              onClick={() => onItemClick?.(item.onClick)}
            >
              <div className="flex items-center space-x-3">
                {item.icon && <item.icon className="h-5 w-5 text-gray-400" />}
                {item.isProfile && item.avatar && (
                  <img src={item.avatar} alt="" className="h-10 w-10 rounded-full" />
                )}
                <div>
                  <div className="text-white">{item.label}</div>
                  {item.description && (
                    <div className="text-sm text-gray-400">{item.description}</div>
                  )}
                </div>
              </div>
              {item.hasExternalIcon && <ExternalLink className="h-4 w-4 text-gray-400" />}
              {item.hasSubmenu && (
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {item.isToggle && (
                <div className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-700 transition-colors duration-200 ease-in-out focus:outline-none">
                  <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-green-500 shadow ring-0 transition duration-200 ease-in-out"></span>
                </div>
              )}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}