import Link from 'next/link';

import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navBarItemsContent}>
        <Link href="/">Home</Link>
        <Link href="/students">Students</Link>
      </div>
    </nav>
  );
};

export default NavBar;