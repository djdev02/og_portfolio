import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_56jnvjv",
      "template_iy74h4m",
      form.current,
      "QyvlaKeusfNwUk1BB"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div
          className="contact__options"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>debashishj18@gmail.com</h5>
            <a href="mailTo:debashishj18@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <AiOutlineInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>Debashish Jena</h5>
            <a href="https://ig.me/m/_s_krishna_reddy_07_" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+919040413920</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+919040413920"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTION */}

        <form
          ref={form}
          onSubmit={sendEmail}
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
