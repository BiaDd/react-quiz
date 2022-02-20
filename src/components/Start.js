import React from "react";



const Start = ({ onQuizStart }) => {

    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1>練習が始めましょう</h1>
                    <p>頑張りましょう！</p>
                    <button id="write" className="button is-info is-medium" onClick={onQuizStart}>Writing Quiz</button><br></br>
                    <button id="select" className="button is-info is-medium" onClick={onQuizStart}>Multiple Choice</button>
                    <br></br><button id="select" className="button is-info is-medium" onClick={onQuizStart}>Multiple Choice</button>

                </div>
            </div>
        </div>
    );
}

export default Start;