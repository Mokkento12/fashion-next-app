import { mockSocial } from "@/data/socialData";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./SocialMedia.module.sass";
import SocialIconCard from "../SocialIconCard/SocialIconCard";

const SocialMedia = () => {
  return (
    <div className={styles.socialWrapper}>
      <SectionTitle>SocialMedia</SectionTitle>
      <div className={styles.socialGrid}>
        {mockSocial.map((social) => (
          <SocialIconCard key={social.id} social={social} />
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
