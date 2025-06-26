import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-8 px-2">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-red-700 hover:text-yellow-600 font-bold text-lg transition">← 返回非遗传承平台</Link>
        </div>
        <h1 className="text-4xl font-extrabold text-red-700 mb-6 text-center tracking-widest drop-shadow">二十四节气·时令智慧</h1>
        <section className="mb-8 bg-white/80 rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-red-700 mb-2">节气文化说明</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>二十四节气是中华民族独有的时间制度，体现了古人对自然规律的深刻认识。</li>
            <li>请观察下方不同节气的文化内涵和现代意义。</li>
          </ul>
        </section>
        <div className="bg-red-100/60 rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-semibold text-red-700 mb-4">节气文化演示</h3>
          <div className="p-6 bg-red-900/80 rounded-md">
            <ul className="list-disc list-inside space-y-4 text-lg">
              <li className="text-green-500">
                <span className="font-semibold">[春分·平分昼夜]:</span> 春分时节，昼夜平分，万物复苏，农事渐忙，体现了古人对自然节律的精准把握。
              </li>
              <li className="text-pink-400 underline decoration-wavy">
                <span className="font-semibold">[夏至·极昼之日]:</span> 夏至是一年中白昼最长的日子，古人认为阳气达到极点，是重要的祭祀时节。
              </li>
              <li style={{ color: '#dc2626', fontWeight: 'bold' }}>
                <span style={{ color: '#f59e0b', textDecoration: 'none' }}>[冬至·一阳来复]:</span> 冬至标志着阴极阳生，是中华文化中极为重要的节气，有着深厚的哲学内涵。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 