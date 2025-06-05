// components/Footer/Footer.tsx

import { menuItems } from "@/data/headerData";
import styles from "./Footer.module.sass";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Логотип */}
      <div className={styles.logoContainer}>
        <Link href="#" className={styles.logo}>
          FASHION
        </Link>
      </div>

      {/* Меню */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {menuItems.map((item, index) => (
            <li key={index} className={styles.navItem}>
              <Link href={`/${item.toLowerCase()}`} className={styles.navLink}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Социальные сети */}
      <div className={styles.socials}>
        <a
          href="https://www.facebook.com/your-page"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://twitter.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <i className="bi bi-twitter-x"></i>
        </a>
        <a
          href="https://pinterest.com/your-board"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <i className="bi bi-pinterest"></i>
        </a>
        <a
          href="https://youtube.com/your-channel"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <i className="bi bi-youtube"></i>
        </a>
        <a
          href="https://dribbble.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <i className="bi bi-dribbble"></i>
        </a>
      </div>

      {/* Копирайт */}
      <p className={styles.copyright}>
        © 2024 Your Company. All Rights Reserved.
      </p>
    </footer>
  );
}
