'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Page() {
  useEffect(() => {
    // 未来建筑相关的JavaScript演示
    const buildingType = "生态塔楼";
    console.log("建筑类型：", buildingType);
    const constructionTime = "18个月";
    console.log("建造周期：", constructionTime);
    console.log("建筑类型：", typeof buildingType, "工期类型：", typeof constructionTime, "是否智能：", typeof true);
    const height = "350";
    console.log("高度 + 米数：", 350 + height);
    console.log("实际高度：", 350 + Number(height));
    const standardHeight = "350";
    console.log("高度匹配：", 350 == Number(standardHeight));
    console.log("严格匹配：", 350 === Number(standardHeight));
    
    // 建筑状态监测
    const currentStatus = '运行中';
    if (currentStatus == '运行中') {
      console.log('智能系统正常运行！');
    } else {
      console.log('系统检查中');
    }
    
    // 建筑系统循环检测
    for (let system = 1; system <= 7; system++) {
      console.log("系统" + system + "检测完成");
    }
    
    // 能源循环
    let energyLevel = 5;
    while (energyLevel > 0) {
      console.log('能源系统' + (6-energyLevel) + '级运行中');
      energyLevel = energyLevel - 1;
    }
    
    // 建筑功能函数
    function greetBuilding() {
      console.log('欢迎来到未来建筑，体验科技与艺术的完美融合！');
    }
    greetBuilding();
    
    function introduceBuilding(buildingName: string) {
      console.log('建筑介绍：' + String(buildingName) + '是未来城市的标志性建筑');
    }
    console.log(typeof introduceBuilding('天际塔'));
    introduceBuilding('天际塔');
    
    function constructionGuide(buildingType: string, method: string) {
      console.log('建造指南：' + String(buildingType) + '采用' + String(method) + '建造工艺');
    }
    constructionGuide('生态塔楼', '模块化');
    
    function architectureWisdom(wisdom: string) {
      console.log("建筑理念：", wisdom);
      return wisdom + ' - 这是未来建筑的核心价值';
    }
    architectureWisdom('科技赋能');
    const wisdom = architectureWisdom('绿色永续');
    console.log(wisdom);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-8 px-2">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-blue-700 hover:text-cyan-600 font-bold text-lg transition">← 返回刘星余个人学习展示平台</Link>
        </div>
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center tracking-widest drop-shadow">未来建筑·智慧之城</h1>
        
        <section className="mb-8 bg-white/80 rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">建筑体验说明</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>本页面通过交互式体验展示未来建筑的创新理念。</li>
            <li>页面加载后会在控制台模拟建筑运行状态。</li>
            <li>请按 F12 打开浏览器控制台，观察智能建筑的数字化演示。</li>
          </ul>
        </section>

        {/* 创意建筑流程展示 */}
        <section className="mb-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">建筑智能系统</h2>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {[
              { step: '能源', icon: '⚡', desc: '智能供能', color: 'from-yellow-400 to-orange-400' },
              { step: '环境', icon: '🌱', desc: '生态控制', color: 'from-green-400 to-emerald-400' },
              { step: '安防', icon: '🛡️', desc: '智能监控', color: 'from-blue-400 to-cyan-400' },
              { step: '交通', icon: '🚡', desc: '垂直运输', color: 'from-blue-500 to-indigo-400' },
              { step: '通信', icon: '📡', desc: '信息网络', color: 'from-purple-400 to-pink-400' },
              { step: '消防', icon: '🚒', desc: '应急系统', color: 'from-red-400 to-pink-400' },
              { step: '管理', icon: '🤖', desc: 'AI控制', color: 'from-indigo-400 to-violet-400' }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-2 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-all duration-300 cursor-pointer group-hover:animate-bounce`}>
                  <span className="text-2xl filter drop-shadow-sm">{item.icon}</span>
                </div>
                <h3 className="font-bold text-blue-700 mb-1 text-sm">{item.step}</h3>
                <p className="text-xs text-blue-600">{item.desc}</p>
                {index < 6 && (
                  <div className="hidden md:block absolute mt-8 ml-12 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 建筑特色展示区 */}
        <section className="mb-8 bg-white/90 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-blue-700 mb-4 text-center">建筑创新特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
                 onClick={() => alert('生态系统：垂直绿化，雨水回收，自然采光，创造可持续发展的生态环境')}>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🌱</span>
                </div>
                <h3 className="font-bold text-green-700">生态系统</h3>
                <p className="text-xs text-green-600 mt-1">绿色永续</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
                 onClick={() => alert('智能系统：AI控制中心，物联网感知，自动化管理，提供智慧化服务')}>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🤖</span>
                </div>
                <h3 className="font-bold text-blue-700">智能系统</h3>
                <p className="text-xs text-blue-600 mt-1">科技赋能</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
                 onClick={() => alert('模块化设计：预制构件，快速组装，灵活变化，适应未来发展需求')}>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🏗️</span>
                </div>
                <h3 className="font-bold text-purple-700">模块化设计</h3>
                <p className="text-xs text-purple-600 mt-1">灵活创新</p>
              </div>
            </div>
          </div>
        </section>

        {/* 未来建筑愿景 */}
        <section className="flex flex-col items-center bg-blue-100/60 rounded-xl p-8 shadow">
          <div className="w-full max-w-md mx-auto mb-6">
            {/* 创意建筑展示 */}
            <div className="bg-gradient-to-br from-cyan-200 to-blue-200 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="flex justify-center items-center h-full">
                  <div className="text-6xl animate-pulse">🏙️</div>
                </div>
              </div>
              <div className="relative z-10 text-center">
                <h3 className="text-lg font-bold text-blue-700 mb-2">建筑愿景</h3>
                <p className="text-blue-600 text-sm">&ldquo;科技赋能，绿色永续&rdquo;</p>
              </div>
            </div>
          </div>
          <div className="text-lg text-blue-800 bg-white/80 rounded p-4 text-center max-w-lg">
            <p className="mb-2">🏢 建筑系统演示在控制台进行</p>
            <p className="text-sm text-blue-600">请查看控制台了解未来建筑的运行状态，体验科技创新带来的智慧生活</p>
          </div>
        </section>
      </div>
    </div>
  );
}