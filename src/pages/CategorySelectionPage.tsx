import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Category } from '../types';

const categories: { key: Category; label: string }[] = [
  { key: 'animals', label: 'Животные' },
  { key: 'food', label: 'Еда' },
  { key: 'furniture', label: 'Мебель' },
  { key: 'clothes', label: 'Одежда' },
  { key: 'home', label: 'Дом' },
  { key: 'city', label: 'Город' },
  { key: 'shopping', label: 'Покупки' },
  { key: 'travel', label: 'Путешествия' },
  { key: 'verbs', label: 'Глаголы' }
];

const CategorySelectionPage: React.FC = () => {
  const navigate = useNavigate();
  const { mode } = useParams<{ mode: 'study' | 'quiz' }>();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleProceed = () => {
    if (selectedCategory && mode) {
      if (mode === 'study') {
        navigate(`/study/${selectedCategory}`);
      } else if (mode === 'quiz') {
        navigate(`/quiz/${selectedCategory}`);
      }
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <h1 className="title">
        {mode === 'study' ? 'Режим изучения' : 'Режим викторины'}
      </h1>
      <p className="subtitle">
        Выберите категорию для {mode === 'study' ? 'изучения' : 'викторины'}
      </p>
      
      <div className="card">
        <div className="category-grid">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`category-button ${
                selectedCategory === category.key ? 'selected' : ''
              }`}
              onClick={() => handleCategorySelect(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <button 
            className="button secondary" 
            onClick={handleBack}
            style={{ marginRight: '12px' }}
          >
            ← Назад
          </button>
          
          <button 
            className="button" 
            onClick={handleProceed}
            disabled={!selectedCategory}
          >
            Продолжить →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySelectionPage;
