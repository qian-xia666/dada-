import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { Header, BottomNav } from './Navigation';

export const VeoGenerator = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(selectedFile);
    }
  };

  const generateVideo = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    setVideoUrl(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      // Convert file to base64
      const base64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
        reader.readAsDataURL(file);
      });

      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: 'Animate this travel photo with cinematic motion, subtle movement in the background, and vibrant colors.',
        image: {
          imageBytes: base64,
          mimeType: file.type,
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const response = await fetch(downloadLink, {
          method: 'GET',
          headers: {
            'x-goog-api-key': process.env.GEMINI_API_KEY!,
          },
        });
        const blob = await response.blob();
        setVideoUrl(URL.createObjectURL(blob));
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to generate video');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col pb-32">
      <Header title="AI 视频生成" />
      
      <main className="flex-1 p-6 max-w-md mx-auto w-full space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">赋予照片生命</h2>
          <p className="text-slate-500 text-sm">上传一张旅行照片，让 Veo AI 为其添加电影般的动态效果。</p>
        </div>

        <div 
          onClick={() => fileInputRef.current?.click()}
          className="aspect-video w-full border-2 border-dashed border-primary/30 rounded-2xl flex flex-col items-center justify-center bg-primary/5 cursor-pointer hover:bg-primary/10 transition-all overflow-hidden relative"
        >
          {preview ? (
            <img src={preview} alt="Preview" className="w-full h-full object-cover" />
          ) : (
            <>
              <span className="material-symbols-outlined text-4xl text-primary mb-2">add_photo_alternate</span>
              <span className="text-sm font-medium text-slate-500">点击上传照片</span>
            </>
          )}
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            className="hidden" 
            accept="image/*"
          />
        </div>

        {file && !videoUrl && !loading && (
          <button 
            onClick={generateVideo}
            className="w-full bg-primary text-background-dark font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">magic_button</span>
            开始生成视频
          </button>
        )}

        {loading && (
          <div className="space-y-4 text-center">
            <div className="flex justify-center">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-primary font-bold animate-pulse">Veo 正在创作中...</p>
            <div className="text-xs text-slate-500 space-y-1">
              <p>正在分析图像结构...</p>
              <p>正在渲染动态帧...</p>
              <p>这可能需要几分钟，请稍候。</p>
            </div>
          </div>
        )}

        {videoUrl && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
              <video src={videoUrl} controls autoPlay loop className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => { setVideoUrl(null); setFile(null); setPreview(null); }}
                className="flex-1 bg-slate-200 dark:bg-slate-800 font-bold py-3 rounded-xl"
              >
                重新开始
              </button>
              <a 
                href={videoUrl} 
                download="dada-ai-video.mp4"
                className="flex-1 bg-primary text-background-dark font-bold py-3 rounded-xl text-center"
              >
                下载视频
              </a>
            </div>
          </motion.div>
        )}

        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm text-center">
            {error}
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};
