'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const [aiElement, setAiElement] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.open('https://www.aigc.cn/aigc-from-beginner-to-master', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0a0a1f] text-[#00f3ff] py-8 px-4">
      <style jsx global>{
        `
        :root {
          --cosmic-purple: #6c43f5;
          --neon-blue: #00f3ff;
        }

        @keyframes glowPulse {
          from { text-shadow: 0 0 15px rgba(0,243,255,0.8); }
          to { text-shadow: 0 0 25px rgba(0,243,255,0.6); }
        }

        @keyframes lightStreak {
          from { transform: rotate(45deg) translateX(-100%); }
          to { transform: rotate(45deg) translateX(100%); }
        }
        `
      }</style>

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-[#00f3ff] hover:text-[#6c43f5] transition-colors duration-300">← 返回刘星余个人学习展示平台</Link>
        </div>

        <h1 className="text-4xl font-bold text-center mb-12 animate-[glowPulse_2s_ease-in-out_infinite]">✨ 星穹观测站 ✨</h1>

        <div className="space-y-12">
          {/* AI元素生成区域 */}
          <section className="bg-[rgba(0,0,0,0.3)] rounded-xl p-6 backdrop-blur-sm border border-[rgba(108,67,245,0.2)]">
            <h2 className="text-2xl font-semibold mb-6">AI元素：你可以选择想要生成的元素</h2>
            <form onSubmit={handleSubmit} className="flex gap-4">
              <input
                type="text"
                value={aiElement}
                onChange={(e) => setAiElement(e.target.value)}
                placeholder="请输入生成元素..."
                className="flex-1 bg-[rgba(255,255,255,0.05)] border border-[rgba(108,67,245,0.2)] rounded-lg px-4 py-2 text-[#00f3ff] placeholder-[rgba(0,243,255,0.5)]"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#6c43f5] to-[#00f3ff] px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                立即生成
              </button>
            </form>
          </section>

          {/* 浑仪介绍 */}
          <section className="bg-[rgba(0,0,0,0.3)] rounded-xl p-6 backdrop-blur-sm border border-[rgba(108,67,245,0.2)]">
            <h2 className="text-2xl font-semibold mb-6">浑仪：三重环圈的精密宇宙模型</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">简介</h3>
                <p className="text-[rgba(0,243,255,0.8)]">
                  浑仪，是中国古代的一种天文观测仪器，是以浑天说为理论基础制造的、由相应天球坐标系各基本圈的环规及瞄准器构成的古代天文测量天体的仪器。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">核心结构与技术参数</h3>
                <div className="space-y-4">
                  <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg hover:bg-[rgba(0,243,255,0.05)] hover:translate-x-2 transition-all duration-300">
                    <h4 className="font-semibold">六合仪（外层固定环）</h4>
                    <p>由地平环、子午环和赤道环构成，采用青铜铸造，环面刻周天365.25度</p>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg hover:bg-[rgba(0,243,255,0.05)] hover:translate-x-2 transition-all duration-300">
                    <h4 className="font-semibold">三辰仪（中层旋转环）</h4>
                    <p>包含黄道环、白道环和赤道环，实现日月食预测</p>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.05)] p-4 rounded-lg hover:bg-[rgba(0,243,255,0.05)] hover:translate-x-2 transition-all duration-300">
                    <h4 className="font-semibold">四游仪（内层观测环）</h4>
                    <p>窥管长1.2米，采用"十字丝"照准技术，瞄准精度达±0.05度</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 天文仪器表格 */}
          <section className="bg-[rgba(0,0,0,0.3)] rounded-xl p-6 backdrop-blur-sm border border-[rgba(108,67,245,0.2)]">
            <h2 className="text-2xl font-semibold mb-6">天文仪器对比</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[rgba(108,67,245,0.2)]">
                    <th className="p-4 text-left">浑仪结构</th>
                    <th className="p-4 text-left">简仪结构</th>
                    <th className="p-4 text-left">天体仪结构</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[rgba(108,67,245,0.2)]">
                    <td className="p-4">六合仪（外层固定环）</td>
                    <td className="p-4">赤道经纬仪（左半部）</td>
                    <td className="p-4">铜质空心球</td>
                  </tr>
                  <tr className="border-b border-[rgba(108,67,245,0.2)]">
                    <td className="p-4">三辰仪（中层旋转环）</td>
                    <td className="p-4">地平经纬仪（右半部）</td>
                    <td className="p-4">底座四龙柱</td>
                  </tr>
                  <tr>
                    <td className="p-4">四游仪（内层观测环）</td>
                    <td className="p-4"></td>
                    <td className="p-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 图片展示区 */}
          <section className="bg-[rgba(0,0,0,0.3)] rounded-xl p-6 backdrop-blur-sm border border-[rgba(108,67,245,0.2)]">
            <h2 className="text-2xl font-semibold mb-6">天文仪器：图视并茂</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group">
                <Image
                  src="/Images/浑仪.png"
                  alt="浑仪：三重环圈的精密宇宙模型"
                  width={400}
                  height={300}
                  className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#6c43f5] to-[#00f3ff] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
              </div>
              <div className="relative group">
                <Image
                  src="/Images/浑仪2.jpg"
                  alt="浑仪细节展示"
                  width={400}
                  height={300}
                  className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#6c43f5] to-[#00f3ff] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}