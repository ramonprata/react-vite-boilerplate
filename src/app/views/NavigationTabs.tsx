import { useLocation } from "react-router-dom";
import styles from "./styles/NavigationTabs.module.scss";
import { NAVIGATION_TABS } from "../utils/constants";
import { Link } from "react-router";

const NavigationTabs = () => {
  const location = useLocation();

  return (
    <div className={styles.navigationContainer}>
      <div className={styles.tablist}>
        {NAVIGATION_TABS.map((tab) => (
          <Link
            key={tab.id}
            to={tab.path}
            className={`${styles.tab} ${
              location.pathname === tab.path ? styles.active : ""
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavigationTabs;
