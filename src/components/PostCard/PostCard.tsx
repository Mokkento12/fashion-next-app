import React from "react";
import Image from "next/image";
import styles from "./PostCard.module.sass";

interface Post {
  id: number;
  image: string;
  title: string;
  body: string;
  date: string;
  author: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className={styles.card}>
      <Image
        src={post.image}
        alt={post.title}
        width={370}
        height={280}
        style={{ objectFit: "cover" }}
        className={styles.cardImage}
      />
      <div className={styles.cardDesc}>
        <h3 className={styles.cardTitle}>{post.title}</h3>
        <p className={styles.cardBody}>{post.body}</p>
        <p className={styles.cardMeta}>
          {post.date}
          <span className={styles.grey}>
            <span className={styles.grey}> By </span>
          </span>
          {post.author}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
