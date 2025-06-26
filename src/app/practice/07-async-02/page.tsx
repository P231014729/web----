'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [porcelainTypes, setPorcelainTypes] = useState<string[]>([]);

  useEffect(() => {
    async function fetchPorcelainData() {
      try {
        // 模拟景德镇瓷器工艺数据异步获取
        await new Promise(resolve => setTimeout(resolve, 1200));
        
        const porcelainHistory = [
          '东汉时期景德镇制瓷工艺起源',
          '宋代影青瓷技术成熟时期',
          '元代青花瓷技术革新年代',
          '明代成化斗彩瓷器巅峰',
          '清代粉彩瓷器工艺完善'
        ];
        
        setResult(JSON.stringify(porcelainHistory, null, 2));
        
        const porcelainData = [
          '青花瓷 - 釉下彩绘',
          '粉彩瓷 - 釉上彩绘',
          '斗彩瓷 - 釉下青花与釉上彩结合',
          '颜色釉 - 单色釉装饰',
          '影青瓷 - 青白釉瓷器'
        ];
        setPorcelainTypes(porcelainData);
        
        console.log('景德镇瓷器历史数据:', porcelainHistory);
        console.log('瓷器工艺类型:', porcelainData);
      } catch {
        setError('获取瓷器工艺数据失败');
      }
    }
    fetchPorcelainData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-8 px-2">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-red-700 hover:text-yellow-600 font-bold text-lg transition">← 返回非遗传承平台</Link>
        </div>
        <h1 className="text-4xl font-extrabold text-red-700 mb-6 text-center tracking-widest drop-shadow">景德镇瓷器·陶瓷之都</h1>
        
        <section className="mb-8 bg-white/80 rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-red-700 mb-2">瓷器工艺数字化传承</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>本页面通过异步技术展示景德镇瓷器制作工艺的历史传承。</li>
            <li>页面加载后会模拟获取瓷器工艺发展历程并以 JSON 形式展示。</li>
            <li>请按 F12 打开浏览器控制台，观察瓷器工艺数据处理过程。</li>
          </ul>
        </section>

        {/* 创意瓷器类型展示 */}
        <section className="mb-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg">
          <h2 className="text-xl font-bold text-red-700 mb-4 text-center">景德镇瓷器工艺</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {porcelainTypes.map((porcelain, index) => (
              <div key={index} className="text-center group cursor-pointer"
                   onClick={() => alert(`${porcelain}\n\n景德镇瓷器以其精美的工艺和深厚的文化底蕴闻名于世，被誉为"瓷都"。`)}>
                <div className={`w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-all duration-300 ${
                  index % 5 === 0 ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                  index % 5 === 1 ? 'bg-gradient-to-br from-pink-400 to-pink-600' :
                  index % 5 === 2 ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                  index % 5 === 3 ? 'bg-gradient-to-br from-green-400 to-green-600' :
                  'bg-gradient-to-br from-cyan-400 to-cyan-600'
                }`}>
                  <span className="text-2xl text-white filter drop-shadow-sm">
                    {index % 5 === 0 ? '🫖' :
                     index % 5 === 1 ? '🌸' :
                     index % 5 === 2 ? '🎨' :
                     index % 5 === 3 ? '🍃' : '💎'}
                  </span>
                </div>
                <h3 className="font-bold text-red-700 text-xs mb-1">{porcelain.split(' - ')[0]}</h3>
                <p className="text-xs text-red-600">{porcelain.split(' - ')[1]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 瓷器制作工艺流程 */}
        <section className="mb-8 bg-white/90 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-red-700 mb-4 text-center">瓷器制作工艺流程</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: '选料', icon: '🏔️', desc: '高岭土选取', color: 'from-gray-400 to-gray-600' },
              { step: '成型', icon: '🏺', desc: '拉坯造型', color: 'from-brown-400 to-brown-600' },
              { step: '修坯', icon: '🔧', desc: '精细修整', color: 'from-blue-400 to-blue-600' },
              { step: '施釉', icon: '🎨', desc: '釉料涂覆', color: 'from-green-400 to-green-600' },
              { step: '彩绘', icon: '🖌️', desc: '图案绘制', color: 'from-purple-400 to-purple-600' },
              { step: '烧制', icon: '🔥', desc: '高温烧成', color: 'from-red-400 to-red-600' },
              { step: '出窑', icon: '✨', desc: '成品出炉', color: 'from-yellow-400 to-yellow-600' },
              { step: '检验', icon: '🔍', desc: '质量检测', color: 'from-indigo-400 to-indigo-600' }
            ].map((process, index) => (
              <div key={index} className="text-center p-3 rounded-lg hover:bg-red-50 transition-colors cursor-pointer group"
                   onClick={() => alert(`${process.step}：${process.desc}\n\n景德镇瓷器制作工艺历经千年传承，每一道工序都体现着匠人的智慧。`)}>
                <div className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-br ${process.color} rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                  <span className="text-lg text-white">{process.icon}</span>
                </div>
                <h3 className="font-bold text-red-700 text-sm mb-1">{process.step}</h3>
                <p className="text-xs text-red-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 瓷器文化传承 */}
        <section className="mb-8 bg-gradient-to-r from-red-50 to-amber-50 rounded-xl p-6 shadow">
          <h2 className="text-xl font-bold text-red-700 mb-4 text-center">瓷器文化价值</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/80 rounded-lg p-4 border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <h3 className="font-bold text-blue-700 mb-2">🌍 世界影响</h3>
              <p className="text-blue-600 text-sm mb-2">China瓷器，世界文明交流载体</p>
              <div className="text-xs text-blue-500 space-y-1">
                <div>• 丝绸之路重要商品</div>
                <div>• 中华文化传播使者</div>
              </div>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 border-2 border-red-200 hover:border-red-400 transition-colors">
              <h3 className="font-bold text-red-700 mb-2">🎨 艺术价值</h3>
              <p className="text-red-600 text-sm mb-2">造型优美，装饰精致</p>
              <div className="text-xs text-red-500 space-y-1">
                <div>• 工艺美术的典范</div>
                <div>• 审美文化的体现</div>
              </div>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 border-2 border-green-200 hover:border-green-400 transition-colors">
              <h3 className="font-bold text-green-700 mb-2">🏛️ 历史价值</h3>
              <p className="text-green-600 text-sm mb-2">千年技艺传承不息</p>
              <div className="text-xs text-green-500 space-y-1">
                <div>• 工艺发展的见证</div>
                <div>• 文化传承的载体</div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center bg-red-100/60 rounded-xl p-8 shadow">
          <div className="w-full max-w-md mx-auto mb-6">
            {/* 创意瓷器文化展示 */}
            <div className="bg-gradient-to-br from-blue-200 to-cyan-200 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="flex justify-center items-center h-full">
                  <div className="text-6xl animate-pulse">🏺</div>
                </div>
              </div>
              <div className="relative z-10 text-center">
                <h3 className="text-lg font-bold text-red-700 mb-2">陶瓷之都</h3>
                <p className="text-red-600 text-sm">&ldquo;白如玉，明如镜，薄如纸，声如磬&rdquo;</p>
              </div>
            </div>
          </div>
          <div className="w-full overflow-x-auto mt-4 text-red-900 bg-white/80 rounded p-4 text-center max-w-4xl">
            <h3 className="font-bold text-red-700 mb-2">🏺 瓷器工艺发展数据</h3>
            <div className="text-sm font-mono">
              {error ? error : (result ? result : '正在获取瓷器工艺数据...')}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 