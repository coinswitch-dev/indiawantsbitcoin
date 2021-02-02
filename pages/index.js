import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Container from '../components/container'
import Email from '../components/email'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <Container>
            <img src="/baton.png" alt="baton" className={styles.baton} />
            <h1 className={styles.heading}>
              WE SUPPORT CRYPTOCURRENCIES
            </h1>
            <p className={styles.subheading}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tortor cras sit netus urna, malesuada
              vulputate dolor. Enim ipsum aliquam vel tempor sed leo neque aliquam sagittis.
            </p>
          </Container>
        </div>
        <Email />
      </main>
    </div>
  )
}
