import React from "react";
import "./LocationMap.css";

export default function Location() {
  return (
    <section className="location">
      <div className="wrapper flex-layout justify-center align-items-center">
        <div className="location__content animate-fade left fade-in">
          <div className="text">
            <h2>
              <span className="small-title">location</span>
              Located on <br />
              the Scenic CMU Campus
            </h2>
            <p>
              Hotel Maverick was built on CMU’s campus in the heart of Grand Junction.
              Western charm meets the serenity of nature with desert canyons, pristine valleys,
              and tranquil rivers nearby.
            </p>
            <a
              href="https://www.thehotelmaverick.com/explore"
              className="btn"
              aria-label="Explore Grand Junction"
            >
              Explore Grand Junction
            </a>
          </div>
        </div>
        <div className="location__image animate-fade right fade-in">
          <img
            src="https://symphony.cdn.tambourine.com/hotel-maverick/media/maverick-mapimage-5f762a547f60b-optimized.jpg"
            alt="maverick mapimage"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
