import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#f49d25] overflow-hidden font-sans">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-20%] w-[140%] h-[60%] bg-white/10 rounded-[100%] rotate-[-15deg]"></div>
        <div className="absolute top-[10%] right-[-30%] w-[100%] h-[50%] bg-white/5 rounded-[100%] rotate-[10deg]"></div>
      </div>

      {/* Header */}
      <div className="flex items-center p-8 justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#f49d25]">
            <span className="material-symbols-outlined font-bold">smart_toy</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white uppercase font-display">Dada</span>
        </div>
        <button className="text-white/80 hover:text-white transition-colors">
          <span className="material-symbols-outlined text-2xl">language</span>
        </button>
      </div>

      {/* Hero Content */}
      <div className="flex w-full flex-col items-center px-8 pt-12 z-10 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-7xl font-black tracking-tighter mb-2 italic">WELCOME</h2>
          <h1 className="text-white text-4xl font-bold mb-4">欢迎来到DADA租车</h1>
          <p className="text-white/90 text-lg mb-12 max-w-[280px] mx-auto leading-tight">
            您的 AI 智能出行助手，量身定制每一段自驾旅程
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-8 mb-12 w-full max-w-sm">
          {[
            { icon: 'bolt', label: '极速提车' },
            { icon: 'shield', label: '全程保障' },
            { icon: 'smart_toy', label: '智能规划' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <span className="material-symbols-outlined text-white text-3xl">{item.icon}</span>
              </div>
              <span className="text-xs text-white font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="w-full max-w-sm"
        >
          <Link 
            to="/login" 
            className="w-full flex items-center justify-center gap-3 bg-[#e88d15] hover:bg-[#d67d0d] text-white py-5 rounded-2xl text-xl font-bold shadow-xl transition-all active:scale-95"
          >
            立即开启智能租车
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          
          <div className="mt-6 flex items-center justify-center gap-2 text-white/80 text-xs">
            <div className="w-2 h-2 rounded-full bg-white/60"></div>
            <p>
              点击开启即表示您同意 <span className="underline">服务条款</span> 和 <span className="underline">隐私政策</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Robot Mascot at Bottom */}
      <div className="mt-auto relative w-full flex justify-center pointer-events-none">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="w-full max-w-md translate-y-12"
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdFm5eg-Je-I4_qv3RxMVWnkS_vJUAeZl4YdGIORNG5zeXWoEA9lgJOMYspJ4MrGKUHB3rP8JG7PFa1HiFf_se6hseDczeWcb0eLeIrjtysZufb2T1xtHBc6Thz46LmWn90snQUvrgL9LtrsqBj2rSvZTNdVijtAREgfjfMWkLIfSVGlqj_dcXU8hbUcbD2P7WGKSGDboWuwuhUvqZNJcIYECIgu-qbxrki6kZMVzzUa9rqIcWyTQCpDfvxHKUs5WxuZG5m-zjkeg" 
            alt="Robot Mascot" 
            className="w-full h-auto object-contain drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  );
};

