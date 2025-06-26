'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const [dates, setDates] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [medicines, setMedicines] = useState<string[]>([]);

  // fetch 获取中医药学习数据（模拟异步获取医学典籍数据）
  async function getTcmData(source: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
      // 模拟获取中医典籍记录
      setTimeout(() => {
        try {
          const tcmRecords = [
            '《黄帝内经》编撰时间记录',
            '《伤寒杂病论》成书年代',
            '《本草纲目》完成日期',
            '《神农本草经》传承记录',
            '《针灸甲乙经》整理时间'
          ];
          console.log('中医药典籍研究记录(JSON):', JSON.stringify(tcmRecords));
          console.log('数据来源:', source);
          console.log('异步获取中医药学数据完成');
          resolve(tcmRecords);
        } catch (err) {
          reject(err);
        }
      }, 1500);
    });
  }

  // 中医药材数据异步处理
  useEffect(() => {
    (async () => {
      try {
        const result = await getTcmData('中医药典籍数据库');
        setDates(result);
        
        // 模拟中药配方数据
        const medicineData = [
          '人参 - 大补元气',
          '当归 - 补血活血', 
          '黄芪 - 补气固表',
          '甘草 - 调和诸药',
          '枸杞 - 滋补肝肾'
        ];
        setMedicines(medicineData);
        
        console.log('中医药典籍数据(JSON):', JSON.stringify(result));
        console.log('中药配方数据:', medicineData);
      } catch (err) {
        setError('获取中医药数据失败');
        console.error('获取中医药数据失败:', err);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-8 px-2">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-red-700 hover:text-yellow-600 font-bold text-lg transition">← 返回非遗传承平台</Link>
        </div>
        <h1 className="text-4xl font-extrabold text-red-700 mb-6 text-center tracking-widest drop-shadow">中医药学·岐黄之术</h1>
        
        <section className="mb-8 bg-white/80 rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-red-700 mb-2">中医药数字化传承</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>本页面展示中医药学的数字化传承，通过异步技术获取医学典籍数据。</li>
            <li>页面加载后会模拟获取中医典籍编撰记录并以 JSON 形式展示。</li>
            <li>请按 F12 打开浏览器控制台，观察中医药数据处理过程。</li>
          </ul>
        </section>

        {/* 创意中药材展示 */}
        <section className="mb-8 bg-gradient-to-br from-green-50 to-amber-50 rounded-xl p-8 shadow-lg">
          <h2 className="text-xl font-bold text-red-700 mb-4 text-center">中药配方展示</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {medicines.map((medicine, index) => (
              <div key={index} className="text-center group cursor-pointer"
                   onClick={() => alert(`${medicine}\n\n中医药学是中华民族几千年来在与疾病斗争中积累的宝贵经验和理论知识。`)}>
                <div className={`w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-all duration-300 ${
                  index % 5 === 0 ? 'bg-gradient-to-br from-red-400 to-red-600' :
                  index % 5 === 1 ? 'bg-gradient-to-br from-green-400 to-green-600' :
                  index % 5 === 2 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                  index % 5 === 3 ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                  'bg-gradient-to-br from-orange-400 to-orange-600'
                }`}>
                  <span className="text-2xl text-white filter drop-shadow-sm">
                    {index % 5 === 0 ? '🫀' :
                     index % 5 === 1 ? '🌿' :
                     index % 5 === 2 ? '⚡' :
                     index % 5 === 3 ? '💊' : '🔥'}
                  </span>
                </div>
                <h3 className="font-bold text-red-700 text-xs mb-1">{medicine.split(' - ')[0]}</h3>
                <p className="text-xs text-red-600">{medicine.split(' - ')[1]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 中医理论展示 */}
        <section className="mb-8 bg-white/90 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-red-700 mb-4 text-center">中医基础理论</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-lg p-4">
              <h3 className="font-bold text-red-700 mb-2">☯️ 阴阳学说</h3>
              <p className="text-red-600 text-sm">阴阳是中医理论的核心，体现了中华文化的哲学智慧</p>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg p-4">
              <h3 className="font-bold text-amber-700 mb-2">🌟 五行学说</h3>
              <p className="text-amber-600 text-sm">金木水火土，五行相生相克，调节人体平衡</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-4">
              <h3 className="font-bold text-green-700 mb-2">🩺 望闻问切</h3>
              <p className="text-green-600 text-sm">中医四诊法，全面了解患者身体状况</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4">
              <h3 className="font-bold text-blue-700 mb-2">🏥 辨证论治</h3>
              <p className="text-blue-600 text-sm">因人而异，个体化治疗的中医特色</p>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center bg-red-100/60 rounded-xl p-8 shadow">
          <div className="w-full max-w-md mx-auto mb-6">
            {/* 创意中医文化展示 */}
            <div className="bg-gradient-to-br from-amber-200 to-red-200 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="flex justify-center items-center h-full">
                  <div className="text-6xl animate-pulse">🌿</div>
                </div>
              </div>
              <div className="relative z-10 text-center">
                <h3 className="text-lg font-bold text-red-700 mb-2">岐黄之术</h3>
                <p className="text-red-600 text-sm">&ldquo;上工治未病，中工治已病&rdquo;</p>
              </div>
            </div>
          </div>
          <div id="demo" className="w-full overflow-x-auto mt-4 text-red-900 bg-white/80 rounded p-4 text-center max-w-4xl">
            <h3 className="font-bold text-red-700 mb-2">📜 中医典籍数据</h3>
            <div className="text-sm font-mono">
              {error ? error : (dates.length > 0 ? JSON.stringify(dates, null, 2) : '正在获取中医典籍数据...')}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 