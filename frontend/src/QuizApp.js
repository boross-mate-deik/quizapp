import React, { useState } from 'react';
import './QuizApp.css';

function QuizApp() {
  const questions = [
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Berlin", isCorrect: false },
        { text: "Madrid", isCorrect: false },
        { text: "Paris", isCorrect: true },
        { text: "Rome", isCorrect: false },
      ],
      allowMultiple: false,
    },
    {
      question: "Which of the following are programming languages?",
      answers: [
        { text: "HTML", isCorrect: false },
        { text: "Python", isCorrect: true },
        { text: "JavaScript", isCorrect: true },
        { text: "CSS", isCorrect: false },
      ],
      allowMultiple: true,
    },
    {
      question: "Which animals can fly?",
      answers: [
        { text: "Bat", isCorrect: true },
        { text: "Penguin", isCorrect: false },
        { text: "Eagle", isCorrect: true },
        { text: "Elephant", isCorrect: false },
      ],
      allowMultiple: true,
    },
  ];

  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function startOrRestartQuiz() {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    const shuffled = shuffleArray(randomQuestion.answers);
    setCurrentQuestion(randomQuestion);
    setShuffledAnswers(shuffled);
    setSelectedAnswers([]);
    setIsSubmitted(false);
    setQuizStarted(true);
  }

  function handleAnswerToggle(index) {
    if (isSubmitted) return;

    const isSelected = selectedAnswers.includes(index);
    const maxSelectable = currentQuestion.allowMultiple
      ? currentQuestion.answers.filter(ans => ans.isCorrect).length
      : 1;

    if (currentQuestion.allowMultiple) {
      // For multiple answers
      if (isSelected) {
        setSelectedAnswers(selectedAnswers.filter(i => i !== index));
      } else if (selectedAnswers.length < maxSelectable) {
        setSelectedAnswers([...selectedAnswers, index]);
      }
    } else {
      // For single answer — always set selected to the clicked index
      setSelectedAnswers([index]);
    }
  }

  function handleSubmit() {
    if (selectedAnswers.length === 0 || isSubmitted) return;
    setIsSubmitted(true);
  }

  function getButtonClass(index) {
    if (!isSubmitted) {
      return selectedAnswers.includes(index) ? "quiz-button selected" : "quiz-button";
    }

    const answer = shuffledAnswers[index];
    const isSelected = selectedAnswers.includes(index);

    if (answer.isCorrect && isSelected) return "quiz-button correct";
    if (!answer.isCorrect && isSelected) return "quiz-button incorrect";
    if (answer.isCorrect && !isSelected) return "quiz-button missed";
    return "quiz-button";
  }

  return (
    <div className="quiz-container">
      <button className="quiz-button" onClick={startOrRestartQuiz}>
        Start Quiz
      </button>

      {quizStarted && currentQuestion && (
        <>
          <h2 className="quiz-question">{currentQuestion.question}</h2>

          {currentQuestion.allowMultiple && (
            <p style={{ marginBottom: '10px' }}>
              Select {currentQuestion.answers.filter(a => a.isCorrect).length} answers
            </p>
          )}
          {!currentQuestion.allowMultiple && (
            <p style={{ marginBottom: '10px' }}>
              Select one answer
            </p>
          )}

          <ul className="quiz-options">
            {shuffledAnswers.map((answer, index) => {
              const isDisabled =
                !selectedAnswers.includes(index) &&
                currentQuestion.allowMultiple &&
                selectedAnswers.length >= currentQuestion.answers.filter(a => a.isCorrect).length;

              return (
                <li key={index} className="quiz-option">
                  <button
                    className={getButtonClass(index)}
                    onClick={() => handleAnswerToggle(index)}
                    disabled={isSubmitted || isDisabled}
                  >
                    {answer.text}
                  </button>
                </li>
              );
            })}
          </ul>

          {!isSubmitted && (
            <button
              className="quiz-button"
              onClick={handleSubmit}
              disabled={selectedAnswers.length === 0}
            >
              Submit Answer
            </button>
          )}

          {isSubmitted && (
            <div>
              {selectedAnswers.every(index => shuffledAnswers[index].isCorrect) &&
              shuffledAnswers.filter(ans => ans.isCorrect).length === selectedAnswers.length ? (
                <p>Correct! 🎉</p>
              ) : (
                <p>Some answers were incorrect. 😢</p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default QuizApp;
