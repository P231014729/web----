import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-[url('/img/paper-texture.jpg')] bg-cover bg-fixed py-6 px-2">
      <div className="max-w-5xl mx-auto">
        <header className="text-center py-12 bg-gradient-to-b from-[#2c1810]/90 to-[#4a3428]/90 backdrop-blur-sm rounded-2xl shadow-2xl mb-8 relative overflow-hidden border border-[#8b634a]/20">
          {/* 水墨背景效果 */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <div className="w-full h-full bg-[url('/img/ink-texture.png')] bg-cover animate-pulse"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#d4b59e] to-[#8b634a] tracking-widest drop-shadow-lg relative z-10 mb-4 font-serif">诗词雅韵</h1>
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c4a185] to-[#8b634a] relative z-10 mb-2 font-serif">墨香千年</p>
          <p className="text-lg text-[#d4b59e] mt-4 font-medium relative z-10 font-serif">中华诗词文化·诗意传承</p>
        </header>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-8 max-w-2xl mx-auto transform hover:scale-[1.02] transition-all duration-300 border border-[#8b634a]/20 hover:border-[#8b634a]/40">
          <h3 className="text-2xl font-bold text-[#2c1810] mb-6 flex items-center font-serif"><span className="text-3xl mr-2">📜</span> 诗词发展历程</h3>
          <div className="space-y-4">
            {[
              { era: '先秦', desc: '诗经楚辞时代', icon: '📚' },
              { era: '汉魏', desc: '乐府民歌兴盛', icon: '🎵' },
              { era: '唐代', desc: '诗歌黄金时代', icon: '🌟' },
              { era: '宋代', desc: '词作艺术巅峰', icon: '🎨' }
            ].map((item, index) => (
              <div key={index} className="group bg-purple-50 rounded-xl p-4 transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
                  <div>
                    <span className="font-bold text-purple-900">{item.era}</span>
                    <span className="mx-2 text-purple-400">•</span>
                    <span className="text-purple-700">{item.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 诗词特色展示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-6 transform hover:scale-[1.02] transition-all duration-300 border border-purple-100">
            <h3 className="text-xl font-bold text-purple-800 border-b-2 border-pink-300 pb-3 mb-4 flex items-center">
              <span className="text-2xl mr-2">📚</span> 著名诗人
            </h3>
            <div className="space-y-3">
              {[
                { name: '李白', title: '诗仙浪漫主义代表', icon: '🌙' },
                { name: '杜甫', title: '诗圣现实主义大家', icon: '🏔️' },
                { name: '苏轼', title: '豪放派词人领袖', icon: '🌊' }
              ].map((poet, index) => (
                <div key={index} className="group bg-purple-50 rounded-lg p-3 transform hover:-translate-x-1 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl group-hover:scale-110 transition-transform">{poet.icon}</span>
                    <div>
                      <span className="font-bold text-purple-900">{poet.name}</span>
                      <span className="mx-2 text-purple-400">•</span>
                      <span className="text-purple-700">{poet.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-6 transform hover:scale-[1.02] transition-all duration-300 border border-purple-100">
            <h3 className="text-xl font-bold text-purple-800 border-b-2 border-pink-300 pb-3 mb-4 flex items-center">
              <span className="text-2xl mr-2">🖋️</span> 诗词特色
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { feature: '意境优美', icon: '🎋' },
                { feature: '平仄押韵', icon: '🎵' },
                { feature: '对仗工整', icon: '⚖️' },
                { feature: '含蓄蕴藉', icon: '🍃' },
                { feature: '比兴寄托', icon: '🌅' },
                { feature: '格律严谨', icon: '📐' }
              ].map((item, index) => (
                <div key={index} className="group bg-purple-50 rounded-lg p-3 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span className="text-purple-800">{item.feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-xl">
            <input 
              type="text" 
              placeholder="寻觅诗词意境..." 
              className="w-full px-6 py-4 bg-white/80 backdrop-blur-md border-2 border-[#8b634a]/30 rounded-full text-lg focus:outline-none focus:border-[#8b634a] focus:ring-2 focus:ring-[#8b634a]/30 transition-all shadow-lg font-serif"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#2c1810] to-[#8b634a] text-[#d4b59e] px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-serif">
              <span className="flex items-center">
                <span className="mr-2">搜索</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-8 border border-purple-100">
          <h2 className="text-3xl font-bold text-purple-800 mb-8 flex items-center justify-center">
            <span className="text-4xl mr-3">📜</span> 诗词瑰宝
          </h2>
          
          <div className="bg-gradient-to-br from-purple-100/80 to-pink-100/80 rounded-xl p-8 mb-8 relative overflow-hidden shadow-inner">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">经典诗词赏析</h3>
              <p className="text-lg text-purple-700 mb-8 text-center font-medium">诗词歌赋，意境深远，展现千年文化底蕴</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { type: '山水诗', desc: '清新隽永，自然之美', icon: '🎋' },
                  { type: '边塞诗', desc: '雄浑壮阔，塞外风光', icon: '🌙' },
                  { type: '田园诗', desc: '恬淡闲适，田园生活', icon: '🌸' }
                ].map((item, index) => (
                  <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 shadow-lg group">
                    <div className="text-center">
                      <span className="text-3xl group-hover:scale-110 transition-transform inline-block mb-3">{item.icon}</span>
                      <h4 className="text-xl font-bold text-purple-800 mb-2">{item.type}</h4>
                      <p className="text-purple-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl p-6 text-center transform hover:scale-[1.02] transition-all duration-300 shadow-lg">
            <a 
              href="https://www.gushiwen.cn/" 
              target="_blank" 
              className="block text-white group"
            >
              <span className="text-3xl mb-3 inline-block group-hover:scale-110 transition-transform">📚</span>
              <h3 className="text-2xl font-bold mb-2">古诗文网</h3>
              <p className="text-purple-100">探索中华诗词之美</p>
            </a>
          </div>
          
          <div className="mt-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-200/50 shadow-inner">
            <h3 className="text-2xl font-bold text-purple-800 mb-6 text-center">诗词文化传承</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: '艺术特色',
                  icon: '🖋️',
                  items: [
                    { name: '声律之美', desc: '平仄押韵的艺术' },
                    { name: '意境之美', desc: '含蓄深远的境界' },
                    { name: '形式之美', desc: '对仗工整的格律' }
                  ]
                },
                {
                  title: '文化内涵',
                  icon: '🎨',
                  items: [
                    { name: '情感表达', desc: '抒情言志的传统' },
                    { name: '哲理思考', desc: '人生感悟的升华' },
                    { name: '文化传承', desc: '诗教育人的功能' }
                  ]
                }
              ].map((section, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="text-xl font-bold text-purple-800 flex items-center">
                    <span className="text-2xl mr-2">{section.icon}</span>
                    {section.title}
                  </h4>
                  <div className="space-y-3">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 transform hover:-translate-y-1 transition-all duration-300 shadow-sm">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-purple-900">{item.name}</span>
                          <span className="text-purple-600 text-sm">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12 mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md text-[#2c1810] hover:text-[#8b634a] font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-[#8b634a]/20 hover:border-[#8b634a]/40 font-serif"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回刘星余个人学习展示平台
          </Link>
        </div>
      </div>
    </div>
  );
}