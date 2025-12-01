
import React from 'react';
import TopProducts from '../Components/TopProducts/TopProducts.jsx';
import PromoBanner from '../Components/PromoBanner/PromoBanner.jsx';
import ExploreMore from '../Components/ExploreMore/ExploreMore.jsx';
import FeaturedTreats from '../Components/FeaturedTreats/FeaturedTreats.jsx';
import AboutUs from '../Components/AboutUs/AboutUs.jsx';

function HomePage() {
  return (
    <div>
           <TopProducts />
      <PromoBanner />
      <ExploreMore />
      <AboutUs />
      <FeaturedTreats />
     
    </div>
  );
}

export default HomePage;