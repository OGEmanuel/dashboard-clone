import styles from "./page.module.scss";
import ActiveUsersIcon from "@/public/icons/active-users-icon";
import UserLoansIcon from "@/public/icons/users-loans-icon";
import UsersPageIcon from "@/public/icons/users-page-icon";
import UsersSavingsIcon from "@/public/icons/users-savings-icon";
import { DataType } from "@/types/entity";
import DataTable from "./data-table";
import { columns } from "./columns";
import { getTableData } from "@/app/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users - Lendsqr-fe-test",
};

const DashboardPage = async () => {
  const data: DataType[] = await getTableData();
  return (
    <>
      <h1 className={styles.header}>Users</h1>
      <div className={styles.summary}>
        <div className={styles["summary-card"]}>
          <UsersPageIcon />
          <p className={styles["summary-card__description"]}>Users</p>
          <p className={styles["summary-card__total"]}>2,453</p>
        </div>

        <div className={styles["summary-card"]}>
          <ActiveUsersIcon />
          <p className={styles["summary-card__description"]}>Active Users</p>
          <p className={styles["summary-card__total"]}>2,453</p>
        </div>

        <div className={styles["summary-card"]}>
          <UserLoansIcon />
          <p className={styles["summary-card__description"]}>
            Users with Loans
          </p>
          <p className={styles["summary-card__total"]}>12,453</p>
        </div>

        <div className={styles["summary-card"]}>
          <UsersSavingsIcon />
          <p className={styles["summary-card__description"]}>
            Users with Savings
          </p>
          <p className={styles["summary-card__total"]}>102,453</p>
        </div>
      </div>
      <DataTable data={data} columns={columns} />
    </>
  );
};

export default DashboardPage;
