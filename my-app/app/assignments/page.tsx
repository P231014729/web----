import Link from 'next/link';

interface Assignment {
  id: string;
  title: string;
  description: string;
  link: string;
  image?: string;
}

const assignments: Assignment[] = [
  {
    id: '1',
    title: '星穹观测站',
    description: '第一次作业 - 使用HTML和CSS创建的天文主题网页，展示了古代天文仪器和观测历史。',
    link: '/index-P231014729.html',
    image: '/Images/康熙天体仪.png' // 假设这张图片在 public/Images/ 目录下
  },
  {
    id: '2',
    title: '古代物理学家图鉴',
    description: '第二次作业 - 展示古代物理学家的生日和贡献，采用优雅的古风设计风格。',
    link: '/03-css-4729.html',
    image: '/Images/浑仪.png' // 假设这张图片在 public/Images/ 目录下
  },
  {
    id: '3',
    title: '新闻页面实践',
    description: '第三次作业 - 新闻网页布局练习，实践响应式设计和现代网页布局技术。',
    link: '/05-news-01.html',
    image: '/Images/P231014729 刘星余第三次作业.png' // 确保这张图片在 public/Images/ 目录下
  },
  {
    id: '4',
    title: '新闻页面实践 (版本二)',
    description: '新闻网页布局练习的另一个版本，探索不同的布局方案。',
    link: '/06-news-01.html', // 确保此文件已复制到 public 目录
    // image: '/Images/your-image-for-06-news-01.png' // 如果有图片，请取消注释并修改路径
  },
  {
    id: '5',
    title: '新闻页面实践 (版本三)',
    description: '新闻网页布局练习的又一个版本，专注于特定技术点。',
    link: '/06-news01.html', // 确保此文件已复制到 public 目录
    // image: '/Images/your-image-for-06-news01.png' // 如果有图片，请取消注释并修改路径
  },
  {
    id: '6',
    title: 'JavaScript 异步操作',
    description: '关于JavaScript异步回调、Promise和Async/Await的练习。',
    link: '/07-async-01.html', // 确保此文件已复制到 public 目录
    // image: '/Images/your-image-for-07-async-01.png' // 如果有图片，请取消注释并修改路径
  },
  {
    id: '7',
    title: '早期HTML练习 (首页)',
    description: '一个早期的HTML基础练习页面，作为项目首页的示例。',
    link: '/index.html', // 确保此文件已复制到 public 目录
    image: '/Images/第一次作业网页截图.png' // 确保这张图片在 public/Images/ 目录下
  }
];

export default function AssignmentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1a] to-[#1a1a2e] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#00f3ff] animate-pulse
          tracking-wider relative">
          Web前端技术作业集
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assignments.map((assignment) => (
            <Link 
              href={assignment.link}
              key={assignment.id}
              className="group"
            >
              <div className="bg-[#1a1a2e]/50 backdrop-blur-sm rounded-lg p-6 border border-[#6c43f5]/30
                hover:border-[#00f3ff]/50 transition-all duration-300 ease-in-out
                transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,243,255,0.2)]"
              >
                {assignment.image && (
                  <div className="aspect-video mb-4 overflow-hidden rounded-md bg-black/20">
                    <div 
                      className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundImage: `url(${assignment.image})` }}
                    />
                  </div>
                )}
                
                <h2 className="text-2xl font-semibold mb-3 text-[#00f3ff] group-hover:text-white
                  transition-colors duration-300">
                  {assignment.title}
                </h2>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {assignment.description}
                </p>
                
                <div className="flex items-center text-[#6c43f5] group-hover:text-[#00f3ff]
                  transition-colors duration-300">
                  <span>查看作业</span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 border-t border-[#6c43f5]/30 pt-8">
          <h3 className="text-2xl font-semibold mb-6 text-[#00f3ff]">延伸阅读</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-300">
            <a
              href="https://developer.mozilla.org/zh-CN/docs/Learn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00f3ff] transition-colors duration-300"
            >
              MDN Web 开发学习
            </a>
            <a
              href="https://zh-hans.react.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00f3ff] transition-colors duration-300"
            >
              React 官方文档
            </a>
            <a
              href="https://tailwindcss.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00f3ff] transition-colors duration-300"
            >
              Tailwind CSS 文档
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}