import "./Header.css";
import { useEffect, useState } from "react";

function ContactUs({ handleClose, open }) {
  const [values, setValues] = useState({
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const isButtonDisabled = errors.email || !values.email || !values.text;

  const handleValidateEmail = (value) => {
    const isValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value);
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
    handleClose();
  };

  useEffect(() => {
    if (!open) {
      setValues({
        message: "",
        email: "",
      });
      setErrors({
        email: "",
      });
    }
  }, [open]);

  return (
    <form className="form" style={{ width: 400 }}>
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
        <span>Message</span>
        <textarea
          type="password"
          name="password"
          value={values.password}
          onChange={(e) => handleChange(e)}
          className="inputForm"
          rows={4}
        />
      </div>
      <button
        onClick={handleSubmit}
        type="button"
        disabled={isButtonDisabled}
        className="submitBtn"
      >
        Send
      </button>
    </form>
  );
}

export default ContactUs;
