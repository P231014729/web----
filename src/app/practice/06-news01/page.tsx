'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Page() {
  useEffect(() => {
    // 三体文明相关的类和对象演示
    class SpaceCivilization {
      name: string;
      dimension: number;
      technology: string;
      level: number;
      constructor(name: string, dimension: number, technology: string, level: number) {
        this.name = name;
        this.dimension = dimension;
        this.technology = technology;
        this.level = level;
      }
      research(field: string = '智子技术') {
        console.log(`${this.name}正在研究${field}，探索宇宙奥秘`);
      }
      communicate() {
        console.log(`${this.name}正在进行跨维度通信，寻找文明信号`);
      }
    }
    const civilization = new SpaceCivilization('三体文明', 4, '降维打击', 9);
    civilization.research('曲率驱动');
    civilization.communicate();

    class AdvancedCivilization extends SpaceCivilization {
      weapon: string;
      strategy: string;
      constructor(name: string, dimension: number, technology: string, level: number, weapon: string, strategy: string) {
        super(name, dimension, technology, level);
        this.weapon = weapon;
        this.strategy = strategy;
      }
      deploy(target: string) {
        console.log(`${this.name}正在对${target}实施${this.weapon}，执行${this.strategy}`);
      }
    }
    const advanced = new AdvancedCivilization('歌者文明', 11, '二向箔', 12, '维度打击', '黑暗森林法则');
    advanced.research('光速飞船');
    advanced.deploy('低维文明');

    // 宇宙文明的时间流程
    console.log('开始文明探索');
    setTimeout(function() {
      console.log('探索完成，发现宇宙文明的奥秘');
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 py-8 px-2">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-blue-400 hover:text-purple-400 font-bold text-lg transition">← 返回刘星余个人学习展示平台</Link>
        </div>
        <h1 className="text-4xl font-extrabold text-blue-400 mb-6 text-center tracking-widest drop-shadow">三体文明·宇宙探索</h1>
        
        <section className="mb-8 bg-slate-800/80 rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-blue-400 mb-2">科技文明体验</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>本页面通过面向对象编程展示三体文明的科技体系。</li>
            <li>页面加载后会在控制台模拟文明探索过程。</li>
            <li>请按 F12 打开浏览器控制台，体验科幻文明的数字化演示。</li>
          </ul>
        </section>

        {/* 创意宇宙展示 */}
        <section className="mb-8 bg-gradient-to-br from-slate-800 to-purple-900 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center">维度科技</h2>
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32">
              {/* 宇宙空间动画 */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-pulse opacity-75"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
              <div className="absolute inset-8 bg-gradient-to-br from-blue-700 to-purple-700 rounded-full animate-ping opacity-50"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="bg-slate-800/80 rounded-lg p-4 border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-400 mb-2">🌌 高维打击</h3>
              <p className="text-blue-300 text-sm">降维攻击，跨维度作战</p>
            </div>
            <div className="bg-slate-800/80 rounded-lg p-4 border-l-4 border-purple-500">
              <h3 className="font-bold text-purple-400 mb-2">🌠 智子技术</h3>
              <p className="text-purple-300 text-sm">量子纠缠，即时通讯</p>
            </div>
          </div>
        </section>

        {/* 科技展示 */}
        <section className="mb-8 bg-slate-800/90 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-blue-400 mb-4 text-center">未来科技系统</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: '智子', icon: '🛸', desc: '量子计算' },
              { name: '水滴', icon: '💧', desc: '超强材料' },
              { name: '二向箔', icon: '📡', desc: '维度武器' },
              { name: '曲率引擎', icon: '🚀', desc: '空间跃迁' },
              { name: '光速飞船', icon: '✨', desc: '星际航行' },
              { name: 'hibernation', icon: '❄️', desc: '人体冷冻' },
              { name: '太空城', icon: '🏙️', desc: '移动城市' },
              { name: '量子通讯', icon: '📱', desc: '跨星通信' }
            ].map((tech, index) => (
              <div key={index} className="text-center p-3 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer group"
                   onClick={() => alert(`${tech.name}：${tech.desc}\n\n三体文明的高等科技，展现了未来科技的无限可能。`)}>
                <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <span className="text-xl">{tech.icon}</span>
                </div>
                <h3 className="font-bold text-blue-400 text-sm mb-1">{tech.name}</h3>
                <p className="text-xs text-blue-300">{tech.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 文明等级展示 */}
        <section className="mb-8 bg-gradient-to-r from-slate-800 to-purple-900 rounded-xl p-6 shadow">
          <h2 className="text-xl font-bold text-blue-400 mb-4 text-center">宇宙文明等级</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-800/80 rounded-lg p-4 border-2 border-blue-900 hover:border-blue-400 transition-colors">
              <h3 className="font-bold text-blue-400 mb-2">🌍 地球文明</h3>
              <p className="text-blue-300 text-sm mb-2">技术等级：行星文明</p>
              <div className="text-xs text-blue-200 space-y-1">
                <div>• 特点：初级科技，星球限制</div>
                <div>• 代表：人类文明</div>
              </div>
            </div>
            
            <div className="bg-slate-800/80 rounded-lg p-4 border-2 border-purple-900 hover:border-purple-400 transition-colors">
              <h3 className="font-bold text-purple-400 mb-2">🌌 三体文明</h3>
              <p className="text-purple-300 text-sm mb-2">技术等级：恒星文明</p>
              <div className="text-xs text-purple-200 space-y-1">
                <div>• 特点：高维技术，智子科技</div>
                <div>• 代表：三体人</div>
              </div>
            </div>
            
            <div className="bg-slate-800/80 rounded-lg p-4 border-2 border-cyan-900 hover:border-cyan-400 transition-colors">
              <h3 className="font-bold text-cyan-400 mb-2">✨ 高等文明</h3>
              <p className="text-cyan-300 text-sm mb-2">技术等级：宇宙文明</p>
              <div className="text-xs text-cyan-200 space-y-1">
                <div>• 特点：掌控维度，跨星系战争</div>
                <div>• 代表：歌者文明</div>
              </div>
            </div>
          </div>
        </section>

        {/* 科幻文化体验区 */}
        <section className="flex flex-col items-center bg-slate-800/60 rounded-xl p-8 shadow">
          <div className="w-full max-w-md mx-auto mb-6">
            {/* 创意科技展示 */}
            <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="flex justify-center items-center h-full">
                  <div className="text-6xl animate-pulse">🌌</div>
                </div>
              </div>
              <div className="relative z-10 text-center">
                <h3 className="text-lg font-bold text-blue-400 mb-2">宇宙法则</h3>
                <p className="text-blue-300 text-sm">&ldquo;黑暗森林，生存竞争&rdquo;</p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-800/60 rounded p-2">
                    <span className="font-semibold text-purple-400">文明探索</span>
                    <br /><span className="text-purple-300">寻找生命</span>
                  </div>
                  <div className="bg-slate-800/60 rounded p-2">
                    <span className="font-semibold text-blue-400">宇宙法则</span>
                    <br /><span className="text-blue-300">生存竞争</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-lg text-blue-300 bg-slate-800/80 rounded p-4 text-center max-w-lg">
            <p className="mb-2">🚀 文明探索演示在控制台进行</p>
            <p className="text-sm text-blue-400">请查看控制台感受科技文明的进程，体验宇宙探索的无限可能</p>
          </div>
        </section>
      </div>
    </div>
  );
}