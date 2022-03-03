import Image from 'next/image'
import Container from '../components/Container'
import MainLayout from '../components/MainLayout'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.container}>

        <a
          href="https://www.moloni.pt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/moloni-logo-black.svg"
            alt="Moloni Logo"
            width={200}
            height={100}
          />
        </a>

        <h1 className={styles.title}>Utad Summit 2022</h1>
        <h2>React crash course using Nextjs</h2>
      </div>
    </MainLayout>
  )
}
