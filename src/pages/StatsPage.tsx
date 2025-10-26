import React from 'react';
import { useNavigate } from 'react-router-dom';

const StatsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">Статистика</h1>
      
      <div className="card">
        <h2 style={{ textAlign: 'center', color: '#374151' }}>
          Функция статистики будет реализована в следующей фазе
        </h2>
        <p style={{ textAlign: 'center', color: '#6b7280' }}>
          Здесь будет отображаться статистика изучения
        </p>
        
        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <button 
            className="button secondary" 
            onClick={() => navigate('/')}
          >
            ← На главную
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
