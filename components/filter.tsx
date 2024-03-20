import DatePickerIcon from "@/public/icons/date-picker-icon";
import styles from "./filter.module.scss";
import DropdownIcon from "@/public/icons/dropdown-icon";

const Filter = () => {
  return (
    <form className={styles.form}>
      <label htmlFor="">
        Organization
        <span className={styles["form__input-box"]}>
          <input type="text" placeholder="Select" />
          <span className={styles["form-icon"]}>
            <DropdownIcon />
          </span>
        </span>
      </label>
      <label htmlFor="">
        Username
        <span className={styles["form__input-box"]}>
          <input type="text" placeholder="User" />
          <span className={styles["form-icon"]}>
            <DropdownIcon />
          </span>
        </span>
      </label>
      <label htmlFor="">
        Email
        <span className={styles["form__input-box"]}>
          <input type="text" placeholder="Email" />
          <span className={styles["form-icon"]}>
            <DropdownIcon />
          </span>
        </span>
      </label>
      <label htmlFor="">
        Date
        <span className={styles["form__input-box"]}>
          <input type="text" placeholder="Date" />
          <span className={styles["form-icon"]}>
            <DatePickerIcon />
          </span>
        </span>
      </label>
      <label htmlFor="">
        Phone Number
        <span className={styles["form__input-box"]}>
          <input type="text" placeholder="Phone Number" />
          <span className={styles["form-icon"]}>
            <DropdownIcon />
          </span>
        </span>
      </label>
      <label htmlFor="">
        Status
        <span className={styles["form__input-box"]}>
          <input type="text" placeholder="Select" />
          <span className={styles["form-icon"]}>
            <DropdownIcon />
          </span>
        </span>
      </label>
      <div className={styles.btn}>
        <button className={styles["btn__reset"]}>Reset</button>
        <button className={styles["btn__filter"]}>Filter</button>
      </div>
    </form>
  );
};

export default Filter;
