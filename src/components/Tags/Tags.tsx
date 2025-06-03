import { RootState } from "@/types";
import { useSelector, useDispatch } from "react-redux";
import { toggleTag } from "@/store/slices/tagsSlice";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./Tags.module.sass";

export default function Tags() {
  const dispatch = useDispatch();
  const allTags = useSelector((state: RootState) => state.tags.allTags);
  const selectedTags = useSelector(
    (state: RootState) => state.tags.selectedTags
  );

  return (
    <div className={styles.tags}>
      <SectionTitle>Tags</SectionTitle>
      <div className={styles.tagGrid}>
        {allTags.map((tag) => (
          <button
            key={tag.id}
            className={`${styles.tag} ${
              selectedTags.includes(tag.id) ? styles.selected : ""
            }`}
            onClick={() => dispatch(toggleTag(tag.id))}
          >
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
}
