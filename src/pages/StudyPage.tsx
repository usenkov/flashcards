import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Category } from '../types';
import { flashcards } from '../data/flashcards';
import Flashcard from '../components/Flashcard';

const StudyPage: React.FC = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [wrongCards, setWrongCards] = useState<number[]>([]);
  const [sessionComplete, setSessionComplete] = useState(false);

  // Filter flashcards by category
  const categoryCards = flashcards.filter(card => card.category === category);

  const currentCard = categoryCards[currentCardIndex];
  const isLastCard = currentCardIndex === categoryCards.length - 1;

  const handleAnswer = (isCorrect: boolean) => {
    if (!isCorrect) {
      setWrongCards(prev => [...prev, currentCardIndex]);
    }

    if (isLastCard) {
      setSessionComplete(true);
    } else {
      setCurrentCardIndex(prev => prev + 1);
    }
  };

  const handleRestart = () => {
    setCurrentCardIndex(0);
    setWrongCards([]);
    setSessionComplete(false);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleRedoWrongCards = () => {
    if (wrongCards.length > 0) {
      // For now, just restart the session
      // In Phase 3, this will show only wrong cards
      handleRestart();
    }
  };

  if (!currentCard) {
    return (
      <div className="container">
        <h1 className="title">Категория не найдена</h1>
        <div className="card">
          <p>Выбранная категория не существует.</p>
          <button className="button" onClick={handleBackToHome}>
            ← На главную
          </button>
        </div>
      </div>
    );
  }

  if (sessionComplete) {
    return (
      <div className="container">
        <h1 className="title">Сессия завершена!</h1>
        <div className="card">
          <h2 style={{ textAlign: 'center', color: '#374151', marginBottom: '24px' }}>
            Результаты изучения
          </h2>
          
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <p style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
              Всего карточек: <strong>{categoryCards.length}</strong>
            </p>
            <p style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
              Неправильных ответов: <strong style={{ color: '#ef4444' }}>{wrongCards.length}</strong>
            </p>
            <p style={{ fontSize: '1.25rem', marginBottom: '24px' }}>
              Правильных ответов: <strong style={{ color: '#10b981' }}>{categoryCards.length - wrongCards.length}</strong>
            </p>
          </div>

          <div className="button-grid">
            <button className="button" onClick={handleRestart}>
              🔄 Повторить все карточки
            </button>
            
            {wrongCards.length > 0 && (
              <button className="button secondary" onClick={handleRedoWrongCards}>
                🔁 Повторить только ошибки ({wrongCards.length})
              </button>
            )}
            
            <button className="button secondary" onClick={handleBackToHome}>
              ← На главную
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Режим изучения</h1>
      <p className="subtitle">
        Категория: {category} ({currentCardIndex + 1} из {categoryCards.length})
      </p>
      
      <Flashcard 
        card={currentCard}
        onAnswer={handleAnswer}
        isLastCard={isLastCard}
      />

      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <button className="button secondary" onClick={handleBackToHome}>
          ← На главную
        </button>
      </div>
    </div>
  );
};

export default StudyPage;
