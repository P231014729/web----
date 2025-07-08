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
          <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513]/80 via-[#B88A67]/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#A0522D]/30 via-transparent to-[#D2B48C]/20"></div>
          
          {/* 敦煌风格角落装饰 */}
          <div className="absolute top-2 left-2 w-8 h-8 bg-[url('/img/dunhuang-corner.png')] bg-contain bg-no-repeat opacity-70 group-hover:opacity-100 transition-opacity duration-500 transform rotate-0"></div>
          <div className="absolute top-2 right-2 w-8 h-8 bg-[url('/img/dunhuang-corner.png')] bg-contain bg-no-repeat opacity-70 group-hover:opacity-100 transition-opacity duration-500 transform rotate-90"></div>
          <div className="absolute bottom-2 left-2 w-8 h-8 bg-[url('/img/dunhuang-corner.png')] bg-contain bg-no-repeat opacity-70 group-hover:opacity-100 transition-opacity duration-500 transform -rotate-90"></div>
          <div className="absolute bottom-2 right-2 w-8 h-8 bg-[url('/img/dunhuang-corner.png')] bg-contain bg-no-repeat opacity-70 group-hover:opacity-100 transition-opacity duration-500 transform rotate-180"></div>
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow relative">
        {/* 标题装饰线 */}
        <div className="absolute top-6 left-6 w-8 h-px bg-gradient-to-r from-[#8B4513] to-transparent"></div>
        
        <h3 className="text-xl font-bold text-[#8B4513] mb-3 pt-2 tracking-wide">
          {title}
        </h3>
        
        <p className="text-[#A0522D] text-sm mb-4 h-20 overflow-y-auto flex-grow leading-relaxed">
          {description}
        </p>
        
        {tags && tags.length > 0 && (
          <div className="mb-5">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className={`inline-block text-xs font-medium mr-2 mb-2 px-3 py-1 rounded-full transition-colors ${
                  index % 4 === 0 ? 'bg-[#B88A67]/20 text-[#8B4513] border border-[#B88A67]' :
                  index % 4 === 1 ? 'bg-[#D2B48C]/20 text-[#A0522D] border border-[#D2B48C]' :
                  index % 4 === 2 ? 'bg-[#A0522D]/20 text-[#8B4513] border border-[#A0522D]' :
                  'bg-[#8B4513]/20 text-[#A0522D] border border-[#8B4513]'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="mt-auto relative">
          {/* 底部装饰线 */}
          <div className="absolute -top-3 left-0 w-12 h-px bg-gradient-to-r from-[#B88A67] to-transparent"></div>
          
          {/* 底部装饰图片 */}
          <div className="absolute -top-8 right-0 w-16 h-16">
            <Image
              src="/Images/4.png"
              alt="decorative image"
              width={64}
              height={64}
              className="opacity-70 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
          
          <div className="font-medium text-[#8B4513] group-hover:text-[#A0522D] transition-colors duration-300 flex items-center">
            <span className="mr-2">探索古今未来中华文化</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="relative group">
      {/* 外层光晕效果 */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#8B4513]/20 via-[#B88A67]/20 to-[#D2B48C]/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition duration-700"></div>
      
      {/* 主卡片 */}
      <div className="relative bg-[#FCF5E5]/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden h-full flex flex-col transition-all duration-500 ease-in-out group-hover:shadow-xl group-hover:shadow-[#8B4513]/20 border border-[#D2B48C]/50">
        
        {/* 顶部装饰边框 */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B4513] via-[#B88A67] to-[#D2B48C] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* 传统纹样装饰 */}
        <div className="absolute top-4 right-4 w-8 h-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <div className="w-full h-full border-2 border-[#8B4513] rounded-full">
            <div className="absolute inset-1 border border-[#8B4513] rounded-full"></div>
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