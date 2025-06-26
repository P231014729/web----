import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "中华非遗传承平台 - 传统文化数字化学习",
  description: "探索中华非物质文化遗产，传承千年文化精髓，打造现代化非遗学习平台",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-50 via-stone-50 to-amber-50 min-h-screen relative`}
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(185, 28, 28, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(30, 64, 175, 0.05) 0%, transparent 50%),
            linear-gradient(135deg, rgba(217, 119, 6, 0.02) 0%, rgba(153, 27, 27, 0.02) 100%)
          `
        }}
      >
        {/* 非遗纹样装饰背景 */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-red-800 rounded-full animate-pulse"></div>
          <div className="absolute top-1/4 right-20 w-24 h-24 transform rotate-45">
            <div className="w-full h-full border border-blue-900 bg-gradient-to-br from-transparent to-blue-50"></div>
          </div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28">
            <div className="w-full h-full border-2 border-amber-700 rounded-lg transform rotate-12 bg-gradient-to-tr from-amber-50 to-transparent"></div>
          </div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-slate-700 rounded-full bg-gradient-to-bl from-slate-50 to-transparent"></div>
          {/* 云纹装饰 */}
          <div className="absolute top-1/3 left-1/3 w-16 h-8 bg-gradient-to-r from-red-100 to-transparent rounded-full opacity-30"></div>
          <div className="absolute bottom-1/3 right-1/3 w-20 h-10 bg-gradient-to-l from-blue-100 to-transparent rounded-full opacity-30"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
