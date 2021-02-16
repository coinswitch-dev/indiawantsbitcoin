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
import favicon from '../public/favicon.ico'
import Count from '../components/Count'
import lscache from 'lscache';

import coinswitch from '../public/member/member-coinswitch-kuber.png'
import wazirx from '../public/member/member-wazirx.png'
import coindcx from '../public/member/member-coindcx.png'
import unocoin from '../public/member/member-unocoin.png'
import zebpay from '../public/member/member-zebpay.png'
import pocketbits from '../public/member/member-pocket-bits.png'

export default function Home() {
  const hasSentEmailCache = lscache.get('hasSentEmail');
  const [hasSentEmail, setEmailSent] = useState(Boolean(hasSentEmailCache));
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

        <link rel="icon" href={favicon} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-V04Q1FJHPM"></script>
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
        
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
          <div className={styles.headerWrapper}>
            <div className={styles.leftHeaderWrapper}>
              <span>#IndiaWantsBitcoin</span>
              <img src={baton} alt="baton" className={styles.baton} />
            </div>
            <div className={styles.rightHeaderWrapper}>
              <button className={styles.bitcoinCTA}>Save Bitcoin</button>
              <a href="#faq"><button>FAQ</button></a>
            </div>
          </div>
            <div className={styles.hero__heading}>
              Express Your Support For #IndiaWantsBitcoin
            </div>
            <div className={`${styles.hero__subheading} mt-4`}>
              <strong><i>Crypto is driving the next wave of global tech innovation.</i></strong> Help us save the decentralized internet!
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
        <div className="bg-white">
          <div className="container mx-auto py-16">
            <div className="text-2xl sm:text-4xl text-center mb-8">
              We Are In This Together
            </div>
            <div className="flex flex-wrap justify-between mb-4">
              <img src={coinswitch} alt="coinswitch" className={styles.partnerImage} style={{height: '64px'}} />
              <img src={coindcx} alt="coindcx" className={styles.partnerImage} style={{height: '74px'}} />
              <img src={wazirx} alt="wazirx" className={styles.partnerImage} style={{height: '64px'}} />
              <img src={zebpay} alt="zebpay" className={styles.partnerImage} style={{height: '64px'}} />
            </div>
            <div className="flex flex-wrap justify-between">
              <img src={wazirx} alt="wazirx" className={`${styles.partnerImage} hidden sm:block`} style={{height: '64px', visibility: 'hidden'}} />
              <img src={unocoin} alt="unocoin" className={`${styles.partnerImage}`} style={{height: '64px'}} />
              <img src={pocketbits} alt="pocketbits" className={styles.partnerImage} style={{height: '64px'}} />
              <img src={zebpay} alt="zebpay" className={`${styles.partnerImage} hidden sm:block`} style={{height: '64px', visibility: 'hidden'}} />
            </div>
          </div>
        </div>

        <div className={styles.faqWrapper}  id='faq'>
          <h1>Frequently asked questions</h1>
              <label for="title1">Why #IndiaWantsBitcoin?</label>
              <input type="checkbox" id="title1" />

              <div className={styles.content}>

              <p>
                Over the last decade, an entire global industry has emerged around Bitcoin and cryptocurrencies which have spawned technological innovations and new paradigms across all aspects of technology, economics and finance.<br/>
                As we progress into the future, it is clear that cryptocurrencies, their various protocols and the underlying blockchain technology are going to drive serious innovations that will shape our future. With technology greats like Elon Musk publicly professing their acceptance and belief in Bitcoin and decentralized technologies, cryptocurrencies pose a global opportunity that India cannot afford to miss.<br/>
                In terms of transactions and numbers India is the second biggest Bitcoin nation in Asia, after China, and the sixth biggest in the world, after the United States, Nigeria, China, Canada and the United Kingdom. As per the recent data from Venture Intelligence, despite the devastating economic impact of the coronavirus, investments worth a whopping $24 million have gone into various crypto firms from India in the year 2020.<br/>
                Majority of these inflows came in after the Supreme Court’s decision to strike down RBI’s curbs on cryptocurrency trading in India, highlighting the importance of positive regulations. These investments have helped drive economic activity, create jobs, drive blockchain based research and have strengthened the start-up ecosystem in our country. Dismantling this ecosystem will not only result in losses worth billions but will also put India in a peculiar position as an outlier, compared to other leading economies like the US, China, Japan, Germany, South Korea and Australia which have already accepted cryptocurrencies and are in fact building innovation hubs around them.<br/>
                While the crypto ecosystem in India is still at a nascent stage, banning digital currencies will strengthen China’s position in the Asian money market. Banning cryptocurrencies can also dent India’s reputation as a technology hub and its standing in the Ease of Doing Business Index. It could make India a laggard when it comes to adopting applications based on distributed ledger technology while China and Silicon Valley will continue to make blockchains the center of their next big technology push.<br/>
                Does India want to miss out on the benefits of such a crucial paradigm shift? We don’t think so.<br/>
              </p>

              </div>

              <label for="title2">Who is driving #IndiaWantsBitcoin?</label>
              <input type="checkbox" id="title2" />

              <div className={styles.content}>

                <p>
                  #IndiaWantsBitcoin is an initiative by a collective of India’s leading cryptocurrency companies, venture capital investors, influencers and experts with an effort to educate and build greater awareness amongst policy makers and the public about cryptocurrencies and their scope to unlock deep financial innovation at a global scale from within India. Some of the companies who have joined hands to launch this initiative include CoinDCX, WazirX, Unocoin, CoinSwitch Kuber, ZebPay and PocketBits.
                </p>

              </div>

              <label for="title3">How are other countries dealing with cryptocurrencies?</label>
              <input type="checkbox" id="title3" />

              <div className={styles.content}>

                <p>
                  All developed nations with the exception of China have granted legal status to cryptocurrencies and majority of them are working on creating regulatory frameworks around the purchasing, storing and usage of cryptocurrencies. In a recent study by Chainalysis, out of the 154 countries surveyed, only 12 countries showcased very little cryptocurrency activity indicating that cryptocurrencies are a truly global phenomena. Countries like Australia, Canada, Japan, Switzerland and Denmark have well developed regulatory frameworks including AML/CFT and tax related considerations for cryptocurrencies and many other developed nations like the US, UK are in the process of building their frameworks - none of these countries have banned or prohibited Bitcoin or cryptocurrencies - private or public.
                </p>

              </div>

              <label for="title4">How Can I Contribute to #IndiaWantsBitcoin?</label>
              <input type="checkbox" id="title4" />

              <div className={styles.content}>
                <p>
                  If you too think that India must develop a strong regulatory framework for Bitcoin and cryptocurrencies, now is the time to act. All you need to do is select your location from the list and the tool will allow you to email your respective MP with a click of a button. So what are you waiting for? Spread the word and let’s make our voices heard!
                </p>

              </div>
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
