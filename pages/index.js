import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Container from '../components/container'
import Email from '../components/email'
import Content from '../components/content'
import baton from '../public/baton-light.png'
import headerBanner from '../public/header-banner.png'
import Count from '../components/Count'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={`${styles.container} full-height`}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
      </Head>
      <main className={`${styles.main} full-height`}>
        <div
          className={styles.hero}
          style={{
            backgroundImage: `url(${headerBanner})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}>
          <div className={`container mx-auto ${styles.hero__inner}`}>
            <img src={baton} alt="baton" className={styles.baton} />
            <div className={styles.hero__heading}>
              Express Your Support For #IndiaWantsBitcoin
             			</div>
            <div className={`${styles.hero__subheading} mt-4`}>
              <strong><i>'If you change nothing, nothing will change':</i></strong> Time to do your bit by supporting this email petition campaign to benefit the crypto community in India.
            			</div>
          </div>
        </div>
        <div className={styles.emailContainer}>
          <Email />
        </div>
        <Content />
        {/* <Count /> */}
      </main>
      <footer className={styles.footerSection}>
        <Link href="/terms">
          <a className={styles.termsLabel}>
            Terms & Conditions
          </a>
        </Link>
        <Link href="/terms">
          <a className={styles.privacyLabel}>
            Privacy Policy
          </a>
        </Link>
      </footer>
    </div>
  )
}
