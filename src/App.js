import React, { useState, useEffect } from 'react';
import './App.css';

import Start from './components/Start';
import Question from './components/Question';
import MultipleQuestion from "./components/Multiple";
import End from './components/End';
import Modal from './components/Modal';
import quizData from './data/quiz.json';




let interval;
quizData.data.sort((a,b) => 0.5 - Math.random())
quizData.data2.sort((a,b) => 0.5 - Math.random())

const App = () => {
  
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if(step === 3 || step === 5) {
      clearInterval(interval);
    }
  }, [step]);

  function setData(d) {
    quizData.data=d;
  }

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
      {step === 1 &&     
      <div className="card">
          <div className="card-content">
              <div className="content">
                  <h1>練習が始めましょう</h1>
                  <p>頑張りましょう！</p>
                  <button id="write" className="button is-info is-medium" onClick={()=> setData(quizData.data), quizStartHandler}>Lesson 7-1 Vocab</button>
                  <button id="select" className="button is-info is-medium" onClick={()=>setData(quizData.data2), quizStartHandler}>Lesson 8-1 vocab</button>
                  <button id="select" className="button is-info is-medium" onClick={()=>setData(quizData.data2), quizStartHandler}>Lesson 8-2 vocab</button>
                  <br></br><button id="select" className="button is-info is-medium" onClick={()=>setData(quizData.data2), quizStartHandler2}>Multiple Choice</button>
              </div>
          </div>
      </div>
      }
      {step === 2 && <Question 
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 4 && <MultipleQuestion 
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
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
      {showModal && <Modal 
        onClose={() => setShowModal(false)}
        results={answers}
        data={quizData.data}
      />}
    </div>
  );
}

export default App;