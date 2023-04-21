import React, { useState } from "react";
import "./Login.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

function App() {
  const [errorMessages, ] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    // Your logic for handling form submission goes here
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input type="text" placeholder="Enter User Name" name="uname" required />
          {renderErrorMessage("uname")}
        </div>

        <div className="input-container">
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder={showPassword ? "Password" : "Password *"}
              name="pass"
              required
            />
            <div style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)" }}>
              {showPassword ? (
                <VisibilityIcon
                  className="VisibilityIcon"
                  onClick={handleShowPassword}
                />
              ) : (
                <VisibilityOffIcon
                  className="VisibilityOffIcon"
                  onClick={handleShowPassword}
                />
              )}
            </div>
          </div>
          {renderErrorMessage("pass")}
        </div>

        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Log In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
      <img src="./Images/logo.png" alt="logo" className="img" />
    </div>
  );
}

export default App;
