/**
 * StudyPage Component
 * 
 * The main study mode page where users learn vocabulary using flashcards.
 * This page handles the entire study session flow from start to completion.
 * 
 * Features:
 * - Displays flashcards one at a time from selected category
 * - Tracks user's correct and incorrect answers
 * - Shows progress (current card / total cards)
 * - Completion summary with statistics
 * - Options to restart, redo wrong cards, or return home
 * 
 * URL Parameter:
 * @param category - The vocabulary category to study (from URL: /study/:category)
 * 
 * State Management:
 * - currentCardIndex: Which card is currently shown (0-based index)
 * - wrongCards: Array of indices for cards marked as incorrect
 * - sessionComplete: Boolean flag when all cards have been reviewed
 */

import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { flashcards } from '../data/flashcards';
import Flashcard from '../components/Flashcard';

const StudyPage: React.FC = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation
  const { category } = useParams<{ category: string }>(); // Get category from URL
  
  // State: Current position in the flashcard deck
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  
  // State: Tracks indices of cards the user got wrong (for review)
  const [wrongCards, setWrongCards] = useState<number[]>([]);
  
  // State: Flag to show completion screen when session ends
  const [sessionComplete, setSessionComplete] = useState(false);

  // Filter all flashcards to show only cards from the selected category
  const categoryCards = flashcards.filter(card => card.category === category);

  // Get the current flashcard to display
  const currentCard = categoryCards[currentCardIndex];
  
  // Check if this is the last card in the deck
  const isLastCard = currentCardIndex === categoryCards.length - 1;

  /**
   * Handle user's answer (correct or incorrect)
   * @param isCorrect - true if user knew the answer, false otherwise
   * 
   * If incorrect, adds card index to wrongCards array for later review.
   * Advances to next card or shows completion screen if this was the last card.
   */
  const handleAnswer = (isCorrect: boolean) => {
    // If user got it wrong, remember this card for potential re-study
    if (!isCorrect) {
      setWrongCards(prev => [...prev, currentCardIndex]);
    }

    // If this was the last card, end the session
    if (isLastCard) {
      setSessionComplete(true);
    } else {
      // Otherwise, move to the next card
      setCurrentCardIndex(prev => prev + 1);
    }
  };

  /**
   * Restart the entire study session from the beginning
   * Resets all state: card index, wrong answers, and completion flag
   */
  const handleRestart = () => {
    setCurrentCardIndex(0);
    setWrongCards([]);
    setSessionComplete(false);
  };

  /**
   * Navigate back to the home page
   */
  const handleBackToHome = () => {
    navigate('/');
  };

  /**
   * Review only the cards that were marked incorrect
   * Currently restarts the entire session (Phase 3 will filter to wrong cards only)
   */
  const handleRedoWrongCards = () => {
    if (wrongCards.length > 0) {
      // For now, just restart the session
      // In Phase 3, this will show only wrong cards
      handleRestart();
    }
  };

  // Error handling: Show error message if category doesn't exist
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

  // Completion screen: Show when all cards have been reviewed
  if (sessionComplete) {
    return (
      <div className="container">
        <h1 className="title">Сессия завершена!</h1>
        <div className="card">
          <h2 style={{ textAlign: 'center', color: '#374151', marginBottom: '24px' }}>
            Результаты изучения
          </h2>
          
          {/* Statistics summary */}
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

          {/* Action buttons */}
          <div className="button-grid">
            <button className="button" onClick={handleRestart}>
              🔄 Повторить все карточки
            </button>
            
            {/* Show "redo wrong cards" button only if there were mistakes */}
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

  // Main study screen: Display current flashcard
  return (
    <div className="container">
      <h1 className="title">Режим изучения</h1>
      
      {/* Progress indicator */}
      <p className="subtitle">
        Категория: {category} ({currentCardIndex + 1} из {categoryCards.length})
      </p>
      
      {/* Current flashcard with answer callback */}
      <Flashcard 
        card={currentCard}
        onAnswer={handleAnswer}
        isLastCard={isLastCard}
      />

      {/* Back to home button */}
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <button className="button secondary" onClick={handleBackToHome}>
          ← На главную
        </button>
      </div>
    </div>
  );
};

export default StudyPage;
