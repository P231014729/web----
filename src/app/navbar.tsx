import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 bottom-0 w-64 bg-[#8B4513] text-[#E2C49F] shadow-lg flex flex-col z-50">
      {/* 顶部标题 */}
      <div className="p-6 text-center border-b border-[#CD853F]/30">
        <Link href="/" className="text-xl font-bold hover:text-[#DAA520] transition-colors duration-300 flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-amber-600 rounded-full flex items-center justify-center mb-2">
            <span className="text-lg font-black text-white">学</span>
          </div>
          刘星余学习展示平台
        </Link>
      </div>
      
      {/* 导航链接 */}
      <div className="flex-1 p-4 space-y-3">
        <Link href="/" className="block p-3 hover:bg-[#CD853F]/30 rounded-lg transition-all transform hover:translate-x-2 group">
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DAA520] group-hover:scale-150 transition-transform"></span>
            首页
          </span>
        </Link>
        <Link href="#heritage-categories" className="block p-3 hover:bg-[#CD853F]/30 rounded-lg transition-all transform hover:translate-x-2 group">
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DAA520] group-hover:scale-150 transition-transform"></span>
            作业分类
          </span>
        </Link>
        <Link href="#heritage-masters" className="block p-3 hover:bg-[#CD853F]/30 rounded-lg transition-all transform hover:translate-x-2 group">
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DAA520] group-hover:scale-150 transition-transform"></span>
            文明进程
          </span>
        </Link>
        <Link href="#cultural-activities" className="block p-3 hover:bg-[#CD853F]/30 rounded-lg transition-all transform hover:translate-x-2 group">
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DAA520] group-hover:scale-150 transition-transform"></span>
            文化竞赛
          </span>
        </Link>
        <Link href="#learning-resources" className="block p-3 hover:bg-[#CD853F]/30 rounded-lg transition-all transform hover:translate-x-2 group">
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DAA520] group-hover:scale-150 transition-transform"></span>
            学习资源
          </span>
        </Link>
        <Link href="/practice/QAnything" className="block p-3 hover:bg-[#CD853F]/30 rounded-lg transition-all transform hover:translate-x-2 group">
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DAA520] group-hover:scale-150 transition-transform"></span>
            文化问答
          </span>
        </Link>
      </div>

      {/* 底部装饰 */}
      <div className="p-4 border-t border-[#CD853F]/30 text-center text-sm opacity-60">
        文化传承 · 科技创新
      </div>
    </nav>
  );
}