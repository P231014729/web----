'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Page() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 水中美术馆相关的类和对象
    class UnderwaterArtist {
      name: string;
      specialty: string;
      experience: number;
      constructor(name: string, specialty: string, experience: number) {
        this.name = name;
        this.specialty = specialty;
        this.experience = experience;
      }
      create() {
        console.log(`艺术家 ${this.name} 正在创作水下艺术作品，灵感源自海洋`);  
      }
      exhibit() {
        console.log(`艺术家 ${this.name} 的作品在水下美术馆展出，与海洋生态交相辉映`);  
      }
    }
    const artist = new UnderwaterArtist('Jason Taylor', '水下雕塑', 15);
    artist.create();
    artist.exhibit();

    class MarineConservator extends UnderwaterArtist {
      project: string;
      constructor(name: string, specialty: string, experience: number, project: string) {
        super(name, specialty, experience);
        this.project = project;
      }
      protect() {
        console.log(`保护者 ${this.name} 正在进行${this.project}项目，守护海洋生态`);  
      }
    }
    const conservator = new MarineConservator('Marine Guardian', '生态修复', 10, '珊瑚礁保护');
    conservator.create();
    conservator.protect();

    // 水下展览时间安排
    console.log('水下展览开始');
    setTimeout(function () {
      console.log('艺术与自然的完美融合');
    }, 2000);
    console.log('潜水员就位');

    // 动态更新展览内容
    if (divRef.current) {
      console.log(divRef.current);
      divRef.current.innerHTML = '水下美术馆：艺术与海洋的对话（点击探索水下艺术）';
      divRef.current.onclick = function () {
        alert('水下美术馆将艺术与海洋生态完美结合，创造出独特的观展体验！');
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-8 px-2">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-blue-700 hover:text-cyan-600 font-bold text-lg transition">← 返回刘星余个人学习展示平台</Link>
        </div>
        <section className="mb-8 bg-white/80 rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">水下美术馆：艺术、生态与海洋体验</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>本页面通过编程技术展示水下美术馆的艺术创新和生态保护。</li>
            <li>页面加载后请按 F12 打开浏览器控制台，观察水下艺术的数字化演示。</li>
            <li>你可以点击标题和下方内容，体验水下美术馆的交互魅力。</li>
          </ul>
        </section>
        <section className="flex flex-col items-center bg-cyan-100/60 rounded-xl p-8 shadow">
          <h1
            ref={h1Ref}
            style={{ cursor: 'pointer', transition: 'color 0.3s' }}
            onClick={() => alert('水下美术馆将艺术创作与海洋生态保护完美结合，创造出独特的观展体验！')}
            className="text-3xl font-bold mb-6 text-center text-blue-700 hover:text-cyan-600"
          >
            水下美术馆·艺术新境
          </h1>
          <div 
            ref={divRef}
            className="text-lg text-blue-800 bg-white/80 rounded p-4 text-center cursor-pointer hover:bg-cyan-200 transition-colors"
          >
            水下展览原始内容（点击我体验水下艺术）
          </div>
        </section>
      </div>
    </div>
  );
}