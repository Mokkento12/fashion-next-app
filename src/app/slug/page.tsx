import { notFound } from "next/navigation";
import styles from "@/components/PageLayout/PageLayout.module.sass";

interface PageProps {
  params: {
    slug: string;
  };
}

const pageTitles = {
  home: "Home",
  recipes: "Recipes",
  article: "Articles",
  contact: "Contact Us",
  purchase: "Purchase",
};

export default function Page({ params }: PageProps) {
  const { slug } = params;

  const title = pageTitles[slug as keyof typeof pageTitles];

  if (!title) {
    notFound(); // показываем 404, если slug не найден
  }

  return (
    <div className={styles.pageContainer}>
      <h1>{title}</h1>
      <p>Контент для страницы "{slug}" будет здесь.</p>
    </div>
  );
}
