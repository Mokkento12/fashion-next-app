import { menuItems } from "@/data/headerData";
import styles from "./Header.module.sass";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="#" className={styles.logo}>
          FASHION
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {menuItems.map((item, index) => (
              <li key={index} className={styles.navItem}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className={styles.navLink}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
