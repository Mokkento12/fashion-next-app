import type { Post } from "@/types";
import styles from "./FeaturedPosts.module.sass";

interface FeaturedPostsProps {
  posts: Post[];
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section className={styles.featuredPosts}>
      <h2 className={styles.title}>Featured Posts</h2>
      <div className={styles.featuredPostsContainer}>
        {posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    </section>
  );
}
