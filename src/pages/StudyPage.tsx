import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const StudyPage: React.FC = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();

  return (
    <div className="container">
      <h1 className="title">Режим изучения</h1>
      <p className="subtitle">Категория: {category}</p>
      
      <div className="card">
        <h2 style={{ textAlign: 'center', color: '#374151' }}>
          Функция изучения карточек будет реализована в следующей фазе
        </h2>
        <p style={{ textAlign: 'center', color: '#6b7280' }}>
          Здесь будут отображаться карточки для изучения
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

export default StudyPage;
