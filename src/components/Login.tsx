import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/search');
  };

  return (
    <div className="font-sans bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center p-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-md bg-white/5 dark:bg-primary/5 backdrop-blur-xl border border-primary/20 p-8 rounded-xl shadow-2xl relative z-10"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4 border border-primary/30">
            <span className="material-symbols-outlined text-primary text-3xl">smart_toy</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2 font-display">欢迎回来</h1>
          <p className="text-slate-600 dark:text-slate-400">安全访问您的智能租赁服务</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300" htmlFor="phone">手机号码</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400 text-sm">phone</span>
              </div>
              <input 
                className="block w-full pl-10 pr-3 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-primary/20 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                id="phone" 
                placeholder="+86 (555) 000-0000" 
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300" htmlFor="code">验证码</label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-slate-400 text-sm">lock_open</span>
                </div>
                <input 
                  className="block w-full pl-10 pr-3 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-primary/20 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                  id="code" 
                  placeholder="6位验证码" 
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              <button className="px-4 py-2 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors border border-primary/20" type="button">获取验证码</button>
            </div>
          </div>

          <button className="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold py-3 px-4 rounded-lg shadow-lg shadow-primary/20 transition-all transform hover:scale-[1.01] active:scale-[0.99]" type="submit">立即登录</button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200 dark:border-primary/20"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-transparent text-slate-500 dark:text-slate-400 backdrop-blur-sm">或通过以下方式继续</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-primary/20 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX52FKQOjIXmyJ8feWNNwtGlFUd1TfnbuTQqEDMW6_YMLAYs08NJDmetnlIiQrnEe985i5BudwbN6WNwvmLwj71_YjIjJyJ6YDFk7PZrlMqTWUo-BWzfydEoiMeMdGKR3iQdMCqG6GFLuNiRdR0CXebcqU9c8DSwij0TRArqdBnyPS8imRu-cAM4A3iqCnGUXdeun-7ayBePfLfOEY7bdLjG58d2xcRgv-eYHQCSIugKTt8aTlCEh0FgoODEvU2-PGbFVoGXstG2A" referrerPolicy="no-referrer" />
            <span className="text-sm font-medium">Google 账号</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-primary/20 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-slate-900 dark:text-white text-xl">apple</span>
            <span className="text-sm font-medium">Apple 账号</span>
          </button>
        </div>

        <div className="mt-8 text-center text-sm">
          <p className="text-slate-500 dark:text-slate-400">还没有 AI Travel 账号？ <a className="text-primary hover:underline font-semibold" href="#">立即注册</a></p>
          <div className="mt-4 flex justify-center gap-4 text-xs text-slate-400 dark:text-slate-500">
            <a className="hover:text-primary" href="#">服务条款</a>
            <span>•</span>
            <a className="hover:text-primary" href="#">隐私政策</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
