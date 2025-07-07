This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# 潘延项目文档

## 技术架构
| 技术栈         | 版本   | 用途                 |
|----------------|--------|----------------------|
| Next.js        | 15.3.4 | 全栈框架           |
| TypeScript     | 5.0.4  | 类型安全           |
| Tailwind CSS   | 3.4.1  | UI设计系统         |
| QAnything      | 1.3.0  | 知识库问答         |
| WakaTime       | 1.2.0  | 开发行为分析       |

## 核心功能实现
### QAnything集成
```typescript:%2Fsrc%2Fapp%2Fapi%2Fchat-stream%2Froute.ts
export const runtime = 'edge';

const encoder = new TextEncoder();
responseStream.pipeThrough(new TransformStream({
  transform(chunk, controller) {
    controller.enqueue(encoder.encode(`data: ${JSON.stringify(chunk)}\n\n`));
  }
}));
```

**实现路径：**  
`src/app/api/chat-stream/route.ts`  
实现要点：  
- 使用Edge Runtime处理流式响应  
- 通过SSE协议推送token级结果  
- 集成JWT鉴权中间件  
`src/app/api/youdao-kb-list/route.ts`

**功能特性：**
- 流式问答API接口（SSE协议）
- 知识库管理RESTful接口
- 基于JWT的访问鉴权

### WakaTime集成
**组件位置：**  
`src/app/wakatime-stats.tsx`

**数据流程：**
```mermaid
graph LR
  A[IDE插件] --> B(WakaTime服务器)
  B --> C[项目API]
  C --> D{前端组件}
```

### 旧作业整合
**目录结构：**
```
src/app/practice/
├── 03-css-01/        # 基础选择器练习
├── 04-css-02/        # 定位布局练习
├── 07-async-01/      # Promise基础
└── embed-demo/       # iframe嵌入示例
```

## 运行指南

### 环境准备
```bash
# 安装依赖
npm install

# 开发模式（端口3000）
npm run dev

# 生产构建
npm run build && npm run start
```

### 环境变量
```env
NEXT_PUBLIC_QIYUE_API_KEY=your_qanything_key
WAKATIME_API_KEY=your_wakatime_key
```

## 项目结构
```
src/app
├── api/              # API路由
│   ├── chat-stream/    # 流式问答
│   └── youdao-kb-list/ # 知识库管理
├── practice/        # 课程作业
├── layout.tsx       # 全局布局
└── page.tsx         # 首页入口
```

## 文档截图
![架构图](https://img.picui.cn/free/2025/06/30/686283de5ca84.png)架构图1
(https://img.picui.cn/free/2025/06/30/686283d8dea2f.png)架构图2
(https://img.picui.cn/free/2025/06/30/686283d624b8c.png)架构图3
(https://img.picui.cn/free/2025/06/30/6862891355a02.png)时长图 
(https://img.picui.cn/free/2025/06/30/68628a0aaaa77.png)时长为3个账户总时长，网页运用PanPan账户
![QAnything集成](https://img.picui.cn/free/2025/06/30/686283d85b54f.png)

推荐使用 [Vercel平台](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) 部署您的Next.js应用。

查看 [Next.js部署文档](https://nextjs.org/docs/app/building-your-application/deploying) 了解更多详情。
