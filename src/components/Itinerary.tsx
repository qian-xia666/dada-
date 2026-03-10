import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Header, BottomNav } from './Navigation';
import { cn } from '../types';

export const Itinerary = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col pb-24">
      <Header title="我的行程" />
      
      <div className="px-4 py-4">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/10 border border-primary/20">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 animate-ping rounded-full bg-primary/40"></div>
            <div className="relative bg-primary p-2 rounded-full">
              <span className="material-symbols-outlined text-background-dark text-sm fill-current">graphic_eq</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-bold text-primary">DADA AI 助手正在为您导览</p>
              <span className="text-xs font-medium text-primary">100%</span>
            </div>
            <div className="h-1.5 w-full bg-primary/20 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex border-b border-primary/10 px-4 overflow-x-auto no-scrollbar">
        {['第1天', '第2天', '第3天', '第4天'].map((day, i) => (
          <button 
            key={day} 
            className={cn(
              "flex flex-col items-center justify-center border-b-2 px-4 py-3 shrink-0 transition-all",
              i === 0 ? "border-primary text-primary" : "border-transparent text-slate-500 dark:text-slate-400"
            )}
          >
            <span className={cn("text-sm", i === 0 ? "font-bold" : "font-medium")}>{day}</span>
          </button>
        ))}
      </div>

      <main className="flex-1 p-4 space-y-6">
        {/* Item 1 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-1">
            <div className="bg-primary/20 p-2 rounded-full">
              <span className="material-symbols-outlined text-primary">directions_car</span>
            </div>
            <div className="w-0.5 bg-primary/20 grow rounded-full"></div>
          </div>
          <div className="flex-1 bg-white dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100">取车: 城市越野 SUV</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">09:00 - 首都机场 T3 航站楼柜台</p>
              </div>
              <span className="text-xs font-bold px-2 py-1 bg-primary/20 text-primary rounded">已确认</span>
            </div>
            <div className="flex items-center gap-2 mt-3 text-sm text-primary font-medium">
              <span className="material-symbols-outlined text-sm">key</span>
              <span>取车码: 8829-01</span>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-1">
            <div className="bg-primary/20 p-2 rounded-full">
              <span className="material-symbols-outlined text-primary">museum</span>
            </div>
            <div className="w-0.5 bg-primary/20 grow rounded-full"></div>
          </div>
          <div className="flex-1 space-y-3">
            <div 
              onClick={() => navigate('/navigation-ai')}
              className="bg-white dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm cursor-pointer hover:border-primary/50 transition-all active:scale-[0.98]"
            >
              <h3 className="font-bold text-slate-900 dark:text-slate-100">游览景点: 故宫博物院</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">11:00 - 凭电子票入园 (午门)</p>
              <div className="mt-4 aspect-video rounded-lg overflow-hidden relative">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8Bra37TEPmOkH4OjENqVgyeI2yNEQ9KhIhwB0jb0JStu1QuRhoJ8fMDYMoUZ5m_bC89AXrHUsSNBVvfzNVh9DzhI5fuIUiukzvEMnoOgMJROwmBpC1_5jMn-M-d8t0Up6UNiM9T4SkpwnVGMoPsR9jMEdi27judALpUCJOcs-9NxD9ty9CGdZLutMs9MYfTajo1TqMOgEI8AHNp3aUind6qPv9fwBUOrTObAOxAfaAphua3ulIWOCKFu2LPssv9vtM9BzUWNhsbg" 
                  alt="故宫" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md p-1.5 rounded-lg border border-white/20">
                  <span className="material-symbols-outlined text-white text-sm">map</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-1">
            <div className="bg-primary/20 p-2 rounded-full">
              <span className="material-symbols-outlined text-primary">restaurant</span>
            </div>
            <div className="w-0.5 bg-primary/20 grow rounded-full"></div>
          </div>
          <div className="flex-1 bg-white dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100">午餐: 全聚德烤鸭店</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">13:00 - 已预订窗边位</p>
              </div>
              <div className="flex gap-1">
                <span className="material-symbols-outlined text-primary text-sm fill-current">star</span>
                <span className="text-xs font-bold text-slate-900 dark:text-slate-100">4.8</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-24 right-6 z-40">
        <button className="size-14 bg-primary rounded-full shadow-lg shadow-primary/40 flex items-center justify-center text-background-dark transition-transform hover:scale-110 active:scale-95">
          <span className="material-symbols-outlined text-3xl fill-current">mic</span>
        </button>
      </div>

      <BottomNav />
    </div>
  );
};
