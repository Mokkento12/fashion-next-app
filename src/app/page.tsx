"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store";
import { fetchPosts } from "@/store/slices/postsSlice";

import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import PostCard from "@/components/PostCard/PostCard";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const posts = useSelector((state: RootState) => state.posts.items);
  const loading = useSelector((state: RootState) => state.posts.loading);

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

      {loading === "loading" && <p>Загрузка постов...</p>}

      {/* Список постов */}
      {loading === "succeeded" && (
        <div className={styles.postsGrid}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
