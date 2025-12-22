// src/components/quiz/QuizCard.jsx

import "./quiz.css";

export default function QuizCard({
  question,
  index,
  total,
  selected,
  setSelected,
  checked,
  onCheck,
  onNext,
  score
}) {
  return (
    <div className="quiz-wrapper transition-play">
      <div className="quiz-header">
        <span className="quiz-count">
          {index + 1} / {total}
        </span>
      </div>

      <div className="quiz-question">
        {index + 1}. {question.question}
      </div>

      <div className="quiz-options">
        {question.options.map((opt, i) => {
          let className = "quiz-option";

          if (checked) {
            if (i === question.correctIndex)
              className += " correct";
            else if (i === selected)
              className += " wrong";
          } else if (i === selected) {
            className += " selected";
          }

          return (
            <div
              key={i}
              className={className}
              onClick={() => !checked && setSelected(i)}
            >
              <span className="option-letter">
                {String.fromCharCode(65 + i)}
              </span>
              {opt}
            </div>
          );
        })}
      </div>

      {checked && (
        <div className={`quiz-feedback ${selected === question.correctIndex ? "correct" : "wrong"}`}>
          <span>
            {selected === question.correctIndex
              ? "✔ Correct Answer"
              : "✖ Wrong Answer"}
          </span>
          {selected === question.correctIndex ? (
            <dotlottie-wc
              src="https://lottie.host/3201f16f-01c5-4ad6-b579-2eb2d77e85c8/CSsaBlzOg7.lottie"
              autoplay
              loop
            />
          ) : (
            <dotlottie-wc
              src="https://lottie.host/84738393-be5e-432e-96b3-77ef6c46e901/HV8nqotLg5.lottie"
              autoplay
              loop
            />
          )}
        </div>
      )}

      <div className="quiz-footer">
        <span className="score">
          score:{score}/{total}
        </span>

        {!checked ? (
          <button className="check-btn pop" onClick={onCheck}>
            Check
          </button>
        ) : (
          <button className="next-btn pop" onClick={onNext}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}
