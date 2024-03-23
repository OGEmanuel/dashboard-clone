import BackIcon from "@/public/icons/back-icon";
import styles from "./page.module.scss";
import Link from "next/link";
import ProfileCard from "./profile-card";
import DetailsCard from "./details-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Details - Lendsqr-fe-test",
};

const UserDetails = () => {
  return (
    <section className={styles.section}>
      <Link href={"/dashboard/users"}>
        <BackIcon />
        Back to Users
      </Link>
      <div className={styles.header}>
        <h1>User Details</h1>
        <div className={styles["header-actions"]}>
          <button className={styles["header-actions__blacklist"]}>
            BLACKLIST USER
          </button>
          <button className={styles["header-actions__activate"]}>
            ACTIVATE USER
          </button>
        </div>
      </div>
      <ProfileCard />
      <DetailsCard />
    </section>
  );
};

export default UserDetails;
