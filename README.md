# English Flashcards Web App

A front-end-only flashcards web application to help Russian speakers learn English vocabulary through interactive flashcards.

## Tech Stack

- **Frontend Framework:** React (with Vite + TypeScript)
- **Data Storage:** Static TypeScript files (no backend)
- **State Management:** React hooks
- **Styling:** CSS Modules
- **Routing:** React Router

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/     # Reusable React components
├── data/          # Static flashcard data
├── pages/         # Page components
├── types/         # TypeScript type definitions
├── App.tsx        # Main app component with routing
└── main.tsx       # React entry point
```

## Features Implemented (Phase 1)

✅ **Project Setup**
- Vite + React + TypeScript configuration
- Proper directory structure
- Development server setup

✅ **Static Data**
- Flashcard data with 9 categories (Animals, Food, Furniture, Clothes, Home, City, Shopping, Travel, Verbs)
- At least 3 cards per category
- Proper TypeScript types

✅ **Navigation**
- Home page with Study Mode, Quiz Mode, and Stats Page buttons
- Category selection page for both study and quiz modes
- Placeholder pages for future functionality

## Next Steps

The project is ready for Phase 2 implementation, which will include:
- Flashcard study component with flip animation
- Right/Wrong answer tracking
- Quiz mode implementation
- Statistics tracking

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
