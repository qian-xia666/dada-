import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Header, BottomNav } from './Navigation';
import { cn } from '../types';

export const Planner = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-slate-900 dark:text-slate-100 min-h-screen pb-32">
      <Header title="旅行规划师" />
      
      <main className="max-w-xl mx-auto">
        {/* Travel Buddies Summary */}
        <section className="px-4 pt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold">小组偏好</h3>
            <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">4 人活跃</span>
          </div>
          
          <div className="flex flex-col gap-3">
            {[
              { name: 'Sarah 的需求', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDokExDSfMJeBA4_I_xP4GfLtzISjwR1YI2huuGH1GQLHB1SHBXMGSN0lplRhZTZOnCQNcJni9hfuHUokW6HjKg0Olf_z-_ggFsYr5hKuQT6xxZLFz_e-GKjFORzH7Sf1NW4_F5eJFmw2osGAD9_UV1AmHvGak8Nx7BpJZ9zvads7AzD4eaGpZf6maks3uPXRnysJYxNzOffcyenDOo3cWgMzB266Ak36pf6ITw37K54zeIzgkygaE9L3RbSZvX4uu20BaV2DJfNhA', border: 'border-primary' },
              { name: 'Jordan 的需求', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADqjycEkwoHsLPCWF5shftCmBQVk8olo9Tmsq2Lv24DqKJp6xbKuGGUXcUtoB1dlx2SkRYLA7wEUyL_abc7Q5zbuQGId2WloixAlpOCypy-fJ8PjRvluwCu8lU2QwsnS2jZKU-Xw-403JEmUSs5MPCutSd_ICvteDWz4F1siJnCeZNwZMb14xc3rWCRBZg8ctFyjC0_Unzo4_kuZHcHPbhTfiy0SFbr0F1_CwHn86hT_jt5wCXzfOiyAnPKYhD6r_JGScpPwxAvEI', border: 'border-slate-400' }
            ].map((buddy, i) => (
              <div key={i} className="flex items-center gap-4 bg-slate-100 dark:bg-surface-dark p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                <div 
                  className={cn("bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 shrink-0 border-2", buddy.border)}
                  style={{ backgroundImage: `url("${buddy.avatar}")` }}
                ></div>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between items-start">
                    <p className="text-slate-900 dark:text-slate-100 text-base font-bold">{buddy.name}</p>
                    <span className="material-symbols-outlined text-slate-400 text-lg cursor-pointer">edit_note</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">日本，京都 • 10 天</p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">宁静寺庙、茶道、极简酒店</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Recommendations */}
        <section className="px-4 pt-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary">auto_awesome</span>
            <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold">AI 小组推荐</h3>
          </div>
          
          <div className="space-y-6">
            <RecommendationCard 
              title="新仓山浅间公园（忠灵塔）"
              subtitle="摄影与观光的绝佳之选"
              match={98}
              desc="完美结合了 Sarah 对寺庙的兴趣和 Jordan 对摄影的热情。这是最佳的小组合影地点。"
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuDEdmWL5_te7d9qFXMMaf215L0WlPehPz72GkuL8bR6H6crZJF4Q6F_Lz2drZSRoUtHbr46bvm8oSnJnDOGaJsm1Y9SF9PVeH9Nu5-0qIHPj1dA99aZwtFFUU1dCqiQZGCwpT69rfpoOrN_kqLzTfRT8PdnVfcJ4aF78QNbG93ULfiudLNG31tp0TCFowSBoPPixlnZ03JdjpZu8bttlpyJiYh14eRnVaiAW1yPVPCy3o2WPc8KFLFdMMjHDu0CjGdRhwSYYwgtd9I"
              actionIcon="calendar_add_on"
              actionText="加入行程"
            />
            
            <RecommendationCard 
              title="寿司 斋藤 六本木"
              subtitle="高端餐饮 • 东京"
              match={94}
              desc="顶级的厨师发办（Omakase）体验，契合 Jordan 对寿司的偏好和 Sarah 对极简奢华的热爱。"
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuA0Z7YRYjjhsZV34tpL0gL66-LwcHuLcf-jSZBqh3XJiuWmU8LUpdpE5iRhbhsZfjm2H7D5y4oIRD73U1_qBOEbvX3plM5oGSkhDjZ-r3gYFFtKhjwiE3zTBt34WQ4xYIw5Vgelqfvw3MBxvHsLTG5chBrlkQVzXuMs15uO1iquNugRNy_kvWa1MI9B_xodcDVSCzaPCoao18vwV-xnllX4xkTG_fZuvyZq5kS22hcRWySAlzMMop8_eFzhpREIAQ0NBy4bHxgNWi4"
              actionIcon="confirmation_number"
              actionText="立即预订"
              darkAction
            />
          </div>
        </section>
      </main>

      {/* Action Bar */}
      <div className="fixed bottom-20 left-0 right-0 z-20 px-4 py-4 bg-slate-100 dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 flex gap-3 shadow-2xl">
        <button className="flex-1 bg-primary/20 hover:bg-primary/30 text-primary font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">edit</span> 手动编辑
        </button>
        <button 
          onClick={() => navigate('/itinerary')}
          className="flex-[2] bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
        >
          <span className="material-symbols-outlined">task_alt</span> 确定方案
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

const RecommendationCard = ({ title, subtitle, match, desc, img, actionIcon, actionText, darkAction = false }: any) => (
  <div className="group relative overflow-hidden rounded-xl bg-slate-100 dark:bg-surface-dark border border-slate-200 dark:border-slate-800">
    <div 
      className="h-48 w-full bg-center bg-cover" 
      style={{ backgroundImage: `url("${img}")` }}
    ></div>
    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">{title}</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
        </div>
        <div className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">{match}% 匹配</div>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">{desc}</p>
      <button className={cn(
        "w-full font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2",
        darkAction 
          ? "bg-slate-900 dark:bg-white dark:text-slate-900 text-white" 
          : "bg-primary hover:bg-primary/90 text-white"
      )}>
        <span className="material-symbols-outlined text-sm">{actionIcon}</span> {actionText}
      </button>
    </div>
  </div>
);
