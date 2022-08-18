import React, {useEffect, useState} from "react";

import { formatTime } from "../utils";
import { setScores, useGlobalState } from './State';

const End = ({ results, data, onReset, onAnswersCheck, time }) => {

    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [scores] = useGlobalState('scores');
    const [quiz] = useGlobalState('quiz');
    var copy = {...scores};
    useEffect (() => {
        let correct = 0;
        results.forEach((result, index) => {
            if (result.a === data[index].answer) {
                correct++;
            }
        });
        setCorrectAnswers(correct);
        copy[quiz] = (correctAnswers/data.length) * 100
        setScores(copy)
        // eslint-disable-next-line
    }, []);

    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h3>Results</h3>
                    <p>{correctAnswers} of {data.length}</p>
                    <p><strong>{Math.floor((correctAnswers/data.length) * 100)}%</strong></p>
                    <p><strong>Your Time: </strong> {formatTime(time)}</p>

                    <button className="button is-info mr-2" onClick={onAnswersCheck}>Check Answers</button>
                    <button className="button is-success" onClick={onReset}>Try Again?</button>
                </div>
            </div>
        </div>
    );
}

export default End;