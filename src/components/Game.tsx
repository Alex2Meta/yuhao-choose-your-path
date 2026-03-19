import React, { useState } from 'react';
import { storyNodes } from '../data/story';

interface GameProps {
  onBack: () => void;
}

const Game: React.FC<GameProps> = ({ onBack }) => {
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const currentNode = storyNodes[currentNodeId];

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
