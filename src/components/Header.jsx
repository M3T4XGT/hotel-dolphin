import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoSrc = scrolled
    ? 'https://www.thehotelmaverick.com/assets/svg/logo-maverick-scroll.svg'
    : 'https://www.thehotelmaverick.com/assets/svg/logo-maverick.svg';

  return (
    <header className="hero-section">
      <nav>
        <a href="/" className="logo">
  <img src={logoSrc} alt="Hotel Maverick logo" />
</a>
        <ul className="nav-links">
          <li><a href="#rooms">Rooms</a></li>
          <li><a href="#offers">Offers</a></li>
          <li><a href="#dining">Dining</a></li>
          <li><a href="#story">Our Story</a></li>
        </ul>
        <button className="book-btn">Book Now</button>
      </nav>

      <div className="hero-text">
        <h2>The Gateway to Grand Junction</h2>
        <p>Colorado’s scenic destination hotel fostering a spirit of curiosity.</p>
        <button className="explore-btn">Explore Grand Junction</button>
      </div>
    </header>
  );
}
