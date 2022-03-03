import Link from 'next/link';

import styles from '../styles/Students.module.css';

const NavigationButton = ({ label, navigateTo }) => {
  return (
    <Link href={navigateTo} passHref>
      <button className={styles.backBtn}>
        {label}
      </button>
    </Link>
  );
};

export default NavigationButton;
