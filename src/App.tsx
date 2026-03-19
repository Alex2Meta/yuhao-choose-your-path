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
            <div className="max-w-4xl mx-auto px-4 py-20">
              <div className="text-center text-white mb-12">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                  选择你的人生
                </h1>
                <p className="text-xl md:text-2xl opacity-90 mb-2">
                  沉浸式体验追觅创始人于浩的创业之路
                </p>
                <p className="text-lg opacity-80">
                  每一个选择，都会走向不同的未来
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div 
                  onClick={() => setCurrentPage('biography')}
                  className="bg-white/95 rounded-2xl p-8 cursor-pointer hover:scale-105 transition-all shadow-2xl backdrop-blur"
                >
                  <div className="text-5xl mb-4">📚</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">认识于浩</h2>
                  <p className="text-gray-600">
                    了解于浩的生平故事、成长轨迹、商业帝国和梦想愿景。
                    看看这位12岁就立下大志的创业者，是如何一步步实现梦想的。
                  </p>
                </div>

                <div 
                  onClick={() => setCurrentPage('game')}
                  className="bg-white/95 rounded-2xl p-8 cursor-pointer hover:scale-105 transition-all shadow-2xl backdrop-blur"
                >
                  <div className="text-5xl mb-4">🎮</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">人生闯关游戏</h2>
                  <p className="text-gray-600">
                    代入于浩的角色，在每个关键节点做出你的选择。
                    从12岁夏天开始，体验不同选择带来的不同人生结局。
                  </p>
                </div>
              </div>

              <div className="mt-16 text-center text-white/80">
                <p className="text-lg">
                  💡 <strong>会花钱才会挣钱，会花大钱才能挣大钱</strong>
                </p>
                <p className="mt-2">
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
