# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

English Flashcards Web App - A front-end-only React application helping Russian speakers learn English vocabulary through interactive flashcards. Built with Vite, React, TypeScript, and React Router. No backend; all data is stored in static TypeScript files.

## Development Commands

- `npm run dev` - Start development server (opens at http://localhost:3000)
- `npm run build` - Build for production (runs TypeScript compiler + Vite build)
- `npm run preview` - Preview production build

## Architecture

### Core Data Model

The application centers around the `Flashcard` interface (src/types/index.ts):
- Each flashcard has: category, russian, english, and quiz data
- 9 predefined categories: animals, food, furniture, clothes, home, city, shopping, travel, verbs
- All flashcard data stored in `src/data/flashcards.ts` (27 cards total, ~3 per category)

### Routing Structure

App uses React Router v7 with the following routes (src/App.tsx):
- `/` - Home page with mode selection
- `/category-selection/:mode` - Choose category for study or quiz mode
- `/study/:category` - Study mode with flashcard flipping
- `/quiz/:category` - Quiz mode (placeholder for future implementation)
- `/stats` - Statistics page (placeholder for future implementation)

### Component Architecture

**Flashcard Component** (src/components/Flashcard.tsx):
- Handles card flip animation and answer tracking
- Shows English word on front, Russian translation on back
- After flip, displays "I got it right" / "I made a mistake" buttons
- Component manages its own flip state but delegates answer tracking to parent

**StudyPage** (src/pages/StudyPage.tsx):
- Filters flashcards by category
- Tracks current card index and wrong answers
- Shows completion screen with statistics after last card
- Offers options to: restart all cards, redo wrong cards only, or return home

### State Management

Uses React hooks only (useState, useEffect) - no external state management library.

Study session state:
- Current card index
- List of wrong card indices
- Session completion flag

### Styling

CSS Modules pattern:
- Global styles in src/index.css
- Component-specific styles (e.g., Flashcard.css)
- Uses CSS custom properties and modern CSS features (transforms, transitions for flip animation)

## TypeScript Configuration

Strict mode enabled with:
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `noFallthroughCasesInSwitch: true`

Module resolution set to "bundler" mode for Vite compatibility.

## Current Implementation Status

Phase 2 complete:
- Basic navigation between home, category selection, and study pages
- Flashcard component with flip animation
- Answer tracking (right/wrong)
- Study mode functionality
- Session completion screen with results

Not yet implemented:
- Quiz mode functionality (multiple choice questions)
- Persistent statistics across sessions
- "Redo wrong cards only" feature (currently just restarts session)
