import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-6 px-2">
      <div className="max-w-5xl mx-auto">
        <header className="text-center py-10 bg-gradient-to-b from-red-700 to-red-500 rounded-b-2xl shadow-lg mb-8 relative overflow-hidden">
          {/* 创意建筑轮廓背景 */}
          <div className="absolute inset-0 opacity-10">
            <div className="flex justify-center items-end h-full pb-4 gap-2">
              <div className="w-8 h-12 bg-white rounded-t transform -rotate-12"></div>
              <div className="w-6 h-16 bg-white rounded-t transform rotate-6"></div>
              <div className="w-10 h-20 bg-white rounded-t"></div>
              <div className="w-8 h-14 bg-white rounded-t transform -rotate-6"></div>
              <div className="w-12 h-18 bg-white rounded-t transform rotate-12"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-widest drop-shadow-lg relative z-10">传统建筑·古韵新辉</h1>
          <p className="text-white mt-3 text-lg font-semibold relative z-10">中华建筑文化·千年传承</p>
        </header>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 max-w-2xl mx-auto hover:-translate-y-1 transition-transform">
          <h3 className="text-xl font-bold text-red-700 mb-4">✨ 建筑发展历程</h3>
          <table className="w-full border-separate border-spacing-y-2">
            <tbody>
              <tr><td className="pl-4 border-l-4 border-red-500 py-2">春秋战国 - 宫殿建筑兴起</td></tr>
              <tr><td className="pl-4 border-l-4 border-red-500 py-2">汉代 - 木构架技术成熟</td></tr>
              <tr><td className="pl-4 border-l-4 border-red-500 py-2">唐宋 - 建筑艺术达到高峰</td></tr>
              <tr><td className="pl-4 border-l-4 border-red-500 py-2">明清 - 建筑风格日趋完善</td></tr>
            </tbody>
          </table>
        </div>

        {/* 创意建筑特色展示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-red-700 border-b-2 border-yellow-500 pb-2 mb-3">🏯 著名建筑</h3>
            <ol className="list-decimal list-inside text-red-800 space-y-1">
              <li>故宫 - 明清皇家宫殿建筑群</li>
              <li>天坛 - 明清皇家祭坛建筑</li>
              <li>颐和园 - 清代皇家园林</li>
            </ol>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-red-700 border-b-2 border-yellow-500 pb-2 mb-3">🏗️ 建筑特色</h3>
            <ul className="columns-2 gap-2 list-none p-0">
              <li className="relative pl-6 mb-2 before:content-['🏮'] before:absolute before:left-0 text-red-700">斗栱结构</li>
              <li className="relative pl-6 mb-2 before:content-['🏮'] before:absolute before:left-0 text-red-700">飞檐翘角</li>
              <li className="relative pl-6 mb-2 before:content-['🏮'] before:absolute before:left-0 text-red-700">雕梁画栋</li>
              <li className="relative pl-6 mb-2 before:content-['🏮'] before:absolute before:left-0 text-red-700">庭院布局</li>
              <li className="relative pl-6 mb-2 before:content-['🏮'] before:absolute before:left-0 text-red-700">对称美学</li>
              <li className="relative pl-6 mb-2 before:content-['🏮'] before:absolute before:left-0 text-red-700">礼制文化</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <form action="https://search.sina.com.cn/" target="_blank" className="flex gap-3 w-full max-w-xl">
            <input type="text" name="q" defaultValue="中国传统建筑" placeholder="搜索传统建筑文化..." className="flex-1 px-5 py-3 border-2 border-red-500 rounded-full text-base focus:outline-none focus:border-yellow-500 transition" />
            <input type="submit" value="立即搜索" className="bg-gradient-to-r from-red-700 to-red-500 text-white px-8 py-3 rounded-full font-bold shadow-md hover:scale-105 hover:opacity-90 transition cursor-pointer" />
          </form>
        </div>

        <div className="bg-white/90 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-6">🏛️ 建筑瑰宝</h2>
          
          {/* 创意建筑展示区域 */}
          <div className="bg-gradient-to-b from-red-100 to-amber-100 rounded-xl p-8 mb-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <svg viewBox="0 0 800 200" className="w-full h-full">
                {/* 传统建筑轮廓SVG */}
                <polygon points="100,160 150,120 200,160" fill="#dc2626" />
                <rect x="120" y="160" width="60" height="30" fill="#dc2626" />
                <polygon points="300,150 380,100 460,150" fill="#d97706" />
                <rect x="340" y="150" width="80" height="40" fill="#d97706" />
                <polygon points="500,140 600,80 700,140" fill="#dc2626" />
                <rect x="550" y="140" width="100" height="50" fill="#dc2626" />
              </svg>
            </div>
            <div className="relative z-10 text-center">
              <h3 className="text-xl font-bold text-red-700 mb-4">中华古建筑群</h3>
              <p className="text-red-600 mb-4">飞檐翘角，雕梁画栋，展现千年建筑智慧</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/80 rounded-lg p-3">
                  <h4 className="font-bold text-red-700">🏮 斗栱结构</h4>
                  <p className="text-red-600">榫卯相接，巧夺天工</p>
                </div>
                <div className="bg-white/80 rounded-lg p-3">
                  <h4 className="font-bold text-red-700">🎋 飞檐翘角</h4>
                  <p className="text-red-600">轻盈灵动，气韵生动</p>
                </div>
                <div className="bg-white/80 rounded-lg p-3">
                  <h4 className="font-bold text-red-700">🏛️ 对称布局</h4>
                  <p className="text-red-600">中轴对称，礼制严明</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-700 to-red-500 rounded-xl text-center py-4 mb-6">
            <a href="https://www.palace-museum.org/" target="_blank" className="text-white text-lg font-bold px-8 py-3 inline-block rounded-full hover:scale-105 transition">🏯 故宫博物院</a>
            <p className="text-gray-200 mt-2 text-sm">探索紫禁城的建筑奥秘</p>
          </div>
          
          {/* 建筑文化视频区域改为文化介绍 */}
          <div className="bg-gradient-to-br from-amber-50 to-red-50 rounded-xl p-6 border-2 border-red-200">
            <h3 className="text-xl font-bold text-red-700 mb-4 text-center">建筑文化传承</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-bold text-red-600">🔨 工艺传承</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• 榫卯结构 - 无钉建筑的智慧</li>
                  <li>• 彩绘技艺 - 雕梁画栋的美学</li>
                  <li>• 砖瓦制作 - 传统材料的工艺</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-red-600">🎨 文化内涵</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• 天人合一 - 建筑与自然和谐</li>
                  <li>• 礼制文化 - 等级秩序的体现</li>
                  <li>• 风水理念 - 建筑选址的智慧</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-red-700 hover:text-yellow-600 font-bold text-lg transition">← 返回非遗传承平台</Link>
        </div>
      </div>
    </div>
  );
} 