"use client";

import PostCard from "@/components/PostCard/PostCard";
import FeaturedPostCard from "@/components/FeaturedPostCard/FeaturedPostCard";
import Pagination from "../Pagination/Pagination";
import styles from "./PostsContainer.module.sass";
import type { Post } from "@/types";
import { useState } from "react";

interface PostContainerProps {
  posts: Post[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

export default function PostContainer({ posts, loading }: PostContainerProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Разделяем посты на основе текущей страницы
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Только те посты, которые относятся к текущей странице
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Общее количество страниц
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" }); // скролл вверх при смене страницы
  };

  const firstSixPosts = currentPosts.slice(0, 6); // первые 6 постов
  const featuredPost = currentPosts[6]; // 7-й пост
  const lastFourPosts = currentPosts.slice(7, 11); // 8–11 посты

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

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
