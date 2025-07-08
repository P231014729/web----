'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  async function getAllCommitDates(owner: string, repo: string) {
    const url = 'https://api.deepseek.com/v1/chat/completions';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer sk-618ac7c2f2d542f0ba1c1d14588d89d6'
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [{
            role: 'user',
            content: '获取 ' + owner + '/' + repo + ' 的提交信息'
          }]
        })
      });
      if (!response.ok) {
        throw new Error('API请求失败');
      }
      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('请求失败:', error);
      return [];
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8">
      <div className="max-w-2xl w-full mx-auto bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 space-y-6 transform transition-all hover:scale-[1.02]">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 text-center">
          AI 提交记录分析
        </h1>
        <div className="space-y-6">
          <button
            className={`w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold
              transform transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0
              disabled:opacity-50 disabled:cursor-not-allowed ${loading ? 'animate-pulse' : ''}`}
            onClick={async () => {
              setLoading(true);
              const dates = await getAllCommitDates('your-owner', 'your-repo');
              setResult(dates);
              setLoading(false);
            }}
            disabled={loading}
          >
            {loading ? '分析中...' : '开始分析提交记录'}
          </button>
          
          {loading && (
            <div className="flex justify-center items-center space-x-2">
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"></div>
            </div>
          )}
          
          {result && (
            <div className="mt-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl transform -rotate-1"></div>
              <pre className="relative p-6 bg-white rounded-xl shadow-sm overflow-x-auto font-mono text-sm">
                {result}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}