import { useState } from 'react';
import Game from './components/Game';
import Biography from './components/Biography';

type Page = 'home' | 'biography' | 'game';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'biography':
        return <Biography onBack={() => setCurrentPage('home')} />;
      case 'game':
        return <Game onBack={() => setCurrentPage('home')} />;
      default:
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-primary">
            <div className="max-w-4xl mx-auto px-4 py-12">
              <div className="text-center text-white mb-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                  选择你的人生
                </h1>
                <p className="text-xl md:text-2xl opacity-90 mb-2">
                  沉浸式体验追觅创始人于浩的创业之路
                </p>
                <p className="text-lg opacity-80">
                  从12岁夏天开始，看梦想种子如何长成参天大树
                </p>
              </div>

              {/* 核心三原则 - 突出给孩子的信息 */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-white/95 rounded-xl p-6 text-center backdrop-blur shadow-xl">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">远大目标很重要</h3>
                  <p className="text-gray-600 text-sm">
                    12岁种下梦想种子，心中有方向，脚下才有力量
                  </p>
                </div>
                <div className="bg-white/95 rounded-xl p-6 text-center backdrop-blur shadow-xl">
                  <div className="text-4xl mb-3">👣</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">脚踏实地做好每一步</h3>
                  <p className="text-gray-600 text-sm">
                    梦想很大，需要一步步走，扎实基础比什么都重要
                  </p>
                </div>
                <div className="bg-white/95 rounded-xl p-6 text-center backdrop-blur shadow-xl">
                  <div className="text-4xl mb-3">💰</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">舍得投资自己</h3>
                  <p className="text-gray-600 text-sm">
                    敢投大钱在核心能力上，梦想才能长大成材
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div 
                  onClick={() => setCurrentPage('biography')}
                  className="bg-white/95 rounded-2xl p-8 cursor-pointer hover:scale-105 transition-all shadow-2xl backdrop-blur"
                >
                  <div className="text-5xl mb-4">📚</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">认识于浩</h2>
                  <p className="text-gray-600">
                    图文并茂看完整成长故事，从12岁到百亿企业创始人，
                    理解梦想如何一步步发芽长大。
                  </p>
                </div>

                <div 
                  onClick={() => setCurrentPage('game')}
                  className="bg-white/95 rounded-2xl p-8 cursor-pointer hover:scale-105 transition-all shadow-2xl backdrop-blur"
                >
                  <div className="text-5xl mb-4">🎮</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">人生闯关游戏</h2>
                  <p className="text-gray-600">
                    亲自做选择，看梦想种子从发芽到长成参天大树。
                    每一步选择，都决定了梦想成长的高度。
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center text-white/80">
                <p className="text-lg">
                  送给所有心怀梦想的年轻人
                </p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
