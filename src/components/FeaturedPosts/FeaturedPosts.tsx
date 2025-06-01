import styles from "./FeaturedPosts.module.sass";
import PostCard from "@/components/PostCard/PostCard";
import type { Post } from "@/types";
import SectionTitle from "../SectionTitle/SectionTitle";

interface FeaturedPostsProps {
  posts: Post[];
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section className={styles.featuredPosts}>
      <SectionTitle>Featured Posts</SectionTitle>
      <div className={styles.featuredPostsContainer}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
