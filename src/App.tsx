import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategorySelectionPage from './pages/CategorySelectionPage';
import StudyPage from './pages/StudyPage';
import QuizPage from './pages/QuizPage';
import StatsPage from './pages/StatsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category-selection/:mode" element={<CategorySelectionPage />} />
        <Route path="/study/:category" element={<StudyPage />} />
        <Route path="/quiz/:category" element={<QuizPage />} />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
