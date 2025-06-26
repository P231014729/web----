import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-8 px-2">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-red-700 hover:text-yellow-600 font-bold text-lg transition">← 返回非遗传承平台</Link>
        </div>
        <h1 className="text-4xl font-extrabold text-red-700 mb-8 text-center tracking-widest drop-shadow">京剧脸谱·梨园艺术</h1>
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-red-100">
          <h2 className="text-2xl font-bold underline text-red-600 mb-4">京剧脸谱的三种表现形式</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 pl-4">
            <li>整脸 - 在整个面部涂上一种颜色</li>
            <li>三块瓦脸 - 在整脸的基础上用其他颜色勾画眉、眼、鼻窝</li>
            <li style={{ color: '#d97706' }}>花脸 - 将面部的肌肉纹理夸张化，用线条勾画</li>
          </ul>
          <div className="mt-6 p-4 bg-red-50 rounded-lg">
            <p className="text-red-800 text-sm">京剧脸谱是中华民族传统文化的瑰宝，每一种颜色都蕴含着深刻的文化内涵。</p>
          </div>
        </div>
      </div>
    </div>
  );
} 