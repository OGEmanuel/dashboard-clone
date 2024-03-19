"use client";

import { dataType } from "@/types/entity";
import { ColumnDef } from "@tanstack/react-table";
import styles from "./columns.module.scss";
import MoreIcon from "@/public/icons/more-icon";

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

    // cell: ({ row }) => {
    //   const voucher = row.original;

    //   return (
    //     <span className={`capitalize font-medium text-[0.94rem]`}>
    //       #{voucher.serial_number}
    //     </span>
    //   );
    // },
  },
  {
    accessorKey: "username",
    header: "Username",

    // cell: ({ row }) => {
    //   const voucher = row.original;

    //   return (
    //     <span className={`capitalize font-medium text-[0.94rem]`}>
    //       {voucher.issued_for.first_name} {voucher.issued_for.last_name}{" "}
    //       {voucher.issued_for.first_name && "-"} 0
    //       {voucher.issued_for.local_phone_number}
    //     </span>
    //   );
    // },
  },
  {
    accessorKey: "email",
    header: "Email",

    // cell: ({ row }) => {
    //   const voucher = row.original;

    //   return (
    //     <span className={`capitalize font-medium text-[0.94rem]`}>
    //       {voucher.category.name}
    //     </span>
    //   );
    // },
  },
  {
    accessorKey: "phone_number",
    header: "Phone Number",

    // cell: ({ row }) => {
    //   const voucher = row.original;

    //   return (
    //     <span className={`capitalize font-medium text-[0.94rem]`}>
    //       {formatMoney(voucher.amount)}
    //     </span>
    //   );
    // },
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

      return (
        <button className={styles.more}>
          <MoreIcon />
        </button>
      );
    },
  },
];
