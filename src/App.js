import React from "react";
import Header from "./components/Header";
import IntroContent from "./components/IntroContent";
import TopReasons from "./components/TopReasons";
import OurStory from "./components/OurStory";
import FeaturedActivities from "./components/FeaturedActivities";
import LocationMap from "./components/LocationMap";
import GalleryPreview from "./components/GalleryPreview";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <IntroContent />
      <TopReasons />
      <OurStory />
      <FeaturedActivities />
      <LocationMap />
      <GalleryPreview />
      <Footer />
    </>
  );
}

export default App;
