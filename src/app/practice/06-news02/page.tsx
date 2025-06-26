'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Page() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 昆曲艺术相关的类和对象
    class OperaPerformer {
      name: string;
      role: string;
      experience: number;
      constructor(name: string, role: string, experience: number) {
        this.name = name;
        this.role = role;
        this.experience = experience;
      }
      sing() {
        console.log(`昆曲演员 ${this.name} 正在演唱，声腔悠扬`);
      }
      dance() {
        console.log(`昆曲演员 ${this.name} 正在表演身段，优美动人`);
      }
    }
    const performer = new OperaPerformer('梅兰芳', '旦角', 20);
    performer.sing();
    performer.dance();

    class KunquMaster extends OperaPerformer {
      specialty: string;
      constructor(name: string, role: string, experience: number, specialty: string) {
        super(name, role, experience);
        this.specialty = specialty;
      }
      teach() {
        console.log(`昆曲大师 ${this.name} 正在传授${this.specialty}技艺`);
      }
    }
    const master = new KunquMaster('俞振飞', '小生', 40, '昆曲唱腔');
    master.sing();
    master.teach();

    // 昆曲演出时间安排
    console.log('昆曲演出开始');
    setTimeout(function () {
      console.log('昆曲演出精彩呈现');
    }, 2000);
    console.log('观众入座');

    // 动态更新昆曲内容
    if (divRef.current) {
      console.log(divRef.current);
      divRef.current.innerHTML = '昆曲：百戏之祖，雅韵悠长（点击感受昆曲魅力）';
      divRef.current.onclick = function () {
        alert('昆曲被誉为"百戏之祖"，是中华戏曲艺术的瑰宝！');
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-8 px-2">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-red-700 hover:text-yellow-600 font-bold text-lg transition">← 返回非遗传承平台</Link>
        </div>
        <section className="mb-8 bg-white/80 rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-red-700 mb-2">昆曲艺术：传承、互动与文化体验</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>本页面通过编程技术展示昆曲艺术的传承体系和文化内涵。</li>
            <li>页面加载后请按 F12 打开浏览器控制台，观察昆曲文化的数字化演示。</li>
            <li>你可以点击标题和下方内容，体验昆曲文化的交互魅力。</li>
          </ul>
        </section>
        <section className="flex flex-col items-center bg-red-100/60 rounded-xl p-8 shadow">
          <h1
            ref={h1Ref}
            style={{ cursor: 'pointer', transition: 'color 0.3s' }}
            onClick={() => alert('昆曲是中国现存最古老的剧种之一，被称为"百戏之祖"！')}
            className="text-3xl font-bold mb-6 text-center text-red-700 hover:text-yellow-600"
          >
            昆曲艺术·百戏之祖
          </h1>
          <div 
            ref={divRef}
            className="text-lg text-red-800 bg-white/80 rounded p-4 text-center cursor-pointer hover:bg-red-200 transition-colors"
          >
            昆曲原始内容（点击我体验昆曲文化）
          </div>
        </section>
      </div>
    </div>
  );
} 