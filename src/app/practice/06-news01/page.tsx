'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Page() {
  useEffect(() => {
    // 太极拳法相关的类和对象演示
    class TaichiPractitioner {
      name: string;
      age: number;
      school: string;
      level: number;
      constructor(name: string, age: number, school: string, level: number) {
        this.name = name;
        this.age = age;
        this.school = school;
        this.level = level;
      }
      practice(form: string = '二十四式') {
        console.log(`${this.name}正在练习${form}太极拳，身心合一`);
      }
      meditation() {
        console.log(`${this.name}正在静心冥想，感悟太极之道`);
      }
    }
    const practitioner = new TaichiPractitioner('张师傅', 45, '陈式太极', 8);
    practitioner.practice('八十八式');
    practitioner.meditation();

    class TaichiMaster extends TaichiPractitioner {
      specialty: string;
      experience: number;
      constructor(name: string, age: number, school: string, level: number, specialty: string, experience: number) {
        super(name, age, school, level);
        this.specialty = specialty;
        this.experience = experience;
      }
      teach(student: string) {
        console.log(`${this.name}正在向${student}传授太极拳法，传承武学精髓`);
      }
    }
    const master = new TaichiMaster('李大师', 60, '武当太极', 10, '内功心法', 30);
    master.practice('太极剑');
    master.teach('弟子小王');

    // 太极修炼的时间流程
    console.log('开始太极修炼');
    setTimeout(function() {
      console.log('修炼完成，达到身心平衡');
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-8 px-2">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-red-700 hover:text-yellow-600 font-bold text-lg transition">← 返回非遗传承平台</Link>
        </div>
        <h1 className="text-4xl font-extrabold text-red-700 mb-6 text-center tracking-widest drop-shadow">太极拳法·内外兼修</h1>
        
        <section className="mb-8 bg-white/80 rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-red-700 mb-2">太极文化体验</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>本页面通过面向对象编程展示太极拳的传承体系。</li>
            <li>页面加载后会在控制台模拟太极修炼过程。</li>
            <li>请按 F12 打开浏览器控制台，体验太极文化的数字化演示。</li>
          </ul>
        </section>

        {/* 创意太极图展示 */}
        <section className="mb-8 bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">太极阴阳</h2>
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32">
              {/* 太极图SVG动画 */}
              <svg viewBox="0 0 200 200" className="w-full h-full animate-spin" style={{ animationDuration: '20s' }}>
                <circle cx="100" cy="100" r="90" fill="white" stroke="#dc2626" strokeWidth="4"/>
                <path d="M 100 10 A 45 45 0 0 1 100 100 A 45 45 0 0 0 100 190 A 90 90 0 0 1 100 10" fill="#dc2626"/>
                <circle cx="100" cy="55" r="15" fill="white"/>
                <circle cx="100" cy="145" r="15" fill="#dc2626"/>
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="bg-white/80 rounded-lg p-4 border-l-4 border-red-500">
              <h3 className="font-bold text-red-700 mb-2">🌗 阳</h3>
              <p className="text-red-600 text-sm">刚劲有力，动中求静</p>
            </div>
            <div className="bg-gray-100/80 rounded-lg p-4 border-l-4 border-gray-500">
              <h3 className="font-bold text-gray-700 mb-2">🌓 阴</h3>
              <p className="text-gray-600 text-sm">柔和舒缓，静中有动</p>
            </div>
          </div>
        </section>

        {/* 太极拳法展示 */}
        <section className="mb-8 bg-white/90 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-red-700 mb-4 text-center">太极拳法套路</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: '起势', icon: '🧘', desc: '静心立身' },
              { name: '揽雀尾', icon: '🐦', desc: '四正手法' },
              { name: '单鞭', icon: '🐍', desc: '拧转腰身' },
              { name: '云手', icon: '☁️', desc: '行云流水' },
              { name: '白鹤亮翅', icon: '🕊️', desc: '展翅翱翔' },
              { name: '搂膝拗步', icon: '🦵', desc: '下势稳固' },
              { name: '手挥琵琶', icon: '🎵', desc: '虚实相间' },
              { name: '收势', icon: '🙏', desc: '归于平静' }
            ].map((move, index) => (
              <div key={index} className="text-center p-3 rounded-lg hover:bg-red-50 transition-colors cursor-pointer group"
                   onClick={() => alert(`${move.name}：${move.desc}\n\n太极拳讲究意气合一，内外兼修，每一招式都蕴含深厚哲理。`)}>
                <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-red-400 to-orange-400 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <span className="text-xl">{move.icon}</span>
                </div>
                <h3 className="font-bold text-red-700 text-sm mb-1">{move.name}</h3>
                <p className="text-xs text-red-600">{move.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 太极流派展示 */}
        <section className="mb-8 bg-gradient-to-r from-red-50 to-amber-50 rounded-xl p-6 shadow">
          <h2 className="text-xl font-bold text-red-700 mb-4 text-center">太极流派传承</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/80 rounded-lg p-4 border-2 border-red-200 hover:border-red-400 transition-colors">
              <h3 className="font-bold text-red-700 mb-2">🏔️ 陈式太极</h3>
              <p className="text-red-600 text-sm mb-2">起源于河南陈家沟，刚柔相济</p>
              <div className="text-xs text-red-500 space-y-1">
                <div>• 特点：螺旋缠丝，发力明显</div>
                <div>• 代表：陈王廷创始</div>
              </div>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <h3 className="font-bold text-blue-700 mb-2">⛰️ 杨式太极</h3>
              <p className="text-blue-600 text-sm mb-2">杨露禅所创，舒展大方</p>
              <div className="text-xs text-blue-500 space-y-1">
                <div>• 特点：柔和缓慢，适合养生</div>
                <div>• 代表：杨氏三代传承</div>
              </div>
            </div>
            
            <div className="bg-white/80 rounded-lg p-4 border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <h3 className="font-bold text-purple-700 mb-2">🏞️ 武当太极</h3>
              <p className="text-purple-600 text-sm mb-2">道家文化，内功为主</p>
              <div className="text-xs text-purple-500 space-y-1">
                <div>• 特点：注重内功，以柔克刚</div>
                <div>• 代表：张三丰传说</div>
              </div>
            </div>
          </div>
        </section>

        {/* 太极文化体验区 */}
        <section className="flex flex-col items-center bg-red-100/60 rounded-xl p-8 shadow">
          <div className="w-full max-w-md mx-auto mb-6">
            {/* 创意太极修炼展示 */}
            <div className="bg-gradient-to-br from-slate-200 to-gray-300 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="flex justify-center items-center h-full">
                  <div className="text-6xl animate-pulse">☯️</div>
                </div>
              </div>
              <div className="relative z-10 text-center">
                <h3 className="text-lg font-bold text-red-700 mb-2">太极精神</h3>
                <p className="text-red-600 text-sm">&ldquo;以柔克刚，内外兼修&rdquo;</p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white/60 rounded p-2">
                    <span className="font-semibold">修身</span>
                    <br />强身健体
                  </div>
                  <div className="bg-white/60 rounded p-2">
                    <span className="font-semibold">养性</span>
                    <br />陶冶情操
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-lg text-red-800 bg-white/80 rounded p-4 text-center max-w-lg">
            <p className="mb-2">🥋 太极修炼演示在控制台进行</p>
            <p className="text-sm text-red-600">请查看控制台感受太极之道，体验阴阳调和的智慧传承</p>
          </div>
        </section>
      </div>
    </div>
  );
} 