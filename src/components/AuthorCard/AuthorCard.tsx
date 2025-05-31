import Image from "next/image";
import styles from "./AuthorCard.module.sass";

const AuthorCard = () => {
  return (
    <section className={styles.authorSection}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.sidebarTitle}>About the author</h2>
      </div>
      <div className={styles.authorCard}>
        <Image
          src="/images/author.jpeg"
          alt="Author"
          width={200}
          height={200}
          className={styles.sidebarImage}
        />
        <h3 className={styles.authorName}>Kate Willems</h3>
        <p className={styles.authorTitle}>Food & cooking bloger</p>
        <p className={styles.authorBio}>
          Hi, I&apos;m Sonia. Cooking is the way I express my creative side to
          the world. Welcome to my Kitchen Corner on…
        </p>
        <button className={styles.readMoreButton}>Continue Reading</button>
      </div>
    </section>
  );
};

export default AuthorCard;
