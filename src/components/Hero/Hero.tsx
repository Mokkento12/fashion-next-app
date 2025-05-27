import styles from "./Hero.module.sass";

interface HeroProps {
  backgroundImage: string;
  title: string;
  description: string;
  date: string;
  author: string;
  commentsCount: number;
}

const Hero = ({
  backgroundImage,
  title,
  description,
  date,
  author,
  commentsCount,
}: HeroProps) => {
  return (
    <section className={styles.hero}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={styles.content}>
          <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
            <div className={styles.meta}>
              <span>{date}</span>
              <span>
                <span className={styles.grey}>By</span> {author}
              </span>
              <span>{commentsCount} comments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
