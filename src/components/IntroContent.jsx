// src/components/IntroContent.jsx
import React from 'react';
import './IntroContent.css';

export default function IntroContent() {
  return (
    <section className="intro-content-home" id="home">
      <div className="intro-wrapper">
        {/* Left side video */}
        <figure className="intro-video">
          <video autoPlay muted loop playsInline>
            <source
              src="https://symphony.cdn.tambourine.com/hotel-maverick/media/mav-homepage-intro-6349716a0d116.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </figure>

        {/* Right side content */}
        <div className="intro-text">
          <h1>
            <span className="small-title">The Gateway to</span>
            Grand Junction
          </h1>
          <p>
            Located on the breathtaking campus of Colorado Mesa University, Hotel Maverick is a scenic destination that fosters the spirit of curiosity. Built against Grand Junction’s sprawling red rock canyons, this unique Colorado locale immerses guests in experiences that feed their wanderlust, offering an enriching stay just minutes away from all things CMU.
          </p>
          <div className="intro-badge">
            <a href="https://wba.m-rr.com/home" target="_blank" rel="noreferrer">
              <img
                src="https://symphony.cdn.tambourine.com/hotel-maverick/media/maverick-introbadge-1-5f6d117e44b28.png"
                alt="Maverick Badge"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
