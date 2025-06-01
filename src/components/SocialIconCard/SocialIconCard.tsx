import Image from "next/image";
import styles from "./SocialIconCard.module.sass";
import { Social } from "@/types";

interface SocialIconCardProps {
  social: Social;
}

const SocialIconCard = ({ social }: SocialIconCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Image
          src={social.image}
          alt={social.description}
          width={20}
          height={20}
        />
      </div>
      <span className={styles.description}>{social.description}</span>
    </div>
  );
};

export default SocialIconCard;
