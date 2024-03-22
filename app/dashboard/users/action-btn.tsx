"use client";

import MoreIcon from "@/public/icons/more-icon";
import styles from "./action-btn.module.scss";
import ViewIcon from "@/public/icons/view-icon";
import DeleteUserIcon from "@/public/icons/delete-user-icon";
import ActivateUserIcon from "@/public/icons/activate-user-icon";
import { dataType } from "@/types/entity";
import { useState } from "react";
import Link from "next/link";

const ActionBtn = ({ data }: { data: dataType }) => {
  const [activeId, setActiveId] = useState<string | undefined>(undefined);

  const handleViewActions = (id: string) => {
    if (activeId === id) {
      setActiveId(undefined);
    } else {
      setActiveId(id);
    }
  };

  return (
    <div className={styles.action}>
      <button
        onClick={() => handleViewActions(data.id)}
        className={styles.more}
      >
        <MoreIcon />
      </button>

      {activeId === data.id && (
        <ul key={data.id}>
          <li>
            <Link href={"/dashboard/users/details"}>
              <ViewIcon />
              View Details
            </Link>
          </li>
          <li>
            <DeleteUserIcon />
            Blacklist User
          </li>
          <li>
            <ActivateUserIcon />
            Activate User
          </li>
        </ul>
      )}
    </div>
  );
};

export default ActionBtn;
