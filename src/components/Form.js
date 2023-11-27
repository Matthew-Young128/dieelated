import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./FormStyles.css";

const Form = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.user_name) tempErrors.user_name = "Name is required";
    if (!formData.user_email) {
      tempErrors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      tempErrors.user_email = "Email is not valid";
    }
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs
      .sendForm(
        "service_lsn3yfn",
        "template_olhe7u8",
        form.current,
        "yvgxg-ndkzS0R3YN2"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Message sent successfully!");
          setMessageType("success");
          setTimeout(() => {
            form.current.reset();
            setMessage("");
          }, 2000);
        },
        (error) => {
          console.log(error.text);
          setMessage("Failed to send message. Please try again.");
          setMessageType("error");
        }
      );
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name" onChange={handleInputChange} />
        {errors.user_name && <p className="error">{errors.user_name}</p>}

        <label>Your Email</label>
        <input type="email" name="user_email" onChange={handleInputChange} />
        {errors.user_email && <p className="error">{errors.user_email}</p>}

        <label>Subject</label>
        <input type="text" name="subject" onChange={handleInputChange} />

        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          name="message"
          onChange={handleInputChange}
        />
        {errors.message && <p className="error">{errors.message}</p>}

        {message && (
          <div style={{ color: messageType === "success" ? "#fe9000" : "red" }}>
            {message}
          </div>
        )}

        <button className="contact-btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
