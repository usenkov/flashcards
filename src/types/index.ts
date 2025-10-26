export interface Flashcard {
  category: string;
  russian: string;
  english: string;
  quiz: {
    type: "multiple-choice";
    options: string[];
  };
}

export type Category = 
  | "animals"
  | "food" 
  | "furniture"
  | "clothes"
  | "home"
  | "city"
  | "shopping"
  | "travel"
  | "verbs";

export interface StudyMode {
  type: "study" | "quiz";
}
