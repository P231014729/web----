"use client";
import React, { useState, useEffect, useRef } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp?: number;
}

interface KnowledgeBase {
  kbId: string;
  kbName: string;
}

interface ChatHistory {
  id: string;
  title: string;
  messages: Message[];
  kbId: string;
  createdAt: number;
  updatedAt: number;
}

export default function ChatDemo() {
  const [kbList, setKbList] = useState<KnowledgeBase[]>([]);
  const [selectedKbId, setSelectedKbId] = useState<string>("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [chatHistories, setChatHistories] = useState<ChatHistory[]>([]);
  const [currentChatId, setCurrentChatId] = useState<string>("");
  const [showQuickQuestions, setShowQuickQuestions] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 非遗快速提问
  const quickQuestions = [
    "什么是非物质文化遗产？",
    "中国有哪些著名的非遗项目？",
    "如何保护和传承非遗文化？",
    "京剧的基本功有哪些？",
    "中医药的核心理论是什么？",
    "书法的基本笔法有哪些？",
    "茶道的精神内涵是什么？",
    "太极拳的养生功效？",
    "剪纸艺术的发展历史？",
    "古琴文化的特色？",
    "传统建筑的设计理念？",
    "景德镇瓷器的工艺特点？"
  ];

  // 文化小贴士
  const culturalTips = [
    "💡 非遗保护：传承人是非遗文化的活化石，他们的技艺和知识是无价之宝。",
    "🎨 文化传承：非遗不仅是技艺，更是承载着民族记忆和文化认同的载体。",
    "🏮 活态传承：非遗的生命力在于传承与创新的平衡，既要保持传统，也要适应时代。",
    "📚 教育意义：学习非遗文化有助于培养文化自信和民族自豪感。",
    "🌍 世界价值：中国非遗文化是人类共同的文化财富，具有世界性意义。"
  ];

  const [currentTip, setCurrentTip] = useState(0);

  // 生成对话标题
  const generateChatTitle = (messages: Message[]): string => {
    const firstUserMessage = messages.find(msg => msg.role === "user");
    if (firstUserMessage) {
      return firstUserMessage.content.slice(0, 20) + (firstUserMessage.content.length > 20 ? "..." : "");
    }
    return "新对话";
  };

  // 保存对话历史到localStorage
  const saveChatHistory = (chatId: string, messages: Message[], kbId: string) => {
    const histories = JSON.parse(localStorage.getItem('heritage_chat_histories') || '[]') as ChatHistory[];
    const existingIndex = histories.findIndex(h => h.id === chatId);
    
    const chatData: ChatHistory = {
      id: chatId,
      title: generateChatTitle(messages),
      messages: messages,
      kbId: kbId,
      createdAt: existingIndex === -1 ? Date.now() : histories[existingIndex].createdAt,
      updatedAt: Date.now()
    };

    if (existingIndex === -1) {
      histories.unshift(chatData);
    } else {
      histories[existingIndex] = chatData;
    }

    // 只保留最近50条对话历史
    const trimmedHistories = histories.slice(0, 50);
    localStorage.setItem('heritage_chat_histories', JSON.stringify(trimmedHistories));
    setChatHistories(trimmedHistories);
  };

  // 加载对话历史
  const loadChatHistories = () => {
    const histories = JSON.parse(localStorage.getItem('heritage_chat_histories') || '[]') as ChatHistory[];
    setChatHistories(histories);
  };

  // 新建对话
  const createNewChat = () => {
    const newChatId = `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setCurrentChatId(newChatId);
    setMessages([]);
    setError("");
  };

  // 加载指定对话
  const loadChat = (chatId: string) => {
    const chat = chatHistories.find(h => h.id === chatId);
    if (chat) {
      setCurrentChatId(chatId);
      setMessages(chat.messages);
      setSelectedKbId(chat.kbId);
      setError("");
    }
  };

  // 删除对话
  const deleteChat = (chatId: string) => {
    const updatedHistories = chatHistories.filter(h => h.id !== chatId);
    localStorage.setItem('heritage_chat_histories', JSON.stringify(updatedHistories));
    setChatHistories(updatedHistories);
    
    if (currentChatId === chatId) {
      createNewChat();
    }
  };

  // 处理快速提问
  const handleQuickQuestion = (question: string) => {
    setInput(question);
    setShowQuickQuestions(false);
    // 延迟一点自动发送，让用户看到问题被填入
    setTimeout(() => {
      if (selectedKbId) {
        handleSend();
      }
    }, 500);
  };

  // 获取知识库列表
  useEffect(() => {
    async function fetchKnowledgeBases() {
      try {
        const res = await fetch('/api/youdao-kb-list');
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || '获取文化知识库失败');
        }
        const data = await res.json();
        setKbList(data);
        // 自动选择第一个知识库
        if (data.length > 0) {
          setSelectedKbId(data[0].kbId);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : '获取文化知识库失败');
      }
    }
    fetchKnowledgeBases();
    loadChatHistories();
    createNewChat();
  }, []);

  // 自动滚动到底部
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 保存当前对话到历史记录
  useEffect(() => {
    if (currentChatId && messages.length > 0 && selectedKbId) {
      saveChatHistory(currentChatId, messages, selectedKbId);
    }
  }, [messages, currentChatId, selectedKbId]);

  // 文化小贴士轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % culturalTips.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // 发送消息
  async function handleSend() {
    if (!input.trim() || !selectedKbId || loading) return;
    
    const userMessage = input.trim();
    setInput("");
    setLoading(true);
    setError("");
    
    // 添加用户消息
    const newUserMessage: Message = { 
      role: "user", 
      content: userMessage, 
      timestamp: Date.now() 
    };
    setMessages(prev => [...prev, newUserMessage]);
    
    try {
      const res = await fetch('/api/youdao-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: userMessage,
          kbIds: [selectedKbId],
          history: messages.slice(-10).reduce((acc, msg, i, arr) => {
            if (msg.role === "user") {
              const nextMsg = arr[i + 1];
              if (nextMsg && nextMsg.role === "assistant" && nextMsg.content.trim()) {
                acc.push({
                  question: msg.content.trim(),
                  response: nextMsg.content.trim()
                });
              }
            }
            return acc;
          }, [] as { question: string; response: string }[]),
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || '对话失败');
      }

      // 处理流式响应
      const reader = res.body?.getReader();
      if (!reader) throw new Error('无法读取响应');

      let assistantContent = "";
      const decoder = new TextDecoder();
      
      // 添加空的助手消息
      const newAssistantMessage: Message = { 
        role: "assistant", 
        content: "", 
        timestamp: Date.now() 
      };
      setMessages(prev => [...prev, newAssistantMessage]);

      let buffer = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        buffer += chunk;
        
        // 处理 Server-Sent Events 格式
        const lines = buffer.split('\n');
        buffer = lines.pop() || ""; // 保留最后一行（可能不完整）
        
        for (const line of lines) {
          if (line.startsWith('data:')) {
            try {
              const jsonStr = line.substring(5).trim(); // 移除 "data:" 前缀
              if (jsonStr) {
                const data = JSON.parse(jsonStr);
                if (data.result && data.result.response) {
                  assistantContent += data.result.response;
                  
                  // 更新助手消息内容
                  setMessages(prev => {
                    const newMessages = [...prev];
                    const lastIndex = newMessages.length - 1;
                    if (newMessages[lastIndex]?.role === "assistant") {
                      newMessages[lastIndex] = { 
                        role: "assistant", 
                        content: assistantContent,
                        timestamp: Date.now()
                      };
                    }
                    return newMessages;
                  });
                }
              }
            } catch {
              // 忽略解析错误，继续处理下一行
              console.warn('解析 SSE 数据失败:', line);
            }
          }
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '对话失败');
      // 移除可能添加的空助手消息
      setMessages(prev => {
        const newMessages = [...prev];
        if (newMessages[newMessages.length - 1]?.content === "") {
          newMessages.pop();
        }
        return newMessages;
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex relative overflow-hidden">
      {/* 动态背景装饰 */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-red-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 border-2 border-amber-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 border-2 border-orange-300 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-red-200 font-serif">非遗</div>
      </div>

      {/* 左侧边栏 */}
      <div className="w-80 bg-white/80 backdrop-blur-sm border-r border-red-200 shadow-lg flex flex-col relative z-10">
        {/* 头部 */}
        <div className="p-6 border-b border-red-100">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            非遗文化问答
          </h1>
          <p className="text-red-600/70 text-sm mt-1">基于传统文化知识库的智能问答</p>
        </div>

        {/* 文化小贴士 */}
        <div className="p-4 border-b border-red-100">
          <div className="bg-gradient-to-r from-amber-100 to-red-100 rounded-lg p-3 min-h-[60px] flex items-center">
            <div className="text-sm text-red-700 transition-all duration-500">
              {culturalTips[currentTip]}
            </div>
          </div>
        </div>

        {/* 新建对话和快速提问 */}
        <div className="p-4 border-b border-red-100 space-y-3">
          <button
            onClick={createNewChat}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            新建对话
          </button>
          
          <button
            onClick={() => setShowQuickQuestions(!showQuickQuestions)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            快速提问
          </button>
        </div>

        {/* 快速提问面板 */}
        {showQuickQuestions && (
          <div className="p-4 border-b border-red-100 max-h-60 overflow-y-auto">
            <h3 className="text-sm font-medium text-red-700 mb-3">常见问题</h3>
            <div className="space-y-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="w-full text-left p-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 对话历史 */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-red-700">对话历史</h3>
              <span className="text-xs text-red-500">{chatHistories.length}/50</span>
            </div>
            
            {chatHistories.length === 0 ? (
              <div className="text-center py-8 text-red-400">
                <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <p className="text-sm">暂无对话历史</p>
              </div>
            ) : (
              <div className="space-y-2">
                {chatHistories.map((chat) => (
                  <div
                    key={chat.id}
                    className={`group relative p-3 rounded-lg cursor-pointer transition-all ${
                      currentChatId === chat.id
                        ? 'bg-red-100 border border-red-200'
                        : 'hover:bg-red-50 border border-transparent'
                    }`}
                    onClick={() => loadChat(chat.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-red-800 truncate">
                          {chat.title}
                        </h4>
                        <p className="text-xs text-red-500 mt-1">
                          {new Date(chat.updatedAt).toLocaleDateString()} • {chat.messages.length}条消息
                        </p>
                        <p className="text-xs text-red-400 mt-1">
                          {kbList.find(kb => kb.kbId === chat.kbId)?.kbName || '未知文化库'}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteChat(chat.id);
                        }}
                        className="opacity-0 group-hover:opacity-100 p-1 text-red-400 hover:text-red-600 transition-all"
                        title="删除对话"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 知识库选择 */}
        <div className="p-4 border-t border-red-100">
          <label className="block text-sm font-medium text-red-700 mb-3">
            选择文化知识库
          </label>
          <select
            value={selectedKbId}
            onChange={(e) => setSelectedKbId(e.target.value)}
            className="w-full px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all"
            disabled={loading}
          >
            {kbList.length === 0 ? (
              <option value="">加载中...</option>
            ) : (
              kbList.map(kb => (
                <option key={kb.kbId} value={kb.kbId}>
                  {kb.kbName}
                </option>
              ))
            )}
          </select>
        </div>
      </div>

      {/* 主聊天区域 */}
      <div className="flex-1 flex flex-col relative z-10">
        {/* 错误提示 */}
        {error && (
          <div className="mx-6 mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
              <span className="text-red-700 text-sm">{error}</span>
            </div>
          </div>
        )}

        {/* 消息区域 */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-red-700 mb-2">开始非遗文化探索</h2>
              <p className="text-red-600/70 max-w-md mb-4">
                {selectedKbId ? "请输入问题，我会基于非遗文化知识库为您提供准确的答案" : "请先选择一个知识库"}
              </p>
              {selectedKbId && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-lg">
                  {quickQuestions.slice(0, 6).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="p-2 text-xs text-red-600 bg-white/50 hover:bg-red-50 rounded-lg transition-colors border border-red-200"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-6">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-start space-x-3 max-w-[70%] ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    {/* 头像 */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === 'user' 
                        ? 'bg-gradient-to-br from-red-500 to-red-700' 
                        : 'bg-gradient-to-br from-amber-400 to-orange-500'
                    }`}>
                      {message.role === 'user' ? (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      )}
                    </div>
                    
                    {/* 消息内容 */}
                    <div className={`px-4 py-3 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-gradient-to-br from-red-500 to-red-600 text-white'
                        : 'bg-white border border-red-100 text-gray-800 shadow-sm'
                    }`}>
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">
                        {message.content}
                      </div>
                      {message.timestamp && (
                        <div className={`text-xs mt-2 ${
                          message.role === 'user' ? 'text-red-100' : 'text-gray-400'
                        }`}>
                          {new Date(message.timestamp).toLocaleTimeString()}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-3 max-w-[70%]">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="bg-white border border-red-100 rounded-2xl px-4 py-3 shadow-sm">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <span className="text-red-600 text-sm">正在思考...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* 输入区域 */}
        <div className="border-t border-red-200 bg-white/80 backdrop-blur-sm p-6">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="relative">
              <div className="flex items-end space-x-4">
                <div className="flex-1 relative">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                    placeholder={selectedKbId ? "输入你的非遗文化问题... (Shift+Enter 换行)" : "请先选择知识库"}
                    className="w-full px-4 py-3 pr-12 bg-white border border-red-200 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition-all placeholder-red-400 text-gray-800"
                    disabled={!selectedKbId || loading}
                    rows={1}
                    style={{ minHeight: '48px', maxHeight: '120px' }}
                  />
                  <div className="absolute right-3 bottom-3 text-xs text-red-400">
                    {input.length}/1000
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!input.trim() || !selectedKbId || loading}
                  className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl hover:from-red-600 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}