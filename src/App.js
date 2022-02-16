import React, { useState, useEffect } from 'react';
import './App.css';

import Start from './components/Start';
import Question from './components/Question';
import MultipleQuestion from "./components/Multiple";
import End from './components/End';
import Modal from './components/Modal';
import quizData from './data/quiz.json';




let interval;
//quizData.data.sort((a,b) => 0.5 - Math.random())
//quizData.data2.sort((a,b) => 0.5 - Math.random())

const App = () => {
  
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if(step === 3) {
      clearInterval(interval);
    } else if (step === 5) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const quizStartHandler2 = () => {
    setStep(4);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const resetClickHandler = () => {
    
    setActiveQuestion(0);
    setAnswers([]);
    setStep(1);
    setTime(0);
  }

  return (
    <div className="App">
      {step === 1 && <Start onQuizStart={quizStartHandler} onQuizStart2={quizStartHandler2} />}
      {step === 2 && <Question 
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 4 && <MultipleQuestion 
        data={quizData.data2[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data2.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <End 
        results={answers}
        data={quizData.data}
        onReset={resetClickHandler}
        onAnswersCheck={() => setShowModal(true)}
        time={time}
      />}
      {step === 5 && <End 
        results={answers}
        data={quizData.data2}
        onReset={resetClickHandler}
        onAnswersCheck={() => setShowModal2(true)}
        time={time}
      />}
      {showModal && <Modal 
        onClose={() => setShowModal(false)}
        results={answers}
        data={quizData.data}
      />}
      {showModal2 && <Modal 
        onClose={() => setShowModal2(false)}
        results={answers}
        data={quizData.data2}
      />}
    </div>
  );
}

export default App;