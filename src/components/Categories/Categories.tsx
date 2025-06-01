import { useSelector, useDispatch } from "react-redux";
import { toggleCategory } from "@/store/slices/categoriesSlice";
import styles from "./Categories.module.sass";
import type { RootState } from "@/store";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );
  const expandedCategoryIds = useSelector(
    (state: RootState) => state.categories.expandedCategoryIds
  );

  return (
    <div className={styles.categories}>
      <SectionTitle>Categories</SectionTitle>
      <ul className={styles.categoryList}>
        {categories.map((category) => (
          <li key={category.id} className={styles.categoryItem}>
            <button
              type="button"
              onClick={() => dispatch(toggleCategory(category.id))}
            >
              <div className={styles.categoryDesc}>
                {" "}
                <span className={styles.categoryName}>{category.name}</span>
                <span className={styles.categoryCount}>
                  ( {category.count} )
                </span>
              </div>
            </button>
            {/* Если раскрыта */}
            {expandedCategoryIds.includes(category.id) && (
              <ul className={styles.subcategories}>
                {category.subcategories?.map((subcategory, index) => (
                  <li key={index} className={styles.subcategoryItem}>
                    {subcategory}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
