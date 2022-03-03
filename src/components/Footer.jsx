import Image from 'next/image';

import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://www.moloni.pt/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Powered by</p>
        <span className={styles.logo}>
          <Image src="/moloni-logo-black.svg" alt="Moloni Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
};

export default Footer;