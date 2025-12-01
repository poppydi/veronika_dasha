import React from 'react';
import styles from './FeaturedTreats.module.css';


const treats = [
  {
    id: 1,
    name: "Puff Pastry",
    price: "$8",
    image: "/img/Rectangle 156.webp" ,
    alt: "Puff pastry with nuts and cream"
  },
  {
    id: 2,
    name: "Doughnuts",
    price: "$8",
    image: "/img/Rectangle 153.webp",
    alt: "Chocolate doughnuts on a plate"
  },
  {
    id: 3,
    name: "Brownies",
    price: "$8",
    image: "/img/Rectangle 154.webp",
    alt: "Chocolate brownies with raspberries"
  },
];

const FeaturedTreats = () => {
  return (
    <section className={styles.featuredTreats}>
      <h2 className={styles.title}>Featured Treats</h2>
      <div className={styles.treatsGrid}>
        {treats.map((treat) => (
          <div key={treat.id} className={styles.treatCard}>
            <div className={styles.imageWrapper}>
              <img
                src={treat.image}
                alt={treat.alt}
                className={styles.treatImage}
                loading="lazy" 
              />
            </div>
            <div className={styles.info}>
              <span className={styles.name}>{treat.name}</span>
              <span className={styles.price}>{treat.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTreats;