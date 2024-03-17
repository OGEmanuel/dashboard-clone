import styles from "./navbar.module.scss";
import DropdownMenuIcon from "@/public/icons/dropdown-menu-icon";
import NotificationsIcon from "@/public/icons/notifications-icon";
import SearchIcon from "@/public/icons/search-icon";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles["nav-action"]}>
        <Image src={"/logo.svg"} alt="logo" width={173.76} height={36} />
        <div className={styles["search-box"]}>
          <input type="search" placeholder="Search for anything" />
          <span>
            <SearchIcon />
          </span>
        </div>
      </div>
      <div className={styles["control-center"]}>
        <p>Docs</p>
        <div className={styles["control-center__user"]}>
          <div>
            <NotificationsIcon />
          </div>
          <div className={styles["control-center__user-box"]}>
            <Image src={"/avatar.svg"} alt="avatar" width={48} height={48} />
            <p>Adedeji</p>
            <DropdownMenuIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
