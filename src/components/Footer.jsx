import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container flex-layout">
          {/* Left Navigation */}
          <div className="footer__top--content">
            <nav className="secondary-navigation">
              <ul className="secondary-navigation__list">
                <li className="secondary-navigation__item"><a href="/Press">Press</a></li>
                <li className="secondary-navigation__item"><a href="/policies">Policies & FAQ</a></li>
                <li className="secondary-navigation__item"><a href="/Join">Join Our Team</a></li>
                <li className="secondary-navigation__item"><a href="/Contact">Contact Us</a></li>
                <li className="secondary-navigation__item"><a href="/Sus">Sustainability</a></li>
              </ul>
            </nav>
          </div>

          {/* Newsletter Form */}
          <div className="footer__top--form">
            <h3>SIGN UP TO RECEIVE EXCLUSIVE OFFERS AND UPDATES</h3>
            <p>
              <strong>Hotel Maverick</strong>, its website, and its ownership and management, all
              based in the United States, collect and use this information as described in our{" "}
              <a href="/Privacy Policy">Privacy Policy</a>.
            </p>
            <div className="form-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Your Email" className="full-width" />
            <label>
              <input type="checkbox" /> I have read and agree to the{" "}
              <a href="/Privacy Policy">Privacy Policy</a>.
            </label>
            <label>
              <input type="checkbox" /> Yes, I would like to receive emails with exclusive specials
              and offers.
            </label>
            <button className="subscribe-btn">SUBSCRIBE</button>
          </div>

          {/* Contact Info + Social Icons */}
          <div className="footer__top--info">
            <div className="social-icons">
             <a
  href="https://www.facebook.com/hotelmaverick/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Facebook (opens in a new window)"
  className="facebook"
>
  <svg
    width="15"
    height="30"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 15 30"
    fill="white"
  >
    <path d="M.862 10.061h3.016V7.129c0-1.292.033-3.286.971-4.52C5.839 1.302 7.197.413 9.531.413c3.805 0 5.408.542 5.408.542l-.754 4.468s-1.258-.364-2.43-.364c-1.174 0-2.225.42-2.225 1.593v3.407h4.811l-.336 4.364H9.53v15.161H3.878V14.425H.862v-4.364z" />
  </svg>
</a>


              <a
                href="https://www.instagram.com/hotelmaverick/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Opens in a new window"
                className="instagram"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12 27-27 27s-27-12.1-27-27 12-27 27-27 27 12.1 27 27zM398.8 80c-8.3-20.8-24.4-37-45.2-45.2C329.4 24 302.4 24 224 24s-105.4 0-129.6 10.8C73.6 43 57.4 59.2 49.2 80 38.4 104.2 38.4 131.2 38.4 209.6s0 105.4 10.8 129.6c8.2 20.8 24.4 37 45.2 45.2 24.2 10.8 51.2 10.8 129.6 10.8s105.4 0 129.6-10.8c20.8-8.2 37-24.4 45.2-45.2 10.8-24.2 10.8-51.2 10.8-129.6s0-105.4-10.8-129.6z" />
                </svg>
              </a>
            </div>
            <address>
              840 Kennedy Ave<br />
              Grand Junction, CO 81501<br />
              Direct: <a href="tel:9708224888">970–822–4888</a><br />
              Toll Free: <a href="tel:8777628374">877–762–8374</a><br />
              <a href="mailto:hello@thehotelmaverick.com">hello@thehotelmaverick.com</a>
            </address>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="footer__bottom container">
          <ul>
            <li><a href="/Accessibility">Accessibility</a></li>
            <li><a href="/Sitemap">Sitemap</a></li>
            <li><a href="/Privacy Policy">Privacy Policy</a></li>
            <li><a href="/Consent Preferences">Consent Preferences</a></li>
          </ul>
          <p>©2025 Hotel Maverick. All Rights Reserved.</p>
        </div>
        <div className="footer__disclaimer">
  <p>
    This project was created solely for interview purposes by Sai Gowtham Talluri to demonstrate front-end development skills using React. The “Top Reasons to Stay” section was implemented with an auto-sliding feature instead of manual slider buttons to showcase interactive UI behavior.<br /><br />
    This is <strong>not a commercial clone</strong> of the Maverick Hotels website. It was built within limited time for educational demonstration only. I fully respect the original brand and assets, and I am strictly abiding by all usage guidelines.<br /><br />
    This site will <strong>not be published, uploaded to GitHub, or distributed in any form</strong>, and will be permanently deleted after the interview process.
  </p>
</div>

      </div>
      

    </footer>
  );
}
