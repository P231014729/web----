'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/img/1.jpg',
      title: '千年瑰宝·源远流长',
      subtitle: '探索中华文化的宝贵历史'
    },
    {
      image: '/img/2.jpg', 
      title: '匠心传承·守正创新',
      subtitle: '传统与现代的完美融合'
    },
    {
      image: '/img/3.jpg',
      title: '数字非遗·智创未来',
      subtitle: '科技赋能传统文化新生'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 每5秒切换一次

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-slate-900 shadow-2xl">
      {/* 轮播图片 */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
              priority={index === 0}
            />
            {/* 遮罩层 */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-slate-900/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 via-transparent to-blue-900/20"></div>
          </div>
        ))}
      </div>

      {/* 文字内容 */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-6 max-w-4xl">
          <div className="mb-4">
            {/* 装饰线 */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#B88A67]"></div>
              <div className="w-3 h-3 bg-[#8B4513] rounded-full shadow-lg"></div>
              <div className="w-24 h-px bg-gradient-to-r from-[#B88A67] to-[#8B4513]"></div>
              <div className="w-3 h-3 bg-[#B88A67] rounded-full shadow-lg"></div>
              <div className="w-16 h-px bg-gradient-to-r from-[#8B4513] to-transparent"></div>
            </div>
          </div>
          
          <h1 
            key={`title-${currentSlide}`}
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#B88A67] via-[#8B4513] to-[#B88A67] drop-shadow-2xl animate-fade-in tracking-wider"
          >
            {slides[currentSlide].title}
          </h1>
          
          <p 
            key={`subtitle-${currentSlide}`}
            className="text-lg md:text-2xl text-[#D2B48C] mb-8 drop-shadow-lg animate-fade-in tracking-wide"
          >
            {slides[currentSlide].subtitle}
          </p>
          
          {/* CTA按钮 */}
          <div className="flex justify-center gap-4">
            <button className="bg-gradient-to-r from-[#E6B89C] to-[#B9846F] hover:from-[#B9846F] hover:to-[#986C57] px-8 py-3 rounded-full text-[#FCF5E5] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl border border-[#B9846F]">
              开始探索
            </button>
            <button className="border border-[#E6B89C] text-[#E6B89C] hover:bg-[#E6B89C] hover:text-[#FCF5E5] px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              了解更多
            </button>
          </div>
        </div>
      </div>

      {/* 左右切换按钮 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 底部指示器 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-[#B88A67] shadow-lg shadow-[#B88A67]/50' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* 传统装饰元素 */}
      <div className="absolute top-8 left-8 w-16 h-16 border-2 border-[#B88A67]/30 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-8 right-8 w-12 h-12 border-2 border-[#8B4513]/30 transform rotate-45 opacity-60 animate-pulse"></div>
    </div>
  );
}