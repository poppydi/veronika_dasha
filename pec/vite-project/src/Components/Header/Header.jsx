import React from 'react';
import styles from './Header.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
   
      <div className={styles.nav}>
        <img
          src="/img/Modrino__2_-removebg-preview-1_1.webp" 
          alt="Keithston Cafe Logo"
          className={styles.logo}
          loading="lazy"
        />
        <a href="#home">Home</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact Us</a>
        <a href="#services">Services</a>
      </div>


      <div className={styles.content}>
        <div className={styles.tagline}>Delicious Cafe</div>
        <h1 className={styles.title}>
          Sweet Treats,<br />Perfect Eats
        </h1>
        <div className={styles.buttons}>
          <button className={styles.btnPrimary}>Shop Now</button>
          <button className={styles.btnSecondary}>Learn More</button>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.imageOverlay}></div>
      </div>
    </section>
  );
};

export default HeroSection;