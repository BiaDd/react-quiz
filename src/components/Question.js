import React, {useEffect, useRef, useState} from "react";

const Question = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {

   
    const [error, setError] = useState('');
    const [answer, setAnswer] = useState('');



    const changeHandler = (e) => {
        setAnswer(e.target.value);
    } 

    const getNextHandler = (event) => {
        const userInput = event.target.value;
        //asdsda
        
        onAnswerUpdate(prevState => [...prevState, {q : data.question, a: answer}]);
        setAnswer('');
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
                            <input type="text" name="answer" value={answer} onChange={changeHandler} onKeyPress={handleKeypress} autoFocus/>  
                        </label> 
                    </div>
                </div>
                </form>
                {error && <div className="has-text-danger">{error}</div>}
                <button id="myBtn" className="button is-link mt-4" onClick={getNextHandler}>Submit</button>
            </div>
        </div>
    );
}


export default Question;