import React, { useState } from 'react';
import { storyNodes } from '../data/story';

interface GameProps {
  onBack: () => void;
}

// 计算从 start 到当前节点的步数，用来展示树的成长
const calculateStepCount = (startId: string, targetId: string, nodes: typeof storyNodes): number => {
  let count = 0;
  let current = targetId;
  
  // 反向查找步数（简单实现，因为故事是线性的）
  const visited = new Set<string>();
  while (current !== startId && count < 20) {
    if (visited.has(current)) break;
    visited.add(current);
    count++;
    // 找哪个节点指向 current
    for (const nodeId in nodes) {
      const node = nodes[nodeId];
      for (const choice of node.choices) {
        if (choice.nextNode === current) {
          current = nodeId;
          break;
        }
      }
    }
  }
  return count;
};

// 得到树的成长阶段
const getGrowthStage = (steps: number) => {
  if (steps === 0) return { emoji: '🌱', name: '梦想种子', size: 'w-16 h-16', text: '刚种下梦想的种子' };
  if (steps <= 2) return { emoji: '🌱', name: '嫩芽初露', size: 'w-24 h-24', text: '梦想开始发芽' };
  if (steps <= 4) return { emoji: '🌳', name: '小树苗', size: 'w-32 h-32', text: '正在努力扎根' };
  if (steps <= 6) return { emoji: '🌳', name: '枝繁叶茂', size: 'w-40 h-40', text: '树干越来越粗壮' };
  return { emoji: '🌲', name: '参天大树', size: 'w-48 h-48', text: '梦想长成参天大树' };
};

const Game: React.FC<GameProps> = ({ onBack }) => {
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const currentNode = storyNodes[currentNodeId];
  const steps = calculateStepCount('start', currentNodeId, storyNodes);
  const growth = getGrowthStage(steps);

  const restart = () => {
    setCurrentNodeId('start');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
        >
          ← 返回首页
        </button>

        {/* 梦想成长树 */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">梦想成长树</h3>
          <div className="flex flex-col items-center justify-center transition-all duration-700 ease-in-out">
            <div className={`${growth.size} flex items-center justify-center text-4xl md:text-6xl transition-all duration-700 ease-in-out transform`}>
              {growth.emoji}
            </div>
            <p className="mt-2 text-gray-600">{growth.text}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
              <div 
                className="bg-gradient-to-r from-green-400 to-green-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${Math.min(100, (steps / 8) * 100)}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* 核心价值观提示 */}
        {!currentNode.isEnding && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
            <p className="text-yellow-800 text-center text-sm md:text-base">
              💡 <strong>记住：</strong>远大目标很重要，脚踏实地每一步更重要 • 舍得投资自己，梦想才能长大
            </p>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{currentNode.title}</h1>
          <div className="prose prose-lg mb-8 text-gray-700 whitespace-pre-line">
            {currentNode.description}
          </div>

          {currentNode.isEnding ? (
            <div className="mt-8">
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
                <p className="text-green-800 font-medium text-lg">
                 🌟 故事结束
                </p>
                {steps >= 7 && (
                  <p className="mt-2 text-green-700">
                    恭喜你！你让那颗 12 岁种下的梦想种子，长成了参天大树！
                  </p>
                )}
              </div>
              <button 
                onClick={restart}
                className="w-full py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors text-lg font-medium"
              >
                再玩一次，体验不同的人生选择
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-lg font-semibold text-gray-700">👉 你的选择：</p>
              {currentNode.choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentNodeId(choice.nextNode)}
                  className="w-full text-left p-5 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-blue-50 transition-all"
                >
                  <div className="font-semibold text-lg text-gray-800 mb-1">
                    {choice.text}
                  </div>
                  {choice.description && (
                    <div className="text-gray-600 text-sm">
                      {choice.description}
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="text-center text-gray-500 text-sm">
          每一个选择都会走向不同的人生，你的人生你做主！
        </div>
      </div>
    </div>
  );
};

export default Game;
