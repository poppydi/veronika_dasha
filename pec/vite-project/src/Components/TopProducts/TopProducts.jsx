import React from 'react';
import styles from './TopProducts.module.css';


const products = [
  { id: 1, name: "Whole Grain Bread", price: "$40", image: "/img/free-photo-of-danish-pastry-with-jam-removebg-preview 1.webp" },
  { id: 2, name: "Whole Grain Bread", price: "$40", image: "/img/240_F_52954465_71BU4c18YSkFEAt8duzFR37eNBVuEP4C-removebg-preview 1.webp" },
  { id: 3, name: "Whole Grain Bread", price: "$40", image: "/img/240_F_704728810_JFFKbwZHU3u4ROeDaauuTRv7YCnaWnwm-removebg-preview 1.webp" },
  { id: 4, name: "Whole Grain Bread", price: "$40", image: "/img/240_F_127988957_BWUPTcOlkrtyRPwIVrUsKPG4LN3eL6nN-removebg-preview 1.webp" },
  { id: 5, name: "Whole Grain Bread", price: "$40", image: "/img/240_F_811650375_Gh9LdTs3v7gYR5BJyFGEdy8D6c3mmR4o-removebg-preview 1.webp" },
  { id: 6, name: "Whole Grain Bread", price: "$40", image: "/img/240_F_292903339_fwMo8C8RQCPvCqeaphKVVnmZMUBF1cxW-removebg-preview 1.webp" },
];

const TopProducts = () => {
  return (
    <section className={styles.topProducts}>
      <h2 className={styles.title}>Top Products</h2>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageWrapper}>
              <img src={product.image} alt={product.name} className={styles.productImage}  loading="lazy" />
            </div>
            <div>
              <div className={styles.price}>{product.price}</div>
              <div className={styles.productName}>{product.name}</div>
            </div>
            <div className={styles.actions}>
              <div className={styles.infoIcon}>i</div>
              <button className={styles.addBtn}>Add</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopProducts;