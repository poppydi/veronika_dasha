import React from 'react';
import styles from './PromoBanner.module.css';

const PromoBanner = () => {
  return (
    <section className={styles.promoBanner}>
      <div className={styles.content}>
        <h2 className={styles.title}>20% Off Your First Order</h2>
        <p className={styles.subtitle}>
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibenjgg.
        </p>
        <a href="#learn-more" className={styles.btnPrimary}>
          Learn More
        </a>
      </div>
    </section>
  );
};

export default PromoBanner;