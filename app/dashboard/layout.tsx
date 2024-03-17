import Sidebar from "@/components/sidebar";
import styles from "./layout.module.scss";
import { ReactNode } from "react";
import Navbar from "@/components/navbar";

type Props = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <section className={styles.container}>
      <Navbar />
      <div className={styles.body}>
        <Sidebar />
        <main>{children}</main>
      </div>
    </section>
  );
};

export default DashboardLayout;
