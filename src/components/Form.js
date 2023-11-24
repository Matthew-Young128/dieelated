import "./FormStyles.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

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
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name"></input>
        <label>Your Email</label>
        <input type="Email" name="user_email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          name="message"
        />
        <button className="contact-btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
