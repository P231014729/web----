'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  const [currentMedia, setCurrentMedia] = useState('图文');

  const newsFormats = [
    { name: '短视频', symbol: '📱', desc: '简短精炼的视觉叙事' },
    { name: '图文', symbol: '📰', desc: '深度图文报道' },
    { name: '音频', symbol: '🎧', desc: '声音新闻体验' },
    { name: '直播', symbol: '🔴', desc: '实时现场报道' },
    { name: '数据', symbol: '📊', desc: '数据新闻可视化' },
    { name: 'VR', symbol: '🥽', desc: '沉浸式新闻体验' },
    { name: '动画', symbol: '🎬', desc: '动态新闻展示' },
    { name: '互动', symbol: '🤝', desc: '用户参与互动' }
  ];

  const mediaTypes = [
    { name: '图文', desc: '传统与现代结合的图文报道', sample: '📱' },
    { name: '视频', desc: '生动直观的视觉新闻', sample: '🎥' },
    { name: '音频', desc: '便捷的听觉新闻体验', sample: '🎧' },
    { name: '直播', desc: '即时互动的现场报道', sample: '📡' },
    { name: '数据', desc: '数据驱动的新闻呈现', sample: '📊' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-indigo-50 py-8 px-2">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-blue-700 hover:text-indigo-600 font-bold text-lg transition">← 返回刘星余个人学习展示平台</Link>
        </div>
        
        {/* 创意标题区域 */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 opacity-10">
            <div className="flex justify-center items-center h-full">
              <div className="text-9xl text-blue-200 font-serif transform rotate-6">📰</div>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-4 text-center tracking-widest drop-shadow relative z-10">
            融媒体新闻·多元传播
          </h1>
          <p className="text-lg text-blue-600 relative z-10">内容、形式、渠道、互动四维创新</p>
        </div>

        {/* 新闻形式互动展示 */}
        <section className="mb-12 bg-white/90 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">新闻形式·多元创新</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {newsFormats.map((format, index) => (
              <div
                key={index}
                className={`text-center p-4 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedFormat === format.name 
                    ? 'bg-blue-500 text-white shadow-lg' 
                    : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                }`}
                onClick={() => setSelectedFormat(selectedFormat === format.name ? null : format.name)}
              >
                <div className="text-3xl font-serif mb-2">{format.symbol}</div>
                <h3 className="font-bold text-sm mb-1">{format.name}</h3>
                <p className="text-xs opacity-80">{format.desc}</p>
              </div>
            ))}
          </div>
          {selectedFormat && (
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500 animate-fadeIn">
              <p className="text-blue-700">
                <span className="font-bold">{selectedFormat}</span>：
                {newsFormats.find(s => s.name === selectedFormat)?.desc}
                <br />
                <span className="text-sm text-blue-600">新闻传播形式的创新让受众获得更丰富的信息体验。</span>
              </p>
            </div>
          )}
        </section>

        {/* 媒体类型展示 */}
        <section className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">媒体类型·各具特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            {mediaTypes.map((type, index) => (
              <div
                key={index}
                className={`text-center p-4 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                  currentMedia === type.name 
                    ? 'bg-blue-600 text-white shadow-xl' 
                    : 'bg-white hover:bg-blue-50 text-blue-700 shadow-md'
                }`}
                onClick={() => setCurrentMedia(type.name)}
              >
                <div className="text-4xl mb-3">{type.sample}</div>
                <h3 className="font-bold text-sm mb-1">{type.name}</h3>
                <p className="text-xs opacity-80">{type.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/80 rounded-lg p-4 text-center">
            <p className="text-blue-600">
              当前展示：<span className="font-bold text-blue-700">{currentMedia}</span>
              <br />
              <span className="text-sm">{mediaTypes.find(s => s.name === currentMedia)?.desc}</span>
            </p>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 内容创新 */}
          <section className="bg-white/90 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
              <span className="text-2xl mr-2">✍️</span>
              内容创新
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors cursor-pointer"
                   onClick={() => alert('深度报道：通过多角度、多层次的调查采访，呈现事件的全貌。')}>
                <h3 className="font-bold text-blue-700 mb-2">🔍 深度报道</h3>
                <p className="text-blue-600 text-sm">多角度深入调查</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors cursor-pointer"
                   onClick={() => alert('数据新闻：利用数据分析和可视化技术，让新闻更直观、更有说服力。')}>
                <h3 className="font-bold text-blue-700 mb-2">📊 数据新闻</h3>
                <p className="text-blue-600 text-sm">数据驱动报道</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors cursor-pointer"
                   onClick={() => alert('故事化叙事：以人物为核心，通过故事化的方式展现新闻事件。')}>
                <h3 className="font-bold text-blue-700 mb-2">📖 故事化叙事</h3>
                <p className="text-blue-600 text-sm">人性化报道</p>
              </div>
            </div>
          </section>

          {/* 传播创新 */}
          <section className="bg-white/90 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
              <span className="text-2xl mr-2">🌐</span>
              传播创新
            </h2>
            <div className="space-y-3">
              {['全媒体', '跨平台', '互动式', '精准化', '智能化'].map((method, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                  onClick={() => alert(`${method}传播：${
                    {
                      '全媒体': '整合各类媒体形式，实现立体化传播',
                      '跨平台': '打通多个平台，扩大传播范围',
                      '互动式': '增强用户参与度，提升传播效果',
                      '精准化': '根据用户特征，实现精准投放',
                      '智能化': '运用AI技术，优化传播策略'
                    }[method]}
                  }`)}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xl">
                    {{
                      '全媒体': '📱',
                      '跨平台': '🔄',
                      '互动式': '🤝',
                      '精准化': '🎯',
                      '智能化': '🤖'
                    }[method]}
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-700">{method}传播</h3>
                    <p className="text-blue-600 text-sm">
                      {{
                        '全媒体': '多形式融合',
                        '跨平台': '广泛覆盖',
                        '互动式': '双向交流',
                        '精准化': '定向投放',
                        '智能化': 'AI赋能'
                      }[method]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 技术与创新 */}
        <section className="mt-8 bg-white/90 rounded-xl shadow-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="text-2xl mr-2">🔧</span>
                技术支持
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors cursor-pointer"
                     onClick={() => alert('5G技术：高速网络支持实时高清直播和VR新闻。')}>
                  <div className="w-20 h-20 mx-auto mb-2 border-2 border-blue-400 border-dashed rounded flex items-center justify-center text-blue-700 font-bold">
                    5G<br />技术
                  </div>
                  <p className="text-blue-600 text-sm">高速传输</p>
                </div>
                <div className="text-center bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors cursor-pointer"
                     onClick={() => alert('AI技术：智能写作、个性化推荐、自动剪辑等。')}>
                  <div className="w-20 h-20 mx-auto mb-2 border-2 border-blue-400 border-dashed rounded flex items-center justify-center text-blue-700 font-bold">
                    AI<br />赋能
                  </div>
                  <p className="text-blue-600 text-sm">智能创新</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                创新目标
              </h2>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg p-6">
                <blockquote className="text-center">
                  <p className="text-blue-700 text-lg font-serif mb-4">
                    "让新闻更生动，让传播更高效"
                  </p>
                  <footer className="text-blue-600 text-sm">
                    融媒体新闻的创新不仅是形式的变革，更是传播效果的提升。
                    通过技术创新和内容创新，实现新闻传播的精准化、个性化和互动化。
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* 融媒体价值 */}
        <section className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow">
          <h2 className="text-xl font-bold text-blue-700 mb-4 text-center">融媒体新闻的价值</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-white/80 rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-3 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">📱</span>
              </div>
              <h3 className="font-bold text-blue-700 mb-2">传播价值</h3>
              <p className="text-blue-600 text-sm">多渠道覆盖，提升传播效果</p>
            </div>
            <div className="text-center bg-white/80 rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-3 bg-indigo-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="font-bold text-indigo-700 mb-2">社会价值</h3>
              <p className="text-indigo-600 text-sm">促进信息流通，服务社会发展</p>
            </div>
            <div className="text-center bg-white/80 rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-3 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">💡</span>
              </div>
              <h3 className="font-bold text-purple-700 mb-2">创新价值</h3>
              <p className="text-purple-600 text-sm">推动媒体融合，引领行业发展</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}