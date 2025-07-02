import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import './TopReasons.css';

const activities = [
  {
    title: "Hiking",
    text: "From Canyon Rim to the Colorado National Monument...",
    img: "https://symphony.cdn.tambourine.com/hotel-maverick/media/01maverick-homepage-featured-activities-hiking-5f33147d72ee4.jpg",
    highlight: false,
    link: "/explore/hiking",
    button: "Explore Hiking",
  },
  {
    title: "Whitewater Rafting",
    text: "Achieve the ultimate adrenaline rush with a trip down...",
    img: "https://symphony.cdn.tambourine.com/hotel-maverick/media/maverick-homepage-featured-activities-whitewater-rafting-5f49132cacddc.jpg",
    highlight: false,
    link: "/explore/rafting",
    button: "Explore Rafting",
  },
  {
    title: "Skiing",
    text: "The region’s mountains create the ultimate destination...",
    img: "https://symphony.cdn.tambourine.com/hotel-maverick/media/01maverick-homepage-featured-activities-skying-5f3314c39b301.jpg",
    highlight: false,
    link: "/explore/skiing",
    button: "Explore Skiing",
  },
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
    autoplaySpeed: 4000,
    slidesToShow: 1,
    arrows: false,
    fade: true,
  };

  return (
    <section className="top-reasons-section">
      <div className="top-reasons-wrapper">
        <div className="top-reasons-left">
          <Slider {...settingsText} ref={textSlider}>
            {activities.map((item, index) => (
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
            {activities.map((item, index) => (
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
