import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.content}>
        <h2 className={styles.title}>About us</h2>
        <p className={styles.text}>
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis.
        </p>
        <a href="#read-more" className={styles.btnPrimary}>
          Read More
        </a>
      </div>
    </section>
  );
};

export default AboutUs;