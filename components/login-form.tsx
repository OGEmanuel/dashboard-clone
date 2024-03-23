"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./login-form.module.scss";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleShow = () => {
    setShow(!show);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    if (email === "" || password.length < 8) {
      setError(true);
      return;
    }
    setLoading(true);
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles["form-inputs"]}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => handleEmail(e)}
          required
        />
        <span className={styles["password-input"]}>
          <input
            type={!show ? "password" : "text"}
            placeholder="Password"
            value={password}
            onChange={(e) => handlePassword(e)}
            required
          />
          <button onClick={handleShow} type="button" className={styles.show}>
            {!show ? "SHOW" : "HIDE"}
          </button>
        </span>
        <p>FORGOT PASSWORD?</p>
      </div>
      {error && (
        <p className={styles.error}>
          *Wrong login credentials! please try again with a password of at least
          8 characters
        </p>
      )}
      <button type="submit" className={styles["login-btn"]}>
        {!loading ? "LOG IN" : "LOGGING IN..."}
      </button>
    </form>
  );
};

export default LoginForm;
