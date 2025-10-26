import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">English Flashcards</h1>
      <p className="subtitle">Изучайте английские слова с помощью карточек</p>
      
      <div className="card">
        <h2 style={{ textAlign: 'center', marginBottom: '24px', color: '#374151' }}>
          Выберите режим обучения
        </h2>
        
        <div className="button-grid">
          <button 
            className="button" 
            onClick={() => navigate('/category-selection/study')}
          >
            📚 Режим изучения
          </button>
          
          <button 
            className="button" 
            onClick={() => navigate('/category-selection/quiz')}
          >
            🧠 Режим викторины
          </button>
          
          <button 
            className="button secondary" 
            onClick={() => navigate('/stats')}
          >
            📊 Статистика
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
