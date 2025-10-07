import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import './TopReasons.css';

const reasons = [
  {
    title: "Breathtaking Landscapes",
    text: "While all the best features of CMU’s campus are a short walk from the hotel, guests can also enjoy close proximity to mountains, rivers, and hiking trails. Plus, the local shops, galleries, and music venues of Downtown Grand Junction are just over a mile away.",
    img: "https://symphony.cdn.tambourine.com/hotel-maverick/media/mav-toprreasons-01-6346e1b1e3ec6.jpg",
    link: "https://www.thehotelmaverick.com/explore",
    button: "Explore Colorado"
  },
  {
    title: "Rooftop Drinks & Dinner",
    text: "Whether you’re looking to settle in and study with a freshly-brewed cappuccino at Betty’s Coffee, or you’d like to savor regional fare and craft cocktails with a view at Devil’s Kitchen, Hotel Maverick features elevated dining with flavors inspired by our rustic surroundings.",
    img: "https://symphony.cdn.tambourine.com/hotel-maverick/media/maverick-homepage-trs-dinning-2-64ee4f139d7ac.jpg",
    link: "https://www.thehotelmaverick.com/drinks-dining",
    button: "Read More"
  },
  {
    title: "Amenities for the Explorer",
    text: "At Hotel Maverick, guests are able to enjoy full access to CMU’s recreation center and BMX track. With bike rental and use of the fitness room included, visitors can remain active during their stay and take advantage of all that the campus has to offer.",
    img: "https://symphony.cdn.tambourine.com/hotel-maverick/media/maverick-topreasonamenities03-5f47bd1305c0b-optimized.jpg",
    link: "https://www.thehotelmaverick.com/our-story",
    button: "Read More"
  },
  {
    title: "Sustainability",
    text: "At Hotel Maverick – we’re deeply committed to uplifting the planet, people, and places that sustain our operations. We strive to contribute to sustainable development in the short and long term, while simultaneously providing a guest experience that leaves a lasting impression.",
    img: "https://symphony.cdn.tambourine.com/hotel-maverick/media/maverick-homepage-trs-sustainability-64e4b1a8d36bf.jpg",
    link: "https://www.thehotelmaverick.com/sustainability",
    button: "Read More"
  }
];

export default function TopReasons() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const textSlider = useRef();
  const imageSlider = useRef();

  useEffect(() => {
    setNav1(textSlider.current);
    setNav2(imageSlider.current);
  }, []);

  const settingsText = {
    asNavFor: nav2,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    arrows: false,
    fade: true,
  };

  const settingsImage = {
    asNavFor: nav1,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    arrows: false,
    fade: true,
  };

  return (
    <section className="top-reasons-section">
      <div className="top-reasons-wrapper">
        <div className="top-reasons-left">
          <Slider {...settingsText} ref={textSlider}>
            {reasons.map((item, index) => (
              <div key={index} className="reason-slide">
                <h2><span className="small-title">Top Reasons to Stay</span> {item.title}</h2>
                <p>{item.text}</p>
                <a href={item.link} className="btn2" target="_blank" rel="noreferrer">{item.button}</a>
              </div>
            ))}
          </Slider>
        </div>

        <div className="top-reasons-right">
          <Slider {...settingsImage} ref={imageSlider}>
            {reasons.map((item, index) => (
              <div key={index} className="image-slide">
                <figure>
                  <img src={item.img} alt={item.title} />
                  <span className="number">{index + 1}</span>
                </figure>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
