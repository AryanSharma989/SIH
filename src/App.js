import React from "react";
import "./App.css";
import web from "./travel-concept-with-baggage.jpg";
const App = () => {
  return (
    <>
      <div class="container">
        <header>
          <div class="nav-links">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <h1 class="logo">JourneyGenius</h1>
        </header>

        <div className="main">
          <h1 className="tagline">Welcome to JourneyGenius</h1>
          <p className="below_tagline">
            We're on a mission to transform your travel experience. Say goodbye
            to the hassle of finding guides and hello to memorable journeys.
          </p>
          <div className="btns">
            <button className="gpt_btn" to="/prompt">
              EXPLORE
            </button>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="img-ai">
          <img src={web} alt="adventure" className="imga" />
        </div>

        <div className="text-ai">
          <h1 className="about-us">About Us</h1>
          <p className="para">
            At Journey Genius, we're passionate about revolutionizing your
            travel experience. Our Android and web-based application employs AI
            and ML to optimize your journeys. Our approach focuses on journey
            optimization, enhancing user experiences, AI and ML-based solutions,
            and cost and time effectiveness. Our team of travel enthusiasts and
            tech experts combines human insight with cutting-edge technology to
            provide you with the expertise of a guide at your fingertips. Join
            us on this journey of exploration, discovery, and transformation,
            making every trip remarkable, one guided step at a time. Thank you
            for choosing Journey Genius as your travel companion.
          </p>
        </div>
      </div>

      <div id="contact-us">
        <div class="cen">
          <div class="us">
            <h1 class="send">SEND US MESSAGE</h1>
          </div>
          <form
            action="https://formsubmit.co/hanish.tharwani2021@vitbhopal.ac.in"
            method="POST"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                id="name"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email "
                id="email"
              />
            </div>
            <div>
              <textarea
                name="Message"
                id="message"
                rows="6"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <button class="leave">SEND</button>
          </form>
        </div>
      </div>
      <div id="footer">
        <div class="foot">JourneyGenius.</div>
        <p class="copy">Copyright &copy; 2023. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default App;
