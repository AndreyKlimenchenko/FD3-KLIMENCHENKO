import "./Header.css";
import { useState } from "react";

function RegistrationForm({ handleClose }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const isButtonDisabled = errors.name || errors.email || errors.password || !values.name || !values.email || !values.password;

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

  const handleValidateName = (value) => {
    if (value.length < 2) {
      setErrors((prevState) => ({
        ...prevState,
        name: "Name is not valid!",
      }));
    } else {
      setErrors((prevState) => ({ ...prevState, name: "" }));
    }
  };

  const handleChange = (event) => {
    if (event.target.name === "email") {
      handleValidateEmail(event.target.value);
    }
    if (event.target.name === "password") {
      handleValidatePassword(event.target.value);
    }
    if (event.target.name === "name") {
      handleValidateName(event.target.value);
    }
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUsersData = localStorage.getItem("users");
    const users = savedUsersData ? JSON.parse(savedUsersData) : [];
    const newUsers = [...users, values];
    localStorage.setItem("users", JSON.stringify(newUsers));
    setValues({
      name: "",
      password: "",
      email: "",
    });
    handleClose();
  };

  return (
    <form className="form">
      <div className="formRow">
        <span>Name</span>
        <input
          name="name"
          value={values.name}
          onChange={(e) => handleChange(e)}
          className={errors.name ? "inputForm errorInputForm" : "inputForm"}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
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
      <button
        onClick={handleSubmit}
        type="button"
        disabled={isButtonDisabled}
        className="submitBtn"
      >
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
