import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}> 
        <div className={styles.topSection}>
          <div className={styles.logoSection}>
            <img
              src="/img/Modrino__2_-removebg-preview-1_1.webp"
              alt="Keithston Cafe Logo"
              className={styles.logo}
              loading="lazy" 
            />
            <div className={styles.logoText}>KEITHSTON</div>
          </div>

          <div className={styles.socialSection}>
            <div className={styles.socialTitle}>Follow us</div>
            <div className={styles.socialIcons}>
              <a href="#facebook" className={styles.socialIcon}>
                <img
                  src="/img/Group.svg"
                  alt="Facebook"
                  loading="lazy" 
                />
              </a>
              <a href="#pinterest" className={styles.socialIcon}>
                <img
                  src="/img/Group (1).svg"
                  alt="Pinterest"
                  loading="lazy" 
                />
              </a>
              <a href="#phone" className={styles.socialIcon}>
                <img
                  src="/img/Vector (1).svg"
                  alt="Phone"
                  loading="lazy"
                />
              </a>
              <a href="#instagram" className={styles.socialIcon}>
                <img
                  src="/img/Group 503.svg"
                  alt="Instagram"
                  loading="lazy" 
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>About Us</h3>
            <div className={styles.contactInfo}>
              <span>(456) 789-12301</span>
              <span>info@modrino.co.uk</span>
              <span>South 13th street</span>
              <span>New York America</span>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Explore</h3>
            <a href="#home" className={styles.columnLink}>Home</a>
            <a href="#blog" className={styles.columnLink}>Blog</a>
            <a href="#contact" className={styles.columnLink}>Contact us</a>
            <a href="#services" className={styles.columnLink}>Services</a>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Recent News</h3>
            <div className={styles.newsItem}>
              <div className={styles.newsImage}>
                <img
                  src="/img/Rectangle 157.webp"
                  alt="Puff pastry bliss"
                  loading="lazy" 
                />
              </div>
              <div className={styles.newsContent}>
                <div className={styles.newsDate}>June 14, 2024</div>
                <div className={styles.newsTitle}>Puff pastry bliss.</div>
              </div>
            </div>
            <div className={styles.newsItem}>
              <div className={styles.newsImage}>
                <img
                  src="/img/Rectangle 158.webp"
                  alt="Puff pastry bliss"
                  loading="lazy" 
                />
              </div>
              <div className={styles.newsContent}>
                <div className={styles.newsDate}>June 14, 2024</div>
                <div className={styles.newsTitle}>Puff pastry bliss.</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          © 2024 Bake House. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;