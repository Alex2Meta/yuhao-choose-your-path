import React from 'react';
import { biographyData } from '../data/biography';

interface BiographyProps {
  onBack: () => void;
}

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

        {/* Basic Info Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              {biographyData.basicInfo.name.charAt(0)}
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
        </div>

        {/* Vision & Dream */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: biographyData.vision.replace(/\n/g, '<br>')}} />
        </div>

        {/* Business Empire */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: biographyData.businessEmpire.replace(/\n/g, '<br>')}} />
        </div>

        {/* Story of Money */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: biographyData.storyOfMoney.replace(/\n/g, '<br>')}} />
        </div>

        {/* Growth Timeline */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">成长轨迹</h2>
          <div className="space-y-6">
            {biographyData.milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4">
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
            ))}
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          资料来源于公开网络整理
        </div>
      </div>
    </div>
  );
};

export default Biography;
