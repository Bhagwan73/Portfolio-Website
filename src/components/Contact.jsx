import { useState } from "react";
import EarthCanvas from "./canvas/Earth";
import emailjs from '@emailjs/browser'

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!form.email || !form.message || !form.name) {
      setLoading(false);
      return (alert("please fill out all field"))
    }
    const TEMPLATE = { 
      from_name: form.name, 
      to_name: process.env.REACT_APP_MY_NAME,
      from_email: form.email,
      to_email: process.env.REACT_APP_GMAIL_CONTACT_PAGE,
      message: form.message,
    }
    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      TEMPLATE,
      process.env.REACT_APP_PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");
        setForm({ name: "", email: "", message: "" });
      },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact_section">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <p className="section-subtext">Get in touch</p>
          <h3 className="section-headtext">Contact.</h3>

          <label className="form-label">
            <span className="label-text">Your Name</span>
            <input type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="form-input"
            />
          </label>

          <label className="form-label">
            <span className="label-text">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="form-input"
            />
          </label>

          <label className="form-label">
            <span className="label-text">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="form-input"
            />
          </label>
          <button type="submit" className="form-button">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      <div 
       className="flex-1 auto-height medium-height fixed-height">
        <EarthCanvas />
      </div>
    </section>
  );
};

export default ContactForm;
