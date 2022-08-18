import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { setName, setPass, setLogin, setScores, useGlobalState } from './State';



function Login() {
  // React States
  const [baseURL] = useGlobalState('baseURL');
  const [login] = useGlobalState('login');
  const errors = {
    uname: "invalid username or password",
    pass: "invalid password"
  };



  const bcrypt = require("bcryptjs")

  const password = "mypass123"
  const saltRounds = 10
  const [name] = useGlobalState('username');
  const [passw] = useGlobalState('password');
  const [scores] = useGlobalState('scores');
  
  bcrypt.genSalt(saltRounds, function (saltError, salt) {
    if (saltError) {
      throw saltError
    } else {
      bcrypt.hash(password, salt, function(hashError, hash) {
        if (hashError) {
          throw hashError
        } else {
          console.log(hash)
          //$2a$10$FEBywZh8u9M0Cec/0mWep.1kXrwKeiWDba6tdKvDfEBjyePJnDT7K
        }
      })
    }
  });

  function getUser() {
    axios
      .post(baseURL + "get", {
        username: name,
        password: passw,
      })
      .then((response) => {
        setScores(response.data.score);
        setLogin(true)
      });
  }

  function postUser() {
    axios
      .post(baseURL + "post", {
        username: name,
        password: passw,
        score: scores
      })
      .then((response) => {
        setLogin(true)
      });
  }


 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.nativeEvent?.submitter.name)
    if(event.nativeEvent?.submitter.name == "login"){
      getUser()
    } else {
      postUser()
    }
    console.log(name + " " + passw);
  }
  // JSX code for login form
  const renderForm = (
    <form onSubmit={handleSubmit}>
      <label>Username:
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      </label>
      <label>Password:
        <input 
          type="password"
          value={passw}
          onChange={(e) => setPass(e.target.value)}
        />
        </label>
        <input type="submit" name="login" value="Login" />
        <input type="submit" name="signup" value="Signup" />
    </form>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {login ? null : renderForm}
      </div>
    </div>
  );
}

export default Login;