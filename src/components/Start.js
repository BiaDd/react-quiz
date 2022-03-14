import React from "react";



const Start = ({ onQuizStart, onQuizStart2}) => {

 
    return (
        <div className="card">
        <div className="card-content">
            <div className="content">
                <h1>練習が始めましょう</h1>
                <p>頑張りましょう！</p>
                <div class="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" class="button is-info is-medium dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Lesson 7
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <button id="tango7-1" className="button is-info" onClick={onQuizStart}>Lesson 7-1 Hirigana</button>
                    <button id="def7-1" className="button is-info" onClick={onQuizStart}>Lesson 7-1 Definitions</button>
                    </ul>
                </div>

                <div class="btn-group" role="group">
                    <button id="btnGroupDrop2" type="button" class="button is-info is-medium dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Lesson 8
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="btnGroupDrop2">
                        <button id="tango8-1" className="button is-info" onClick={onQuizStart}>Lesson 8-1 Hirigana</button>
                        <button id="def8-1" className="button is-info" onClick={onQuizStart}>Lesson 8-1 Definitions</button>
                        <button id="tango8-2" className="button is-info" onClick={onQuizStart}>Lesson 8-2 Hirigana</button>
                        <button id="def8-2" className="button is-info" onClick={onQuizStart}>Lesson 8-2 Definitions</button>
                    </ul>
                </div>
                
                <div class="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" class="button is-info is-medium dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Lesson 9
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <button id="tango9-1" className="button is-info" onClick={onQuizStart}>Lesson 9-1 Hirigana</button>
                    <button id="def9-1" className="button is-info" onClick={onQuizStart}>Lesson 9-1 Definitions</button>
                    <button id="tango9-2" className="button is-info" onClick={onQuizStart}>Lesson 9-2 Hirigana</button>
                    <button id="def9-2" className="button is-info" onClick={onQuizStart}>Lesson 9-2 Definitions</button>
                    </ul>
                </div>

                <br></br>
                <br></br><button id="select" className="button is-info is-medium" onClick={onQuizStart2}>Multiple Choice</button>
                <br></br>
                <br></br>
            </div>
        </div>
    </div>
    );
}

export default Start;