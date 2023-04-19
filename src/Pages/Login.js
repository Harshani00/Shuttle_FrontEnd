import React, { useState } from "react";
import "./Login.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // added state variable

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (userName.trim() === "") {
      errors.userName = "User name is required";
      isValid = false;
    }

    if (password.trim() === "") {
      errors.password = "Password is required";
      isValid = false;
    } 

    setErrorMessages(errors);
    if (isValid) {
      setIsSubmitted(true);
    }
  };

  const renderErrorMessage = (name) =>
    name in errorMessages && <div className="error">{errorMessages[name]}</div>;

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter User Name"
            className="name"
            name="uname"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          {renderErrorMessage("userName")}
        </div>
        <div className="input-container">
          {showPassword ? (
            <VisibilityIcon
              className="VisibilityIcon"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <VisibilityOffIcon
              className="VisibilityOffIcon"
              onClick={togglePasswordVisibility}
            />
          )}

          <input
            type={showPassword ? "text" : "password"} // use state variable to control input type
            placeholder="Password"
            className="name"
            name="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {renderErrorMessage("password")}
        </div>
        <div className="button-container">
          <button type="Submit">Login</button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="img">
          <div className="img-container">
            <img src="./Images/logo.png" alt="" className="profile" />
          </div>
        </div>
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;



