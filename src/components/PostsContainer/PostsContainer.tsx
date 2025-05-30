"use client";

import PostCard from "@/components/PostCard/PostCard";
import FeaturedPostCard from "@/components/FeaturedPostCard/FeaturedPostCard";
import styles from "./PostsContainer.module.sass";

type Post = {
  id: number;
  title: string;
  description: string;
  date: string;
  author: string;
  commentsCount: number;
  image: string;
};

interface PostContainerProps {
  posts: Post[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

export default function PostContainer({ posts, loading }: PostContainerProps) {
  const firstSixPosts = posts.slice(0, 6);
  const featuredPost = posts[6];
  const lastFourPosts = posts.slice(7, 11);

  return (
    <div className={styles.postContainer}>
      {/* Блок: первые 6 постов */}
      <div className={styles.section}>
        <div className={styles.grid}>
          {loading === "succeeded" &&
            firstSixPosts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
      </div>

      {/* Большой пост */}
      {loading === "succeeded" && featuredPost && (
        <div className={styles.featuredSection}>
          <FeaturedPostCard post={featuredPost} />
        </div>
      )}

      {/* Блок: последние 4 поста */}
      <div className={styles.section}>
        <div className={styles.grid}>
          {loading === "succeeded" &&
            lastFourPosts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
      </div>
    </div>
  );
}
