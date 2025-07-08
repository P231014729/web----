'use client';
import Image from 'next/image';
import Link from 'next/link';
import './styles.css';

export default function MyAppHome() {
  return (
    <div className="yinyang-body">
      <style jsx>{
        `
          .yinyang-body {
            background: linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%);
            min-height: 100vh;
            color: #e0d6c3;
            padding: 2rem;
            position: relative;
            overflow: hidden;
          }

          .yinyang-body::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c15.464 0 28-12.536 28-28S45.464-26 30-26 2-13.464 2 2s12.536 28 28 28zm0-4c13.255 0 24-10.745 24-24S43.255-22 30-22 6-11.255 6 2s10.745 24 24 24zm0-4c11.046 0 20-8.954 20-20S41.046-18 30-18 10-9.046 10 2s8.954 20 20 20z' fill='rgba(255,255,255,0.05)' fill-rule='evenodd'/%3E%3C/svg%3E");
            opacity: 0.1;
            z-index: 0;
            animation: rotate 60s linear infinite;
          }

          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          .yinyang-title {
            font-size: 2.5rem;
            text-align: center;
            color: #ffd700;
            margin: 2rem 0;
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
            animation: float 4s ease-in-out infinite;
          }

          .yinyang-content {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
          }

          .element-section {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            padding: 2rem;
            margin-bottom: 2rem;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 215, 0, 0.1);
            transition: transform 0.3s ease;
          }

          .element-section:hover {
            transform: translateY(-5px);
          }

          .element-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .element-card {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            padding: 1.5rem;
            border: 1px solid rgba(255, 215, 0, 0.2);
            transition: all 0.3s ease;
          }

          .element-card:hover {
            border-color: #ffd700;
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.2);
          }

          .yinyang-link {
            color: #ffd700;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .yinyang-link:hover {
            color: #fff;
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
          }
        `}
      </style>

      <Link href="/" className="yinyang-link" style={{ position: 'absolute', top: '20px', left: '20px' }}>← 返回刘星余个人学习展示平台</Link>
      
      <h1 className="yinyang-title">☯ 阴阳五行之道 ☯</h1>
      
      <div className="yinyang-content">
        <div className="element-section">
          <h2>阴阳之道</h2>
          <p>阴阳最初是描述自然界对立但又相互依存的两个方面。阴性代表阴暗、凉爽、柔软、静止等特征，而阳性则代表明亮、炎热、坚硬、活动等特征。阴阳相互补充、相互转化，构成了宇宙万物的运行规律。</p>
          <div className="element-grid">
            <div className="element-card">
              <h3>阴之性质</h3>
              <ul>
                <li>沉静</li>
                <li>下降</li>
                <li>寒冷</li>
                <li>柔弱</li>
              </ul>
            </div>
            <div className="element-card">
              <h3>阳之性质</h3>
              <ul>
                <li>活跃</li>
                <li>上升</li>
                <li>炎热</li>
                <li>刚强</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="element-section">
          <h2>五行之道</h2>
          <p>五行即木、火、土、金、水，它们是描述自然界万物的五种基本属性。五行之间相生相克，构成了一个完整的循环系统。</p>
          <div className="element-grid">
            <div className="element-card">
              <h3>🌳 木</h3>
              <p>性质：生长、条达</p>
              <p>特点：能曲能伸</p>
            </div>
            <div className="element-card">
              <h3>🔥 火</h3>
              <p>性质：炎上、光明</p>
              <p>特点：发热发光</p>
            </div>
            <div className="element-card">
              <h3>🌎 土</h3>
              <p>性质：载物、生化</p>
              <p>特点：厚重包容</p>
            </div>
            <div className="element-card">
              <h3>⚔️ 金</h3>
              <p>性质：从革、肃杀</p>
              <p>特点：刚柔并济</p>
            </div>
            <div className="element-card">
              <h3>💧 水</h3>
              <p>性质：润下、闭藏</p>
              <p>特点：柔弱载舟</p>
            </div>
          </div>
        </div>

        <div className="element-section">
          <h2>五行相生相克</h2>
          <div className="element-grid">
            <div className="element-card">
              <h3>相生之道</h3>
              <ul>
                <li>木生火：木为火之母</li>
                <li>火生土：火化为灰</li>
                <li>土生金：金藏于土</li>
                <li>金生水：金化为液</li>
                <li>水生木：水养树木</li>
              </ul>
            </div>
            <div className="element-card">
              <h3>相克之道</h3>
              <ul>
                <li>木克土：根破土</li>
                <li>土克水：土堤防水</li>
                <li>水克火：水灭火</li>
                <li>火克金：火熔金</li>
                <li>金克木：金伐木</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="element-section">
          <h2>阴阳五行应用</h2>
          <p>阴阳五行学说在中国传统文化中有着广泛的应用，从医学到建筑，从音乐到美食，无处不体现着这一深邃的哲学智慧。</p>
          <div className="element-grid">
            <div className="element-card">
              <h3>中医养生</h3>
              <p>五脏配五行，辨证施治</p>
            </div>
            <div className="element-card">
              <h3>命理预测</h3>
              <p>八字五行，趋吉避凶</p>
            </div>
            <div className="element-card">
              <h3>建筑风水</h3>
              <p>阴阳调和，趋利避害</p>
            </div>
          </div>
        </div>

        <div className="element-section">
          <p className="text-center">
            <a href="https://www.nongli.cn/suanming/64031.html" className="yinyang-link" target="_blank" rel="noopener noreferrer">
              探索更多阴阳五行的奥秘 →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}