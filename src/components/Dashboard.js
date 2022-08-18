import React from 'react'; 
import { setName, setPass, setLogin, useGlobalState } from './State';
import axios from "axios";

function Dashboard() {
  const [scores] = useGlobalState('scores');
  const [baseURL] = useGlobalState('baseURL');
  const [name] = useGlobalState('username');
  const [passw] = useGlobalState('password');

  function updateScore() {
    axios
      .post(baseURL + "postscore", {
        username: name,
        password: passw,
        score: scores
      })
      .then((response) => {

      });
  }

  function Logout() {
    updateScore()
    setLogin(false)
    setName('')
    setPass('')
  }

  return ( 
    <div className="Component"> 
    <div className="textBox">Lesson 7-1 Hirigana: {scores["tango7-1"]}</div>
    <div className="textBox">Lesson 7-1 Definitions: {scores["def7-1"]}</div>
    <div className="textBox">Lesson 8-1 Hirigana: {scores["tango8-1"]}</div>
    <div className="textBox">Lesson 8-1 Definitions: {scores["def8-1"]}</div>
    <div className="textBox">Lesson 8-2 Hirigana: {scores["tango8-2"]}</div>
    <div className="textBox">Lesson 8-2 Definitions: {scores["def8-2"]}</div>
    <div className="textBox">Lesson 9-1 Hirigana: {scores["tango9-1"]}</div>
    <div className="textBox">Lesson 9-1 Definitions: {scores["def9-1"]}</div>
    <div className="textBox">Lesson 9-2 Hirigana: {scores["tango9-2"]}</div>
    <div className="textBox">Lesson 9-2 Definitions: {scores["def9-2"]}</div>
    <div className="textBox">Lesson 10-1 Hirigana: {scores["tango10-1"]}</div>
    <div className="textBox">Lesson 10-1 Definitions: {scores["def10-1"]}</div>
    <div className="textBox">Lesson 10-2 Hirigana: {scores["tango10-2"]}</div>
    <div className="textBox">Lesson 10-2 Definitions: {scores["def10-2"]}</div>
    <button onClick={Logout}>Logout</button>
  </div> 
  ); 

}; 

export default Dashboard;