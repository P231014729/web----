// app/components/LearningCards.tsx
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  link: string;
  bgColor: string;
}

const learningCardsData: CardProps[] = [
  {
    title: "HTML 基础",
    description: "学习构建网页的基本结构和元素。",
    link: "/05-news-01.html", // 确保此文件在 public 目录下或正确配置路由
    bgColor: "bg-red-500",
  },
  {
    title: "CSS 样式",
    description: "掌握美化网页内容和布局的技巧。",
    link: "/03-css-4729.html", // 确保此文件在 public 目录下或正确配置路由
    bgColor: "bg-blue-500",
  },
  {
    title: "JavaScript 交互",
    description: "为你的网页添加动态功能和用户交互。",
    link: "/07-async-01.html", // 确保此文件在 public 目录下或正确配置路由
    bgColor: "bg-yellow-500",
  },
  {
    title: "Next.js 快速入门",
    description: "了解现代React框架的基础知识和特性。",
    link: "https://nextjs.org/learn",
    bgColor: "bg-green-500",
  },
];

export default function LearningCards() {
  return (
    <div className="mt-16 w-full max-w-5xl">
      <h2 className="text-3xl font-bold mb-8 text-center">学习资源卡片</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {learningCardsData.map((card) => (
          <Link
            key={card.title}
            href={card.link}
            passHref
            legacyBehavior // 如果link是外部链接或非Next.js路由的静态HTML，建议使用legacyBehavior
          >
            <a 
              className={`block p-8 rounded-xl shadow-2xl text-white hover:scale-105 transform transition-all duration-300 ease-in-out ${card.bgColor} hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]`}
              target={card.link.startsWith('http') ? '_blank' : '_self'}
              rel={card.link.startsWith('http') ? 'noopener noreferrer' : ''}
            >
              <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
              <p className="text-base opacity-90">{card.description}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}