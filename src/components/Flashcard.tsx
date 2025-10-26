import React, { useState } from 'react';
import { Flashcard as FlashcardType } from '../types';
import './Flashcard.css';

interface FlashcardProps {
  card: FlashcardType;
  onAnswer: (isCorrect: boolean) => void;
  isLastCard?: boolean;
}

const Flashcard: React.FC<FlashcardProps> = ({ card, onAnswer, isLastCard = false }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const handleCardClick = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      setShowButtons(true);
    }
  };

  const handleAnswer = (isCorrect: boolean) => {
    onAnswer(isCorrect);
    // Reset for next card
    setIsFlipped(false);
    setShowButtons(false);
  };

  return (
    <div className="flashcard-container">
      <div 
        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={handleCardClick}
      >
        <div className="flashcard-front">
          <div className="card-content">
            <h2 className="word">{card.english}</h2>
            <p className="instruction">Нажмите, чтобы увидеть перевод</p>
          </div>
        </div>
        
        <div className="flashcard-back">
          <div className="card-content">
            <h2 className="word">{card.russian}</h2>
            <p className="instruction">Перевод слова "{card.english}"</p>
          </div>
        </div>
      </div>

      {showButtons && (
        <div className="answer-buttons">
          <button 
            className="button correct-button"
            onClick={() => handleAnswer(true)}
          >
            ✅ Я понял правильно
          </button>
          <button 
            className="button incorrect-button"
            onClick={() => handleAnswer(false)}
          >
            ❌ Я ошибся
          </button>
        </div>
      )}

      {isLastCard && showButtons && (
        <div className="session-complete">
          <p>🎉 Сессия завершена!</p>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
