import { Suspense } from 'react';
import Image from 'next/image';

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

export default function WakaTimeStats() {
  return (
    <footer className="relative text-center p-8 mt-auto w-full z-10">
      {/* 装饰性背景 */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-100/90 via-orange-50/50 to-transparent"></div>
      
      {/* 左侧装饰图片 */}
      <div className="absolute left-40 top-1/2 -translate-y-1/2 w-16 h-16 opacity-80">
        <Image src="/Images/7.png" alt="敦煌装饰图案" width={64} height={64} className="object-contain" />
      </div>

      {/* 右侧装饰图片 */}
      <div className="absolute right-40 top-1/2 -translate-y-1/2 w-32 h-32 opacity-80">
        <Image src="/Images/6.png" alt="敦煌装饰图案" width={164} height={164} className="object-contain" />
      </div>
      
      {/* 顶部装饰线 */}
      <div className="relative mb-6">
        <div className="flex items-center justify-center gap-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-600"></div>
          <div className="w-3 h-3 bg-red-600 rounded-full shadow-lg ring-2 ring-amber-200"></div>
          <div className="w-24 h-px bg-gradient-to-r from-amber-600 via-red-600 to-amber-600"></div>
          <div className="w-3 h-3 bg-red-600 rounded-full shadow-lg ring-2 ring-amber-200"></div>
          <div className="w-16 h-px bg-gradient-to-r from-amber-600 to-transparent"></div>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="relative space-y-4">
        <p className="text-amber-800 font-medium text-lg tracking-wide">
          踏上古今未来科技文化探索之旅
        </p>
        <p className="text-amber-700/90 text-base">
          在这里，让我们一同追寻千年文明的足迹
        </p>
        <div className="bg-amber-50/80 inline-block px-6 py-3 rounded-full shadow-sm border border-amber-200/50 backdrop-blur-sm mt-4">
          <Suspense fallback={<span className="text-amber-600">时光永续...</span>}>
            <WakaTimeData />
          </Suspense>
        </div>
      </div>
    </footer>
  );
}

async function WakaTimeData() {
    const stats = await getWakaTimeStats();
    return (
        <div className="flex items-center justify-center gap-3">
          <span className="text-amber-700">文化传承时光</span>
          <span className="font-bold text-red-700 bg-amber-100/80 px-4 py-1.5 rounded-full border-2 border-amber-300/50 shadow-inner">
            {stats}
          </span>
        </div>
    );
}