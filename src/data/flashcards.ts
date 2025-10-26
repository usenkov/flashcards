import { Flashcard } from '../types';

export const flashcards: Flashcard[] = [
  // Animals
  {
    category: "animals",
    russian: "кошка",
    english: "cat",
    quiz: {
      type: "multiple-choice",
      options: ["собака", "кошка", "птица", "рыба"]
    }
  },
  {
    category: "animals",
    russian: "собака",
    english: "dog",
    quiz: {
      type: "multiple-choice",
      options: ["кошка", "собака", "лошадь", "корова"]
    }
  },
  {
    category: "animals",
    russian: "птица",
    english: "bird",
    quiz: {
      type: "multiple-choice",
      options: ["птица", "рыба", "кошка", "собака"]
    }
  },

  // Food
  {
    category: "food",
    russian: "хлеб",
    english: "bread",
    quiz: {
      type: "multiple-choice",
      options: ["мясо", "хлеб", "молоко", "яйцо"]
    }
  },
  {
    category: "food",
    russian: "мясо",
    english: "meat",
    quiz: {
      type: "multiple-choice",
      options: ["хлеб", "мясо", "рыба", "сыр"]
    }
  },
  {
    category: "food",
    russian: "молоко",
    english: "milk",
    quiz: {
      type: "multiple-choice",
      options: ["молоко", "вода", "сок", "чай"]
    }
  },

  // Furniture
  {
    category: "furniture",
    russian: "стол",
    english: "table",
    quiz: {
      type: "multiple-choice",
      options: ["стул", "стол", "кровать", "шкаф"]
    }
  },
  {
    category: "furniture",
    russian: "стул",
    english: "chair",
    quiz: {
      type: "multiple-choice",
      options: ["стол", "стул", "диван", "кресло"]
    }
  },
  {
    category: "furniture",
    russian: "кровать",
    english: "bed",
    quiz: {
      type: "multiple-choice",
      options: ["кровать", "диван", "стул", "стол"]
    }
  },

  // Clothes
  {
    category: "clothes",
    russian: "рубашка",
    english: "shirt",
    quiz: {
      type: "multiple-choice",
      options: ["брюки", "рубашка", "платье", "куртка"]
    }
  },
  {
    category: "clothes",
    russian: "брюки",
    english: "pants",
    quiz: {
      type: "multiple-choice",
      options: ["рубашка", "брюки", "юбка", "шорты"]
    }
  },
  {
    category: "clothes",
    russian: "платье",
    english: "dress",
    quiz: {
      type: "multiple-choice",
      options: ["платье", "рубашка", "брюки", "куртка"]
    }
  },

  // Home
  {
    category: "home",
    russian: "дом",
    english: "house",
    quiz: {
      type: "multiple-choice",
      options: ["квартира", "дом", "офис", "магазин"]
    }
  },
  {
    category: "home",
    russian: "комната",
    english: "room",
    quiz: {
      type: "multiple-choice",
      options: ["комната", "кухня", "ванная", "спальня"]
    }
  },
  {
    category: "home",
    russian: "кухня",
    english: "kitchen",
    quiz: {
      type: "multiple-choice",
      options: ["кухня", "ванная", "спальня", "гостиная"]
    }
  },

  // City
  {
    category: "city",
    russian: "улица",
    english: "street",
    quiz: {
      type: "multiple-choice",
      options: ["дорога", "улица", "площадь", "парк"]
    }
  },
  {
    category: "city",
    russian: "парк",
    english: "park",
    quiz: {
      type: "multiple-choice",
      options: ["парк", "сад", "лес", "пляж"]
    }
  },
  {
    category: "city",
    russian: "магазин",
    english: "shop",
    quiz: {
      type: "multiple-choice",
      options: ["магазин", "рынок", "кафе", "банк"]
    }
  },

  // Shopping
  {
    category: "shopping",
    russian: "покупать",
    english: "buy",
    quiz: {
      type: "multiple-choice",
      options: ["продавать", "покупать", "платить", "тратить"]
    }
  },
  {
    category: "shopping",
    russian: "деньги",
    english: "money",
    quiz: {
      type: "multiple-choice",
      options: ["деньги", "цена", "счет", "чек"]
    }
  },
  {
    category: "shopping",
    russian: "цена",
    english: "price",
    quiz: {
      type: "multiple-choice",
      options: ["цена", "стоимость", "деньги", "счет"]
    }
  },

  // Travel
  {
    category: "travel",
    russian: "путешествие",
    english: "travel",
    quiz: {
      type: "multiple-choice",
      options: ["путешествие", "поездка", "отпуск", "каникулы"]
    }
  },
  {
    category: "travel",
    russian: "самолет",
    english: "airplane",
    quiz: {
      type: "multiple-choice",
      options: ["поезд", "самолет", "автобус", "машина"]
    }
  },
  {
    category: "travel",
    russian: "отель",
    english: "hotel",
    quiz: {
      type: "multiple-choice",
      options: ["отель", "гостиница", "хостел", "кемпинг"]
    }
  },

  // Verbs
  {
    category: "verbs",
    russian: "идти",
    english: "go",
    quiz: {
      type: "multiple-choice",
      options: ["приходить", "идти", "бежать", "ехать"]
    }
  },
  {
    category: "verbs",
    russian: "говорить",
    english: "speak",
    quiz: {
      type: "multiple-choice",
      options: ["говорить", "слушать", "читать", "писать"]
    }
  },
  {
    category: "verbs",
    russian: "читать",
    english: "read",
    quiz: {
      type: "multiple-choice",
      options: ["читать", "писать", "говорить", "слушать"]
    }
  }
];
