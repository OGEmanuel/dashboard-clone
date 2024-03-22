"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./page.module.scss";

const DashboardPage = () => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/dashboard") {
      router.push("/dashboard/users");
    }
  }, [pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default DashboardPage;
