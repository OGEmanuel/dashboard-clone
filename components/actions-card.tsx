import styles from "./actions-card.module.scss";
import ActivateUserIcon from "@/public/icons/activate-user-icon";
import DeleteUserIcon from "@/public/icons/delete-user-icon";
import ViewIcon from "@/public/icons/view-icon";

const ActionsCard = () => {
  return (
    <ul className={styles["actions-card"]}>
      <li>
        <ViewIcon />
        View Details
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
  );
};

export default ActionsCard;
