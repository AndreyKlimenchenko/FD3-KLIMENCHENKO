import "./Header.css";
import { useState } from "react";

function LoginForm({ handleClose }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [submitError, setSubmitError] = useState("");

  const isButtonDisabled =
    errors.email || errors.password || !values.email || !values.password;

  const handleValidateEmail = (value) => {
    const isValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value);
    if (!isValid) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Email is not valid!",
      }));
    } else {
      setErrors((prevState) => ({ ...prevState, email: "" }));
    }
  };

  const handleValidatePassword = (value) => {
    const isValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value);
    if (!isValid) {
      setErrors((prevState) => ({
        ...prevState,
        password: "Password is not valid!",
      }));
    } else {
      setErrors((prevState) => ({ ...prevState, password: "" }));
    }
  };

  const handleChange = (event) => {
    if (event.target.name === "email") {
      handleValidateEmail(event.target.value);
    }
    if (event.target.name === "password") {
      handleValidatePassword(event.target.value);
    }
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitError("");
    const savedUsersData = localStorage.getItem("users");
    const users = savedUsersData ? JSON.parse(savedUsersData) : [];
    const loggedInUser = users.find((user) => user.email === values.email);
    if (loggedInUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      setValues({
        password: "",
        email: "",
      });
      handleClose();
    } else {
      setSubmitError("Email or password is not valid!");
    }
  };

  return (
    <form className="form">
      <div className="formRow">
        <span>Email address</span>
        <input
          name="email"
          value={values.email}
          onChange={(e) => handleChange(e)}
          className={errors.email ? "inputForm errorInputForm" : "inputForm"}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div className="formRow">
        <span>Password</span>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={(e) => handleChange(e)}
          className={errors.password ? "inputForm errorInputForm" : "inputForm"}
        />
        <span>
          Minimum eight characters, at least one letter and one number
        </span>
        {errors.password && <span>{errors.password}</span>}
      </div>
      {submitError && <span>{submitError}</span>}
      <button
        onClick={handleSubmit}
        type="button"
        disabled={isButtonDisabled}
        className="submitBtn"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
