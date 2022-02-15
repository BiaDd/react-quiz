import React, {useState, useRef} from "react"; //{useEffect, useRef, useState} from "react";

const Question = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {

   
    //const [error, setError] = useState('');
    const [answer, setAnswer] = useState('');

    const inputAnswer = useRef()



    const changeHandler = (e) => {
        setAnswer(e.target.value);
    } 

    const getNextHandler = (event) => {
        //const userInput = event.target.value;
        //asdsda
        onAnswerUpdate(prevState => [...prevState, {q : data.question, a: answer}]);
        setAnswer('');
        inputAnswer.current.focus();
        if(activeQuestion < numberOfQuestions-1) {
            onSetActiveQuestion(activeQuestion+1);
        } else {
            onSetStep(3);
        }
    }

    const handleKeypress = e => {
        //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        getNextHandler();
      }
    };
    

    return (
        <div className="card">
            <div className="card-content">
                <form id="anser">
                <div className="content">
                    <h2 className="mb-5">{data.question}</h2>
                    <div className="control">
                        <label className="has-background-light">
                            <input ref={inputAnswer} 
                            type="text" name="answer" value={answer} 
                            onChange={changeHandler} 
                             autoFocus/>  
                        </label> 
                    </div>
                </div>
                </form>
                
                <button id="myBtn" className="button is-link mt-4" onClick={getNextHandler} onKeyPress={handleKeypress} >Submit</button>
            </div>
        </div>
    );
}

//<!---{error && <div className="has-text-danger">{error}</div>}--->
export default Question;