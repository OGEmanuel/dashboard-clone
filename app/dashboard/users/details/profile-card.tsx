import Image from "next/image";
import styles from "./profile-card.module.scss";
import FullStarIcon from "@/public/icons/full-star-icon";
import EmptyStarIcon from "@/public/icons/empty-star-icon";
import TabSelectors from "./tabs/selectors";

const ProfileCard = () => {
  return (
    <div className={styles["profile-card"]}>
      <div className={styles["profile-card__user"]}>
        <Image src={"/avatar.png"} alt="avatar" width={100} height={100} />
        <div className={styles["profile-card__user-profile"]}>
          <div className={styles["profile-card__user-profile__id"]}>
            <p>Grace Effiom</p>
            <p>LSQFf587g90</p>
          </div>
          <div className={styles["profile-card__user-profile__tier"]}>
            <p>User’s Tier</p>
            <div>
              <FullStarIcon />
              <EmptyStarIcon />
              <EmptyStarIcon />
            </div>
          </div>
          <div className={styles["profile-card__user-profile__account"]}>
            <p>₦200,000.00</p>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>
      </div>
      <TabSelectors />
    </div>
  );
};

export default ProfileCard;
