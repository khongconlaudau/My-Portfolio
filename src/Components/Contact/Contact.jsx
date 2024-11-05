import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm("service_yvzs5va", "template_63uf2o3", form.current, {
          publicKey: "BXA1S-ozi5NE6H12_",
        })
        e.target.reset()
    };
  return (
    <section className="contact section" id="contact">
      <div className="about-intro">
        <h2 className="about-me">Contact Me</h2>
        <span className="section-subtitle">Keep In Touch</span>
      </div>

      <div className="contact-container container grid">
        <div className="contact-content">
          <h3 className="contact-title">Talk to me</h3>
          <div className="contact-infor">
            <div className="contact-card">
              <MdOutlineMail className="contact-card-icon email" />

              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">vanducmanh26@gmail.com</span>

              <a
                href="mailto:vanducmanh26@gmail.com"
                className="contact-button"
              >
                Write me{" "}
                <IoIosArrowRoundForward className="contact-button-icon" />
              </a>
            </div>
            <div className="contact-card">
              <FaWhatsapp className="contact-card-icon whatsapp" />

              <h3 className="contact-card-title">Whatsapp</h3>
              <span className="contact-card-data">613-302-XXXX</span>

              <a
                href="https://api.whatsapp.com/send?phone=6133028111&text=Hello, more information!"
                className="contact-button"
              >
                Write me{" "}
                <IoIosArrowRoundForward className="contact-button-icon" />
              </a>
            </div>
            <div className="contact-card">
              <FaLinkedin className="contact-card-icon linkedin" />

              <h3 className="contact-card-title">LinkedIn</h3>
              <span className="contact-card-data">Mason Van</span>

              <a
                href="https://www.linkedin.com/in/mason-van-15b621303/"
                className="contact-button"
              >
                Write me{" "}
                <IoIosArrowRoundForward className="contact-button-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-content">
          <h3 className="contact-title">Write me your question</h3>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="contact-form-div">
              <label className="contact-form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact-form-input"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact-form-div">
              <label className="contact-form-tag">Mail </label>
              <input
                type="email"
                name="email"
                className="contact-form-input"
                placeholder="Insert your email"
              />
            </div>
            <div className="contact-form-div contact-form-area">
              <label className="contact-form-tag">Question</label>
              <textarea
                name="question"
                cols="30"
                rows="10"
                className="contact-form-input"
                placeholder="Write your content"
              ></textarea>
            </div>

            <button className="button button-flex">
              Send Message <FiSend className="button-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
