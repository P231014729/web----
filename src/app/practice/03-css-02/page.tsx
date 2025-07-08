import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 py-8 px-2">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-amber-800 hover:text-amber-600 font-bold text-lg transition">← 返回刘星余个人学习展示平台</Link>
        </div>
        <div className="mb-6 flex justify-center">
          <a 
            href="https://www.ihchina.cn/printing_home.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full max-w-lg px-4 py-2 bg-amber-800/90 hover:bg-amber-700 text-amber-100 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>探索更多活字印刷术知识</span>
          </a>
        </div>
        <h1 className="text-4xl font-extrabold text-amber-800 mb-6 text-center tracking-widest drop-shadow">活字印刷术·文明之光</h1>
        <section className="mb-8 bg-white/80 rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-amber-800 mb-2">活字印刷简介</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>活字印刷术是中国古代四大发明之一，对人类文明传播产生深远影响。</li>
            <li>请了解这项伟大发明的历史演变和技术特点。</li>
          </ul>
        </section>
        <div className="bg-amber-100/60 rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-amber-800 mb-4">印刷技术发展</h3>
          <div className="p-6 bg-gradient-to-r from-amber-900/80 to-yellow-900/80 rounded-md">
            <ul className="list-disc list-inside space-y-4 text-lg">
              <li className="text-amber-300 hover:text-amber-200 transition-colors">
                <span className="font-semibold">[毕昇·创新先驱]:</span> 北宋时期毕昇发明泥活字印刷，开创了活字印刷的新纪元，极大提高了书籍的印刷效率。
              </li>
              <li className="text-yellow-300 hover:text-yellow-200 transition-colors">
                <span className="font-semibold">[工艺·精益求精]:</span> 活字印刷采用单字模具制作，可以灵活组合，重复使用，是古代智慧的结晶。
              </li>
              <li className="text-orange-300 hover:text-orange-200 transition-colors">
                <span className="font-semibold">[影响·文明传承]:</span> 活字印刷术促进了知识传播，推动了教育普及，为人类文明进步做出重要贡献。
              </li>
            </ul>
          </div>
        </div>
        
        <section className="bg-white/80 rounded-xl shadow-lg p-8 mb-8 overflow-hidden">
          <h3 className="text-2xl font-bold text-amber-800 mb-6">活字印刷制作过程</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg bg-amber-900/80 p-4 hover:bg-amber-800/80 transition-all duration-300 cursor-pointer">
              <div className="absolute -right-12 -top-12 w-24 h-24 bg-amber-500/20 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              <h4 className="text-amber-200 text-lg font-semibold mb-2 relative animate-fade-in">1. 制作字模</h4>
              <p className="text-amber-100/90 relative group-hover:translate-x-2 transition-transform">
                将每个汉字刻制成凸起的字模
                <span className="block mt-2 text-amber-300/80 text-sm animate-pulse">→ 精雕细琢，一字一世界</span>
              </p>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg bg-amber-900/80 p-4 hover:bg-amber-800/80 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <div className="absolute -left-12 -bottom-12 w-24 h-24 bg-amber-500/20 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              <h4 className="text-amber-200 text-lg font-semibold mb-2 relative animate-fade-in delay-100">2. 排版组字</h4>
              <p className="text-amber-100/90 relative group-hover:translate-y-1 transition-transform">
                按文章内容排列组合字模
                <span className="block mt-2 text-amber-300/80 text-sm animate-bounce">→ 巧手排列，文章成形</span>
              </p>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg bg-amber-900/80 p-4 hover:bg-amber-800/80 transition-all duration-300 cursor-pointer">
              <div className="absolute -right-12 -bottom-12 w-24 h-24 bg-amber-500/20 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              <h4 className="text-amber-200 text-lg font-semibold mb-2 relative animate-fade-in delay-200">3. 印刷成书</h4>
              <p className="text-amber-100/90 relative group-hover:-translate-x-2 transition-transform">
                涂墨印刷，装订成册
                <span className="block mt-2 text-amber-300/80 text-sm animate-pulse">→ 墨香四溢，书香传世</span>
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gradient-to-r from-amber-900/10 via-amber-800/10 to-amber-900/10 rounded-lg border border-amber-200/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            <p className="text-amber-900 text-center font-medium relative">
              活字印刷，是古代匠人智慧的结晶，每一步工序都凝聚着精湛的技艺。
              通过这种方式，知识得以广泛传播，文明得以永续传承。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}