import '../styles/global_styles.css'
import Link from 'next/link';
import styles from '../styles/index.module.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
          <title>SpaceX Logs</title>
      </Head>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>
          <Link href={'/'}>
            <i>SpaceX Mission Log</i>
          </Link>
        </h1>
      </nav>
      <Component {...pageProps}/>
    </div>
  )
}

export default MyApp
