"use client";

import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store";
import { fetchPosts } from "@/store/slices/postsSlice";

import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Sidebar from "@/components/Sidebar/Sidebar";
import PostContainer from "@/components/PostsContainer/PostsContainer";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { items: posts, loading } = useSelector(
    (state: RootState) => state.posts
  );
  const selectedTags = useSelector(
    (state: RootState) => state.tags.selectedTags
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const filteredPosts = useMemo(() => {
    if (selectedTags.length === 0) return posts;

    return posts.filter((post) =>
      post.tags.some((tag) => selectedTags.includes(tag))
    );
  }, [posts, selectedTags]);

  const heroData = {
    backgroundImage: "/images/hero-img.jpeg",
    title: "Vehicle",
    description: "One of Saturn’s largest rings may be newer than anyone",
    date: "June 6, 2019",
    author: "Rickie Baroch",
    commentsCount: 4,
  };

  return (
    <div className={styles.page}>
      <Header />
      <Hero {...heroData} />

      {/* Макет с постами и сайдбаром */}
      <div className={styles.postsLayout}>
        <PostContainer posts={filteredPosts} loading={loading} />
        <aside className={styles.sidebarWrapper}>
          <Sidebar />
        </aside>
      </div>
    </div>
  );
}
