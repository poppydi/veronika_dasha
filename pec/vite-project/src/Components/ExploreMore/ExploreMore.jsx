import React, { useState } from 'react';
import styles from './ExploreMore.module.css';


const images = [
  { id: 1, src: "/img/Rectangle 20.webp", alt: "Muffin with blueberries" },
  { id: 2, src: "/img/Rectangle 21.webp", alt: "Cheesecake with berries" },
  { id: 3, src: "/img/Rectangle 22.webp", alt: "Slice of berry tart" },
  { id: 4, src: "/img/Rectangle 25.webp", alt: "Pound cake with blueberries" },
  { id: 5, src: "/img/Rectangle 23.webp", alt: "Chocolate cake slice" },
  { id: 6, src: "/img/Rectangle 24.webp", alt: "Cupcake with cream and berries" },
];

const tabs = [];

const ExploreMore = () => {
  const [activeTab, setActiveTab] = useState('Cake');

  return (
    <section className={styles.exploreMore}>
      <h2 className={styles.title}>Explore More</h2>

    
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

   
      <div className={styles.gallery}>
        {images.map((item) => (
          <div key={item.id} className={styles.item}>
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy" 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreMore;