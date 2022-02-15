import React from "react";

const Start = ({ onQuizStart }) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1>練習が始めましょう</h1>
                    <p>頑張りましょう！</p>
                    <button className="button is-info is-medium" onClick={onQuizStart}>始める</button>
                </div>
            </div>
        </div>
    );
}

export default Start;