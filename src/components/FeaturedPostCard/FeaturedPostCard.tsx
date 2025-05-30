import React from "react";
import Image from "next/image";
import styles from "./FeaturedPostCard.module.sass";

interface Props {
  post: {
    id: number;
    image: string;
    title: string;
    body: string;
    date: string;
    author: string;
  };
}

const FeaturedPostCard: React.FC<Props> = ({ post }) => {
  return (
    <article className={styles.featuredCard}>
      <Image
        src={post.image}
        alt={post.title}
        width={770}
        height={349}
        style={{ objectFit: "cover" }}
        className={styles.featuredImage}
      />
      <div className={styles.featureDecs}>
        <h2 className={styles.featuredTitle}>{post.title}</h2>
        <p className={styles.featuredBody}>{post.body}</p>
        <p className={styles.featuredMeta}>
          {post.date}
          <span className={styles.grey}>
            <span className={styles.grey}> By </span>
          </span>
          {post.author}
        </p>
        <p className={styles.featureText}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem
        </p>
      </div>
    </article>
  );
};

export default FeaturedPostCard;
