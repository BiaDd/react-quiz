import React from "react";



const Start = ({ onQuizStart, onQuizStart2}) => {

 

    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1>練習が始めましょう</h1>
                    <p>頑張りましょう！</p>
                    <button id="write" className="button is-info is-medium" onClick={onQuizStart}>Writing Quiz</button><br></br>
                    <br></br><button id="select" className="button is-info is-medium" onClick={onQuizStart2}>Multiple Choice</button>
                </div>
            </div>
        </div>
    );
}

export default Start;