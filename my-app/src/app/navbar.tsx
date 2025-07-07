// 完整的 Navbar 组件代码（与 panyan 项目中的相同，但修改了标题）
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-red-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-yellow-300 transition-colors">
          刘星余个人过往学习展示平台
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-yellow-300 transition-colors">首页</Link>
          <Link href="/archive" className="hover:text-yellow-300 transition-colors">学习档案</Link>
        </div>
      </div>
    </nav>
  );
}