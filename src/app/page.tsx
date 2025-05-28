"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store";
import Image from "next/image";
import { fetchPosts } from "@/store/slices/postsSlice";

import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

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

      {loading === "succeeded" && (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <Image
                src={post.image}
                alt={post.title}
                width={200}
                height={150}
                style={{ objectFit: "cover" }}
              />
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <p>
                {post.date} — {post.author}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
