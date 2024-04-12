import "./Header.css";
import { useEffect, useState } from "react";

function LoginForm({ handleClose, open }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [submitError, setSubmitError] = useState("");

  const isButtonDisabled = errors.email || !values.email || !values.password;

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

  const handleChange = (event) => {
    if (event.target.name === "email") {
      handleValidateEmail(event.target.value);
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

  useEffect(() => {
    if (!open) {
      setValues({
        password: "",
        email: "",
      });
      setErrors({
        password: "",
        email: "",
      });
    }
  }, [open]);

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
        {errors.email && <span className="erorrText">{errors.email}</span>}
      </div>
      <div className="formRow">
        <span>Password</span>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={(e) => handleChange(e)}
          className="inputForm"
        />
        <span className="helperText">
          Minimum eight characters, at least one letter and one number
        </span>
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
