import styles from "./details-card.module.scss";

const DetailsCard = () => {
  return (
    <div className={styles["details-card"]}>
      <div className={styles["details-card__personal-info"]}>
        <p>Personal Information</p>
        <div>
          <div>
            <p>full Name</p>
            <p>Grace Effiom</p>
          </div>
          <div>
            <p>Phone Number</p>
            <p>07060780922</p>
          </div>
          <div>
            <p>Email Address</p>
            <p>grace@gmail.com</p>
          </div>
          <div>
            <p>Bvn</p>
            <p>07060780922</p>
          </div>
          <div>
            <p>Gender</p>
            <p>Female</p>
          </div>
          <div>
            <p>Marital status</p>
            <p>Single</p>
          </div>
          <div>
            <p>Children</p>
            <p>None</p>
          </div>
          <div>
            <p>Type of residence</p>
            <p>Parent’s Apartment</p>
          </div>
        </div>
      </div>
      <div>
        <p>Education and Employment</p>
        <div>
          <div>
            <p>level of education</p>
            <p>B.Sc</p>
          </div>
          <div>
            <p>employment status</p>
            <p>Employed</p>
          </div>
          <div>
            <p>sector of employment</p>
            <p>FinTech</p>
          </div>
          <div>
            <p>Duration of employment</p>
            <p>2 years</p>
          </div>
          <div>
            <p>office email</p>
            <p>grace@lendsqr.com</p>
          </div>
          <div>
            <p>Monthly income</p>
            <p>₦200,000.00- ₦400,000.00</p>
          </div>
          <div>
            <p>loan repayment</p>
            <p>40,000</p>
          </div>
        </div>
      </div>
      <div>
        <p>Socials</p>
        <div>
          <div>
            <p>Twitter</p>
            <p>@grace_effiom</p>
          </div>
          <div>
            <p>Facebook</p>
            <p>Grace Effiom</p>
          </div>
          <div>
            <p>Instagram</p>
            <p>@grace_effiom</p>
          </div>
        </div>
      </div>
      <div>
        <p>Guarantor</p>
        <div>
          <div>
            <p>full Name</p>
            <p>Debby Ogana</p>
          </div>
          <div>
            <p>Phone Number</p>
            <p>07060780922</p>
          </div>
          <div>
            <p>Email Address</p>
            <p>debby@gmail.com</p>
          </div>
          <div>
            <p>Relationship</p>
            <p>Sister</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
