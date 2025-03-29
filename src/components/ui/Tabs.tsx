'use client';

import { forwardRef, useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: Tab[];
  defaultTab?: string;
  onTabChange?: (tabId: string) => void;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ 
    tabs, 
    defaultTab,
    onTabChange,
    className = '',
    ...props 
  }, ref) => {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

    const handleTabChange = (tabId: string) => {
      setActiveTab(tabId);
      onTabChange?.(tabId);
    };

    return (
      <div
        ref={ref}
        className={`w-full ${className}`}
        {...props}
      >
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                  ${activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-6">
          {tabs.find(tab => tab.id === activeTab)?.content}
        </div>
      </div>
    );
  }
);

Tabs.displayName = 'Tabs'; 