import Link from 'next/link'
import { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Container from '../components/container'
import Email from '../components/email'
import Success from '../components/success'
import Share from '../components/share'
import Content from '../components/content'
import baton from '../public/baton-light.png'
import backgroundIndia from '../public/india.svg'
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
        <div className={styles.videoWrapper} >
          <video
            id='vid'
            autoPlay
            muted
            loop
            className={styles.videoBackground}
          >
            <source src={"/VideoBitcoin.mp4"} type="video/mp4"></source>
          </video>
          <script>
              document.getElementById('vid').play();
          </script>
        </div>

        <div className={styles.hero}>
          <div className={`container mx-auto ${styles.hero__inner}`}>
          <div className={styles.headerWrapper}>
            <div className={styles.leftHeaderWrapper}>
              <div className={styles.hastagWrapper}><span>#IndiaWantsBitcoin</span> <img src={backgroundIndia}></img></div>
              <img src={baton} alt="baton" className={styles.baton} />
            </div>
            <div className={styles.rightHeaderWrapper}>
              <a href="#letter"><button className={styles.bitcoinCTA}>Save Bitcoin</button></a>
              <a href="#faq"><button>FAQ</button></a>
            </div>
          </div>
            <div className={styles.hero__heading}>
            Support #IndiaWantsBitcoin
            </div>
            <div className={`${styles.hero__subheading} mt-4`}>
              <strong><i>Crypto is driving the next wave of global tech innovation.</i></strong> Help us save the financial internet
            			</div>
          </div>
        </div>
        <div className={styles.emailContainer}>
          {hasSentEmail ? <Success /> : <Email onSuccess={setEmailSent} />}
          <div className={styles.shareContainer}>
          <Share /> </div>
        </div>

        <div id='letter' className="my-8" className={styles.letterWrapper}>
          <Content />
        </div>
        <div className={styles.tweetWrapper} >
          <a href="https://twitter.com/intent/tweet?button_hashtag=IndiaWantsBitcoin&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-size="large" data-text="I just emailed my local MP to support progressive crypto regulations for India.\n
          Regulate, don’t ban #bitcoin.\n
          Make your voice heard!👇@ianuragthakur\n
          #IndiaWantsBitcoin www.indiawantsbitcoin.org " data-show-count="false">Tweet #IndiaWantsBitcoin</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
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
              <label for="title1" className={styles.labelAndSpan}>
                <label for="title1">Why #IndiaWantsBitcoin?</label>
                <span>+</span>
              </label>
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
              <label for="title2" className={styles.labelAndSpan}>
                <label for="title2">Who is driving #IndiaWantsBitcoin?</label>
                <span>+</span>
              </label>
              <input type="checkbox" id="title2" />

              <div className={styles.content}>

                <p>
                  #IndiaWantsBitcoin is an initiative by a collective of India’s leading cryptocurrency companies, venture capital investors, influencers and experts with an effort to educate and build greater awareness amongst policy makers and the public about cryptocurrencies and their scope to unlock deep financial innovation at a global scale from within India. Some of the companies who have joined hands to launch this initiative include CoinDCX, WazirX, Unocoin, CoinSwitch Kuber, ZebPay and PocketBits.
                </p>

              </div>

              <label for="title3" className={styles.labelAndSpan}>
                <label for="title3">How are other countries dealing with cryptocurrencies?</label>
                <span>+</span>
              </label>
              <input type="checkbox" id="title3" />

              <div className={styles.content}>

                <p>
                  All developed nations with the exception of China have granted legal status to cryptocurrencies and majority of them are working on creating regulatory frameworks around the purchasing, storing and usage of cryptocurrencies. In a recent study by Chainalysis, out of the 154 countries surveyed, only 12 countries showcased very little cryptocurrency activity indicating that cryptocurrencies are a truly global phenomena. Countries like Australia, Canada, Japan, Switzerland and Denmark have well developed regulatory frameworks including AML/CFT and tax related considerations for cryptocurrencies and many other developed nations like the US, UK are in the process of building their frameworks - none of these countries have banned or prohibited Bitcoin or cryptocurrencies - private or public.
                </p>
              </div>

              <label for="title4" className={styles.labelAndSpan}>
                <label for="title4">How Can I Contribute to #IndiaWantsBitcoin?</label>
                <span>+</span>
              </label>
              <input type="checkbox" id="title4" />

              <div className={styles.content}>
                <p>
                  If you too think that India must develop a strong regulatory framework for Bitcoin and cryptocurrencies, now is the time to act. All you need to do is select your location from the list and the tool will allow you to email your respective MP with a click of a button. So what are you waiting for? Spread the word and let’s make our voices heard!
                </p>
              </div>


              <label for="title5" className={styles.labelAndSpan}>
                <label for="title5">Is Bitcoin a Ponzi scheme?</label>
                <span>+</span>
              </label>
              <input type="checkbox" id="title5" />

              <div className={styles.content}>
                <p>
                There are far easier and better ways to build up a Ponzi scheme. Satoshi Nakamoto solved the problem of Decentralisation that had been deemed unsolvable until 2009. Bitcoin is one of the greatest technological inventions of our time. Ponzi schemes don’t have a “decentralised” technology backing them. Ponzi schemes are built by centralised bad actors who benefit the most from such schemes.<br/>
                Bitcoin allows you to send <b>value</b> to anyone, anywhere in the world. The only invention which comes close to this is the “Internet” which allows you to send <b>information</b> to anyone, anywhere in the world.<br/>
                The Bitcoin code base is open source. Anyone in the world can look at the code and identify if there are any malicious backdoors in them. Anyone can contribute to this code base. There is nothing secretive or proprietary in Bitcoin.<br/>
                Like any commodity, it produces no cash flows or dividends, and is only worth what someone else will pay you for it or trade you for it. And specif­i­cally, it is a monetary commodity; one whose utility is entirely about storing and trans­mit­ting value. This makes gold its closest comparison. So it is not a ponzi scheme as it finds utility as a monetary commodity and was launched in the fairest way possible -- where anyone could buy bitcoin anytime, from anywhere in the world from the day it was launched. Read more <a style={{color:'blue'}} href='https://www.swanbitcoin.com/why-bitcoin-is-not-a-ponzi-scheme-point-by-point/'><u>here</u></a>.<br/>
                </p>
              </div>

              <label for="title6" className={styles.labelAndSpan}>
                <label for="title6">Is Bitcoin used for money laundering?</label>
                <span>+</span>
              </label>
              <input type="checkbox" id="title6" />

              <div className={styles.content}>
                <p>
                This is a common misconception that couldn’t be further from the truth. SWIFT noted, in a <a style={{color:'blue'}} href='https://www.swift.com/sites/default/files/files/swift_bae_report_Follow-The%20Money.pdf'>report</a> titled “Follow The Money” as follows:<br/>
                <i>“Identified cases of laundering through cryptocurrencies remain relatively small compared to the volumes of cash laundered through traditional methods.”</i><br/>
                Kim Grauer, senior economist for Chainalysis <a style={{color:'blue'}} href='https://qz.com/1761343/bitcoin-money-laundering-is-a-classically-stupid-crime/'><u>notes</u></a> that transactions involving cryptocurrencies like bitcoin are recorded on a permanent, public, and immutable ledger, cryptocurrencies can actually offer unprecedented transparency into financial transactions.<br/>
                </p>
              </div>

              <label for="title7" className={styles.labelAndSpan}>
                <label for="title7">Is Bitcoin a speculative bubble?</label>
                <span>+</span>
              </label>
              <input type="checkbox" id="title7" />

              <div className={styles.content}>
                <p>
                Many people view Bitcoin as a bubble, which is understandable. Especially for folks who were looking at the linear chart in 2018 or 2019, Bitcoin looked like it hit a silly peak in late 2017 after a parabolic rise that would never be touched again.<br/>
                This linear price chart goes from the beginning of 2016 to the beginning of 2019, and shows how it looked like a classic bubble:<br/><br/>
                <img src='faq2.png'></img> <br/> <br/>
                Maybe it is a bubble. We’ll see. However, it looks a lot more rational when you look at the long-term logarithmic chart, especially as it relates to Bitcoin’s 4-year halving cycle.<br/> <br/>
                <img src='faq1.png'></img> <br/> <br/>
                Each dot in that chart represents the monthly bitcoin price, with the color based on how many months it has been since the prior halving. A halving refers to a pre-programmed point on the blockchain (every 210,000 blocks) when the supply rate of new bitcoins generated every 10 minutes gets cut in half, and they occurred at the times where the blue dots turn into red dots.<br/><br/>
                The first cycle (the launch cycle) had a massive gain in percent terms from zero to over $20 per bitcoin at its peak. The second cycle, from the peak price in cycle 1 to the peak price in cycle 2, had an increase of over 50x, where Bitcoin first reached over $1,000. The third cycle from peak-to-peak had an increase of about 20x, where Bitcoin briefly touched about $20,000. Since May 2020, we’ve been in the fourth cycle, and we’ll see what happens over the next year. This is historically a very bullish phase for Bitcoin and as we have already seen, the price has been on the ascent.<br/><br/>
                <b><i>“Bitcoin Is Not Secure And Has Been Hacked Several Times”</i></b><br/><br/>
                The Bitcoin network and currency has proven to be secure, functional, and efficient. The technology used to build Bitcoin is mathematically secured by the laws of the universe, and is constantly being improved upon by the open-source community. The software is actively inspected, and audited by this growing community.<br/><br/>
                Though there have been Bitcoin-related compromises in the past, this does not reflect upon the security of the Bitcoin network itself. Bitcoin-related thefts are usually the result of improper security or negligence on the part of the person or service holding the bitcoins. If you left your wallet on a park bench and it was stolen, it would not be considered a "hack" of the dollar. This is why it is important to trust the <a style={{color:'blue'}} href='https://www.coinbase.com/security'>security practices</a> of any Bitcoin-related service you use.<br/><br/>
                As more stakeholders become interested in the success of Bitcoin, the system will become more secure, as increasingly significant resources are being devoted to closing security holes and thoroughly vetting any proposed changes.<br/><br/>
                <b>“Bitcoin is only for the rich!”</b><br/><br/>
                This could not be further from the truth. Bitcoin is one of the few investments you can buy for as little as Re. 1. Bitcoin was also launched in the fairest way possible. Since its inception, anyone could mine it or buy it off of an exchange without any additional accreditation requirements.<br/>
                </p>
              </div>

              <label for="title8" className={styles.labelAndSpan}>
                <label for="title8">What is the difference between bitcoin and other cryptocurrencies like Ethereum, XRP, dogecoin etc.?</label>
                <span>+</span>
              </label>
              <input type="checkbox" id="title8" />

              <div className={styles.content}>
                <p>
                Bitcoin is the first crypto currency created. After that, several developers and teams created other crypto currencies with different monetary policies and capabilities. For eg., you can create so called “smart contracts” on Ethereum -- and execute functions like lending and borrowing on the platform. We advise those interested to read more about the various projects in the recent <a style={{color:'blue'}} href='https://messari.io/report/crypto-theses-for-2020'><u>Messari Report.</u></a><br/>
                </p>
              </div>

              <label for="title9" className={styles.labelAndSpan}>
                <label for="title9">Can bitcoin be banned?</label>
                <span>+</span>
              </label>
              <input type="checkbox" id="title9" />

              <div className={styles.content}>
                <p>
                Bitcoin specifically and cryptocurrencies more generally were built to resist bans. For the government to truly stop Indians from making Bitcoin transactions a mere internet shutdown for a day or week or even a year would not be enough. The state would need to (a) subject the country to an <a style={{color:'blue'}} href='https://en.wikipedia.org/wiki/Electromagnetic_pulse'>electromagnetic pulse</a> or <a style={{color:'blue'}} href='https://en.wikipedia.org/wiki/Degaussing#Magnetic_data_storage_media '>mass degaussing</a> sufficient to destroy all forms of memory storage, (b) ban all immigration and emigration indefinitely, and (c) stop all forms of communication entirely with people outside the country (including physical mail) to prevent anyone from sending a few words out of India.<br/><br/>
                Clearly this is infeasible, which is why a Bitcoin ban is technically infeasible.<br/><br/>
                </p>
              </div>
        </div>

        <div className={styles.twitterWrapper}>
          <a class="twitter-timeline" href="https://twitter.com/IndiaWantsBTC/likes?ref_src=twsrc%5Etfw">Tweets Liked by @IndiaWantsBTC</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
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
