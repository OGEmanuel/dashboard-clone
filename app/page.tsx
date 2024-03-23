import Image from "next/image";
import styles from "./page.module.scss";
import LoginForm from "@/components/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Lendsqr-fe-test",
};

export default function Home() {
  return (
    <section className={styles["auth_login"]}>
      <Image
        className={styles.logo}
        src={"/logo.svg"}
        alt="logo"
        width={173.76}
        height={36}
      />
      <div className={styles["main-box"]}>
        <div className={styles["main-box__img"]}>
          <Image
            src={"/pablo-sign-in.png"}
            alt="sign-in"
            width={600}
            height={337.57}
          />
        </div>
        <div className={styles["form-box"]}>
          <h1>Welcome!</h1>
          <p className={styles.info}>Enter details to login.</p>
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
