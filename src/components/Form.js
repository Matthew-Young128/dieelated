import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./FormStyles.css";

const Form = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

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
        <input type="text" name="user_name"></input>
        <label>Your Email</label>
        <input type="email" name="user_email"></input>
        <label>Subject</label>
        <input type="text" name="subject"></input>
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          name="message"
        />

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
