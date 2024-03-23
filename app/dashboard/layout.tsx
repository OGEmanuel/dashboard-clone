"use client";

import Sidebar from "@/components/sidebar";
import styles from "./layout.module.scss";
import { ReactNode, useState } from "react";
import Navbar from "@/components/navbar";

type Props = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  const handleSetOpen = () => {
    setOpen(!open);
  };

  return (
    <section className={styles.container}>
      <Navbar onSetOpen={handleSetOpen} />
      <div className={styles.body}>
        {open && (
          <div onClick={handleSetOpen} className={styles["sidebar__mobile"]}>
            <Sidebar />
          </div>
        )}
        <div className={styles["sidebar__desktop"]}>
          <Sidebar />
        </div>
        <main>{children}</main>
      </div>
    </section>
  );
};

export default DashboardLayout;
