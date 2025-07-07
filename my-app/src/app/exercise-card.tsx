import Image from "next/image";
import Link from "next/link";

export interface ExerciseCardProps {
  id: string | number;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  tags?: string[];
}

export default function DdddddExerciseCard({ title, description, imageUrl, link, tags }: ExerciseCardProps) {
  const cardContent = (
    <>
      {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title || 'Exercise image'}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-700 group-hover:scale-110"
          />
          {/* 传统风格遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-transparent to-blue-900/20"></div>
          
          {/* 角落装饰 */}
          <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow relative">
        {/* 标题装饰线 */}
        <div className="absolute top-6 left-6 w-8 h-px bg-gradient-to-r from-red-700 to-transparent"></div>
        
        <h3 className="text-xl font-bold text-slate-800 mb-3 pt-2 tracking-wide">
          {title}
        </h3>
        
        <p className="text-slate-600 text-sm mb-4 h-20 overflow-y-auto flex-grow leading-relaxed">
          {description}
        </p>
        
        {tags && tags.length > 0 && (
          <div className="mb-5">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className={`inline-block text-xs font-medium mr-2 mb-2 px-3 py-1 rounded-full transition-colors ${
                  index % 4 === 0 ? 'bg-red-100 text-red-700 border border-red-200' :
                  index % 4 === 1 ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                  index % 4 === 2 ? 'bg-amber-100 text-amber-700 border border-amber-200' :
                  'bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="mt-auto relative">
          {/* 底部装饰线 */}
          <div className="absolute -top-3 left-0 w-12 h-px bg-gradient-to-r from-amber-600 to-transparent"></div>
          
          <div className="font-medium text-slate-700 group-hover:text-amber-700 transition-colors duration-300 flex items-center">
            <span className="mr-2">探索文化</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="relative group">
      {/* 外层光晕效果 */}
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 via-amber-600/20 to-blue-600/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition duration-700"></div>
      
      {/* 主卡片 */}
      <div className="relative bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden h-full flex flex-col transition-all duration-500 ease-in-out group-hover:shadow-xl group-hover:shadow-slate-900/20 border border-slate-200/50">
        
        {/* 顶部装饰边框 */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-amber-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* 传统纹样装饰 */}
        <div className="absolute top-4 right-4 w-8 h-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <div className="w-full h-full border-2 border-red-700 rounded-full">
            <div className="absolute inset-1 border border-red-700 rounded-full"></div>
          </div>
        </div>
        
        {link ? (
          <Link href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
            {cardContent}
          </Link>
        ) : (
          <div className="flex flex-col h-full">{cardContent}</div>
        )}
      </div>
    </div>
  );
} 