/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import location_icon from "../../assets/location_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { useState } from "react";

const Contact = () => {
  const [buttonText, setButtonText] = useState("Submit Now");
  const [nameInput, setNameInput] = useState("");
  const [mailInput, setMailInput] = useState("");
  const [msgInput, setMsgInput] = useState("");
  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!nameInput.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!mailInput.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(mailInput)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!msgInput.trim()) {
      newErrors.message = "Message is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setButtonText("Submitting...");
    const formData = {
      access_key: "94750ce7-5635-40c7-b389-b81097eaa77d",
      name: nameInput,
      email: mailInput,
      message: msgInput,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        setResponseMessage("Your message has been sent successfully!");
        setButtonText("Submitted");
        setNameInput("");
        setMailInput("");
        setMsgInput("");
        setErrors({});
      } else {
        setResponseMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again later.");
    } finally {
      setButtonText("Submit Now");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to ask
            me anything that you want to work on. You can contact me any time.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail Icon" />
              <a href="mailto:chinmayeemohanty412@gmail.com">chinmayeemohanty412@gmail.com</a>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call Icon" />
              <p>+91 7978340492</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" />
              <p>Bhubaneswar, Odisha</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Enter your name"
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            value={mailInput}
            onChange={(e) => setMailInput(e.target.value)}
            placeholder="Enter your email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <label htmlFor="message">Write Your Message Here</label>
          <textarea
            id="message"
            value={msgInput}
            onChange={(e) => setMsgInput(e.target.value)}
            placeholder="Enter your message"
          />
          {errors.message && <p className="error">{errors.message}</p>}
          <button type="submit" className="contact-submit">
            {buttonText}
          </button>
          {responseMessage && (
            <p className="response-message">{responseMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
