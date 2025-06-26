'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  const [selectedStroke, setSelectedStroke] = useState<string | null>(null);
  const [currentCalligraphy, setCurrentCalligraphy] = useState('楷书');

  const strokes = [
    { name: '点', symbol: '丶', desc: '如高峰坠石' },
    { name: '横', symbol: '一', desc: '如千里阵云' },
    { name: '竖', symbol: '丨', desc: '如万岁枯藤' },
    { name: '撇', symbol: '丿', desc: '如陆断犀象' },
    { name: '捺', symbol: '㇏', desc: '如崩浪雷奔' },
    { name: '提', symbol: '㇀', desc: '如劲弩筋节' },
    { name: '钩', symbol: '亅', desc: '如万钧弩发' },
    { name: '折', symbol: '乛', desc: '如百钧弩发' }
  ];

  const calligraphyStyles = [
    { name: '楷书', desc: '端正严谨，法度森严', sample: '永' },
    { name: '行书', desc: '流畅自然，潇洒飘逸', sample: '永' },
    { name: '草书', desc: '奔放自由，气韵生动', sample: '永' },
    { name: '隶书', desc: '古朴典雅，蚕头燕尾', sample: '永' },
    { name: '篆书', desc: '古朴神秘，象形之美', sample: '永' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-8 px-2">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-red-700 hover:text-yellow-600 font-bold text-lg transition">← 返回非遗传承平台</Link>
        </div>
        
        {/* 创意标题区域 */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 opacity-10">
            <div className="flex justify-center items-center h-full">
              <div className="text-9xl text-red-200 font-serif transform rotate-6">永</div>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-red-800 mb-4 text-center tracking-widest drop-shadow relative z-10">
            书法艺术·笔墨春秋
          </h1>
          <p className="text-lg text-red-600 relative z-10">笔法、墨法、章法、神韵四要素</p>
        </div>

        {/* 永字八法互动展示 */}
        <section className="mb-12 bg-white/90 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">永字八法·笔画精髓</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {strokes.map((stroke, index) => (
              <div
                key={index}
                className={`text-center p-4 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedStroke === stroke.name 
                    ? 'bg-red-500 text-white shadow-lg' 
                    : 'bg-red-100 hover:bg-red-200 text-red-700'
                }`}
                onClick={() => setSelectedStroke(selectedStroke === stroke.name ? null : stroke.name)}
              >
                <div className="text-3xl font-serif mb-2">{stroke.symbol}</div>
                <h3 className="font-bold text-sm mb-1">{stroke.name}</h3>
                <p className="text-xs opacity-80">{stroke.desc}</p>
              </div>
            ))}
          </div>
          {selectedStroke && (
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500 animate-fadeIn">
              <p className="text-red-700">
                <span className="font-bold">{selectedStroke}画</span>：
                {strokes.find(s => s.name === selectedStroke)?.desc}
                <br />
                <span className="text-sm text-red-600">书法中每一笔都蕴含着深厚的美学理念和文化内涵。</span>
              </p>
            </div>
          )}
        </section>

        {/* 书法字体风格展示 */}
        <section className="mb-12 bg-gradient-to-br from-amber-50 to-red-50 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">五大书体·风格各异</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            {calligraphyStyles.map((style, index) => (
              <div
                key={index}
                className={`text-center p-4 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                  currentCalligraphy === style.name 
                    ? 'bg-red-600 text-white shadow-xl' 
                    : 'bg-white hover:bg-red-50 text-red-700 shadow-md'
                }`}
                onClick={() => setCurrentCalligraphy(style.name)}
              >
                <div className={`text-5xl mb-3 font-serif transition-all duration-500 ${
                  style.name === '楷书' ? 'font-normal' :
                  style.name === '行书' ? 'italic' :
                  style.name === '草书' ? 'font-light italic' :
                  style.name === '隶书' ? 'font-semibold' :
                  'font-bold'
                }`}>
                  {style.sample}
                </div>
                <h3 className="font-bold text-sm mb-1">{style.name}</h3>
                <p className="text-xs opacity-80">{style.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/80 rounded-lg p-4 text-center">
            <p className="text-red-600">
              当前展示：<span className="font-bold text-red-700">{currentCalligraphy}</span>
              <br />
              <span className="text-sm">{calligraphyStyles.find(s => s.name === currentCalligraphy)?.desc}</span>
            </p>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 笔法展示 */}
          <section className="bg-white/90 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-red-700 mb-4 flex items-center">
              <span className="text-2xl mr-2">✍️</span>
              笔法要诀
            </h2>
            <div className="space-y-4">
              <div className="bg-red-50 rounded-lg p-4 hover:bg-red-100 transition-colors cursor-pointer"
                   onClick={() => alert('藏锋：笔画起笔时，笔锋不外露，含蓄内敛，如"永"字点画起笔。')}>
                <h3 className="font-bold text-red-700 mb-2">🎯 藏锋起笔</h3>
                <p className="text-red-600 text-sm">笔锋不露，含蓄内敛</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 hover:bg-red-100 transition-colors cursor-pointer"
                   onClick={() => alert('中锋行笔：笔毫居于笔画中央，力度均匀，线条圆润饱满。')}>
                <h3 className="font-bold text-red-700 mb-2">⚡ 中锋行笔</h3>
                <p className="text-red-600 text-sm">笔毫居中，线条圆润</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 hover:bg-red-100 transition-colors cursor-pointer"
                   onClick={() => alert('回锋收笔：笔画结束时，笔锋回收，不让锋芒外露，体现含蓄之美。')}>
                <h3 className="font-bold text-red-700 mb-2">🔄 回锋收笔</h3>
                <p className="text-red-600 text-sm">笔锋回收，含蓄收束</p>
              </div>
            </div>
          </section>

          {/* 墨法展示 */}
          <section className="bg-white/90 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-red-700 mb-4 flex items-center">
              <span className="text-2xl mr-2">🖤</span>
              墨法五色
            </h2>
            <div className="space-y-3">
              {['焦', '浓', '重', '淡', '清'].map((ink, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                  onClick={() => alert(`${ink}墨：${{
                    '焦': '墨色最浓，用于点睛之笔',
                    '浓': '墨色浓重，用于主体结构',
                    '重': '墨色较浓，用于重要笔画',
                    '淡': '墨色较淡，用于轻盈笔画',
                    '清': '墨色最淡，用于飞白效果'
                  }[ink]}。`)}
                >
                  <div 
                    className={`w-8 h-8 rounded-full ${
                      index === 0 ? 'bg-black' :
                      index === 1 ? 'bg-gray-800' :
                      index === 2 ? 'bg-gray-600' :
                      index === 3 ? 'bg-gray-400' :
                      'bg-gray-200'
                    }`}
                  ></div>
                  <div>
                    <h3 className="font-bold text-red-700">{ink}墨</h3>
                    <p className="text-red-600 text-sm">
                      {{
                        '焦': '最浓重，点睛之笔',
                        '浓': '浓重厚实，主体结构',
                        '重': '较为厚重，重要笔画',
                        '淡': '清淡雅致，轻盈飘逸',
                        '清': '最为清淡，飞白韵味'
                      }[ink]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 章法和神韵 */}
        <section className="mt-8 bg-white/90 rounded-xl shadow-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                <span className="text-2xl mr-2">📐</span>
                章法布局
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-red-50 rounded-lg p-4 hover:bg-red-100 transition-colors cursor-pointer"
                     onClick={() => alert('行气贯通：字与字之间要有呼应关系，整行要有连贯的气韵。')}>
                  <div className="w-20 h-20 mx-auto mb-2 border-2 border-red-400 border-dashed rounded flex items-center justify-center text-red-700 font-bold">
                    行气<br />贯通
                  </div>
                  <p className="text-red-600 text-sm">连贯流畅</p>
                </div>
                <div className="text-center bg-red-50 rounded-lg p-4 hover:bg-red-100 transition-colors cursor-pointer"
                     onClick={() => alert('疏密得当：字距、行距要安排合理，疏处要透气，密处要紧凑。')}>
                  <div className="w-20 h-20 mx-auto mb-2 border-2 border-red-400 border-dashed rounded flex items-center justify-center text-red-700 font-bold">
                    疏密<br />得当
                  </div>
                  <p className="text-red-600 text-sm">错落有致</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                <span className="text-2xl mr-2">✨</span>
                神韵境界
              </h2>
              <div className="bg-gradient-to-br from-red-100 to-amber-100 rounded-lg p-6">
                <blockquote className="text-center">
                  <p className="text-red-700 text-lg font-serif mb-4">
                    &ldquo;字如其人，书如其心&rdquo;
                  </p>
                  <footer className="text-red-600 text-sm">
                    书法的最高境界在于神韵，即通过笔墨表达书写者的精神气质和文化修养。
                    真正的书法作品不仅仅是技法的展示，更是心灵的流露。
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* 书法文化价值 */}
        <section className="mt-8 bg-gradient-to-r from-red-50 to-amber-50 rounded-xl p-6 shadow">
          <h2 className="text-xl font-bold text-red-700 mb-4 text-center">书法艺术的文化价值</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-white/80 rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-3 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h3 className="font-bold text-red-700 mb-2">艺术价值</h3>
              <p className="text-red-600 text-sm">线条之美，空间之韵，独特的东方艺术形式</p>
            </div>
            <div className="text-center bg-white/80 rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-3 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">📚</span>
              </div>
              <h3 className="font-bold text-amber-700 mb-2">文化价值</h3>
              <p className="text-amber-600 text-sm">承载汉字文化，传承中华文明的重要载体</p>
            </div>
            <div className="text-center bg-white/80 rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-3 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🧘</span>
              </div>
              <h3 className="font-bold text-green-700 mb-2">修身价值</h3>
              <p className="text-green-600 text-sm">陶冶情操，修身养性，培养专注与耐心</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 