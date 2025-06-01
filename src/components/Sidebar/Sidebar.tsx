import AuthorCard from "../AuthorCard/AuthorCard";
import FeaturedPosts from "../FeaturedPosts/FeaturedPosts";
import { mockPosts } from "@/data/mockPosts";
import styles from "./Sidebar.module.sass";
import Categories from "../Categories/Categories";

const lastThreePosts = mockPosts.slice(-3);

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <AuthorCard />
      <FeaturedPosts posts={lastThreePosts} />
      <Categories />
    </aside>
  );
}
