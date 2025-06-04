"use client";

import styles from "./Pagination.module.sass";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePageClick = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  // Вспомогательная функция для отрисовки номеров страниц
  const renderPageNumbers = () => {
    const maxVisiblePages = 5; // всегда нечётное число, чтобы было симметрично
    const half = Math.floor(maxVisiblePages / 2);

    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);

    // Если слишком мало страниц — показываем все
    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, totalPages - maxVisiblePages + 1);
      end = totalPages;
    }

    const pages = [];

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          className={`${styles.pageNumber} ${
            i === currentPage ? styles.active : ""
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }

    // Добавляем "..." слева
    if (start > 1) {
      pages.unshift(
        <span key="dots-start" className={styles.dots}>
          ...
        </span>
      );
    }

    // Добавляем "..." справа
    if (end < totalPages) {
      pages.push(
        <span key="dots-end" className={styles.dots}>
          ...
        </span>
      );
    }

    return pages;
  };

  return (
    <nav className={styles.pagination}>
      {/* Кнопка "Назад" */}
      <button
        className={styles.pageButton}
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Older Posts
      </button>

      {/* Номера страниц */}
      <div className={styles.pageNumbers}>{renderPageNumbers()}</div>

      {/* Кнопка "Вперёд" */}
      <button
        className={styles.pageButton}
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Newer Posts
      </button>
    </nav>
  );
}
