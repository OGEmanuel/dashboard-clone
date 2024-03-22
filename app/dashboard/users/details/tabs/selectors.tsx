import styles from "./selectors.module.scss";

const TabSelectors = () => {
  return (
    <div className={styles.selectors}>
      <button>General Details</button>
      <button>Documents</button>
      <button>Bank Details</button>
      <button>Loans</button>
      <button>Savings</button>
      <button>App and System</button>
    </div>
  );
};

export default TabSelectors;
