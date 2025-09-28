import React, { useState } from 'react';
import './QuizApp.css';

function QuizApp() {
  const question = "What is the capital of France?";
  const originalAnswers = [
    { text: "Berlin", isCorrect: false },
    { text: "Madrid", isCorrect: false },
    { text: "Paris", isCorrect: true },
    { text: "Rome", isCorrect: false },
  ];

  const [quizStarted, setQuizStarted] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  function shuffleAnswers(answers) {
    const shuffled = [...answers];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function startQuiz() {
    setShuffledAnswers(shuffleAnswers(originalAnswers));
    setQuizStarted(true);
    setSelectedAnswer(null);
    setIsAnswered(false);
  }

  function handleAnswerClick(isCorrect, index) {
    if (!isAnswered) {
      setSelectedAnswer(index);
      setIsAnswered(true);
    }
  }

  return (
    <div className="quiz-container">
      {!quizStarted ? (
        <button className="quiz-button" onClick={startQuiz}>
          Start Quiz
        </button>
      ) : (
        <>
          <h2 className="quiz-question">{question}</h2>
          <ul className="quiz-options">
            {shuffledAnswers.map((answer, index) => {
              const isSelected = selectedAnswer === index;
              let buttonClass = "quiz-button";

              if (isAnswered && isSelected) {
                buttonClass += answer.isCorrect ? " correct" : " incorrect";
              }

              return (
                <li key={index} className="quiz-option">
                  <button
                    className={buttonClass}
                    onClick={() => handleAnswerClick(answer.isCorrect, index)}
                    disabled={isAnswered}
                  >
                    {answer.text}
                  </button>
                </li>
              );
            })}
          </ul>
          {isAnswered && (
            <p className="feedback">
              {shuffledAnswers[selectedAnswer].isCorrect
                ? "Correct! 🎉"
                : "Incorrect. 😢"}
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default QuizApp;
