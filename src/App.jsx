// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import Main from "./pages/Main";
import Content from "./pages/Content";
import Members from "./pages/Members";
import Intro from './pages/Intro';
import LessonPage from './pages/LessonPage';
import GamePage from './pages/GamePage';
import QuizPage from './pages/QuizPage';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/content" element={<Content />} />
        <Route path="/content/intro" element={<Intro />} />
        <Route path="/content/:topic/:part" element={<LessonPage />} />
        <Route
          path="/content/:topic/:part/game"
          element={<GamePage />}
        />
        <Route
          path="/content/:topic/quiz"
          element={<QuizPage />}
        />

        <Route path="/members" element={<Members />} />
      </Routes>
  );
}
