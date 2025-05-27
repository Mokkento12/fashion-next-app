import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

export default function Home() {
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
    </div>
  );
}
