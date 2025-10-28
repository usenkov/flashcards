/**
 * App Component - Main Application Entry Point
 * 
 * This is the root component that sets up routing for the entire flashcards application.
 * It uses React Router to handle navigation between different pages.
 * 
 * Available Routes:
 * - "/" - Home page with mode selection (Study or Quiz)
 * - "/category-selection/:mode" - Category selection page (mode = "study" or "quiz")
 * - "/study/:category" - Study mode flashcards for a specific category
 * - "/quiz/:category" - Quiz mode for a specific category (Phase 3)
 * - "/stats" - Statistics and progress tracking (Phase 3)
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategorySelectionPage from './pages/CategorySelectionPage';
import StudyPage from './pages/StudyPage';
import QuizPage from './pages/QuizPage';
import StatsPage from './pages/StatsPage';

function App() {
  return (
    // Router wrapper enables navigation throughout the app
    <Router>
      {/* Routes defines all available pages and their URL patterns */}
      <Routes>
        {/* Home page - starting point of the application */}
        <Route path="/" element={<HomePage />} />
        
        {/* Category selection - :mode is a URL parameter (study/quiz) */}
        <Route path="/category-selection/:mode" element={<CategorySelectionPage />} />
        
        {/* Study mode - :category is a URL parameter (animals, food, etc.) */}
        <Route path="/study/:category" element={<StudyPage />} />
        
        {/* Quiz mode - :category specifies which category to quiz on */}
        <Route path="/quiz/:category" element={<QuizPage />} />
        
        {/* Statistics page - shows user progress and performance */}
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
