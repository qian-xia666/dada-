import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../types';

interface NavItemProps {
  to: string;
  icon: string;
  label: string;
  active?: boolean;
}

const NavItem = ({ to, icon, label, active }: NavItemProps) => (
  <Link 
    to={to} 
    className={cn(
      "flex flex-col items-center gap-1 transition-colors",
      active ? "text-primary" : "text-slate-400"
    )}
  >
    <span className={cn("material-symbols-outlined", active && "fill-current")}>{icon}</span>
    <span className="text-[10px] font-medium">{label}</span>
  </Link>
);

export const BottomNav = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-primary/10 px-6 py-3 pb-6 flex justify-between items-center z-50">
      <NavItem to="/search" icon="search" label="搜索" active={location.pathname === '/search'} />
      <NavItem to="/itinerary" icon="calendar_today" label="行程" active={location.pathname === '/itinerary'} />
      
      <div className="relative -top-6">
        <Link 
          to="/veo" 
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-background-dark shadow-lg shadow-primary/20 transition-transform hover:scale-110"
        >
          <span className="material-symbols-outlined text-[28px]">movie</span>
        </Link>
      </div>

      <NavItem to="/planner" icon="smart_toy" label="AI 洞察" active={location.pathname === '/planner'} />
      <NavItem to="/profile" icon="person" label="个人中心" active={location.pathname === '/profile'} />
    </nav>
  );
};

export const Header = ({ title, showBack = true }: { title: string; showBack?: boolean }) => (
  <header className="flex items-center justify-between p-4 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-primary/10">
    <div className="flex items-center gap-3">
      {showBack ? (
        <button onClick={() => window.history.back()} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
      ) : (
        <div className="bg-primary/20 p-2 rounded-lg">
          <span className="material-symbols-outlined text-primary">auto_awesome</span>
        </div>
      )}
      <h1 className="text-xl font-bold tracking-tight">{title}</h1>
    </div>
    <div className="size-10 rounded-full border-2 border-primary/30 overflow-hidden">
      <img 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuEUBX-g6TWXCeyFyD87kFgTkdo7yGibhvynVjLW3MPn4SqmBVPtqoztRKQAWIslek8Argn-8Mx-Y8OyjEmzrSD9ZytYdXEqrtCDw3DMuF32NfB_56oUjfBP19Mtvw7Xv9hFCxamPKw4TPJwhY1OLLB8O80xwTUTFVjKknznqNBNFQlxXoFvEjXz7inVFYowgypgelluqXwzSBHVoIKxrq3AqRY322lvfMl2wJ3WJARMfNfakP6u8k5mfq0HbIL7CSb1iieeSvV8w" 
        alt="Profile" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  </header>
);
