'use client';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-8 px-2">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-red-700 hover:text-yellow-600 font-bold text-lg transition">← 返回非遗传承平台</Link>
        </div>
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-4 tracking-widest drop-shadow">剪纸艺术·民间瑰宝</h1>
          <p className="text-lg text-red-600/90 max-w-3xl mx-auto">
            剪纸艺术中的层次布局如同CSS相对定位，在保持原有位置的基础上进行精妙的偏移，创造出立体的视觉效果。
          </p>
        </header>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Section: Normal Flow */}
          <section className="bg-white/80 rounded-xl shadow-xl border border-red-200 p-8">
            <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">传统剪纸布局</h2>
            <div className="space-y-4 text-red-800 text-center">
              <div className="p-4 bg-red-200/80 rounded-lg border-2 border-red-300 relative">
                <span className="text-2xl">🌸</span>
                <p className="text-sm mt-1">花朵元素 1</p>
              </div>
              <div className="p-4 bg-red-200/80 rounded-lg border-2 border-red-300 relative">
                <span className="text-2xl">🦋</span>
                <p className="text-sm mt-1">蝴蝶元素 2</p>
              </div>
              <div className="p-4 bg-red-400/60 border-2 border-red-500 rounded-lg relative">
                <span className="text-2xl">🌿</span>
                <p className="text-sm mt-1">叶子元素 3 (待调整位置)</p>
              </div>
              <div className="p-4 bg-red-200/80 rounded-lg border-2 border-red-300 relative">
                <span className="text-2xl">🐦</span>
                <p className="text-sm mt-1">鸟儿元素 4</p>
              </div>
            </div>
          </section>
          
          {/* Section: Relative Positioning */}
          <section className="bg-white/80 rounded-xl shadow-xl border border-red-200 p-8">
            <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">剪纸艺术层次效果</h2>
            <div className="space-y-4 text-red-800 text-center relative">
              <div className="p-4 bg-red-200/80 rounded-lg border-2 border-red-300 relative">
                <span className="text-2xl">🌸</span>
                <p className="text-sm mt-1">花朵元素 1</p>
              </div>
              <div className="p-4 bg-red-200/80 rounded-lg border-2 border-red-300 relative">
                <span className="text-2xl">🦋</span>
                <p className="text-sm mt-1">蝴蝶元素 2</p>
              </div>
              {/* Ghost element showing original position */}
              <div className="p-4 bg-red-100/60 border-2 border-dashed border-red-400 rounded-lg text-red-400 relative">
                <span className="text-2xl opacity-50">👻</span>
                <p className="text-sm mt-1">叶子元素 3 的原始位置</p>
              </div>
              {/* The relatively positioned element */}
              <div className="p-4 bg-red-500/80 rounded-lg absolute w-full transform translate-x-10 shadow-lg hover:scale-105 transition-transform cursor-pointer" 
                   style={{ top: 'calc(8rem + 2rem + 8px)' }}
                   onClick={() => alert('剪纸艺术中，元素的位置调整创造了立体层次感！\n\n这正如CSS的相对定位，在不影响其他元素的情况下，调整自身位置。')}>
                <span className="text-2xl animate-bounce">🌿</span>
                <p className="text-sm mt-1 text-white font-semibold">叶子元素 3 (艺术偏移效果)</p>
              </div>
              <div className="p-4 bg-red-200/80 rounded-lg border-2 border-red-300 relative">
                <span className="text-2xl">🐦</span>
                <p className="text-sm mt-1">鸟儿元素 4</p>
              </div>
              <p className="text-sm text-amber-600 pt-16 text-center bg-amber-50 rounded p-3 mt-8">
                📝 剪纸智慧：即使叶子元素被艺术性地调整了位置，鸟儿元素的位置依然保持不变，
                因为叶子在整体布局中占据的空间被保留了，这正体现了剪纸艺术的层次美学。
              </p>
            </div>
          </section>
        </div>

        {/* 剪纸工艺展示 */}
        <div className="mt-12 bg-gradient-to-br from-red-50 to-amber-50 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">剪纸艺术工艺特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-white/80 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                 onClick={() => alert('阳刻：以刀代笔，线条流畅，形象生动，是剪纸艺术的基本技法。')}>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">✂️</span>
              </div>
              <h3 className="font-bold text-red-700 mb-2">阳刻技法</h3>
              <p className="text-red-600 text-sm">以刀代笔，线条流畅</p>
            </div>
            
            <div className="text-center bg-white/80 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                 onClick={() => alert('阴刻：镂空表现，虚实相间，营造层次感和立体感。')}>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">🔳</span>
              </div>
              <h3 className="font-bold text-amber-700 mb-2">阴刻技法</h3>
              <p className="text-amber-600 text-sm">镂空表现，虚实相间</p>
            </div>
            
            <div className="text-center bg-white/80 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                 onClick={() => alert('阴阳结合：将阳刻和阴刻技法巧妙结合，创造丰富的视觉层次。')}>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">☯️</span>
              </div>
              <h3 className="font-bold text-purple-700 mb-2">阴阳结合</h3>
              <p className="text-purple-600 text-sm">巧妙结合，层次丰富</p>
            </div>
          </div>
        </div>

        {/* 剪纸文化内涵 */}
        <div className="mt-8 bg-white/80 rounded-xl p-6 border border-red-200 shadow">
          <h3 className="text-xl font-semibold text-red-700 mb-4 text-center">剪纸艺术的文化内涵</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-bold text-red-600">🎨 艺术特色</h4>
              <ul className="text-sm text-red-700 space-y-2">
                <li>• 造型简洁，寓意深远</li>
                <li>• 色彩鲜艳，对比强烈</li>
                <li>• 题材丰富，贴近生活</li>
                <li>• 技法多样，创意无限</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-red-600">🏮 文化价值</h4>
              <ul className="text-sm text-red-700 space-y-2">
                <li>• 民间智慧的结晶</li>
                <li>• 传统文化的载体</li>
                <li>• 节庆习俗的体现</li>
                <li>• 审美教育的媒介</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-white/80 rounded-xl p-6 border border-red-200 shadow">
          <h3 className="text-xl font-semibold text-red-700 mb-4">剪纸艺术的技术原理</h3>
          <div className="bg-red-900/80 text-sm text-red-100 font-mono p-6 rounded-md overflow-x-auto">
            <div className="space-y-2">
              <div className="text-yellow-300 font-bold">{/* 剪纸艺术中的"相对定位"原理 */}</div>
              <div><span className="text-green-300">.paper-cut-element</span> {`{`}</div>
              <div className="ml-4"><span className="text-blue-300">position</span>: <span className="text-yellow-200">relative</span>; <span className="text-gray-400">{/* 保持在文档流中 */}</span></div>
              <div className="ml-4"><span className="text-blue-300">top</span>: <span className="text-yellow-200">20px</span>; <span className="text-gray-400">{/* 向下偏移，创造层次 */}</span></div>
              <div className="ml-4"><span className="text-blue-300">left</span>: <span className="text-yellow-200">30px</span>; <span className="text-gray-400">{/* 向右偏移，形成布局美感 */}</span></div>
              <div className="ml-4"><span className="text-blue-300">z-index</span>: <span className="text-yellow-200">2</span>; <span className="text-gray-400">{/* 提升层级，突出重点 */}</span></div>
              <div>{`}`}</div>
              <div className="mt-4 text-amber-200">
                {/* 剪纸艺术的精髓：在不破坏整体布局的前提下， */}
                <br />{/* 通过巧妙的位置调整，创造出丰富的视觉层次 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 