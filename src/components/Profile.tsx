import React from 'react';
import { motion } from 'motion/react';
import { Header, BottomNav } from './Navigation';

export const Profile = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col pb-24">
      <Header title="个人资料" />
      
      <main className="flex-1 overflow-y-auto">
        <section className="p-6 flex flex-col items-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-primary p-1">
              <div 
                className="w-full h-full rounded-full bg-cover bg-center" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCS9G8bXNujTwGgq9QrNmpGJRNGZW10cqaE7rPUZ96IQdv0AsXEWa7bqaL-gq2UfTAXx0RTizncRSFMudczJVlAQo0iRqCuDFzF76-nLHxV02vpjobm042A_GkPt7RVYsBZa4VGzMfU4HvEUx_kuVp3WKUZRbFktZ3bRFell9Qu5MwlqSy9HEZa4wWRsd9GWwwm-Iu9agjA1jiqQ7pxwc6EQKdS8eSJX_fSwQHg4UQbsFga2PkAFLtWOdH16ABG0V4MbPJkKzciAkE')" }}
              >
              </div>
            </div>
            <div className="absolute bottom-1 right-1 bg-primary text-background-dark rounded-full p-1.5 flex items-center justify-center shadow-lg cursor-pointer">
              <span className="material-symbols-outlined text-sm">edit</span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-2xl font-bold font-display">Marcus Cheng</h2>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-0.5 rounded-full border border-primary/30">8级探险家</span>
              <span className="text-slate-500 dark:text-slate-400 text-sm">• 2024年1月加入</span>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-3 gap-3 px-4 mb-8">
          {[
            { label: '预订', value: '24' },
            { label: '计划', value: '12' },
            { label: '评价', value: '85' }
          ].map(stat => (
            <div key={stat.label} className="bg-primary/5 dark:bg-primary/10 border border-primary/20 p-4 rounded-xl flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-primary font-display">{stat.value}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider font-medium">{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="px-4 space-y-2">
          <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest px-2 mb-3">旅行管理</h3>
          {[
            { icon: 'confirmation_number', label: '我的预订' },
            { icon: 'map', label: '我的旅行计划' },
            { icon: 'airline_seat_recline_normal', label: '我的司机' }
          ].map(item => (
            <a key={item.label} className="flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-800/40 rounded-xl hover:bg-primary/5 transition-colors" href="#">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <span className="font-medium">{item.label}</span>
              </div>
              <span className="material-symbols-outlined text-slate-400">chevron_right</span>
            </a>
          ))}
        </section>

        <section className="px-4 mt-8 space-y-2">
          <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest px-2 mb-3">偏好设置</h3>
          {[
            { icon: 'settings', label: '账户设置' },
            { icon: 'payments', label: '支付方式' }
          ].map(item => (
            <a key={item.label} className="flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-800/40 rounded-xl hover:bg-primary/5 transition-colors" href="#">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-700/50 flex items-center justify-center text-slate-600 dark:text-slate-300">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <span className="font-medium">{item.label}</span>
              </div>
              <span className="material-symbols-outlined text-slate-400">chevron_right</span>
            </a>
          ))}
          <a className="flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-800/40 rounded-xl hover:bg-primary/5 transition-colors" href="#">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-700/50 flex items-center justify-center text-red-400">
                <span className="material-symbols-outlined">logout</span>
              </div>
              <span className="font-medium text-red-400">退出登录</span>
            </div>
          </a>
        </section>
      </main>
      <BottomNav />
    </div>
  );
};
