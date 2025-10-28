/**
 * Flashcards Data
 * 
 * This file contains all the flashcard data for the application.
 * Each flashcard has:
 * - category: Thematic grouping of the word
 * - russian: The Russian word to learn
 * - english: The English translation shown first
 * - quiz.options: Multiple choice options for quiz mode (future Phase 3)
 * 
 * The flashcards are organized by category for easy maintenance.
 * To add new words: Copy an existing flashcard object and modify the values.
 */

import { Flashcard } from '../types';

// Main flashcards array - exported for use throughout the app
export const flashcards: Flashcard[] = [
  // ===== ANIMALS CATEGORY =====
  // Common pets and animals
  {
    category: "animals",
    russian: "кошка",
    english: "cat",
    quiz: {
      type: "multiple-choice",
      options: ["собака", "кошка", "птица", "рыба"] // Options: dog, cat, bird, fish
    }
  },
  {
    category: "animals",
    russian: "собака",
    english: "dog",
    quiz: {
      type: "multiple-choice",
      options: ["кошка", "собака", "лошадь", "корова"] // Options: cat, dog, horse, cow
    }
  },
  {
    category: "animals",
    russian: "птица",
    english: "bird",
    quiz: {
      type: "multiple-choice",
      options: ["птица", "рыба", "кошка", "собака"] // Options: bird, fish, cat, dog
    }
  },

  // ===== FOOD CATEGORY =====
  // Common food items and ingredients
  {
    category: "food",
    russian: "хлеб",
    english: "bread",
    quiz: {
      type: "multiple-choice",
      options: ["мясо", "хлеб", "молоко", "яйцо"] // Options: meat, bread, milk, egg
    }
  },
  {
    category: "food",
    russian: "мясо",
    english: "meat",
    quiz: {
      type: "multiple-choice",
      options: ["хлеб", "мясо", "рыба", "сыр"] // Options: bread, meat, fish, cheese
    }
  },
  {
    category: "food",
    russian: "молоко",
    english: "milk",
    quiz: {
      type: "multiple-choice",
      options: ["молоко", "вода", "сок", "чай"] // Options: milk, water, juice, tea
    }
  },

  // ===== FURNITURE CATEGORY =====
  // Household furniture items
  {
    category: "furniture",
    russian: "стол",
    english: "table",
    quiz: {
      type: "multiple-choice",
      options: ["стул", "стол", "кровать", "шкаф"] // Options: chair, table, bed, wardrobe
    }
  },
  {
    category: "furniture",
    russian: "стул",
    english: "chair",
    quiz: {
      type: "multiple-choice",
      options: ["стол", "стул", "диван", "кресло"] // Options: table, chair, sofa, armchair
    }
  },
  {
    category: "furniture",
    russian: "кровать",
    english: "bed",
    quiz: {
      type: "multiple-choice",
      options: ["кровать", "диван", "стул", "стол"] // Options: bed, sofa, chair, table
    }
  },

  // ===== CLOTHES CATEGORY =====
  // Clothing and garments
  {
    category: "clothes",
    russian: "рубашка",
    english: "shirt",
    quiz: {
      type: "multiple-choice",
      options: ["брюки", "рубашка", "платье", "куртка"] // Options: pants, shirt, dress, jacket
    }
  },
  {
    category: "clothes",
    russian: "брюки",
    english: "pants",
    quiz: {
      type: "multiple-choice",
      options: ["рубашка", "брюки", "юбка", "шорты"] // Options: shirt, pants, skirt, shorts
    }
  },
  {
    category: "clothes",
    russian: "платье",
    english: "dress",
    quiz: {
      type: "multiple-choice",
      options: ["платье", "рубашка", "брюки", "куртка"] // Options: dress, shirt, pants, jacket
    }
  },

  // ===== HOME CATEGORY =====
  // House and room-related vocabulary
  {
    category: "home",
    russian: "дом",
    english: "house",
    quiz: {
      type: "multiple-choice",
      options: ["квартира", "дом", "офис", "магазин"] // Options: apartment, house, office, shop
    }
  },
  {
    category: "home",
    russian: "комната",
    english: "room",
    quiz: {
      type: "multiple-choice",
      options: ["комната", "кухня", "ванная", "спальня"] // Options: room, kitchen, bathroom, bedroom
    }
  },
  {
    category: "home",
    russian: "кухня",
    english: "kitchen",
    quiz: {
      type: "multiple-choice",
      options: ["кухня", "ванная", "спальня", "гостиная"] // Options: kitchen, bathroom, bedroom, living room
    }
  },

  // ===== CITY CATEGORY =====
  // Urban locations and places
  {
    category: "city",
    russian: "улица",
    english: "street",
    quiz: {
      type: "multiple-choice",
      options: ["дорога", "улица", "площадь", "парк"] // Options: road, street, square, park
    }
  },
  {
    category: "city",
    russian: "парк",
    english: "park",
    quiz: {
      type: "multiple-choice",
      options: ["парк", "сад", "лес", "пляж"] // Options: park, garden, forest, beach
    }
  },
  {
    category: "city",
    russian: "магазин",
    english: "shop",
    quiz: {
      type: "multiple-choice",
      options: ["магазин", "рынок", "кафе", "банк"] // Options: shop, market, cafe, bank
    }
  },

  // ===== SHOPPING CATEGORY =====
  // Shopping and commerce vocabulary
  {
    category: "shopping",
    russian: "покупать",
    english: "buy",
    quiz: {
      type: "multiple-choice",
      options: ["продавать", "покупать", "платить", "тратить"] // Options: sell, buy, pay, spend
    }
  },
  {
    category: "shopping",
    russian: "деньги",
    english: "money",
    quiz: {
      type: "multiple-choice",
      options: ["деньги", "цена", "счет", "чек"] // Options: money, price, bill, receipt
    }
  },
  {
    category: "shopping",
    russian: "цена",
    english: "price",
    quiz: {
      type: "multiple-choice",
      options: ["цена", "стоимость", "деньги", "счет"] // Options: price, cost, money, bill
    }
  },

  // ===== TRAVEL CATEGORY =====
  // Travel and transportation vocabulary
  {
    category: "travel",
    russian: "путешествие",
    english: "travel",
    quiz: {
      type: "multiple-choice",
      options: ["путешествие", "поездка", "отпуск", "каникулы"] // Options: travel, trip, vacation, holidays
    }
  },
  {
    category: "travel",
    russian: "самолет",
    english: "airplane",
    quiz: {
      type: "multiple-choice",
      options: ["поезд", "самолет", "автобус", "машина"] // Options: train, airplane, bus, car
    }
  },
  {
    category: "travel",
    russian: "отель",
    english: "hotel",
    quiz: {
      type: "multiple-choice",
      options: ["отель", "гостиница", "хостел", "кемпинг"] // Options: hotel, hotel, hostel, camping
    }
  },

  // ===== VERBS CATEGORY =====
  // Common action verbs
  {
    category: "verbs",
    russian: "идти",
    english: "go",
    quiz: {
      type: "multiple-choice",
      options: ["приходить", "идти", "бежать", "ехать"] // Options: come, go, run, ride
    }
  },
  {
    category: "verbs",
    russian: "говорить",
    english: "speak",
    quiz: {
      type: "multiple-choice",
      options: ["говорить", "слушать", "читать", "писать"] // Options: speak, listen, read, write
    }
  },
  {
    category: "verbs",
    russian: "читать",
    english: "read",
    quiz: {
      type: "multiple-choice",
      options: ["читать", "писать", "говорить", "слушать"] // Options: read, write, speak, listen
    }
  }
];
