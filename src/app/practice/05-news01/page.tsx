'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Page() {
  useEffect(() => {
    // 茶艺文化相关的JavaScript演示
    const teaType = "龙井";
    console.log("今日品茶：", teaType);
    const brewTime = "3分钟";
    console.log("冲泡时间：", brewTime);
    console.log("茶类型：", typeof teaType, "冲泡时间类型：", typeof brewTime, "是否优质：", typeof true);
    const temperature = "85";
    console.log("水温 + 度数：", 85 + temperature);
    console.log("正确水温：", 85 + Number(temperature));
    const standardTemp = "85";
    console.log("温度匹配：", 85 == Number(standardTemp));
    console.log("严格匹配：", 85 === Number(standardTemp));
    
    // 品茶时间判断
    const currentTime = '15:30';
    if (currentTime == '15:30') {
      console.log('下午茶时光，开始品茶！');
    } else {
      console.log('继续学习茶艺');
    }
    
    // 茶艺步骤循环
    for (let step = 1; step <= 7; step++) {
      console.log("茶艺第" + step + "步");
    }
    
    // 冲泡循环
    let steepCount = 5;
    while (steepCount > 0) {
      console.log('第' + (6-steepCount) + '次冲泡');
      steepCount = steepCount - 1;
    }
    
    // 茶艺功能函数
    function greetTea() {
      console.log('欢迎来到茶艺世界，感受传统文化的魅力！');
    }
    greetTea();
    
    function introduceTea(teaName: string) {
      console.log('茶艺介绍：' + String(teaName) + '是中华茶文化的精品');
    }
    console.log(typeof introduceTea('碧螺春'));
    introduceTea('碧螺春');
    
    function brewingGuide(teaType: string, method: string) {
      console.log('冲泡指南：' + String(teaType) + '适合用' + String(method) + '方式冲泡');
    }
    brewingGuide('铁观音', '功夫茶');
    
    function teaWisdom(wisdom: string) {
      console.log("茶道智慧：", wisdom);
      return wisdom + ' - 这是茶艺的精髓所在';
    }
    teaWisdom('茶禅一味');
    const wisdom = teaWisdom('静心品茗');
    console.log(wisdom);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-8 px-2">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-red-700 hover:text-yellow-600 font-bold text-lg transition">← 返回非遗传承平台</Link>
        </div>
        <h1 className="text-4xl font-extrabold text-red-700 mb-6 text-center tracking-widest drop-shadow">茶艺文化·品茗悟道</h1>
        
        <section className="mb-8 bg-white/80 rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-red-700 mb-2">茶艺体验说明</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>本页面通过交互式体验展示中华茶艺文化的深厚内涵。</li>
            <li>页面加载后会在控制台模拟茶艺冲泡过程。</li>
            <li>请按 F12 打开浏览器控制台，观察茶艺文化的数字化演示。</li>
          </ul>
        </section>

        {/* 创意茶艺流程展示 */}
        <section className="mb-8 bg-gradient-to-br from-green-50 to-amber-50 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">茶艺七步法</h2>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {[
              { step: '温壶', icon: '🫖', desc: '开水烫壶', color: 'from-red-400 to-orange-400' },
              { step: '置茶', icon: '🍃', desc: '投入茶叶', color: 'from-green-400 to-emerald-400' },
              { step: '醒茶', icon: '💧', desc: '温润茶叶', color: 'from-blue-400 to-cyan-400' },
              { step: '冲泡', icon: '🌊', desc: '注水冲泡', color: 'from-blue-500 to-indigo-400' },
              { step: '出汤', icon: '🥤', desc: '倒出茶汤', color: 'from-amber-400 to-yellow-400' },
              { step: '分茶', icon: '🍵', desc: '分倒茶杯', color: 'from-orange-400 to-red-400' },
              { step: '品茗', icon: '😌', desc: '细品茶香', color: 'from-purple-400 to-pink-400' }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-2 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-all duration-300 cursor-pointer group-hover:animate-bounce`}>
                  <span className="text-2xl filter drop-shadow-sm">{item.icon}</span>
                </div>
                <h3 className="font-bold text-red-700 mb-1 text-sm">{item.step}</h3>
                <p className="text-xs text-red-600">{item.desc}</p>
                {index < 6 && (
                  <div className="hidden md:block absolute mt-8 ml-12 w-8 h-0.5 bg-gradient-to-r from-red-300 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 茶艺互动体验区 */}
        <section className="mb-8 bg-white/90 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-red-700 mb-4 text-center">茶艺互动体验</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
                 onClick={() => alert('绿茶：清香淡雅，富含维生素C，有清热解毒之效')}>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🍃</span>
                </div>
                <h3 className="font-bold text-green-700">绿茶</h3>
                <p className="text-xs text-green-600 mt-1">清香淡雅</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
                 onClick={() => alert('红茶：香气浓郁，口感醇厚，温暖身心')}>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🌹</span>
                </div>
                <h3 className="font-bold text-red-700">红茶</h3>
                <p className="text-xs text-red-600 mt-1">香气浓郁</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
                 onClick={() => alert('乌龙茶：半发酵茶，兼具绿茶清香与红茶甘醇')}>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🌸</span>
                </div>
                <h3 className="font-bold text-blue-700">乌龙茶</h3>
                <p className="text-xs text-blue-600 mt-1">香醇回甘</p>
              </div>
            </div>
          </div>
        </section>

        {/* 茶道文化区域 */}
        <section className="flex flex-col items-center bg-red-100/60 rounded-xl p-8 shadow">
          <div className="w-full max-w-md mx-auto mb-6">
            {/* 创意茶具展示 */}
            <div className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="flex justify-center items-center h-full">
                  <div className="text-6xl animate-pulse">🫖</div>
                </div>
              </div>
              <div className="relative z-10 text-center">
                <h3 className="text-lg font-bold text-red-700 mb-2">茶道精神</h3>
                <p className="text-red-600 text-sm">&ldquo;茶禅一味，静心品茗&rdquo;</p>
              </div>
            </div>
          </div>
          <div className="text-lg text-red-800 bg-white/80 rounded p-4 text-center max-w-lg">
            <p className="mb-2">🍵 茶艺演示在控制台进行</p>
            <p className="text-sm text-red-600">请查看控制台了解茶文化的奥秘，感受千年茶道的智慧传承</p>
          </div>
        </section>
      </div>
    </div>
  );
} 