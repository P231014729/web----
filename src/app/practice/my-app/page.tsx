import Link from 'next/link';
import MyAppDemo from "../my-app-demo";
import MyAppHello from "../my-app-hello";

export default function MyAppHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-8 px-2">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-red-700 hover:text-yellow-600 font-bold text-lg transition">← 返回非遗传承平台</Link>
        </div>
        <section className="max-w-3xl mx-auto mb-10 bg-white/80 rounded-xl border border-red-200 shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0">
            {/* 宣纸制作工艺的创意展示 */}
            <div className="w-56 h-36 bg-gradient-to-br from-amber-100 to-orange-200 rounded-lg shadow-lg border-2 border-amber-300 p-4 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-repeat bg-cover" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5zm5-10c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z'/%3E%3C/g%3E%3C/svg%3E")` }}></div>
              <div className="relative z-10">
                <h3 className="text-red-700 font-bold text-lg mb-2">宣纸工艺</h3>
                <div className="space-y-1 text-sm text-red-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span>选料精细</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <span>工艺复杂</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <span>传承千年</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-red-700 mb-2">宣纸制作·千年传承</h2>
            <p className="text-red-800 mb-2">探索宣纸传统制作技艺，了解这一中华文化瑰宝的工艺流程与文化价值。宣纸素有&ldquo;纸中之王&rdquo;的美誉，承载着千年的书画文化传统。</p>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-red-700/20 text-red-700 px-3 py-1 rounded text-xs font-mono">传统技艺</span>
              <span className="bg-red-700/20 text-red-700 px-3 py-1 rounded text-xs font-mono">文房四宝</span>
              <span className="bg-red-700/20 text-red-700 px-3 py-1 rounded text-xs font-mono">非遗传承</span>
            </div>
          </div>
        </section>
        
        {/* 创意工艺流程展示 */}
        <div className="mb-8 bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-red-700 mb-4 text-center">宣纸制作工艺流程</h2>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {[
              { step: '选料', icon: '🌾', desc: '选青檀皮' },
              { step: '蒸煮', icon: '🔥', desc: '高温蒸煮' },
              { step: '洗涤', icon: '💧', desc: '清洗杂质' },
              { step: '漂白', icon: '☀️', desc: '日光漂白' },
              { step: '打浆', icon: '🥄', desc: '制成纸浆' },
              { step: '抄纸', icon: '📄', desc: '手工抄制' },
              { step: '烘干', icon: '🌬️', desc: '自然晾干' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-red-200 hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-bold text-red-700 mb-1">{item.step}</h3>
                <p className="text-xs text-red-600">{item.desc}</p>
                {index < 6 && <div className="hidden md:block absolute mt-8 ml-12 w-8 h-0.5 bg-red-300"></div>}
              </div>
            ))}
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-6 text-red-700">宣纸工艺展示区</h1>
        <div className="space-y-6">
          <div className="bg-red-900/80 text-amber-100 font-mono rounded-lg p-4 shadow">
            <h3 className="text-lg font-bold mb-3 text-yellow-300">传统工艺流程</h3>
            <MyAppDemo />
          </div>
          <div className="bg-red-900/80 text-amber-100 font-mono rounded-lg p-4 shadow">
            <h3 className="text-lg font-bold mb-3 text-yellow-300">文化价值传承</h3>
            <MyAppHello />
          </div>
        </div>
      </div>
    </div>
  );
} 