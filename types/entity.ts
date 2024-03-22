export interface DataType {
  id: string;
  organization: string;
  username: string;
  email: string;
  phone_number: string;
  date_joined: string;
  status: string;
}

interface FinancialDetailsType {
  balance: string;
  bank_account: string;
  bank_name: string;
  bvn: string;
}

interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
}

interface EducationEmploymentType {
  level_of_education: string;
  employment_status: string;
  sector_of_employment: string;
  duration_of_employment: string;
  office_email: string;
  monthly_income: string;
  loan_repayment: string;
}

interface Guarantor {
  full_name: string;
  phone_number: string;
  email_address: string;
  relationship: string;
}

export interface DetailsDataType {
  id: string;
  full_name: string;
  gender: string;
  phone_number: string;
  email_address: string;
  marital_status: string;
  children: string;
  type_of_residence: string;
  financial_details: FinancialDetailsType;
  education_employment: EducationEmploymentType;
  socials: Socials;
  guarantor: Guarantor;
}
