import styles from "./styles/RootLayout.module.scss";
import Header from "./Header";
import NavigationTabs from "./NavigationTabs";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sticky}>
        <Header />
        <NavigationTabs />
      </div>
      <div className={styles.rootLayout}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
