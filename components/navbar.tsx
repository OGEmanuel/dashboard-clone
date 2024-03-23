"use client";

import styles from "./navbar.module.scss";
import DropdownMenuIcon from "@/public/icons/dropdown-menu-icon";
import HamburgerIcon from "@/public/icons/hamburger-icon";
import NotificationsIcon from "@/public/icons/notifications-icon";
import SearchIcon from "@/public/icons/search-icon";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = ({ onSetOpen }: { onSetOpen: () => void }) => {
  const [openMobileDropdown, setOpenMobileDropdown] = useState(false);

  const handleOpenMobileDropdown = () => {
    setOpenMobileDropdown(!openMobileDropdown);
  };
  
  return (
    <nav className={styles.nav}>
      <div className={styles["nav-action"]}>
        <div>
          <button onClick={onSetOpen} className={styles.hamburger}>
            <HamburgerIcon />
          </button>
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={173.76}
            height={36}
            className={styles["logo-full"]}
          />
          <Image
            src={"/Union.svg"}
            alt="logo"
            width={20.63}
            height={20.84}
            className={styles["logo-short"]}
          />
        </div>
        <div className={styles["search-box"]}>
          <input type="search" placeholder="Search for anything" />
          <span>
            <SearchIcon />
          </span>
        </div>
        <button
          onClick={handleOpenMobileDropdown}
          className={styles["dropdown__mobile"]}
        >
          <DropdownMenuIcon />
        </button>
        {openMobileDropdown && (
          <div className={styles["dropdown__mobile-view"]}>
            <div>
              <Image src={"/avatar.svg"} alt="avatar" width={48} height={48} />
              <p>Adedeji</p>
            </div>
            <div>
              <NotificationsIcon />
              <p>Docs</p>
            </div>
          </div>
        )}
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
            <div>
              <button>
                <DropdownMenuIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
