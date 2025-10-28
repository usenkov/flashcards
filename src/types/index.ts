/**
 * Type Definitions for the Flashcards Application
 * 
 * This file contains all the TypeScript interfaces and types used throughout the app.
 * These ensure type safety and provide clear contracts for data structures.
 */

/**
 * Flashcard Interface
 * 
 * Represents a single flashcard with Russian-English translation pair.
 * Each flashcard belongs to a category and includes quiz options for testing.
 * 
 * @property category - The thematic category this card belongs to (e.g., "animals", "food")
 * @property russian - The Russian word or phrase
 * @property english - The English translation
 * @propclearerty quiz - Quiz configuration for this card
 * @property quiz.type - Currently only "multiple-choice" is supported
 * @property quiz.options - Array of Russian words shown as answer choices (one correct, others incorrect)
 */
export interface Flashcard {
  category: string;
  russian: string;
  english: string;
  quiz: {
    type: "multiple-choice";
    options: string[];
  };
}

/**
 * Category Type
 * 
 * Defines all available flashcard categories.
 * Each category groups related vocabulary words together.
 * 
 * Available categories:
 * - animals: Pet and wild animals
 * - food: Common food items and drinks
 * - furniture: Household furniture items
 * - clothes: Clothing and accessories
 * - home: House-related vocabulary
 * - city: Urban locations and places
 * - shopping: Shopping-related terms
 * - travel: Travel and transportation vocabulary
 * - verbs: Common action verbs
 */
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

/**
 * StudyMode Interface
 * 
 * Defines the learning mode for the application.
 * 
 * @property type - "study": Learn with flashcards, self-assessment
 *                  "quiz": Test knowledge with multiple-choice questions (Phase 3)
 */
export interface StudyMode {
  type: "study" | "quiz";
}
