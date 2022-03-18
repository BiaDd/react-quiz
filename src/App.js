import React, { useState, useEffect } from 'react';
import './App.css';

import Start from './components/Start';
import Question from './components/Question';
import MultipleQuestion from "./components/Multiple";
import End from './components/End';
import Modal from './components/Modal';
import quizData from './data/quiz.json';




let interval;
let datad;
//quizData['tango7-1'].sort((a,b) => 0.5 - Math.random());
//quizData['tango8-1'].sort((a,b) => 0.5 - Math.random());
//quizData['tango8-2'].sort((a,b) => 0.5 - Math.random());
//quizData.mult.sort((a,b) => 0.5 - Math.random());


for (var key in quizData){
  quizData[key].sort((a,b) => 0.5 - Math.random());
}



const App = () => {

  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);
  

  useEffect(() => {
    if(step === 3) {
      clearInterval(interval);
    } else if (step === 5) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = e => {
    e.preventDefault();
    if (e.target.id === "tango7-1") {
      datad = quizData['tango7-1'];
    }
    else if (e.target.id === "def7-1") {
      datad = quizData['def7-1'];
    }
    else if (e.target.id === "tango8-1") {
      datad = quizData['tango8-1'];
    }
    else if (e.target.id === "def8-1") {
      datad = quizData['def8-1'];
    }
    else if (e.target.id === "tango8-2") {
      datad = quizData['tango8-2'];
    }
    else if (e.target.id === "def8-2") {
      datad = quizData['def8-2'];
    }
    // lesson 9
    else if (e.target.id === "tango9-1") {
      datad = quizData['tango9-1'];
    }
    else if (e.target.id === "def9-1") {
      datad = quizData['def9-1'];
    }
    else if (e.target.id === "tango9-2") {
      datad = quizData['tango9-2'];
    }
    else if (e.target.id === "def9-2") {
      datad = quizData['def9-2'];
    }
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const quizStartHandler2 = () => {
    setTime(0);
    datad = quizData.mult
    setStep(4);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const resetClickHandler = () => {
    for (var key in quizData){
      quizData[key].sort((a,b) => 0.5 - Math.random());
    }
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
  }

  const home = () => {
    for (var key in quizData){
      quizData[key].sort((a,b) => 0.5 - Math.random());
    }
    setActiveQuestion(0);
    setAnswers([]);
    setStep(1);
    setTime(0);
    
  }



  return (
    <div className="App">
      <div class="position-absolute top-0 start-0">
        <button className="button is-info" onClick={home}>Home Page</button>
      </div>
      {step === 1 && <Start onQuizStart={quizStartHandler} onQuizStart2={quizStartHandler2}/>}
      {step === 2 && <Question 
        data={datad[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={datad.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 4 && <MultipleQuestion 
        data={datad[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={datad.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
      {step === 3 && <End 
        results={answers}
        data={datad}
        onReset={resetClickHandler}
        onAnswersCheck={() => setShowModal(true)}
        time={time}
      />}
      {showModal && <Modal 
        onClose={() => setShowModal(false)}
        results={answers}
        data={datad}
      />}
    </div>
  );
}

export default App;