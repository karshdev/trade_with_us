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
        <div className="border-b border-[#0000000D]">
          <nav className="-mb-px flex space-x-4" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`
                  whitespace-nowrap py-2 font-inter px-1 cursor-pointer border-b-2  text-sm
                  ${activeTab === tab.id
                    ? 'border-[#12A150] text-[#14171F] font-bold'
                    : 'border-transparent text-black-14 font-medium hover:text-black-14 hover:border-black-14 hover:font-bold'
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