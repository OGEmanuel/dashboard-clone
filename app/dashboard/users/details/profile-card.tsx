"use client";

import Image from "next/image";
import styles from "./profile-card.module.scss";
import FullStarIcon from "@/public/icons/full-star-icon";
import EmptyStarIcon from "@/public/icons/empty-star-icon";
import TabSelectors from "./tabs/selectors";
import { useEffect, useState } from "react";
import { DetailsDataType } from "@/types/entity";

const ProfileCard = () => {
  const [details, setDetails] = useState<DetailsDataType | null>(null);

  useEffect(() => {
    const data: string | null = localStorage.getItem("user_details");

    if (data !== null) {
      setDetails(JSON.parse(data));
    } else {
      return;
    }
  }, []);

  return (
    <div className={styles["profile-card"]}>
      <div className={styles["profile-card__user"]}>
        <Image src={"/avatar.png"} alt="avatar" width={100} height={100} />
        <div className={styles["profile-card__user-profile"]}>
          <div className={styles["profile-card__user-profile__id"]}>
            <p>{details?.full_name}</p>
            <p>{details?.id}</p>
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
            <p>{details?.financial_details.balance}</p>
            <p>
              {details?.financial_details.bank_account}/
              {details?.financial_details.bank_account}
            </p>
          </div>
        </div>
      </div>
      <TabSelectors />
    </div>
  );
};

export default ProfileCard;
