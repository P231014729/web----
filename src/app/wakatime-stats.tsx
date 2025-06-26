import { Suspense } from 'react';

async function getWakaTimeStats() {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) {
    console.error("WakaTime API key is not set.");
    return "API Key Not Configured";
  }

  try {
    const url = `https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=${apiKey}`;
    
    const response = await fetch(
      url,
      {
        next: {
          revalidate: 3600, // 每小时重新获取一次数据
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`WakaTime API request failed with status: ${response.status}`);
      console.error(`WakaTime API error response: ${errorText}`);
      return "Error Fetching Data";
    }

    const stats = await response.json();
    return stats.data?.text || "No activity yet";
  } catch (error) {
    console.error("Failed to fetch WakaTime stats:", error);
    return "Server Error";
  }
}

async function WakaTimeData() {
    const stats = await getWakaTimeStats();
    return (
        <div className="flex items-center justify-center gap-2">
          <span className="text-slate-600">学习时长:</span>
          <span className="font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            {stats}
          </span>
        </div>
    );
}

export default function WakaTimeStats() {
  return (
    <footer className="relative text-center p-8 mt-auto w-full z-10">
      {/* 装饰性背景 */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-100/80 via-transparent to-transparent"></div>
      
      {/* 顶部装饰线 */}
      <div className="relative mb-6">
        <div className="flex items-center justify-center gap-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-red-600"></div>
          <div className="w-3 h-3 bg-amber-600 rounded-full shadow-sm"></div>
          <div className="w-24 h-px bg-gradient-to-r from-red-600 via-amber-600 to-blue-600"></div>
          <div className="w-3 h-3 bg-blue-600 rounded-full shadow-sm"></div>
          <div className="w-16 h-px bg-gradient-to-r from-blue-600 to-transparent"></div>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="relative space-y-4">
        <p className="text-slate-700 font-medium text-lg tracking-wide">
          &copy; {new Date().getFullYear()} 中华非遗传承平台 · 传承文化瑰宝
        </p>
        
        <Suspense fallback={
          <div className="flex items-center justify-center gap-2 text-slate-500">
            <div className="w-4 h-4 border-2 border-amber-600/30 border-t-amber-600 rounded-full animate-spin"></div>
            <span>正在加载学习时长...</span>
          </div>
        }>
          <WakaTimeData />
        </Suspense>
        
        {/* 底部座右铭 */}
        <div className="pt-4 border-t border-slate-200/50 mt-6">
          <p className="text-sm text-slate-500 italic tracking-wider">
            &ldquo;传承千年智慧，绽放文化华章&rdquo;
          </p>
        </div>
      </div>

      {/* 装饰性元素 */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-red-600 via-amber-600 to-blue-600 rounded-full opacity-30"></div>
    </footer>
  );
} 