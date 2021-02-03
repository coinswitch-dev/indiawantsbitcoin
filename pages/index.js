import Link from 'next/link'
import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Container from '../components/container'
import Email from '../components/email'
import Success from '../components/success'
import Share from '../components/share'
import Content from '../components/content'
import baton from '../public/baton-light.png'
import indiawantsbitcoin from '../public/indiawantsbitcoin-banner.png'
import headerBanner from '../public/header-banner.png'
import Count from '../components/Count'

export default function Home() {
  const [hasSentEmail, setEmailSent] = useState(false);
  return (
    <div className={`${styles.container} full-height`}>
      <Head>
        {/* Primary Meta Tags */}
        <title>Support for Crypto Regulations in India</title>
        <meta name="title" content="Support for Crypto Regulations in India" />
        <meta name="description" content="Time to do your bit by supporting the email petition campaign to benefit the crypto community in India" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Support for Crypto Regulations in India" />
        <meta property="og:description" content="Time to do your bit by supporting the email petition campaign to benefit the crypto community in India" />
        <meta property="og:image" content={indiawantsbitcoin} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Support for Crypto Regulations in India" />
        <meta property="twitter:description" content="Time to do your bit by supporting the email petition campaign to benefit the crypto community in India" />
        <meta property="twitter:image" content={indiawantsbitcoin} />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-V04Q1FJHPM"></script>
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
          {hasSentEmail ? <Success /> : <Email onSuccess={setEmailSent} />}
          <Share />
        </div>
        <div className="my-8">
          <Content />
        </div>
        {/* <Count /> */}
      </main>
      <footer className={styles.footerSection}>
        <Link href="/terms">
          <a className={styles.termsLabel}>
            Terms & Conditions
          </a>
        </Link>
        <Link href="/privacy-policy">
          <a className={styles.privacyLabel}>
            Privacy Policy
          </a>
        </Link>
      </footer>
    </div>
  )
}
