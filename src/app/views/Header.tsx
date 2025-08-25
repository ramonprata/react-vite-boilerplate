import styles from "./styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header} id="header">
      <div className={styles.logo}>
        <img className={styles.logo} src="/vite.svg" alt="Next.js logo" />
      </div>
      <h1>VITE</h1>
    </header>
  );
}
