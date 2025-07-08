import Link from "next/link";
import DdddddExerciseCard, { ExerciseCardProps } from "./exercise-card";
import exercisesData from './exercises.json';
import WakaTimeStats from "./wakatime-stats";
import HeroBanner from "./hero-banner";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#8B4513]/90 backdrop-blur-md text-[#E2C49F] p-4 shadow-lg w-full z-50 border-b border-[#CD853F]/30 bg-[url('/images/dunhuang-pattern.png')] bg-repeat">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-[#DAA520] transition-colors duration-300 tracking-wider flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-amber-600 rounded-full flex items-center justify-center">
            <span className="text-sm font-black text-white">学</span>
          </div>
          刘星余学习展示平台
        </Link>
        <div className="hidden md:flex space-x-6 text-base">
          <Link href="/" className="hover:text-amber-400 transition-colors duration-300 relative group">
            首页
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DAA520] transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <Link href="#heritage-categories" className="hover:text-amber-400 transition-colors duration-300 relative group">
            作业分类
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DAA520] transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <Link href="#heritage-masters" className="hover:text-amber-400 transition-colors duration-300 relative group">
            文明进程
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DAA520] transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <Link href="#cultural-activities" className="hover:text-amber-400 transition-colors duration-300 relative group">
            文化竞赛
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DAA520] transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <Link href="#learning-resources" className="hover:text-amber-400 transition-colors duration-300 relative group">
            学习资源
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DAA520] transition-all duration-300 group-hover:w-full"></div>
          </Link>
          <Link href="/practice/QAnything" className="hover:text-amber-400 transition-colors duration-300 relative group">
            文化问答
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DAA520] transition-all duration-300 group-hover:w-full"></div>
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
      {/* 敦煌纹样背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.08] pointer-events-none">
        {/* 飞天装饰1 */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-[url('/Images/2.png')] bg-contain bg-no-repeat opacity-30 transform hover:scale-105 transition-transform duration-500 border border-red-500"></div>
        {/* 飞天装饰2 */}
        <div className="absolute top-1/3 right-16 w-48 h-48 bg-[url('/Images/3.png')] bg-contain bg-no-repeat opacity-30 transform hover:scale-105 transition-transform duration-500 border border-blue-500"></div>
        {/* 圆形纹样装饰 */}
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-[url('/Images/5.png')] bg-contain bg-no-repeat opacity-20 animate-spin-slow border border-green-500"></div>
      </div>
      {/* 主体渐变背景 */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(210,175,125,0.15),rgba(255,255,255,0))]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] opacity-20 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37] via-[#8B4513] to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] opacity-15 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#DAA520] via-[#8B4513] to-transparent rounded-full blur-3xl"></div>
      
      <Navbar />

      {/* 轮播图区域 */}
      <div className="w-full pt-20">
        <HeroBanner />
      </div>

      <main className="flex-grow container mx-auto px-4 py-12 w-full z-10 relative">
        <header className="text-center mb-20 relative">
          {/* 敦煌风格标题装饰 */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-12 bg-[url('/images/dunhuang-title-decor.png')] bg-contain bg-no-repeat"></div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#D4AF37] via-[#CD853F] to-[#8B4513] mb-6 drop-shadow-lg tracking-wide font-[FangSong]">
            敦煌遗韵 · 【刘星余学习展示】 · 文化传承
          </h1>
          
          {/* 敦煌风格分隔线 */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
            <div className="w-3 h-3 bg-[url('/images/lotus-dot.png')] bg-contain"></div>
            <div className="w-16 h-px bg-gradient-to-r from-[#D4AF37] to-[#8B4513]"></div>
            <div className="w-3 h-3 bg-[url('/images/lotus-dot.png')] bg-contain"></div>
            <div className="w-12 h-px bg-gradient-to-r from-[#8B4513] to-transparent"></div>
          </div>
          
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto tracking-wide leading-relaxed">
            让千年文明基因在时代血脉中奔涌，使万古文化根魂于新元时空里重生，当传统经纬织就未来天幕，文脉长河便在岁月更迭中澎湃出永恒的文明天光。
          </p>
          
          {/* 底部装饰 */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        </header>

        {/* 分类标签区域 */}
        <div className="mb-12 flex justify-center" id="heritage-categories">
          <div className="bg-[#F5DEB3]/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#CD853F]/50">
            <h2 className="text-2xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-amber-700">
              古今未来中华文化分类（作业）
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                {
                  era: "古代",
                  title: "文明基因的原初建构",
                  items: [
                    { name: "传统礼仪", icon: "🎎" },
                    { name: "古典文学", icon: "📜" },
                    { name: "传统艺术", icon: "🖌️" }
                  ],
                  color: "from-amber-700 to-red-700"
                },
                {
                  era: "现代",
                  title: "科技与文化的破壁融合",
                  items: [
                    { name: "数字文创", icon: "💻" },
                    { name: "科技传承", icon: "🔬" },
                    { name: "创新设计", icon: "✨" }
                  ],
                  color: "from-blue-700 to-cyan-600"
                },
                {
                  era: "未来",
                  title: "文明维度的升维重构",
                  items: [
                    { name: "元宇宙文化", icon: "🌐" },
                    { name: "AI艺术", icon: "🤖" },
                    { name: "跨界融合", icon: "🔮" }
                  ],
                  color: "from-purple-700 to-pink-600"
                }
              ].map((category, index) => (
                <div key={index} className="bg-white/40 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-[#CD853F]/30 hover:border-[#CD853F]/50">
                  <h3 className={`text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${category.color}`}>
                    {category.era}·{category.title}
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2 p-2 rounded-lg hover:bg-white/50 transition-colors cursor-pointer">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-medium text-slate-700">{item.name}</span>
                      </div>
                    ))}
                  </div>
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

        {/* 社会形态区域 */}
        <section id="heritage-masters" className="py-20 bg-[#8B4513]/5 backdrop-blur-sm rounded-3xl mt-20 shadow-lg border border-[#CD853F]/20 relative overflow-hidden">
          {/* 添加敦煌圆形纹样装饰 */}
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-[url('/Images/5.png')] bg-contain bg-no-repeat opacity-20 animate-spin-slow"></div>
          <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-[url('/Images/5.png')] bg-contain bg-no-repeat opacity-10 animate-spin-slow"></div>
          
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B4513] to-[#DAA520] mb-4 tracking-wider">
              文明进程
            </h2>
            <p className="text-[#6B4423] text-lg">三大阶段的文明形态</p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#8B4513] to-[#DAA520] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {[
              {
                era: "古代文明",
                title: "传统智慧的沉淀",
                desc: "以礼制为纲，以道德为本，建华夏文明的精神基座",
                features: [
                  "天人合一的哲学思想",
                  "礼乐制度的社会规范",
                  "诗书传家的文化传统"
                ],
                icon: "🏛️",
                color: "from-[#8B4513] to-[#DAA520]"
              },
              {
                era: "现代文明",
                title: "传统与现代的交融",
                desc: "科技赋能传统，创新驱动发展，启文化复兴新篇章",
                features: [
                  "数字技术的文化传承",
                  "创意产业的发展",
                  "多元文化的交流融合"
                ],
                icon: "🌆",
                color: "from-[#CD853F] to-[#DAA520]"
              },
              {
                era: "未来文明",
                title: "文明的跨维进阶",
                desc: "虚实共生，智慧互联，构建人类文明的新形态",
                features: [
                  "元宇宙中的文化演绎",
                  "人工智能的艺术创造",
                  "跨时空的文明对话"
                ],
                icon: "🚀",
                color: "from-[#B8860B] to-[#DAA520]"
              }
            ].map((stage, index) => (
              <div key={index} className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/5 to-[#DAA520]/5 rounded-2xl transform transition-all duration-500 group-hover:scale-105"></div>
                <div className="relative p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#CD853F]/30 shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                  <div className="text-center mb-6 relative">
                    <span className="text-5xl mb-4 inline-block transform group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg">
                      {stage.icon}
                    </span>
                    <h3 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stage.color} mb-2 tracking-wide`}>
                      {stage.era}
                    </h3>
                    <h4 className="text-lg font-semibold text-[#8B4513] mb-3">{stage.title}</h4>
                    <p className="text-[#6B4423] text-sm leading-relaxed">{stage.desc}</p>
                  </div>
                  <div className="space-y-3">
                    {stage.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 bg-[#8B4513]/5 rounded-lg p-4 transform transition-all duration-300 group-hover:translate-x-2 hover:bg-[#8B4513]/10">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${stage.color}`}></span>
                        <span className="text-[#6B4423] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 文化活动区域 */}
        <section id="cultural-activities" className="py-20 mt-20 relative">
          {/* 敦煌纹样背景装饰 */}
          <div className="absolute inset-0 bg-[url('/images/dunhuang-pattern.png')] bg-repeat opacity-10"></div>
          
          {/* 主标题区域 */}
          <div className="text-center mb-12 relative">
            <h2 className="text-4xl font-bold text-[#8B4513] mb-4 tracking-wider">
              科技文化竞赛
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#DAA520] to-[#8B4513] mx-auto"></div>
          </div>
          
          {/* 卡片网格布局 */}
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* 数字创意大赛卡片 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/20 to-[#DAA520]/20 rounded-lg transform transition-transform duration-500 group-hover:scale-105"></div>
                <div className="relative p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-[#CD853F]/30 shadow-lg overflow-hidden">
                  <div className="text-[#8B4513] text-xl font-bold mb-3">数字创意大赛</div>
                  <p className="text-[#6B4423] mb-4">探索传统与现代科技的创新融合</p>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-[url('/img/dunhuang-corner.png')] bg-contain bg-no-repeat opacity-20"></div>
                </div>
              </div>
              
              {/* 智能修复竞赛卡片 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/20 to-[#DAA520]/20 rounded-lg transform transition-transform duration-500 group-hover:scale-105"></div>
                <div className="relative p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-[#CD853F]/30 shadow-lg overflow-hidden">
                  <div className="text-[#8B4513] text-xl font-bold mb-3">智能修复竞赛</div>
                  <p className="text-[#6B4423] mb-4">运用AI技术助力文物数字化修复</p>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-[url('/img/dunhuang-corner.png')] bg-contain bg-no-repeat opacity-20"></div>
                </div>
              </div>
              
              {/* 元宇宙展览卡片 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/20 to-[#DAA520]/20 rounded-lg transform transition-transform duration-500 group-hover:scale-105"></div>
                <div className="relative p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-[#CD853F]/30 shadow-lg overflow-hidden">
                  <div className="text-[#8B4513] text-xl font-bold mb-3">元宇宙展览</div>
                  <p className="text-[#6B4423] mb-4">打造沉浸式数字文化体验空间</p>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-[url('/img/dunhuang-corner.png')] bg-contain bg-no-repeat opacity-20"></div>
                </div>
              </div>
              
              {/* 科技展览活动卡片 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/20 to-[#DAA520]/20 rounded-lg transform transition-transform duration-500 group-hover:scale-105"></div>
                <div className="relative p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-[#CD853F]/30 shadow-lg overflow-hidden">
                  <div className="text-[#8B4513] text-xl font-bold mb-3">科技展览活动</div>
                  <p className="text-[#6B4423] mb-4">展示文化科技创新最新成果</p>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-[url('/img/dunhuang-corner.png')] bg-contain bg-no-repeat opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 学习资源区域 */}
        <section className="relative py-16 bg-gradient-to-br from-amber-50/90 to-orange-100/90 backdrop-blur-sm">
          <div className="absolute top-8 right-24 w-32 h-32 opacity-80">
            <Image src="/Images/2.png" alt="敦煌飞天女子" width={128} height={128} />
          </div>
          <div className="absolute bottom-8 left-24 w-24 h-24 opacity-30 animate-spin-slow">
            <Image src="/Images/7.png" alt="敦煌圆形纹样" width={96} height={96} />
          </div>
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-red-700">
              学习资源
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-amber-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">在线课程</h3>
                <p className="text-gray-600">精心策划的课程内容，帮助你系统地学习和掌握知识。</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-amber-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">实践项目</h3>
                <p className="text-gray-600">通过实际项目练习，将理论知识转化为实践技能。</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-amber-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">学习社区</h3>
                <p className="text-gray-600">加入我们的学习社区，与其他学习者交流分享经验。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 关于我们区域 */}
        <section id="about" className="relative py-24 mt-20 bg-gradient-to-br from-amber-50/80 to-orange-100/80">
          {/* 装饰图案 */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
            <Image src="/Images/6.png" alt="敦煌纹样" width={128} height={128} className="animate-spin-slow" />
          </div>
          <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20">
            <Image src="/Images/6.png" alt="敦煌纹样" width={128} height={128} className="animate-spin-slow" />
          </div>

          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-amber-800 mb-6 font-serif">
                关于我们
              </h2>
              <p className="text-amber-700 text-xl font-medium">传承文明 · 连接古今 · 启迪未来</p>
            </div>

            <div className="bg-gradient-to-br from-amber-100/40 to-orange-50/40 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-amber-200/30">
              <div className="max-w-4xl mx-auto space-y-8">
                <p className="text-xl text-amber-900 leading-relaxed text-center font-medium">
                  刘星余个人学习展示平台致力于通过现代科技手段，
                  让千年传承的文化瑰宝在新时代焕发光彩，
                  构建一个连接古今、启迪未来的文化传承数字平台。
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                  <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300 shadow-lg border border-amber-100/30">
                    <div className="text-4xl font-bold text-red-700 mb-3">100+</div>
                    <p className="text-amber-800 text-lg font-medium">科技文化项目</p>
                  </div>
                  <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300 shadow-lg border border-amber-100/30">
                    <div className="text-4xl font-bold text-amber-700 mb-3">50+</div>
                    <p className="text-amber-800 text-lg font-medium">品学大师</p>
                  </div>
                  <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300 shadow-lg border border-amber-100/30">
                    <div className="text-4xl font-bold text-blue-700 mb-3">10万+</div>
                    <p className="text-amber-800 text-lg font-medium">学习用户</p>
                  </div>
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

// 在文件顶部添加 Image 组件的导入
import Image from "next/image";
