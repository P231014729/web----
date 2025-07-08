'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [currentExhibit, setCurrentExhibit] = useState('壁画修复');

  const digitalTech = [
    { name: '3D扫描', symbol: '📷', desc: '高精度文物建模' },
    { name: 'AI修复', symbol: '🔧', desc: '智能壁画修复' },
    { name: 'VR展示', symbol: '🥽', desc: '沉浸式洞窟体验' },
    { name: 'AR导览', symbol: '📱', desc: '增强现实讲解' },
    { name: '全息投影', symbol: '🎆', desc: '立体文物展示' },
    { name: '大数据', symbol: '📊', desc: '文物数据分析' },
    { name: '云计算', symbol: '☁️', desc: '数字资源存储' },
    { name: '区块链', symbol: '🔗', desc: '文物数字认证' }
  ];

  const exhibits = [
    { name: '壁画修复', desc: 'AI辅助的数字化修复技术', sample: '🎨' },
    { name: '洞窟建模', desc: '精确的3D空间重建', sample: '🏛️' },
    { name: '文物复原', desc: '数字孪生还原技术', sample: '🗿' },
    { name: '文字识别', desc: '古文字AI解析系统', sample: '📝' },
    { name: '文创开发', desc: '数字文创产品设计', sample: '🎁' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-800 via-orange-900 to-red-900 py-8 px-2">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-amber-300 hover:text-yellow-200 font-bold text-lg transition">← 返回刘星余个人学习展示平台</Link>
        </div>
        
        {/* 创意标题区域 */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 opacity-10">
            <div className="flex justify-center items-center h-full">
              <div className="text-9xl text-amber-200 font-serif transform rotate-6">🏛️</div>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-amber-300 mb-4 text-center tracking-widest drop-shadow relative z-10">
            数字敦煌·科技传承
          </h1>
          <p className="text-lg text-amber-200 relative z-10">数字化保护、智能修复、沉浸展示、创新传播</p>
        </div>

        {/* 数字技术互动展示 */}
        <section className="mb-12 bg-black/40 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-amber-500/30">
          <h2 className="text-2xl font-bold text-amber-400 mb-6 text-center">数字科技·创新应用</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {digitalTech.map((tech, index) => (
              <div
                key={index}
                className={`text-center p-4 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedTech === tech.name 
                    ? 'bg-amber-600 text-white shadow-lg' 
                    : 'bg-black/30 hover:bg-black/50 text-amber-300 border border-amber-500/30'
                }`}
                onClick={() => setSelectedTech(selectedTech === tech.name ? null : tech.name)}
              >
                <div className="text-3xl font-serif mb-2">{tech.symbol}</div>
                <h3 className="font-bold text-sm mb-1">{tech.name}</h3>
                <p className="text-xs opacity-80">{tech.desc}</p>
              </div>
            ))}
          </div>
          {selectedTech && (
            <div className="bg-black/30 rounded-lg p-4 border-l-4 border-amber-500 animate-fadeIn">
              <p className="text-amber-300">
                <span className="font-bold">{selectedTech}</span>：
                {digitalTech.find(s => s.name === selectedTech)?.desc}
                <br />
                <span className="text-sm text-amber-200">数字技术助力文化遗产保护与传承创新。</span>
              </p>
            </div>
          )}
        </section>

        {/* 数字展示项目 */}
        <section className="mb-12 bg-gradient-to-br from-black/40 to-amber-900/40 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-amber-500/30">
          <h2 className="text-2xl font-bold text-amber-400 mb-6 text-center">数字展项·沉浸体验</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            {exhibits.map((exhibit, index) => (
              <div
                key={index}
                className={`text-center p-4 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                  currentExhibit === exhibit.name 
                    ? 'bg-amber-600 text-white shadow-xl' 
                    : 'bg-black/30 hover:bg-black/50 text-amber-300 border border-amber-500/30'
                }`}
                onClick={() => setCurrentExhibit(exhibit.name)}
              >
                <div className="text-4xl mb-3">{exhibit.sample}</div>
                <h3 className="font-bold text-sm mb-1">{exhibit.name}</h3>
                <p className="text-xs opacity-80">{exhibit.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-black/30 rounded-lg p-4 text-center border border-amber-500/30">
            <p className="text-amber-300">
              当前展示：<span className="font-bold text-amber-400">{currentExhibit}</span>
              <br />
              <span className="text-sm">{exhibits.find(s => s.name === currentExhibit)?.desc}</span>
            </p>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 数字修复技术 */}
          <section className="bg-black/40 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-amber-500/30">
            <h2 className="text-xl font-bold text-amber-400 mb-4 flex items-center">
              <span className="text-2xl mr-2">🔧</span>
              数字修复技术
            </h2>
            <div className="space-y-4">
              <div className="bg-black/30 rounded-lg p-4 hover:bg-black/50 transition-colors cursor-pointer border border-amber-500/30"
                   onClick={() => alert('AI智能修复：利用深度学习技术，自动识别和修复壁画损伤。')}>
                <h3 className="font-bold text-amber-400 mb-2">🤖 AI智能修复</h3>
                <p className="text-amber-300 text-sm">深度学习修复技术</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4 hover:bg-black/50 transition-colors cursor-pointer border border-amber-500/30"
                   onClick={() => alert('高清图像处理：采用超高分辨率扫描和图像增强技术。')}>
                <h3 className="font-bold text-amber-400 mb-2">📸 高清图像处理</h3>
                <p className="text-amber-300 text-sm">超高清成像技术</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4 hover:bg-black/50 transition-colors cursor-pointer border border-amber-500/30"
                   onClick={() => alert('数字复原：基于历史资料的数字化复原和重建技术。')}>
                <h3 className="font-bold text-amber-400 mb-2">🎨 数字复原</h3>
                <p className="text-amber-300 text-sm">智能重建技术</p>
              </div>
            </div>
          </section>

          {/* 数字展示技术 */}
          <section className="bg-black/40 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-amber-500/30">
            <h2 className="text-xl font-bold text-amber-400 mb-4 flex items-center">
              <span className="text-2xl mr-2">🎮</span>
              数字展示技术
            </h2>
            <div className="space-y-3">
              {['VR体验', 'AR导览', '全息投影', '互动装置', '数字影院'].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-black/50 transition-colors cursor-pointer border border-amber-500/30"
                  onClick={() => alert(`${tech}：${
                    {
                      'VR体验': '沉浸式虚拟洞窟探索体验',
                      'AR导览': '智能文物解说和互动',
                      '全息投影': '立体文物展示系统',
                      '互动装置': '数字互动体验设备',
                      '数字影院': '沉浸式数字影像展示'
                    }[tech]}
                  }`)}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-red-700 flex items-center justify-center text-white text-xl">
                    {{
                      'VR体验': '🥽',
                      'AR导览': '📱',
                      '全息投影': '🎆',
                      '互动装置': '🎮',
                      '数字影院': '🎦'
                    }[tech]}
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-400">{tech}</h3>
                    <p className="text-amber-300 text-sm">
                      {{
                        'VR体验': '虚拟探索',
                        'AR导览': '智能讲解',
                        '全息投影': '立体呈现',
                        '互动装置': '互动体验',
                        '数字影院': '影像展示'
                      }[tech]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 数字档案与研究 */}
        <section className="mt-8 bg-black/40 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-amber-500/30">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-amber-400 mb-4 flex items-center">
                <span className="text-2xl mr-2">📚</span>
                数字档案库
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-black/30 rounded-lg p-4 hover:bg-black/50 transition-colors cursor-pointer border border-amber-500/30"
                     onClick={() => alert('文物数据库：包含高清图像、3D模型、材质分析等多维数据。')}>
                  <div className="w-20 h-20 mx-auto mb-2 border-2 border-amber-500 border-dashed rounded flex items-center justify-center text-amber-400 font-bold">
                    文物<br />数据库
                  </div>
                  <p className="text-amber-300 text-sm">多维数据</p>
                </div>
                <div className="text-center bg-black/30 rounded-lg p-4 hover:bg-black/50 transition-colors cursor-pointer border border-amber-500/30"
                     onClick={() => alert('研究资料库：汇集考古报告、研究论文、历史文献等学术资源。')}>
                  <div className="w-20 h-20 mx-auto mb-2 border-2 border-amber-500 border-dashed rounded flex items-center justify-center text-amber-400 font-bold">
                    研究<br />资料库
                  </div>
                  <p className="text-amber-300 text-sm">学术资源</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-amber-400 mb-4 flex items-center">
                <span className="text-2xl mr-2">🔬</span>
                数字研究平台
              </h2>
              <div className="bg-gradient-to-br from-black/30 to-amber-900/30 rounded-lg p-6 border border-amber-500/30">
                <blockquote className="text-center">
                  <p className="text-amber-300 text-lg font-serif mb-4">
                    "以数字技术助力文化遗产研究"
                  </p>
                  <footer className="text-amber-200 text-sm">
                    数字敦煌项目不仅是文物保护的创新实践，更是促进敦煌学研究的重要平台。
                    通过数字技术，让研究者能够突破时空限制，开展深入研究。
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* 数字敦煌价值 */}
        <section className="mt-8 bg-gradient-to-r from-black/40 to-amber-900/40 rounded-xl p-6 shadow border border-amber-500/30">
          <h2 className="text-xl font-bold text-amber-400 mb-4 text-center">数字敦煌的多维价值</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-black/30 rounded-lg p-4 hover:shadow-lg transition-shadow border border-amber-500/30">
              <div className="w-12 h-12 mx-auto mb-3 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🏛️</span>
              </div>
              <h3 className="font-bold text-amber-400 mb-2">保护价值</h3>
              <p className="text-amber-300 text-sm">数字化保护与修复，永续文化遗产</p>
            </div>
            <div className="text-center bg-black/30 rounded-lg p-4 hover:shadow-lg transition-shadow border border-amber-500/30">
              <div className="w-12 h-12 mx-auto mb-3 bg-red-700 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🔬</span>
              </div>
              <h3 className="font-bold text-amber-400 mb-2">研究价值</h3>
              <p className="text-amber-300 text-sm">数字化研究平台，促进学术创新</p>
            </div>
            <div className="text-center bg-black/30 rounded-lg p-4 hover:shadow-lg transition-shadow border border-amber-500/30">
              <div className="w-12 h-12 mx-auto mb-3 bg-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🌏</span>
              </div>
              <h3 className="font-bold text-amber-400 mb-2">传播价值</h3>
              <p className="text-amber-300 text-sm">数字化展示传播，弘扬敦煌文化</p>
            </div>
          </div>
        </section>

        {/* 数字文创开发 */}
        <section className="mt-8 bg-black/40 backdrop-blur-lg rounded-xl p-6 shadow border border-amber-500/30">
          <h2 className="text-xl font-bold text-amber-400 mb-4 text-center">数字文创·创新深化</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-black/30 rounded-lg hover:bg-black/50 transition-all cursor-pointer border border-amber-500/30">
              <span className="text-4xl">🎮</span>
              <h3 className="text-amber-400 font-bold mt-2">数字游戏</h3>
              <p className="text-amber-300 text-sm">互动式文化体验</p>
            </div>
            <div className="text-center p-4 bg-black/30 rounded-lg hover:bg-black/50 transition-all cursor-pointer border border-amber-500/30">
              <span className="text-4xl">🎨</span>
              <h3 className="text-amber-400 font-bold mt-2">数字艺术</h3>
              <p className="text-amber-300 text-sm">新媒体艺术创作</p>
            </div>
            <div className="text-center p-4 bg-black/30 rounded-lg hover:bg-black/50 transition-all cursor-pointer border border-amber-500/30">
              <span className="text-4xl">🎁</span>
              <h3 className="text-amber-400 font-bold mt-2">文创产品</h3>
              <p className="text-amber-300 text-sm">数字化文创设计</p>
            </div>
            <div className="text-center p-4 bg-black/30 rounded-lg hover:bg-black/50 transition-all cursor-pointer border border-amber-500/30">
              <span className="text-4xl">📱</span>
              <h3 className="text-amber-400 font-bold mt-2">移动应用</h3>
              <p className="text-amber-300 text-sm">便携文化服务</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}