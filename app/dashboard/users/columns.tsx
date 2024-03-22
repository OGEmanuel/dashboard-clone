"use client";

import { dataType } from "@/types/entity";
import { ColumnDef } from "@tanstack/react-table";
import styles from "./columns.module.scss";
import ActionBtn from "./action-btn";

enum Status {
  Pending = "pending",
  Active = "active",
  Inactive = "inactive",
  Blacklisted = "blacklisted",
}

export const columns: ColumnDef<dataType>[] = [
  {
    accessorKey: "organization",
    header: "Organization",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone_number",
    header: "Phone Number",
  },
  {
    accessorKey: "date_joined",
    header: "Date Joined",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const data = row.original;

      return (
        <span
          className={`${styles.status} ${
            data.status.toLowerCase() === Status.Active
              ? styles["status__active"]
              : data.status.toLowerCase() === Status.Blacklisted
              ? styles["status__blacklisted"]
              : data.status.toLowerCase() === Status.Inactive
              ? styles["status__inactive"]
              : styles["status__pending"]
          }`}
        >
          {data.status}
        </span>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const data = row.original;

      return <ActionBtn data={data} />;
    },
  },
];
