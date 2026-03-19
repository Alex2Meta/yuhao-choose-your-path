import React, { useState, useEffect } from 'react';
import { storyNodes } from '../data/story';

// 每个节点对应的养分关键词
const nodeNutrients: Record<string, string[]> = {
  start: ['作文《我的理想》', '航模'],
  dream_big: ['立下大志'],
  tsinghua: ['刻苦学习', '深耕技术'],
  study_abroad: ['开阔眼界', '顶级深造'],
  xiaomi: ['实践历练'],
  found_dreame: ['创业启航'],
  breakthrough: ['坚持', '不服就干', '砸钱研发'],
};

// 计算从 start 到当前节点的步数，收集养分关键词
const calculateStepsAndNutrients = (startId: string, targetId: string, nodes: typeof storyNodes): {steps: number, nutrients: string[]} => {
  let count = 0;
  let current = targetId;
  const nutrients: string[] = [];
  const visited = new Set<string>();
  
  // 反向收集
  while (current !== startId && count < 20) {
    if (visited.has(current)) break;
    visited.add(current);
    if (nodeNutrients[current]) {
      nutrients.push(...nodeNutrients[current]);
    }
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
  if (nodeNutrients[startId]) {
    nutrients.push(...nodeNutrients[startId]);
  }
  return { steps: count, nutrients };
};

// 得到树的成长阶段
const getGrowthStage = (steps: number) => {
  if (steps === 0) return { 
    emoji: '🌱', 
    name: '梦想种子',
    size: 'text-5xl',
    height: 'h-32',
    text: '刚种下梦想的种子'
  };
  if (steps <= 2) return { 
    emoji: '🌱', 
    name: '嫩芽初露',
    size: 'text-6xl',
    height: 'h-40',
    text: '梦想开始发芽'
  };
  if (steps <= 4) return { 
    emoji: '🌳', 
    name: '小树苗',
    size: 'text-7xl',
    height: 'h-48',
    text: '正在努力扎根'
  };
  if (steps <= 6) return { 
    emoji: '🌳', 
    name: '枝繁叶茂',
    size: 'text-8xl',
    height: 'h-56',
    text: '树干越来越粗壮'
  };
  return { 
    emoji: '🌲', 
    name: '参天大树',
    size: 'text-9xl',
    height: 'h-64',
    text: '梦想长成参天大树'
  };
};

const Game: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const [animateNutrient, setAnimateNutrient] = useState<string | null>(null);
  const currentNode = storyNodes[currentNodeId];
  const { steps, nutrients } = calculateStepsAndNutrients('start', currentNodeId, storyNodes);
  const growth = getGrowthStage(steps);

  // 当节点改变时，播放养分动画
  useEffect(() => {
    if (nodeNutrients[currentNodeId] && nodeNutrients[currentNodeId].length > 0) {
      const nutrient = nodeNutrients[currentNodeId][Math.floor(Math.random() * nodeNutrients[currentNodeId].length)];
      setAnimateNutrient(nutrient);
      setTimeout(() => setAnimateNutrient(null), 1500);
    }
  }, [currentNodeId]);

  const restart = () => {
    setCurrentNodeId('start');
  };

  const handleChoice = (nextNode: string) => {
    setCurrentNodeId(nextNode);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
        >
          ← 返回首页
        </button>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* 左侧：问答区域 */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
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
                        恭喜你！你让那颗 12 岁种下的梦想种子，吸收了一次次养分，终于长成了参天大树！
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
                      onClick={() => handleChoice(choice.nextNode)}
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

            <div className="mt-4 text-center text-gray-500 text-sm">
              每一个选择都会走向不同的人生，你的人生你做主！
            </div>
          </div>

          {/* 右侧：梦想成长树 */}
          <div className="lg:w-80 shrink-0">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">梦想成长树</h3>
              
              {/* 树的容器，草地背景 */}
              <div className="relative bg-gradient-to-t from-green-100 to-transparent rounded-xl py-8 px-4 min-h-[320px] flex flex-col items-end justify-end">
                {/* 正在飘落吸收的养分 */}
                {animateNutrient && (
                  <div className="absolute top-0 left-0 right-0 h-full flex items-center justify-center pointer-events-none">
                    <div className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full font-semibold animate-[nutrientFloat_1.5s_ease-out_forwards] shadow-lg">
                      ☀️ {animateNutrient}
                    </div>
                  </div>
                )}

                {/* 树本身 */}
                <div className={`flex items-center justify-center transition-all duration-700 ease-in-out transform ${growth.size} ${growth.height} relative w-full`}>
                  <div className="transition-all duration-700 ease-in-out scale-100 hover:scale-105">
                    {growth.emoji}
                  </div>
                </div>

                {/* 草地 */}
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-green-400 rounded-b-xl"></div>
              </div>

              <p className="mt-4 text-center text-gray-600 font-medium">
                {growth.text}
              </p>

              {/* 成长进度 */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-green-600 h-2.5 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${Math.min(100, (steps / 8) * 100)}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 text-center mt-1">
                  已吸收 {steps} 次养分
                </p>
              </div>

              {/* 已吸收的养分标签 */}
              {nutrients.length > 0 && (
                <div className="mt-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">已吸收养分：</p>
                  <div className="flex flex-wrap gap-2">
                    {nutrients.slice(-6).reverse().map((n, i) => (
                      <span key={i} className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 核心理念 */}
              <div className="mt-6 bg-yellow-50 rounded-lg p-3">
                <p className="text-xs text-yellow-800 text-center">
                  <strong>远大目标</strong> • <strong>脚踏实地</strong> • <strong>投资自己</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
