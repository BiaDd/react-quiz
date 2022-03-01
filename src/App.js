import React, { useState, useEffect } from 'react';
import './App.css';

//import Start from './components/Start';
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
    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  }

  const quizStartHandler2 = () => {
    datad = quizData.mult
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
                  <button id="tango7-1" className="button is-info is-medium" onClick={quizStartHandler}>Lesson 7-1 Hirigana</button><br></br>
                  <button id="tango8-1" className="button is-info is-medium" onClick={quizStartHandler}>Lesson 8-1 Hirigana</button>
                  <button id="tango8-2" className="button is-info is-medium" onClick={quizStartHandler}>Lesson 8-2 Hirigana</button>
                  <br></br>
                  <br></br><button id="select" className="button is-info is-medium" onClick={quizStartHandler2}>Multiple Choice</button>
                  <br></br>
                  <br></br>
                  <button id="def7-1" className="button is-info is-medium" onClick={quizStartHandler}>Lesson 7-1 Definitions</button>
                  <button id="def8-1" className="button is-info is-medium" onClick={quizStartHandler}>Lesson 8-1 Definitions</button><br></br>
                  <button id="def8-2" className="button is-info is-medium" onClick={quizStartHandler}>Lesson 8-2 Definitions</button>
              </div>
          </div>
      </div> }
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