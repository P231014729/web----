'use client';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-8 px-2">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-teal-700 hover:text-blue-600 font-bold text-lg transition">← 返回刘星余个人学习展示平台</Link>
        </div>
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-4 tracking-widest drop-shadow">数字陶瓷·科技创新</h1>
          <p className="text-lg text-teal-600/90 max-w-3xl mx-auto">
            数字陶瓷艺术中的层次布局如同CSS相对定位，通过3D建模和数字渲染，创造出前所未有的艺术效果。
          </p>
        </header>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Section: Normal Flow */}
          <section className="bg-white/80 rounded-xl shadow-xl border border-teal-200 p-8">
            <h2 className="text-2xl font-bold text-teal-700 mb-6 text-center">传统陶瓷建模</h2>
            <div className="space-y-4 text-teal-800 text-center">
              <div className="p-4 bg-teal-200/80 rounded-lg border-2 border-teal-300 relative">
                <span className="text-2xl">🏺</span>
                <p className="text-sm mt-1">器型元素 1</p>
              </div>
              <div className="p-4 bg-teal-200/80 rounded-lg border-2 border-teal-300 relative">
                <span className="text-2xl">🎨</span>
                <p className="text-sm mt-1">纹饰元素 2</p>
              </div>
              <div className="p-4 bg-teal-400/60 border-2 border-teal-500 rounded-lg relative">
                <span className="text-2xl">💠</span>
                <p className="text-sm mt-1">釉色元素 3 (待渲染)</p>
              </div>
              <div className="p-4 bg-teal-200/80 rounded-lg border-2 border-teal-300 relative">
                <span className="text-2xl">✨</span>
                <p className="text-sm mt-1">光泽元素 4</p>
              </div>
            </div>
          </section>
          
          {/* Section: Relative Positioning */}
          <section className="bg-white/80 rounded-xl shadow-xl border border-teal-200 p-8">
            <h2 className="text-2xl font-bold text-teal-700 mb-6 text-center">数字陶瓷渲染效果</h2>
            <div className="space-y-4 text-teal-800 text-center relative">
              <div className="p-4 bg-teal-200/80 rounded-lg border-2 border-teal-300 relative">
                <span className="text-2xl">🏺</span>
                <p className="text-sm mt-1">器型元素 1</p>
              </div>
              <div className="p-4 bg-teal-200/80 rounded-lg border-2 border-teal-300 relative">
                <span className="text-2xl">🎨</span>
                <p className="text-sm mt-1">纹饰元素 2</p>
              </div>
              {/* Ghost element showing original position */}
              <div className="p-4 bg-teal-100/60 border-2 border-dashed border-teal-400 rounded-lg text-teal-400 relative">
                <span className="text-2xl opacity-50">👻</span>
                <p className="text-sm mt-1">釉色元素 3 的原始状态</p>
              </div>
              {/* The relatively positioned element */}
              <div className="p-4 bg-teal-500/80 rounded-lg absolute w-full transform translate-x-10 shadow-lg hover:scale-105 transition-transform cursor-pointer" 
                   style={{ top: 'calc(8rem + 2rem + 8px)' }}
                   onClick={() => alert('数字陶瓷中，3D建模和渲染技术创造了真实的材质效果！\n\n这正如CSS的相对定位，通过数字技术精确控制每个细节。')}>
                <span className="text-2xl animate-bounce">💠</span>
                <p className="text-sm mt-1 text-white font-semibold">釉色元素 3 (数字渲染效果)</p>
              </div>
              <div className="p-4 bg-teal-200/80 rounded-lg border-2 border-teal-300 relative">
                <span className="text-2xl">✨</span>
                <p className="text-sm mt-1">光泽元素 4</p>
              </div>
              <p className="text-sm text-cyan-600 pt-16 text-center bg-cyan-50 rounded p-3 mt-8">
                📝 数字智慧：即使釉色元素通过数字技术进行了渲染，其他元素的位置依然保持不变，
                这体现了数字陶瓷艺术对传统工艺的尊重与创新。
              </p>
            </div>
          </section>
        </div>

        {/* 数字陶瓷工艺展示 */}
        <div className="mt-12 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-teal-700 mb-6 text-center">数字陶瓷技术特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center bg-white/80 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                 onClick={() => alert('3D建模：精确还原陶瓷器型，实现虚拟设计与实物制作的无缝对接。')}>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">💻</span>
              </div>
              <h3 className="font-bold text-teal-700 mb-2">3D建模</h3>
              <p className="text-teal-600 text-sm">精确建模，虚实结合</p>
            </div>
            
            <div className="text-center bg-white/80 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                 onClick={() => alert('数字渲染：模拟各种釉色效果，预览最终呈现效果。')}>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">🎨</span>
              </div>
              <h3 className="font-bold text-cyan-700 mb-2">数字渲染</h3>
              <p className="text-cyan-600 text-sm">釉色模拟，效果预览</p>
            </div>
            
            <div className="text-center bg-white/80 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                 onClick={() => alert('智能制造：将数字模型转化为实物，实现精准生产。')}>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">🤖</span>
              </div>
              <h3 className="font-bold text-blue-700 mb-2">智能制造</h3>
              <p className="text-blue-600 text-sm">数字转化，精准生产</p>
            </div>
          </div>
        </div>

        {/* 数字陶瓷价值 */}
        <div className="mt-8 bg-white/80 rounded-xl p-6 border border-teal-200 shadow">
          <h3 className="text-xl font-semibold text-teal-700 mb-4 text-center">数字陶瓷的创新价值</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-bold text-teal-600">🔧 技术优势</h4>
              <ul className="text-sm text-teal-700 space-y-2">
                <li>• 精确的数字建模</li>
                <li>• 真实的材质渲染</li>
                <li>• 高效的批量生产</li>
                <li>• 灵活的创意设计</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-teal-600">🌟 创新价值</h4>
              <ul className="text-sm text-teal-700 space-y-2">
                <li>• 传统工艺数字化</li>
                <li>• 生产效率提升</li>
                <li>• 设计创新拓展</li>
                <li>• 文化传承创新</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-white/80 rounded-xl p-6 border border-teal-200 shadow">
          <h3 className="text-xl font-semibold text-teal-700 mb-4">数字陶瓷的技术原理</h3>
          <div className="bg-teal-900/80 text-sm text-teal-100 font-mono p-6 rounded-md overflow-x-auto">
            <div className="space-y-2">
              <div className="text-yellow-300 font-bold">{/* 数字陶瓷中的"相对定位"原理 */}</div>
              <div><span className="text-green-300">.digital-ceramic</span> {`{`}</div>
              <div className="ml-4"><span className="text-blue-300">position</span>: <span className="text-yellow-200">relative</span>; <span className="text-gray-400">{/* 保持在3D空间中 */}</span></div>
              <div className="ml-4"><span className="text-blue-300">transform</span>: <span className="text-yellow-200">translate3d(0, 0, 20px)</span>; <span className="text-gray-400">{/* 3D空间定位 */}</span></div>
              <div className="ml-4"><span className="text-blue-300">material</span>: <span className="text-yellow-200">ceramic-glaze</span>; <span className="text-gray-400">{/* 材质渲染 */}</span></div>
              <div className="ml-4"><span className="text-blue-300">render-quality</span>: <span className="text-yellow-200">high</span>; <span className="text-gray-400">{/* 渲染质量 */}</span></div>
              <div>{`}`}</div>
              <div className="mt-4 text-cyan-200">
                {/* 数字陶瓷的精髓：通过数字技术精确控制， */}
                <br />{/* 实现传统工艺与现代科技的完美融合 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}