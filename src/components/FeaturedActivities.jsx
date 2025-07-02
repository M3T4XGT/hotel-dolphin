import React from "react";
import "./FeaturedActivities.css";

const activities = [
  {
    title: "Hiking",
    text: "From Canyon Rim to the Colorado National Monument, there are many hiking trails to explore around Grand Junction. Channel your pioneer spirit and see the land in an authentic way.",
    img: "https://symphony.cdn.tambourine.com/hotel-maverick/media/01maverick-homepage-featured-activities-hiking-5f33147d72ee4.jpg",
    highlight: false,
  },
  {
    title: "Whitewater Rafting",
    text: "Achieve the ultimate adrenaline rush with a trip down the Colorado River rapids. Located south of Downtown Grand Junction, Westwater Canyon features impressive scenery and wildlife along the way.",
    img: "https://symphony.cdn.tambourine.com/hotel-maverick/media/maverick-homepage-featured-activities-whitewater-rafting-5f49132cacddc.jpg",
    highlight: true,
  },
  {
    title: "Skiing",
    text: "The region’s mountains create the ultimate destination for skiing and snowboarding. Powderhorn Mountain - the world’s largest flattop mountain - features over 40 slopes for all.",
    img: "https://symphony.cdn.tambourine.com/hotel-maverick/media/01maverick-homepage-featured-activities-skying-5f3314c39b301.jpg",
    highlight: false,
  },
];

export default function FeaturedActivities() {
  return (
    <section className="three-highlights">
      <h2 className="three-highlights__title">Featured Activities</h2>
      
      <div className="highlight-cards">
  {activities.map((item, idx) => (
    <div
      key={idx}
      className="highlight-card"
      style={{ backgroundImage: `url(${item.img})` }}
    >
      <div className="highlight-card__overlay">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </div>
  ))}
</div>

      <div className="three-highlights__button">
        <a href="/explore" className="btn2">Read More</a>
      </div>
    </section>
  );
}
