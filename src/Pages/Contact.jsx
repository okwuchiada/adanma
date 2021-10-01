import React from "react";
import { Footer } from "../Components";
import "../Styles/contact.css";

export const Contact = () => {
  return (
    <>
      <div className="contacts__container">
        <div className="contact_message">
          <h4>I look forward to building amazing projects together.</h4>
        </div>

        <div className="contacts__info">
          <div className="contact">
            <a
              href="mailto:adanmao.okwuchi@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Mail Me: <i class="fas fa-envelope"> </i>
            </a>
          </div>
          <div className="contact">
            <a
              href="https://twitter.com/_adahh_"
              target="_blank"
              rel="noreferrer"
            >
              Follow Me: <i class="fab fa-twitter"> </i>
            </a>
          </div>

          <div className="contact">
            <a
              href="https://www.linkedin.com/in/adanma-okwuchi-29162b197/"
              target="_blank"
              rel="noreferrer"
            >
              Connect With Me: <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
