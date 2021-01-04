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
        <Link href={'/'}>
        <h1 className={styles.logo}>
            <i>SpaceX Mission Log</i>       
        </h1>
        </Link>
      </nav>
      <Component {...pageProps}/>
    </div>
  )
}

export default MyApp
