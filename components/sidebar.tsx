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
import GalaxyIcon from "@/public/icons/galaxy-icon";
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
              pathname === "/dashboard" ? styles["nav-list-item--active"] : ""
            }`}
          >
            <Link href={"/dashboard"}>
              <UserFriendsIcon />
              Users
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard"}>
              <UsersIcon />
              Guarantors
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard"}>
              <SackIcon />
              Loans
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard"}>
              <HandshakeRegularIcon />
              Decision Models
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard"}>
              <PiggyBankIcon />
              Savings
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard"}>
              <LoanRequestIcon />
              Loan Requests
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard"}>
              <UserCheckIcon />
              Whitelist
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard"}>
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
            <Link href={"/dashboard"}>
              <BriefcaseIcon2 />
              Organization
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard"}>
              <LoanRequestIcon />
              Loan Products
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard"}>
              <SavingsProductsIcon />
              Savings Products
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard"}>
              <CoinsSolidIcon />
              Fees and Charges
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard"}>
              <TransactionIcon />
              Transactions
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard"}>
              <GalaxyIcon />
              Services
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard"}>
              <UserCogIcon />
              Service Account
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard"}>
              <ScrollIcon />
              Settlements
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard"}>
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
            <Link href={"/dashboard"}>
              <SlidersIcon />
              <span>Preferences</span>
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard"}>
              <BadgePercentIcon />
              Fees and Pricing
            </Link>
          </li>
          <li className={styles["nav-list-item"]}>
            <Link href={"/dashboard"}>
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
