import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const baseURL = "https://fierce-headland-96292.herokuapp.com/users/"

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = React.useState(null);
  const errors = {
    uname: "invalid username or password",
    pass: "invalid password"
  };



  const bcrypt = require("bcryptjs")

  const password = "mypass123"
  const saltRounds = 10

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

  function getUser(user, pass) {
    axios
      .get(baseURL + "get", {
        username: user,
        password: pass
      })
      .then((response) => {
        setData(response.data);
      });
  }


  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    getUser(uname.value, pass.value)
    // Find user login info
    //const result = checkPassword(uname.value, pass.value)
    if(data) {
      setIsSubmitted(true);
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  }; 

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value = "Login" />
          <input type="submit" value = "Create Account" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;