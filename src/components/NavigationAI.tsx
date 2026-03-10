import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Header, BottomNav } from './Navigation';
import { cn } from '../types';

export const NavigationAI = () => {
  const [navigating, setNavigating] = useState(false);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col pb-24">
      <Header title="AI 智能导航" />
      
      <main className="flex-1 relative">
        {/* Map Background Placeholder */}
        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEdmWL5_te7d9qFXMMaf215L0WlPehPz72GkuL8bR6H6crZJF4Q6F_Lz2drZSRoUtHbr46bvm8oSnJnDOGaJsm1Y9SF9PVeH9Nu5-0qIHPj1dA99aZwtFFUU1dCqiQZGCwpT69rfpoOrN_kqLzTfRT8PdnVfcJ4aF78QNbG93ULfiudLNG31tp0TCFowSBoPPixlnZ03JdjpZu8bttlpyJiYh14eRnVaiAW1yPVPCy3o2WPc8KFLFdMMjHDu0CjGdRhwSYYwgtd9I" 
            alt="Map" 
            className="w-full h-full object-cover opacity-50 blur-sm"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-light dark:to-background-dark"></div>
        </div>

        <div className="relative z-10 p-6 flex flex-col h-full">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl border border-primary/20 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/20 p-3 rounded-xl">
                <span className="material-symbols-outlined text-primary text-3xl">explore</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">故宫博物院</h2>
                <p className="text-sm text-slate-500">距离您当前位置 2.4 公里</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-primary">timer</span>
                <span>预计到达时间: <span className="font-bold">12 分钟</span></span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="material-symbols-outlined text-primary">traffic</span>
                <span>路况: <span className="text-emerald-500 font-bold">畅通</span></span>
              </div>
            </div>

            {!navigating ? (
              <button 
                onClick={() => setNavigating(true)}
                className="w-full mt-8 bg-primary text-background-dark font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <span className="material-symbols-outlined">navigation</span>
                开始导航
              </button>
            ) : (
              <div className="mt-8 space-y-4">
                <div className="p-4 bg-primary/10 border border-primary/30 rounded-xl flex items-center gap-3 animate-pulse">
                  <span className="material-symbols-outlined text-primary">directions</span>
                  <span className="font-bold text-primary">正在为您实时导航...</span>
                </div>
                <button 
                  onClick={() => setNavigating(false)}
                  className="w-full bg-slate-200 dark:bg-slate-700 font-bold py-3 rounded-xl"
                >
                  停止导航
                </button>
              </div>
            )}
          </motion.div>

          {navigating && (
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="mt-6 bg-primary text-background-dark p-4 rounded-xl font-bold flex items-center gap-3 shadow-xl"
            >
              <span className="material-symbols-outlined text-3xl">turn_right</span>
              <div className="flex-1">
                <p className="text-xs uppercase opacity-70">前方 300 米</p>
                <p className="text-lg">右转进入长安街</p>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};
