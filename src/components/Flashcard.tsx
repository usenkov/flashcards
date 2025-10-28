/**
 * Flashcard Component
 * 
 * A reusable flashcard component that displays a word in English and flips to show Russian translation.
 * Used in Study Mode for vocabulary learning with self-assessment.
 * 
 * Features:
 * - Click to flip: Shows English word first, Russian on back
 * - Self-assessment: User marks if they got it right or wrong
 * - Visual feedback: Card flip animation for better UX
 * - Tracks wrong answers: Allows users to review mistakes later
 * 
 * Props:
 * @param card - The flashcard data (category, russian, english, quiz options)
 * @param onAnswer - Callback function when user marks answer as correct/incorrect
 * @param isLastCard - Boolean flag to show completion message on last card
 */

import React, { useState } from 'react';
import { Flashcard as FlashcardType } from '../types';
import './Flashcard.css';

interface FlashcardProps {
  card: FlashcardType;
  onAnswer: (isCorrect: boolean) => void;
  isLastCard?: boolean;
}

const Flashcard: React.FC<FlashcardProps> = ({ card, onAnswer, isLastCard = false }) => {
  // State to track if card is flipped (showing back side with Russian)
  const [isFlipped, setIsFlipped] = useState(false);
  
  // State to control when answer buttons (correct/incorrect) are shown
  const [showButtons, setShowButtons] = useState(false);

  /**
   * Handle card click - flips the card to reveal Russian translation
   * Only flips if card is not already flipped
   */
  const handleCardClick = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      setShowButtons(true);
    }
  };

  /**
   * Handle answer selection (correct or incorrect)
   * @param isCorrect - true if user knew the answer, false if they didn't
   * 
   * Resets card state for next flashcard and calls parent's onAnswer callback
   */
  const handleAnswer = (isCorrect: boolean) => {
    onAnswer(isCorrect); // Notify parent component of the answer
    
    // Reset card state for the next flashcard
    setIsFlipped(false);
    setShowButtons(false);
  };

  return (
    <div className="flashcard-container">
      {/* Main flashcard - clickable to flip */}
      <div 
        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={handleCardClick}
      >
        {/* Front of card - shows English word */}
        <div className="flashcard-front">
          <div className="card-content">
            <h2 className="word">{card.english}</h2>
            <p className="instruction">Нажмите, чтобы увидеть перевод</p>
          </div>
        </div>
        
        {/* Back of card - shows Russian translation */}
        <div className="flashcard-back">
          <div className="card-content">
            <h2 className="word">{card.russian}</h2>
            <p className="instruction">Перевод слова "{card.english}"</p>
          </div>
        </div>
      </div>

      {/* Answer buttons - shown after card is flipped */}
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

      {/* Completion message - shown only on the last card */}
      {isLastCard && showButtons && (
        <div className="session-complete">
          <p>🎉 Сессия завершена!</p>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
