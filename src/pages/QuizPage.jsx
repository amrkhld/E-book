// src/pages/Quiz.jsx

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import quizzes from "../data/quizzes";
import QuizCard from "../components/quiz/QuizCard";
import BackgroundFrame from "../components/BackgroundFrame";
import lessons from "../data/lessons";
import useSound from "../hooks/useSound";
import successSfx from "../assets/sounds/success.mp3";
import failSfx from "../assets/sounds/fail.mp3";
import correctSfx from "../assets/sounds/correct.mp3";
import wrongSfx from "../assets/sounds/wrong.mp3";

export default function QuizPage() {
  const { topic } = useParams();
  const navigate = useNavigate();

  const questions = quizzes[topic];
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);

  const playSuccess = useSound(successSfx, 0.6);
  const playFail = useSound(failSfx, 0.6);
  const playAnswerCorrect = useSound(correctSfx, 0.6);
  const playAnswerWrong = useSound(wrongSfx, 0.6);
  const resultSoundPlayedRef = useRef(false);

  if (!questions) return <h1>Quiz not found</h1>;

  const q = questions[current];
  const totalQuestions = questions.length;
  const passScore = 3;
  const hasFinished = current >= totalQuestions;
  const hasPassed = score >= passScore;

  useEffect(() => {
    if (!hasFinished || resultSoundPlayedRef.current) return;

    if (hasPassed) {
      playSuccess();
      const passedList = JSON.parse(localStorage.getItem('passed_quizzes') || '[]');
      if (!passedList.includes(topic)) {
        passedList.push(topic);
        localStorage.setItem('passed_quizzes', JSON.stringify(passedList));
      }
    } else {
      playFail();
    }

    resultSoundPlayedRef.current = true;
  }, [hasFinished, hasPassed, playFail, playSuccess, topic]);

  function checkAnswer() {
    if (selected === null) return;
    setChecked(true);
    if (selected === q.correctIndex) {
      setScore((s) => s + 1);
      playAnswerCorrect();
    } else {
      playAnswerWrong();
    }
  }

  function nextQuestion() {
    setSelected(null);
    setChecked(false);
    setCurrent((c) => c + 1);
  }

  function getOutroPart(lessonTopic) {
    const parts = lessons[lessonTopic];
    if (!parts) return null;

    return Number(
      Object.keys(parts).find((key) => parts[key].outro === true)
    );
  }
  const outroPart = getOutroPart(topic);

  // Final result screen
  if (hasFinished) {
    const width =
      typeof window !== "undefined" ? window.innerWidth : undefined;
    const height =
      typeof window !== "undefined" ? window.innerHeight : undefined;

    const failIcons = Array.from({ length: 16 }).map((_, index) => {
      const left = 5 + (index * 6) % 90;
      const delay = (index % 4) * 0.6;
      const duration = 2.2 + (index % 3) * 0.4;

      return { left, delay, duration };
    });

    return (
      <>
        <BackgroundFrame />
        <div className="quiz-screen">
          {hasPassed && width && height ? (
            <Confetti
              width={width}
              height={height}
              numberOfPieces={220}
              gravity={0.6}
              recycle={false}
            />
          ) : null}

          <div
            className={`quiz-result-card ${hasPassed
              ? "quiz-result-card--success"
              : "quiz-result-card--fail"
              }`}
          >
            {!hasPassed && (
              <div className="quiz-fail-overlay" aria-hidden="true">
                {failIcons.map((icon, index) => (
                  <span
                    key={index}
                    className="quiz-fail-icon"
                    style={{
                      left: `${icon.left}%`,
                      animationDuration: `${icon.duration}s`,
                      animationDelay: `${icon.delay}s`,
                    }}
                  >
                    ✖
                  </span>
                ))}
              </div>
            )}

            <h1 className="quiz-result-title">
              {hasPassed ? "🎉 Congratulations!" : "📘 Try Again"}
            </h1>

            <p className="quiz-result-score">
              Your score: {score} / {totalQuestions}
            </p>

            <p className="quiz-result-message">
              {hasPassed
                ? "You did a great job! You’re ready to move on."
                : "We recommend reviewing the lesson once more, then try the quiz again."}
            </p>

            <div className="quiz-result-actions">
              <button
                className="pop"
                type="button"
                onClick={() => {
                  if (outroPart) {
                    navigate(`/content/${topic}/${outroPart}`);
                  }
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <BackgroundFrame />
      <div className="quiz-screen">
        <QuizCard
          question={q}
          index={current}
          total={totalQuestions}
          selected={selected}
          setSelected={setSelected}
          checked={checked}
          onCheck={checkAnswer}
          onNext={nextQuestion}
          score={score}
        />
      </div>
    </>
  );
}
