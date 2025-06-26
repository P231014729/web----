import Link from "next/link";
import DdddddExerciseCard, { ExerciseCardProps } from "./exercise-card";
import exercisesData from './exercises.json';
import WakaTimeStats from "./wakatime-stats";
import HeroBanner from "./hero-banner";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md text-white p-4 shadow-lg w-full z-50 border-b border-amber-600/30">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-amber-400 transition-colors duration-300 tracking-wider flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-amber-600 rounded-full flex items-center justify-center">
            <span className="text-sm font-black text-white">非</span>
          </div>
          非遗传承平台
        </Link>
        <div className="hidden md:flex space-x-6 text-base">
          <Link href="/" className="hover:text-amber-400 transition-colors duration-300 relative group">
            首页
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <Link href="#heritage-categories" className="hover:text-amber-400 transition-colors duration-300 relative group">
            非遗分类
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <Link href="#heritage-masters" className="hover:text-amber-400 transition-colors duration-300 relative group">
            传承人物
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <Link href="#cultural-activities" className="hover:text-amber-400 transition-colors duration-300 relative group">
            文化活动
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <Link href="#learning-resources" className="hover:text-amber-400 transition-colors duration-300 relative group">
            学习资源
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <Link href="/practice/embed-demo" className="hover:text-amber-400 transition-colors duration-300 relative group">
            文化问答
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></div>
          </Link>
        </div>
        
        {/* 移动端菜单按钮 */}
        <div className="md:hidden">
          <button className="text-white hover:text-amber-400 transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen items-center overflow-hidden relative">
      {/* 传统纹样背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        {/* 回纹装饰 */}
        <div className="absolute top-20 left-10 w-24 h-24 border-2 border-red-800 transform rotate-45">
          <div className="absolute inset-2 border border-red-800"></div>
          <div className="absolute inset-4 border border-red-800"></div>
        </div>
        <div className="absolute top-1/3 right-16 w-20 h-20 border-2 border-blue-800 rounded-full">
          <div className="absolute inset-2 border border-blue-800 rounded-full"></div>
        </div>
        {/* 云纹装饰 */}
        <div className="absolute bottom-32 left-1/4 w-32 h-16">
          <div className="w-full h-full bg-gradient-to-r from-amber-200/20 via-red-200/20 to-transparent rounded-full"></div>
        </div>
        <div className="absolute top-1/2 right-1/3 w-28 h-14">
          <div className="w-full h-full bg-gradient-to-l from-blue-200/20 via-slate-200/20 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* 主体渐变背景 */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(185,28,28,0.08),rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] opacity-15 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-600 via-red-800 to-transparent rounded-full blur-3xl"></div>
      
      <Navbar />

      {/* 轮播图区域 */}
      <div className="w-full pt-20">
        <HeroBanner />
      </div>

      <main className="flex-grow container mx-auto px-4 py-12 w-full z-10 relative">
        <header className="text-center mb-20 relative">
          {/* 标题装饰 */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-800 via-red-700 to-amber-700 mb-6 drop-shadow-lg tracking-wide">
            中华非遗传承学习
          </h1>
          
          {/* 副标题装饰线 */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-red-600"></div>
            <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-r from-red-600 to-blue-700"></div>
            <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
            <div className="w-12 h-px bg-gradient-to-r from-blue-700 to-transparent"></div>
          </div>
          
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto tracking-wide leading-relaxed">
            传承千年文化瑰宝，守护民族文化根脉，让非物质文化遗产在新时代焕发光彩。
          </p>
          
          {/* 底部装饰 */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        </header>

        {/* 分类标签区域 */}
        <div className="mb-12 flex justify-center" id="heritage-categories">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/50">
            <h2 className="text-2xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-amber-700">
              非遗文化分类
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              {[
                { name: "传统技艺", color: "text-red-700", icon: "🎨" },
                { name: "传统戏剧", color: "text-blue-700", icon: "🎭" },
                { name: "传统音乐", color: "text-amber-700", icon: "🎵" },
                { name: "传统医药", color: "text-green-700", icon: "🌿" },
                { name: "民俗文化", color: "text-purple-700", icon: "🏮" }
              ].map((category, index) => (
                <div key={index} className="flex flex-col items-center p-3 rounded-lg hover:bg-white/50 transition-colors cursor-pointer">
                  <span className="text-2xl mb-2">{category.icon}</span>
                  <span className={`font-semibold ${category.color} text-sm`}>{category.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {exercisesData.map((exercise: ExerciseCardProps) => (
              <DdddddExerciseCard
                key={exercise.id}
                id={exercise.id}
                title={exercise.title}
                description={exercise.description}
                imageUrl={exercise.imageUrl}
                link={exercise.link}
                tags={exercise.tags}
              />
            ))}
          </div>
        </section>

        {/* 传承人物区域 */}
        <section id="heritage-masters" className="py-20 bg-white/30 backdrop-blur-sm rounded-3xl mt-20 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-amber-700 mb-4">
              传承人物
            </h2>
            <p className="text-slate-600 text-lg">传承千年技艺的匠心大师</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "李明轩", craft: "宣纸制作大师", desc: "国家级非遗传承人，从事宣纸制作50余年" },
              { name: "王雅琴", craft: "京剧表演艺术家", desc: "梅派青衣传人，致力于京剧艺术传承" },
              { name: "张云峰", craft: "古琴制作名师", desc: "传统古琴制作技艺省级传承人" }
            ].map((master, index) => (
              <div key={index} className="bg-white/50 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {master.name[0]}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{master.name}</h3>
                <p className="text-amber-600 font-semibold mb-3">{master.craft}</p>
                <p className="text-slate-600 text-sm">{master.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 文化活动区域 */}
        <section id="cultural-activities" className="py-20 mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-red-700 mb-4">
              文化活动
            </h2>
            <p className="text-slate-600 text-lg">精彩非遗文化活动与展览</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "第八届中国非遗博览会", 
                date: "2024年12月", 
                location: "济南国际会展中心",
                desc: "展示全国各地优秀非遗项目和传承成果"
              },
              { 
                title: "传统工艺工作站成果展", 
                date: "2024年11月", 
                location: "国家博物馆",
                desc: "展现传统工艺在现代生活中的创新应用"
              },
              { 
                title: "非遗进校园主题活动", 
                date: "长期举办", 
                location: "全国各地学校",
                desc: "让青少年近距离感受非遗文化魅力"
              },
              { 
                title: "民间文艺展演季", 
                date: "2024年春节期间", 
                location: "各地文化广场",
                desc: "传统戏曲、音乐、舞蹈等民间艺术展演"
              }
            ].map((activity, index) => (
              <div key={index} className="bg-gradient-to-br from-white/60 to-amber-50/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{activity.title}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-amber-600 font-medium">📅 {activity.date}</p>
                  <p className="text-blue-600 font-medium">📍 {activity.location}</p>
                </div>
                <p className="text-slate-600">{activity.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 学习资源区域 */}
        <section id="learning-resources" className="py-20 bg-gradient-to-br from-slate-50/80 to-amber-50/80 backdrop-blur-sm rounded-3xl mt-20 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-blue-700 mb-4">
              学习资源
            </h2>
            <p className="text-slate-600 text-lg">丰富的非遗学习材料与教程</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: "📚", title: "电子图书馆", desc: "海量非遗相关书籍资料", count: "1000+" },
              { icon: "🎥", title: "视频教程", desc: "大师亲授技艺视频", count: "500+" },
              { icon: "🎧", title: "音频资料", desc: "传统音乐戏曲录音", count: "800+" },
              { icon: "📄", title: "研究文献", desc: "学术研究论文集", count: "300+" }
            ].map((resource, index) => (
              <div key={index} className="bg-white/70 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow cursor-pointer">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{resource.title}</h3>
                <p className="text-slate-600 text-sm mb-3">{resource.desc}</p>
                <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {resource.count}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 关于我们区域 */}
        <section id="about" className="py-20 mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-red-700 mb-4">
              关于我们
            </h2>
            <p className="text-slate-600 text-lg">致力于传承和弘扬中华优秀传统文化</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                中华非遗传承平台是一个专注于非物质文化遗产保护、传承与发展的综合性数字化平台。
                我们致力于通过现代科技手段，让千年传承的文化瑰宝在新时代焕发光彩。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">100+</div>
                  <p className="text-slate-600">非遗项目</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
                  <p className="text-slate-600">传承大师</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10万+</div>
                  <p className="text-slate-600">学习用户</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <WakaTimeStats />
    </div>
  );
}
