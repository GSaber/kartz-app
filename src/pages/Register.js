import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pwd = e.target.pwd.value;
    const confirmPwd = e.target.confirmPwd.value;
    if (pwd === confirmPwd) {
      createUserWithEmailAndPassword(auth, email, pwd)
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          // ...
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode);
          console.log(errorMessage);
        });
    } else {
      setErrorMessage("Password do not match");
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            autoComplete="current-email"
            placeholder="Insert your email"
          />
          <input
            type="password"
            id="confirmPwd"
            autoComplete="current-password"
            placeholder="Insert your password"
          />
          <input
            type="password"
            id="pwd"
            autoComplete="current-password"
            placeholder="Confirm your password"
          />
          <button>Login</button>
          {errorMessage && <span className="error">{errorMessage}</span>}
        </form>
        <p>
          You dont have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
