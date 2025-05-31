import styles from "./FeaturedPosts.module.sass";
import PostCard from "@/components/PostCard/PostCard";
import type { Post } from "@/types";

// interface Post {
//   id: number;
//   title: string;
//   body: string;
//   description: string;
//   date: string;
//   author: string;
//   commentsCount: number;
//   image: string;
// }

interface FeaturedPostsProps {
  posts: Post[];
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section className={styles.featuredPosts}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.sidebarTitle}>Featured posts</h2>
      </div>
      <div className={styles.featuredPostsContainer}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
