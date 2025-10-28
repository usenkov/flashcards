/**
 * QuizPage Component
 * 
 * Quiz mode page for testing vocabulary knowledge with multiple-choice questions.
 * 
 * CURRENT STATUS: Placeholder implementation (Phase 2)
 * This page is not fully functional yet and will be completed in Phase 3.
 * 
 * Planned Features (Phase 3):
 * - Multiple-choice questions using quiz.options from flashcard data
 * - Score tracking and performance statistics
 * - Timer for timed quiz mode
 * - Results screen with detailed feedback
 * - Option to review wrong answers
 * 
 * URL Parameter:
 * @param category - The vocabulary category to quiz on (from URL: /quiz/:category)
 */

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const QuizPage: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation
  const { category } = useParams<{ category: string }>(); // Get category from URL

  return (
    <div className="container">
      <h1 className="title">Режим викторины</h1>
      <p className="subtitle">Категория: {category}</p>
      
      <div className="card">
        {/* Placeholder message - will be replaced with actual quiz in Phase 3 */}
        <h2 style={{ textAlign: 'center', color: '#374151' }}>
          Функция викторины будет реализована в следующей фазе
        </h2>
        <p style={{ textAlign: 'center', color: '#6b7280' }}>
          Здесь будут отображаться вопросы викторины
        </p>
        
        {/* Back to home button */}
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

export default QuizPage;
