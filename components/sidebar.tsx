"use client";

import styles from "./sidebar.module.scss";
import BriefcaseIcon from "@/public/icons/briefcase-icon";
import DropdownIcon from "@/public/icons/dropdown-icon";
import HomeIcon from "@/public/icons/home-icon";
import Link from "next/link";
import UserFriendsIcon from "@/public/icons/user-friends-icon";
import UsersIcon from "@/public/icons/users-icon";
import SackIcon from "@/public/icons/sack-icon";
import HandshakeRegularIcon from "@/public/icons/handshake-regular-icon";
import PiggyBankIcon from "@/public/icons/piggy-bank-icon";
import LoanRequestIcon from "@/public/icons/loan-request-icon";
import UserCheckIcon from "@/public/icons/user-check-icon";
import UserTimesIcon from "@/public/icons/user-times-icon";
import BriefcaseIcon2 from "@/public/icons/briefcase-icon-2";
import SavingsProductsIcon from "@/public/icons/savings-products-icon";
import CoinsSolidIcon from "@/public/icons/coins-solid-icon";
import TransactionIcon from "@/public/icons/transaction-icon";
import UserCogIcon from "@/public/icons/user-cog-icon";
import ScrollIcon from "@/public/icons/scroll-icon";
import ChartBarIcon from "@/public/icons/chart-bar-icon";
import SlidersIcon from "@/public/icons/sliders-icon";
import BadgePercentIcon from "@/public/icons/badge-percent-icon";
import ClipboardListIcon from "@/public/icons/clipboard-list-icon";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className={styles.container}>
      <button className={styles.switch}>
        <BriefcaseIcon />
        <span>Switch Organization</span>
        <DropdownIcon />
      </button>
      <div className={styles.home}>
        <HomeIcon />
        <p>Dashboard</p>
      </div>
      <div className={styles["section-box"]}>
        <p className={styles.section}>CUSTOMERS</p>
        <ul>
          <li
            className={`${styles["nav-list-item"]} ${
              pathname.includes("users") ? styles["nav-list-item--active"] : ""
            }`}
          >
            <Link href={"/dashboard/users"}>
              <UserFriendsIcon />
              Users
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard/users"}>
              <UsersIcon />
              Guarantors
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard/users"}>
              <SackIcon />
              Loans
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard/users"}>
              <HandshakeRegularIcon />
              Decision Models
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard/users"}>
              <PiggyBankIcon />
              Savings
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard/users"}>
              <LoanRequestIcon />
              Loan Requests
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard/users"}>
              <UserCheckIcon />
              Whitelist
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard/users"}>
              <UserTimesIcon />
              Karma
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles["section-box"]}>
        <p className={styles.section}>BUSINESSES</p>
        <ul>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard/users"}>
              <BriefcaseIcon2 />
              Organization
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard/users"}>
              <LoanRequestIcon />
              Loan Products
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard/users"}>
              <SavingsProductsIcon />
              Savings Products
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard/users"}>
              <CoinsSolidIcon />
              Fees and Charges
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard/users"}>
              <TransactionIcon />
              Transactions
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard/users"}>
              <UserCogIcon />
              Service Account
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard/users"}>
              <ScrollIcon />
              Settlements
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard/users"}>
              <ChartBarIcon />
              Reports
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles["section-box"]}>
        <p className={styles.section}>SETTINGS</p>
        <ul>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard/users"}>
              <SlidersIcon />
              <span>Preferences</span>
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard/users"}>
              <BadgePercentIcon />
              Fees and Pricing
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard/users"}>
              <ClipboardListIcon />
              Audit Logs
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
