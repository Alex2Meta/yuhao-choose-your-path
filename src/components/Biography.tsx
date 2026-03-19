import React, { useEffect, useState } from 'react';
import { biographyData } from '../data/biography';

interface BiographyProps {
  onBack: () => void;
}

const AnimatedMilestone: React.FC<{
  milestone: any;
  index: number;
}> = ({ milestone, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 150); // 每个里程碑依次出现
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`flex gap-4 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex-shrink-0 w-20 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full font-bold">
          {milestone.age}
        </div>
      </div>
      <div className="flex-1 border-l-2 border-gray-200 pl-6 pb-6 relative">
        <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full"></div>
        <div className="mb-1">
          <span className="text-sm text-gray-500">{milestone.year}年</span>
          <h3 className="text-xl font-semibold text-gray-800 inline ml-2">
            {milestone.title}
          </h3>
        </div>
        <p className="text-gray-600">{milestone.description}</p>
      </div>
    </div>
  );
};

const AnimatedCard: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`bg-white rounded-2xl shadow-xl p-8 mb-8 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const Biography: React.FC<BiographyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
        >
          ← 返回首页
        </button>

        {/* Basic Info Card - 图文并茂 */}
        <AnimatedCard delay={100}>
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* 这里放照片占位，你可以替换成实际照片 */}
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <div className="w-full h-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-5xl font-bold">
                {biographyData.basicInfo.name.charAt(0)}
              </div>
              {/* 如果你有照片，换成这个：
              <img 
                src="https://your-image-url.jpg" 
                alt={biographyData.basicInfo.name}
                className="w-full h-full object-cover"
              />
              */}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {biographyData.basicInfo.name}
              </h1>
              <p className="text-xl text-gray-600 mb-1">
                {biographyData.basicInfo.position}
              </p>
              <p className="text-lg text-gray-500">
                {biographyData.basicInfo.company}
              </p>
              <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  出生：{biographyData.basicInfo.birthYear}年 ({new Date().getFullYear() - biographyData.basicInfo.birthYear}岁)
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  籍贯：{biographyData.basicInfo.hometown}
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  12岁梦想：{biographyData.basicInfo.dream}
                </span>
              </div>
            </div>
          </div>
        </AnimatedCard>

        {/* 核心价值观 - 突出你想说的三点 */}
        <AnimatedCard delay={300}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">💡 给年轻人的三句话</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">远大目标很重要</h3>
              <p className="text-gray-600 text-sm">
                12岁就种下梦想的种子，心中有方向，脚下才有力量
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">👣</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">脚踏实地走好每一步</h3>
              <p className="text-gray-600 text-sm">
                梦想很大，要一步步实现，打好基础比什么都重要
              </p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">舍得投资自己</h3>
              <p className="text-gray-600 text-sm">
                敢在核心能力和技术上投大钱，才能换来大发展
              </p>
            </div>
          </div>
        </AnimatedCard>

        {/* Vision & Dream */}
        <AnimatedCard delay={500}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">梦想与愿景</h2>
          <div className="prose max-w-none text-gray-700">
            {biographyData.vision}
          </div>
        </AnimatedCard>

        {/* Business Empire */}
        <AnimatedCard delay={700}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">商业版图</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-primary">2017</p>
              <p className="text-sm text-gray-600">成立时间</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-primary">2000+</p>
              <p className="text-sm text-gray-600">全球员工</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-primary">70%</p>
              <p className="text-sm text-gray-600">研发人员占比</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-primary">100+</p>
              <p className="text-sm text-gray-600">国家和地区</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-primary">20万+</p>
              <p className="text-sm text-gray-600">转速突破（转/分）</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-primary">百亿</p>
              <p className="text-sm text-gray-600">估值（人民币）</p>
            </div>
          </div>
          <div className="prose max-w-none text-gray-700">
            {biographyData.businessEmpire}
          </div>
        </AnimatedCard>

        {/* Story of Investment */}
        <AnimatedCard delay={900}>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">舍得投资，才能长大</h2>
          <div className="prose max-w-none text-gray-700">
            {biographyData.storyOfMoney}
          </div>
        </AnimatedCard>

        {/* Growth Timeline - 带动画 */}
        <AnimatedCard delay={1100}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">成长轨迹</h2>
          <div className="space-y-6">
            {biographyData.milestones.map((milestone, index) => (
              <AnimatedMilestone key={index} milestone={milestone} index={index} />
            ))}
          </div>
        </AnimatedCard>

        <div className="text-center text-gray-500 text-sm">
          资料来源于公开网络整理
        </div>
      </div>
    </div>
  );
};

export default Biography;
