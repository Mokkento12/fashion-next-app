"use client";

import PostCard from "@/components/PostCard/PostCard";
import FeaturedPostCard from "@/components/FeaturedPostCard/FeaturedPostCard";
import Pagination from "../Pagination/Pagination";
import styles from "./PostsContainer.module.sass";
import type { Post } from "@/types";
import { useState } from "react";
import { mockPlaceholders } from "@/data/mockPosts";

interface PostContainerProps {
  posts: Post[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

export default function PostContainer({ posts, loading }: PostContainerProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Выбираем текущую порцию постов
  let currentPosts = [];

  if (currentPage === 1) {
    // На первой странице — реальные посты + моки, если их мало
    currentPosts = [...posts, ...mockPlaceholders].slice(0, 12);
  } else {
    // На других страницах — дублируем посты или добавляем моки
    const repeatedPosts = [...posts, ...posts, ...posts]; // повторяем посты несколько раз
    currentPosts = repeatedPosts.slice(indexOfFirstPost, indexOfLastPost);
  }

  const firstSixPosts = currentPosts.slice(0, 6);
  const featuredPost = currentPosts[6];
  const lastFourPosts = currentPosts.slice(7, 11);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

      {/* Пагинация */}
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
