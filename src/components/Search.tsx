import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Header, BottomNav } from './Navigation';
import { cn } from '../types';

export const Search = () => {
  const [passengers, setPassengers] = useState('3-4');
  const [comfort, setComfort] = useState('经济型');
  const [terrain, setTerrain] = useState('山地公路');
  const [isMatching, setIsMatching] = useState(false);
  const [results, setResults] = useState<any[] | null>(null);

  const handleMatch = () => {
    setIsMatching(true);
    // Simulate AI matching
    setTimeout(() => {
      const mockResults = [
        {
          id: '1',
          name: 'Volvo Concept Recharge',
          price: 158,
          image: 'https://aistudio.google.com/_/upload/77a79ac1-0c9f-4681-b2aa-da12828a742b/attachment/1773147408.339816000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::9ad6ce290e7e5fe7:000001ea764018bc:00064cab0d645e4f',
          match: 98,
          tags: ['未来设计', '纯电驱动']
        },
        {
          id: '2',
          name: 'Porsche 911 Custom',
          price: 320,
          image: 'https://aistudio.google.com/_/upload/77a79ac1-0c9f-4681-b2aa-da12828a742b/attachment/1773147408.339816000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::7914289303bb5796:000001ea764018bc:00064cab0d645e4f',
          match: 92,
          tags: ['极致操控', '赛道基因']
        },
        {
          id: '3',
          name: 'Hyundai Tucson',
          price: 85,
          image: 'https://aistudio.google.com/_/upload/77a79ac1-0c9f-4681-b2aa-da12828a742b/attachment/1773147408.339816000/blobstore/prod/makersuite/spanner_managed/global::000054e2ea70026d:0000015f:2:000054e2ea70026d:0000000000000001::5e57fb353bf86ec4:000001ea764018bc:00064cab0d645e4f',
          match: 89,
          tags: ['家庭首选', '高性价比']
        }
      ];
      setResults(mockResults);
      setIsMatching(false);
      // Scroll to results
      window.scrollTo({ top: 500, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen pb-32">
      <Header title="AI 智能租车" showBack={false} />
      
      <main className="max-w-md mx-auto p-4 space-y-8">
        {!results ? (
          <>
            <div>
              <h2 className="text-2xl font-bold">搜索偏好</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">让我们的 AI 为您的行程寻找完美匹配。</p>
            </div>

            {/* Price Range */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-base font-medium">每日价格范围</label>
                <span className="text-primary font-bold">$50 - $500</span>
              </div>
              <div className="relative h-6 flex items-center">
                <div className="absolute w-full h-1.5 bg-slate-200 dark:bg-primary/10 rounded-full"></div>
                <div className="absolute left-[10%] right-[30%] h-1.5 bg-primary rounded-full"></div>
                <div className="absolute left-[10%] size-5 bg-white border-2 border-primary rounded-full shadow-lg cursor-pointer"></div>
                <div className="absolute right-[30%] size-5 bg-white border-2 border-primary rounded-full shadow-lg cursor-pointer"></div>
              </div>
            </div>

            {/* Passengers */}
            <div className="space-y-3">
              <label className="text-base font-medium">乘客人数</label>
              <div className="grid grid-cols-4 gap-2">
                {['1-2', '3-4', '5-6', '7+'].map(p => (
                  <button 
                    key={p}
                    onClick={() => setPassengers(p)}
                    className={`py-2.5 rounded-xl border transition-all ${
                      passengers === p 
                        ? "bg-primary text-background-dark font-bold border-primary" 
                        : "border-slate-200 dark:border-primary/20 hover:bg-primary/10"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Comfort */}
            <div className="space-y-3">
              <label className="text-base font-medium">舒适度</label>
              <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                {['经济型', '商务型', '豪华型', '顶级奢华'].map(c => (
                  <button 
                    key={c}
                    onClick={() => setComfort(c)}
                    className={`px-5 py-2 rounded-full border whitespace-nowrap transition-all ${
                      comfort === c 
                        ? "bg-primary/10 text-primary font-medium border-primary/40" 
                        : "border-slate-200 dark:border-primary/20"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Terrain */}
            <div className="space-y-3">
              <label className="text-base font-medium">地形/路况类型</label>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { id: '城市通勤', icon: 'location_city' },
                  { id: '山地公路', icon: 'terrain', tip: 'AI 建议在该地形使用吉普车' },
                  { id: '越野冒险', icon: 'landscape' }
                ].map(t => (
                  <button 
                    key={t.id}
                    onClick={() => setTerrain(t.id)}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${
                      terrain === t.id 
                        ? "border-2 border-primary bg-primary/5" 
                        : "border-slate-200 dark:border-primary/20"
                    }`}
                  >
                    <span className={`material-symbols-outlined ${terrain === t.id ? 'text-primary' : 'text-slate-400'}`}>{t.icon}</span>
                    <div className="flex-1">
                      <span className={cn("block", terrain === t.id && "font-medium")}>{t.id}</span>
                      {t.tip && terrain === t.id && (
                        <span className="text-xs text-primary flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">info</span> {t.tip}
                        </span>
                      )}
                    </div>
                    <div className={cn(
                      "size-5 rounded-full border-2 flex items-center justify-center transition-all",
                      terrain === t.id ? "bg-primary border-primary" : "border-slate-300 dark:border-primary/40"
                    )}>
                      {terrain === t.id && <span className="material-symbols-outlined text-background-dark text-xs font-bold">check</span>}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button 
                onClick={handleMatch}
                disabled={isMatching}
                className="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-lg disabled:opacity-50"
              >
                {isMatching ? (
                  <>
                    <div className="size-5 border-2 border-background-dark border-t-transparent rounded-full animate-spin"></div>
                    正在匹配中...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined">psychology</span> AI 智能匹配
                  </>
                )}
              </button>
            </div>
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-2xl font-bold">为您推荐</h2>
                <p className="text-slate-500 text-sm">基于您的偏好和路况分析</p>
              </div>
              <button 
                onClick={() => setResults(null)}
                className="text-primary text-sm font-bold flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">tune</span> 重新筛选
              </button>
            </div>

            <div className="space-y-4">
              {results.map((car) => (
                <div key={car.id} className="bg-white dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-primary/10 overflow-hidden shadow-sm hover:border-primary/40 transition-all">
                  <div className="aspect-[16/9] relative">
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-3 left-3 bg-primary text-background-dark text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {car.match}% 匹配
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">{car.name}</h3>
                      <div className="text-right">
                        <span className="text-xl font-bold text-primary">${car.price}</span>
                        <span className="text-xs text-slate-500 block">/ 日</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mb-4">
                      {car.tags.map((tag: string) => (
                        <span key={tag} className="text-[10px] bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded text-slate-600 dark:text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-background-dark font-bold py-2.5 rounded-lg transition-all border border-primary/20">
                      立即选择
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </main>
      <BottomNav />
    </div>
  );
};
