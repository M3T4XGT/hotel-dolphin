// src/components/OurStory.jsx
import React from "react";
import "./OurStory.css";

export default function OurStory() {
  return (
    <section className="quad-simple-bg animate-fade top fade-in">
      <div className="quad-simple-bg__imgbackground">
        <img
          src="https://symphony.cdn.tambourine.com/hotel-maverick/media/01maverick-homepage-our-story-background-image-5f32d2b21dfe4-optimized.jpg"
          alt="arm chair in front of bookshelf"
        />
      </div>

      <div className="quad-simple-bg__after"></div>

      <div className="container flex-layout justify-center align-items-center">
        <figure className="quad-simple-bg__image animate-fade left fade-in">
          <img
            src="https://symphony.cdn.tambourine.com/hotel-maverick/media/mav-homepage-ourstory-634971b29e2c2.jpg"
            alt="mav homepage ourstory"
          />
        </figure>

        <div className="quad-simple-bg__content animate-fade right fade-in">
          <h2>
            <span className="small-title">our story</span>
            Built on Maverick Pride
          </h2>
          <p>
            As a proud part of the Colorado Mesa University community in every way,
            Hotel Maverick views itself as an extension of the classroom. Discover
            the true hands-on hospitality experiences for CMU students, and an emphasis
            on genuine connections with the university faculty members.
          </p>
          <a
            href="https://www.thehotelmaverick.com/our-story"
            aria-label="read more about our hotel, Built on Maverick Pride"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
