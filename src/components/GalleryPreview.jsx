import React from "react";
import "./GalleryPreview.css";

export default function GalleryPreview() {
  return (
    <section className="gallery-preview">
      <div className="gallery-preview__container">
        <div className="gallery-preview__intro">
          {/* <h2>take a look</h2> */}
          <a
            href="/"
            className="btn2"
            aria-label="view gallery of photos"
          >
            view gallery
          </a>
        </div>

        <div className="gallery-preview__grid">
          <div className="gallery-preview__img">
            <img
              src="https://symphony.cdn.tambourine.com/hotel-maverick/media/01maverick-homepage-gallery-01-5f3421c5d7034.jpg"
              alt="Gallery 1"
            />
          </div>

          <div className="gallery-preview__img">
            <img
              src="https://symphony.cdn.tambourine.com/hotel-maverick/media/maverick-homepage-gallery-centerimage-64e4b27f5f083.jpg"
              alt="Gallery 2"
            />
          </div>

          <div className="gallery-preview__img">
            <video playsInline autoPlay muted loop>
              <source
                type="video/mp4"
                src="https://symphony.cdn.tambourine.com/hotel-maverick/media/mav-homepage-gallery-634971fd6d70d.mp4"
              />
            </video>
          </div>

          <div className="gallery-preview__img">
            <img
              src="https://symphony.cdn.tambourine.com/hotel-maverick/media/maverick-gallery-20-5f357fd0cf8d6-5f5b9413a76f9.jpg"
              alt="Gallery 4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
