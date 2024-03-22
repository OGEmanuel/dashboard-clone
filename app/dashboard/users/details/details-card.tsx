"use client";

import { useEffect, useState } from "react";
import styles from "./details-card.module.scss";
import { DetailsDataType } from "@/types/entity";

const DetailsCard = () => {
  const [details, setDetails] = useState<DetailsDataType | null>(null);

  useEffect(() => {
    const data: string | null = localStorage.getItem("user_details");

    if (data !== null) {
      setDetails(JSON.parse(data));
    } else {
      return;
    }
  }, []);
  return (
    <div className={styles["details-card"]}>
      <div>
        <p>Personal Information</p>
        <div>
          <div>
            <p>full Name</p>
            <p>{details?.full_name}</p>
          </div>
          <div>
            <p>Phone Number</p>
            <p>{details?.phone_number}</p>
          </div>
          <div>
            <p>Email Address</p>
            <p>{details?.email_address}</p>
          </div>
          <div>
            <p>Bvn</p>
            <p>{details?.financial_details.bvn}</p>
          </div>
          <div>
            <p>Gender</p>
            <p>{details?.gender}</p>
          </div>
          <div>
            <p>Marital status</p>
            <p>{details?.marital_status}</p>
          </div>
          <div>
            <p>Children</p>
            <p>{details?.children}</p>
          </div>
          <div>
            <p>Type of residence</p>
            <p>{details?.type_of_residence}</p>
          </div>
        </div>
      </div>
      <div>
        <p>Education and Employment</p>
        <div>
          <div>
            <p>level of education</p>
            <p>{details?.education_employment.level_of_education}</p>
          </div>
          <div>
            <p>employment status</p>
            <p>{details?.education_employment.employment_status}</p>
          </div>
          <div>
            <p>sector of employment</p>
            <p>{details?.education_employment.sector_of_employment}</p>
          </div>
          <div>
            <p>Duration of employment</p>
            <p>{details?.education_employment.duration_of_employment}</p>
          </div>
          <div>
            <p>office email</p>
            <p>{details?.education_employment.office_email}</p>
          </div>
          <div>
            <p>Monthly income</p>
            <p>{details?.education_employment.monthly_income}</p>
          </div>
          <div>
            <p>loan repayment</p>
            <p>{details?.education_employment.loan_repayment}</p>
          </div>
        </div>
      </div>
      <div>
        <p>Socials</p>
        <div>
          <div>
            <p>Twitter</p>
            <p>{details?.socials.twitter}</p>
          </div>
          <div>
            <p>Facebook</p>
            <p>{details?.socials.facebook}</p>
          </div>
          <div>
            <p>Instagram</p>
            <p>{details?.socials.instagram}</p>
          </div>
        </div>
      </div>
      <div>
        <p>Guarantor</p>
        <div>
          <div>
            <p>full Name</p>
            <p>{details?.guarantor.full_name}</p>
          </div>
          <div>
            <p>Phone Number</p>
            <p>{details?.guarantor.phone_number}</p>
          </div>
          <div>
            <p>Email Address</p>
            <p>{details?.guarantor.email_address}</p>
          </div>
          <div>
            <p>Relationship</p>
            <p>{details?.guarantor.relationship}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
