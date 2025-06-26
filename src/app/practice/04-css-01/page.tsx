import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-8 px-2">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-red-700 hover:text-yellow-600 font-bold text-lg transition">← 返回非遗传承平台</Link>
        </div>
        <h1 className="text-4xl font-extrabold text-red-700 mb-4 text-center tracking-widest drop-shadow">古琴艺术·高山流水</h1>
        <h3 className="text-xl font-bold text-amber-600 mb-6 text-center leading-relaxed">古琴文化传承历程</h3>
        <table className="mx-auto w-4/5 border-separate border-spacing-y-2 mb-8">
          <tbody>
            <tr><td className="text-red-600 py-2 border-b border-gray-300">1.1 远古时期，神农氏削桐为琴，绳丝为弦</td></tr>
            <tr><td className="text-red-600 py-2 border-b border-gray-300">1.2 春秋时期，孔子以琴修身，传播礼乐文化</td></tr>
            <tr><td className="text-red-600 py-2 border-b border-gray-300">1.3 汉唐盛世，古琴艺术达到空前繁荣</td></tr>
            <tr><td className="text-red-600 py-2 border-b border-gray-300">1.4 现代传承，古琴被列入世界非遗名录</td></tr>
          </tbody>
        </table>
        <div className="mb-8">
          <h4 className="text-center text-lg font-semibold mb-2">古琴文化资料</h4>
          <form action="https://search.sina.com.cn/" target="_blank" className="flex justify-center gap-3">
            <input type="text" name="q" defaultValue="古琴艺术非物质文化遗产" placeholder="搜索古琴文化" className="px-4 py-2 border border-gray-300 rounded-md w-72" />
            <input type="submit" value="搜索资料" className="bg-red-700 text-white px-6 py-2 rounded-md font-bold cursor-pointer hover:bg-red-800 transition" />
          </form>
        </div>
        <div className="mb-8">
          <p className="bg-red-700 text-white border border-black text-lg p-6 rounded mb-4">古琴，亦称瑶琴、玉琴、七弦琴，是中华文化中地位最崇高的乐器，2003年被联合国教科文组织列入&ldquo;人类口头和非物质遗产代表作&rdquo;</p>
          <ol className="bg-red-700 text-white border border-black text-lg p-6 rounded mb-4 list-decimal list-inside">
            <li>高山流水 - 琴曲经典之作，伯牙子期千古佳话</li>
            <li>广陵散 - 古琴名曲代表，嵇康临终所奏</li>
            <li>平沙落雁 - 抒情琴曲精品，描绘秋景之美</li>
          </ol>
          <ul className="bg-red-700 text-white border border-black text-lg p-6 rounded mb-4 list-disc list-inside">
            <li>仲尼式 - 古琴经典造型，孔子命名</li>
            <li>伏羲式 - 古朴庄重样式，传说伏羲所制</li>
            <li>蕉叶式 - 优美流畅形制，形如芭蕉叶</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-amber-600 text-center mb-2">古琴文化传承</h2>
          <p className="text-center text-lg mb-4">非遗传承 <a href="https://www.guqin.org.cn/" className="text-red-700 underline hover:text-yellow-600 transition">中国古琴学会官方网站</a></p>
        </div>
        <div className="mb-8 flex flex-col items-center">
          <div className="w-full flex justify-center mb-4">
          </div>
          <div className="w-full max-w-xl mx-auto rounded-xl overflow-hidden shadow-lg bg-amber-100 p-6">
            <h3 className="text-xl font-bold text-red-700 mb-4 text-center">古琴艺术传承要点</h3>
            <div className="space-y-3">
              <div className="bg-red-50 p-3 rounded-lg">
                <h4 className="font-semibold text-red-600">指法传承</h4>
                <p className="text-red-800 text-sm">古琴有勾、挑、抹、挑等基本指法，每一种指法都蕴含深厚文化内涵</p>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <h4 className="font-semibold text-red-600">音韵传承</h4>
                <p className="text-red-800 text-sm">古琴音色清远淡雅，追求&ldquo;淡而有味，和而不流&rdquo;的美学境界</p>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <h4 className="font-semibold text-red-600">精神传承</h4>
                <p className="text-red-800 text-sm">古琴不仅是乐器，更是修身养性的载体，体现中华文人的精神追求</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 