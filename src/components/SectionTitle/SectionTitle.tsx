import styles from "./SectionTitle.module.sass";
import type { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className={styles.titleWrapper}>
      <h2 className={styles.sidebarTitle}>{children}</h2>
    </div>
  );
}
